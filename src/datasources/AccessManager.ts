import { store } from "@graphprotocol/graph-ts";
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
import {
  AccessManagerOperationStatus,
  AccessManager,
  AccessManagerTarget,
  AccessManagerRole,
  AccessManagerRoleMember,
  AccessManagerTargetFunction,
  AccessManagedOperation,
} from "../models/AccessManager";
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
} from "../models/AccessManager/events";
import {
  Account,
  DelayedBigInt,
  Operation,
  Role,
  Selector,
} from "../models/base";

function handleOperationCanceled(event: OperationCanceledEvent): void {
  // Event
  const operationCanceled = OperationCanceled.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const operation = Operation.fetch(event.params.operationId);
  const accessManagedOperation = AccessManagedOperation.fetch(
    accessManager,
    operation,
    operationCanceled.nonce
  );
  accessManagedOperation.status = AccessManagerOperationStatus.CANCELED.toString();
  accessManagedOperation.save();
}

function handleOperationExecuted(event: OperationExecutedEvent): void {
  // Event
  const operationExecuted = OperationExecuted.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const operation = Operation.fetch(event.params.operationId);
  const accessManagedOperation = AccessManagedOperation.fetch(
    accessManager,
    operation,
    operationExecuted.nonce
  );
  accessManagedOperation.status = AccessManagerOperationStatus.EXECUTED.toString();
  accessManagedOperation.save();
}

function handleOperationScheduled(event: OperationScheduledEvent): void {
  // Event
  const operationScheduled = OperationScheduled.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const operation = Operation.fetch(event.params.operationId);
  const accessManagedOperation = AccessManagedOperation.fetch(
    accessManager,
    operation,
    operationScheduled.nonce
  );
  accessManagedOperation.schedule = operationScheduled.schedule;
  accessManagedOperation.data = operationScheduled.data;
  accessManagedOperation.caller = operationScheduled.caller;
  accessManagedOperation.target = operationScheduled.target;
  accessManagedOperation.save();
}

function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  // Event
  RoleAdminChanged.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const role = Role.fetch(event.params.roleId);
  const roleAdmin = Role.fetch(event.params.admin);
  const accessManagerRole = AccessManagerRole.fetch(accessManager, role);
  accessManagerRole.admin = AccessManagerRole.fetch(
    accessManager,
    roleAdmin
  ).id;
  accessManagerRole.save();
}

function handleRoleGrantDelayChanged(event: RoleGrantDelayChangedEvent): void {
  // Event
  const roleGrantDelayChanged = RoleGrantDelayChanged.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const role = Role.fetch(event.params.roleId);
  const accessManagerRole = AccessManagerRole.fetch(accessManager, role);
  DelayedBigInt.loadExistent(accessManagerRole.grantDelay).update(
    event.block.timestamp,
    roleGrantDelayChanged.delay,
    roleGrantDelayChanged.since
  );

  accessManagerRole.save();
}

function handleRoleGranted(event: RoleGrantedEvent): void {
  // Event
  const roleGranted = RoleGranted.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const role = Role.fetch(event.params.roleId);
  const accessManagerRole = AccessManagerRole.fetch(accessManager, role);
  const member = Account.fetch(event.params.account);
  const roleMember = AccessManagerRoleMember.fetch(accessManagerRole, member);
  if (roleGranted.newMember) {
    roleMember.since = roleGranted.since;
  }
  DelayedBigInt.loadExistent(roleMember.executionDelay).update(
    event.block.timestamp,
    roleGranted.delay,
    roleGranted.since
  );
  roleMember.save();
}

function handleRoleGuardianChanged(event: RoleGuardianChangedEvent): void {
  // Event
  RoleGuardianChanged.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const role = Role.fetch(event.params.roleId);
  const roleGuardian = Role.fetch(event.params.guardian);
  const accessManagerRole = AccessManagerRole.fetch(accessManager, role);
  accessManagerRole.guardian = AccessManagerRole.fetch(
    accessManager,
    roleGuardian
  ).id;
  accessManagerRole.save();
}

function handleRoleLabel(event: RoleLabelEvent): void {
  // Event
  const roleLabel = RoleLabel.create(event);

  // Entites
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const role = Role.fetch(event.params.roleId);
  const accessManagerRole = AccessManagerRole.fetch(accessManager, role);
  accessManagerRole.label = roleLabel.label;
  accessManagerRole.save();
}

function handleRoleRevoked(event: RoleRevokedEvent): void {
  // Event
  RoleRevoked.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const role = Role.fetch(event.params.roleId);
  const accessManagerRole = AccessManagerRole.fetch(accessManager, role);
  const member = Account.fetch(event.params.account);
  const roleMember = AccessManagerRoleMember.fetch(accessManagerRole, member);
  store.remove("AccessManagerRoleMember", roleMember.id);
}

function handleTargetAdminDelayUpdated(
  event: TargetAdminDelayUpdatedEvent
): void {
  // Event
  const targetAdminDelayUpdated = TargetAdminDelayUpdated.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const target = Account.fetch(event.params.target);
  const accessManagedTarget = AccessManagerTarget.fetch(accessManager, target);
  DelayedBigInt.loadExistent(accessManagedTarget.adminDelay).update(
    event.block.timestamp,
    targetAdminDelayUpdated.delay,
    targetAdminDelayUpdated.since
  );
}

function handleTargetClosed(event: TargetClosedEvent): void {
  // Event
  const targetClosed = TargetClosed.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const target = Account.fetch(event.params.target);
  const accessManagedTarget = AccessManagerTarget.fetch(accessManager, target);
  accessManagedTarget.closed = targetClosed.closed;
  accessManagedTarget.save();
}

function handleTargetFunctionRoleUpdated(
  event: TargetFunctionRoleUpdatedEvent
): void {
  // Event
  TargetFunctionRoleUpdated.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManager = AccessManager.fetch(emitter);
  const target = Account.fetch(event.params.target);
  const accessManagerTarget = AccessManagerTarget.fetch(accessManager, target);
  const selector = Selector.fetch(event.params.selector);
  const accessManagedTargetSelector = AccessManagerTargetFunction.fetch(
    accessManagerTarget,
    selector
  );
  const role = Role.fetch(event.params.roleId);
  accessManagedTargetSelector.role = AccessManagerRole.fetch(
    accessManager,
    role
  ).id;
}

export {
  handleOperationCanceled,
  handleOperationExecuted,
  handleOperationScheduled,
  handleRoleAdminChanged,
  handleRoleGrantDelayChanged,
  handleRoleGranted,
  handleRoleGuardianChanged,
  handleRoleLabel,
  handleRoleRevoked,
  handleTargetAdminDelayUpdated,
  handleTargetClosed,
  handleTargetFunctionRoleUpdated,
};
