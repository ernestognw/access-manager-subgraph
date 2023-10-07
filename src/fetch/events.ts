import { Bytes, ethereum } from "@graphprotocol/graph-ts";
import {
  OperationCanceled as OperationCanceledEvent,
  OperationExecuted as OperationExecutedEvent,
  OperationScheduled as OperationScheduledEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGrantDelayChanged as RoleGrantDelayChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleGuardianChanged as RoleGuardianChangedEvent,
  RoleLabel as RoleLabelEvent,
  RoleRevoked as RoleRevokedEvent,
  TargetAdminDelayUpdated as TargetAdminDelayUpdatedEvent,
  TargetClosed as TargetClosedEvent,
  TargetFunctionRoleUpdated as TargetFunctionRoleUpdatedEvent,
} from "../../generated/AccessManager/AccessManager";
import { AuthorityUpdated as AuthorityUpdatedEvent } from "../../generated/AccessManaged/AccessManaged";
import {
  OperationCanceled,
  OperationExecuted,
  OperationScheduled,
  RoleAdminChanged,
  RoleGrantDelayChanged,
  RoleGranted,
  RoleGuardianChanged,
  RoleLabel,
  RoleRevoked,
  TargetAdminDelayUpdated,
  TargetClosed,
  TargetFunctionRoleUpdated,
  AuthorityUpdated,
} from "../../generated/schema";
import {
  fetchAccessManaged,
  fetchAccessManagedFunction,
  fetchAccessManagedOperation,
  fetchAccessManager,
  fetchAccessManagerRole,
} from "./access-manager";
import { fetchAccount, fetchTransaction } from "./misc";

function eventId(event: ethereum.Event): Bytes {
  return event.transaction.hash.concatI32(event.logIndex.toI32());
}

export function createOperationCanceled(
  event: OperationCanceledEvent
): OperationCanceled {
  const entity = new OperationCanceled(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.nonce = event.params.nonce;
  entity.operation = fetchAccessManagedOperation(
    event.params.operationId,
    event.address,
    event.params.nonce
  ).id;
  entity.save();

  return entity;
}

export function createOperationExecuted(
  event: OperationExecutedEvent
): OperationExecuted {
  const entity = new OperationExecuted(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.nonce = event.params.nonce;
  entity.operation = fetchAccessManagedOperation(
    event.params.operationId,
    event.address,
    entity.nonce
  ).id;
  entity.save();

  return entity;
}

export function createOperationScheduled(
  event: OperationScheduledEvent
): OperationScheduled {
  const entity = new OperationScheduled(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.nonce = event.params.nonce;
  entity.operation = fetchAccessManagedOperation(
    event.params.operationId,
    event.address,
    entity.nonce
  ).id;
  entity.schedule = event.params.schedule;
  entity.caller = fetchAccount(event.params.caller).id;
  entity.target = fetchAccount(event.params.target).id;
  entity.data = event.params.data;
  entity.save();

  return entity;
}

export function createRoleAdminChanged(
  event: RoleAdminChangedEvent
): RoleAdminChanged {
  const entity = new RoleAdminChanged(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.role = fetchAccessManagerRole(event.address, event.params.roleId).id;
  entity.admin = fetchAccessManagerRole(event.address, event.params.admin).id;
  entity.save();

  return entity;
}

export function createRoleGrantDelayChanged(
  event: RoleGrantDelayChangedEvent
): RoleGrantDelayChanged {
  const entity = new RoleGrantDelayChanged(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.role = fetchAccessManagerRole(event.address, event.params.roleId).id;
  entity.delay = event.params.delay;
  entity.since = event.params.since;
  entity.save();

  return entity;
}

export function createRoleGranted(event: RoleGrantedEvent): RoleGranted {
  const entity = new RoleGranted(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.role = fetchAccessManagerRole(event.address, event.params.roleId).id;
  entity.account = fetchAccount(event.params.account).id;
  entity.delay = event.params.delay;
  entity.since = event.params.since;
  entity.newMember = event.params.newMember;
  entity.save();

  return entity;
}

export function createRoleGuardianChanged(
  event: RoleGuardianChangedEvent
): RoleGuardianChanged {
  const entity = new RoleGuardianChanged(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.role = fetchAccessManagerRole(event.address, event.params.roleId).id;
  entity.guardian = fetchAccessManagerRole(
    event.address,
    event.params.guardian
  ).id;
  entity.save();

  return entity;
}

export function createRoleLabel(event: RoleLabelEvent): RoleLabel {
  const entity = new RoleLabel(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.role = fetchAccessManagerRole(event.address, event.params.roleId).id;
  entity.label = event.params.label;
  entity.save();

  return entity;
}

export function createRoleRevoked(event: RoleRevokedEvent): RoleRevoked {
  const entity = new RoleRevoked(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.role = fetchAccessManagerRole(event.address, event.params.roleId).id;
  entity.account = fetchAccount(event.params.account).id;
  entity.save();

  return entity;
}

export function createTargetAdminDelayUpdated(
  event: TargetAdminDelayUpdatedEvent
): TargetAdminDelayUpdated {
  const entity = new TargetAdminDelayUpdated(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.target = fetchAccount(event.params.target).id;
  entity.delay = event.params.delay;
  entity.since = event.params.since;
  entity.save();

  return entity;
}

export function createTargetClosed(event: TargetClosedEvent): TargetClosed {
  const entity = new TargetClosed(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.target = fetchAccount(event.params.target).id;
  entity.closed = event.params.closed;
  entity.save();

  return entity;
}

export function createTargetFunctionRoleUpdated(
  event: TargetFunctionRoleUpdatedEvent
): TargetFunctionRoleUpdated {
  const entity = new TargetFunctionRoleUpdated(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManager(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.target = fetchAccount(event.params.target).id;
  entity.selector = fetchAccessManagedFunction(
    event.address,
    event.params.target,
    event.params.selector
  ).id;
  entity.role = fetchAccessManagerRole(event.address, event.params.roleId).id;
  entity.save();

  return entity;
}

export function createAuthorityUpdated(
  event: AuthorityUpdatedEvent
): AuthorityUpdated {
  const entity = new AuthorityUpdated(eventId(event));
  entity.transaction = fetchTransaction(event).id;
  entity.emitter = fetchAccessManaged(event.address).asAccount;
  entity.timestamp = event.block.timestamp;
  entity.sender = fetchAccount(event.transaction.from).id;

  entity.authority = event.params.authority;
  entity.save();

  return entity;
}
