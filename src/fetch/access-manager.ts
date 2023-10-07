import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  AccessManager,
  AccessManaged,
  AccessManagerRoleMember,
  AccessManagerRole,
  AccessManagedFunction,
  AccessManagedOperation,
} from "../../generated/schema";
import {
  fetchAccount,
  fetchDelayedBigInt,
  fetchOperation,
  fetchSelector,
} from "./misc";

export enum AccessManagerOperationStatus {
  SCHEDULED,
  EXECUTED,
  CANCELED,
}

const ADMIN_ROLE = BigInt.fromString("0");

export function fetchAccessManager(address: Address): AccessManager {
  let accessManager = AccessManager.load(address);

  if (accessManager == null) {
    accessManager = new AccessManager(address);
    accessManager.asAccount = address;
    accessManager.save();

    let account = fetchAccount(address);
    account.asAccessManager = address;
    account.save();
  }

  return accessManager;
}

export function fetchAccessManaged(address: Address): AccessManaged {
  let accessManaged = AccessManaged.load(address);

  if (accessManaged == null) {
    accessManaged = new AccessManaged(address);
    accessManaged.adminDelay = fetchDelayedBigInt(
      "ADMIN".concat("/").concat(address.toString())
    ).id;
    accessManaged.closed = false;
    accessManaged.asAccount = address;
    accessManaged.save();

    let account = fetchAccount(address);
    account.asAccessManaged = address;
    account.save();
  }

  return accessManaged;
}

export function fetchAccessManagerRole(
  manager: Address,
  roleId: BigInt
): AccessManagerRole {
  const id = manager
    .toString()
    .concat("/")
    .concat(roleId.toString());
  let role = AccessManagerRole.load(id);

  if (role == null) {
    role = new AccessManagerRole(id);
    role.roleId = roleId;
    role.manager = fetchAccessManager(manager).asAccount;
    role.grantDelay = fetchDelayedBigInt(
      "GRANT"
        .concat("/")
        .concat(manager.toString())
        .concat("/")
        .concat(roleId.toString())
    ).id;
    role.admin = fetchAccessManagerRole(manager, ADMIN_ROLE).id;
    role.guardian = fetchAccessManagerRole(manager, ADMIN_ROLE).id;
    role.save();
  }

  return role;
}

export function fetchAccessManagerRoleMember(
  address: Address,
  manager: Address,
  roleId: BigInt
): AccessManagerRoleMember {
  const role = fetchAccessManagerRole(manager, roleId);
  const id = address
    .toString()
    .concat("/")
    .concat(role.id);
  let accessManagedRoleMember = AccessManagerRoleMember.load(id);

  if (accessManagedRoleMember == null) {
    accessManagedRoleMember = new AccessManagerRoleMember(id);
    accessManagedRoleMember.asAccount = address;
    accessManagedRoleMember.role = role.id;
    accessManagedRoleMember.since = BigInt.fromI32(0);
    accessManagedRoleMember.executionDelay = fetchDelayedBigInt(
      "GRANT"
        .concat("/")
        .concat(manager.toString())
        .concat("/")
        .concat(roleId.toString())
        .concat("/")
        .concat(address.toString())
    ).id;
    accessManagedRoleMember.save();

    let account = fetchAccount(address);
    account.asAccessManagerRoleMember = accessManagedRoleMember.id;
    account.save();
  }

  return accessManagedRoleMember;
}

export function fetchAccessManagedFunction(
  manager: Address,
  target: Address,
  selector: Bytes
): AccessManagedFunction {
  const id = manager
    .toString()
    .concat("/")
    .concat(target.toString())
    .concat("/")
    .concat(selector.toString());
  let accessManagedFunction = AccessManagedFunction.load(id);

  if (accessManagedFunction == null) {
    accessManagedFunction = new AccessManagedFunction(id);
    accessManagedFunction.manager = fetchAccessManager(manager).id;
    accessManagedFunction.target = fetchAccessManaged(target).id;
    accessManagedFunction.selector = fetchSelector(selector).id;
    accessManagedFunction.role = fetchAccessManagerRole(manager, ADMIN_ROLE).id;
    accessManagedFunction.save();
  }

  return accessManagedFunction;
}

export function fetchAccessManagedOperation(
  operationId: Bytes,
  manager: Address,
  nonce: BigInt
): AccessManagedOperation {
  const id = operationId
    .toString()
    .concat("/")
    .concat(manager.toString())
    .concat("/")
    .concat(nonce.toString());
  let operation = AccessManagedOperation.load(id);

  if (operation == null) {
    operation = new AccessManagedOperation(id);
    operation.nonce = nonce;
    operation.schedule = BigInt.fromString("0");
    operation.data = Bytes.fromI32(0);
    operation.status = AccessManagerOperationStatus.SCHEDULED.toString();
    operation.operation = fetchOperation(operationId).id;
    operation.manager = fetchAccessManager(manager).id;
    operation.caller = fetchAccount(manager).id;
    operation.target = fetchAccessManaged(manager).id;
    operation.save();
  }

  return operation;
}
