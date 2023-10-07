import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  Account,
  AccessManager,
  AccessManaged,
  DelayedBigInt,
  AccessManagerRoleMember,
  AccessManagerRole,
  Selector,
  AccessManagedFunction,
  Operation,
  AccessManagedOperation,
} from "../../generated/schema";

enum DelayType {
  ADMIN,
  GRANT,
  EXECUTION,
}

const PUBLIC_ROLE = BigInt.fromString("18446744073709551615"); // type(uint64).max
const ADMIN_ROLE = BigInt.fromString("0");

export function fetchAccount(address: Address): Account {
  let account = Account.load(address);

  if (account == null) {
    account = new Account(address);
    account.save();
  }

  return account;
}

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

export function fetchDelayedBigInt(
  type: DelayType.ADMIN,
  target: Address,
  roleId?: BigInt,
  member?: Address
): DelayedBigInt;
export function fetchDelayedBigInt(
  type: DelayType.GRANT,
  target: Address,
  roleId: BigInt,
  member?: Address
): DelayedBigInt;
export function fetchDelayedBigInt(
  type: DelayType.EXECUTION,
  target: Address,
  roleId: BigInt,
  member: Address
): DelayedBigInt;
export function fetchDelayedBigInt(
  type: DelayType,
  target: Address,
  roleId?: BigInt,
  member?: Address
) {
  const id = target.concat(Bytes.fromUTF8("/")).concatI32(type);

  if (roleId != undefined) {
    id.concatI32(roleId.toI32());
  }

  if (member != undefined) {
    id.concat(member);
  }

  let delay = DelayedBigInt.load(id);

  if (delay == null) {
    delay = new DelayedBigInt(id);
    delay.oldValue = BigInt.fromI32(0);
    delay.value = BigInt.fromI32(0);
    delay.since = BigInt.fromI32(0);
    delay.save();
  }

  return delay;
}

export function fetchAccessManaged(address: Address): AccessManaged {
  let accessManaged = AccessManaged.load(address);

  if (accessManaged == null) {
    accessManaged = new AccessManaged(address);
    accessManaged.adminDelay = fetchDelayedBigInt(DelayType.ADMIN, address).id;
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
  const id = manager.concat(Bytes.fromBigInt(roleId));
  let role = AccessManagerRole.load(id);

  if (role == null) {
    role = new AccessManagerRole(id);
    role.roleId = roleId;
    role.manager = fetchAccessManager(manager).asAccount;
    role.grantDelay = fetchDelayedBigInt(DelayType.GRANT, manager, roleId).id;
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
  const id = address.concat(role.id);
  let accessManagedRoleMember = AccessManagerRoleMember.load(id);

  if (accessManagedRoleMember == null) {
    accessManagedRoleMember = new AccessManagerRoleMember(id);
    accessManagedRoleMember.asAccount = address;
    accessManagedRoleMember.role = role.id;
    accessManagedRoleMember.save();

    let account = fetchAccount(address);
    account.asAccessManaged = address;
    account.save();
  }

  return accessManagedRoleMember;
}

export function fetchSelector(id: Bytes): Selector {
  let selector = Selector.load(id);

  if (selector == null) {
    selector = new Selector(id);
    selector.save();
  }

  return selector;
}

export function fetchAccessManagedFunction(
  manager: Address,
  target: Address,
  selector: Bytes
): AccessManagedFunction {
  const id = target.concat(selector);
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

export function fetchOperation(operationId: Bytes): Operation {
  let operation = Operation.load(operationId);

  if (operation == null) {
    operation = new Operation(operationId);
    operation.save();
  }

  return operation;
}

export function fetchAccessManagedOperation(
  operationId: Bytes,
  manager: Address
): AccessManagedOperation {
  const id = operationId.concat(manager);
  let operation = AccessManagedOperation.load(id);

  if (operation == null) {
    operation = new AccessManagedOperation(id);
    operation.nonce = BigInt.fromString("0");
    operation.schedule = BigInt.fromString("0");
    operation.data = Bytes.fromI32(0);
    operation.operation = fetchOperation(operationId).id;
    operation.manager = fetchAccessManager(manager).id;
    operation.caller = fetchAccount(manager).id;
    operation.target = fetchAccessManaged(manager).id;
    operation.save();
  }

  return operation;
}
