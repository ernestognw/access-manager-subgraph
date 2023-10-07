import { BigInt, store } from "@graphprotocol/graph-ts";
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
} from "../generated/AccessManager/AccessManager";
import {
  AccessManagerOperationStatus,
  fetchAccessManaged,
  fetchAccessManagedFunction,
  fetchAccessManagedOperation,
  fetchAccessManagerRole,
  fetchAccessManagerRoleMember,
} from "./fetch/access-manager";
import {
  createOperationCanceled,
  createOperationExecuted,
  createOperationScheduled,
  createRoleAdminChanged,
  createRoleGrantDelayChanged,
  createRoleGranted,
  createRoleGuardianChanged,
  createRoleLabel,
  createRoleRevoked,
  createTargetAdminDelayUpdated,
  createTargetClosed,
  createTargetFunctionRoleUpdated,
} from "./fetch/events";
import { updateDelayedBigInt } from "./fetch/misc";

export function handleOperationCanceled(event: OperationCanceledEvent): void {
  const operationCanceled = createOperationCanceled(event);
  const accessManagedOperation = fetchAccessManagedOperation(
    event.params.operationId,
    event.address,
    operationCanceled.nonce
  );
  accessManagedOperation.status = AccessManagerOperationStatus.CANCELED.toString();
  accessManagedOperation.save();
}

export function handleOperationExecuted(event: OperationExecutedEvent): void {
  const operationExecuted = createOperationExecuted(event);
  const accessManagedOperation = fetchAccessManagedOperation(
    event.params.operationId,
    event.address,
    operationExecuted.nonce
  );
  accessManagedOperation.status = AccessManagerOperationStatus.EXECUTED.toString();
  accessManagedOperation.save();
}

export function handleOperationScheduled(event: OperationScheduledEvent): void {
  const operationScheduled = createOperationScheduled(event);
  const accessManagedOperation = fetchAccessManagedOperation(
    event.params.operationId,
    event.address,
    operationScheduled.nonce
  );
  accessManagedOperation.schedule = operationScheduled.schedule;
  accessManagedOperation.data = operationScheduled.data;
  accessManagedOperation.save();
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  const roleAdminChanged = createRoleAdminChanged(event);
  const role = fetchAccessManagerRole(event.address, event.params.roleId);
  role.admin = roleAdminChanged.admin;
  role.save();
}

export function handleRoleGrantDelayChanged(
  event: RoleGrantDelayChangedEvent
): void {
  const roleGrantDelayChanged = createRoleGrantDelayChanged(event);
  const role = fetchAccessManagerRole(event.address, event.params.roleId);
  updateDelayedBigInt(
    role.grantDelay,
    event.block.timestamp,
    roleGrantDelayChanged.delay,
    roleGrantDelayChanged.since
  );
  role.save();
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  const roleGranted = createRoleGranted(event);
  const roleMember = fetchAccessManagerRoleMember(
    event.params.account,
    event.address,
    event.params.roleId
  );
  if (roleGranted.newMember) {
    roleMember.since = roleGranted.since;
  }
  updateDelayedBigInt(
    roleMember.executionDelay,
    event.block.timestamp,
    roleGranted.delay,
    roleGranted.since
  );
  roleMember.save();
}

export function handleRoleGuardianChanged(
  event: RoleGuardianChangedEvent
): void {
  const roleGuardianChanged = createRoleGuardianChanged(event);
  const role = fetchAccessManagerRole(event.address, event.params.roleId);
  role.guardian = roleGuardianChanged.guardian;
  role.save();
}

export function handleRoleLabel(event: RoleLabelEvent): void {
  const roleLabel = createRoleLabel(event);
  const role = fetchAccessManagerRole(event.address, event.params.roleId);
  role.label = roleLabel.label;
  role.save();
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  createRoleRevoked(event);
  const roleMember = fetchAccessManagerRoleMember(
    event.params.account,
    event.address,
    event.params.roleId
  );
  store.remove("AccessManagerRoleMember", roleMember.id);
}

export function handleTargetAdminDelayUpdated(
  event: TargetAdminDelayUpdatedEvent
): void {
  const targetAdminDelayUpdated = createTargetAdminDelayUpdated(event);
  const accessManaged = fetchAccessManaged(event.params.target);
  updateDelayedBigInt(
    accessManaged.adminDelay,
    event.block.timestamp,
    targetAdminDelayUpdated.delay,
    targetAdminDelayUpdated.since
  );
}

export function handleTargetClosed(event: TargetClosedEvent): void {
  const targetClosed = createTargetClosed(event);
  const accessManaged = fetchAccessManaged(event.params.target);
  accessManaged.closed = targetClosed.closed;
  accessManaged.save();
}

export function handleTargetFunctionRoleUpdated(
  event: TargetFunctionRoleUpdatedEvent
): void {
  const targetFunctionRoleUpdated = createTargetFunctionRoleUpdated(event);
  const accessManagedFunction = fetchAccessManagedFunction(
    event.address,
    event.params.target,
    event.params.selector
  );
  accessManagedFunction.role = targetFunctionRoleUpdated.role;
}
