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
} from "../../../generated/AccessManager/AccessManager";
import {
  OperationCanceled as OperationCanceledSchema,
  OperationExecuted as OperationExecutedSchema,
  OperationScheduled as OperationScheduledSchema,
  RoleAdminChanged as RoleAdminChangedSchema,
  RoleGrantDelayChanged as RoleGrantDelayChangedSchema,
  RoleGranted as RoleGrantedSchema,
  RoleGuardianChanged as RoleGuardianChangedSchema,
  RoleLabel as RoleLabelSchema,
  RoleRevoked as RoleRevokedSchema,
  TargetAdminDelayUpdated as TargetAdminDelayUpdatedSchema,
  TargetClosed as TargetClosedSchema,
  TargetFunctionRoleUpdated as TargetFunctionRoleUpdatedSchema,
} from "../../../generated/schema";
import { Account, Operation, Role, Selector, Transaction } from "../base";
import { eventId } from "../../utils";

class OperationCanceled extends OperationCanceledSchema {
  static create(event: OperationCanceledEvent): OperationCanceled {
    const entity = new OperationCanceled(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.nonce = event.params.nonce;
    entity.operation = Operation.fetch(event.params.operationId).id;
    entity.save();

    return entity;
  }
}

class OperationExecuted extends OperationExecutedSchema {
  static create(event: OperationExecutedEvent): OperationExecuted {
    const entity = new OperationExecuted(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.nonce = event.params.nonce;
    entity.operation = Operation.fetch(event.params.operationId).id;
    entity.save();

    return entity;
  }
}

class OperationScheduled extends OperationScheduledSchema {
  static create(event: OperationScheduledEvent): OperationScheduled {
    const entity = new OperationScheduled(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.nonce = event.params.nonce;
    entity.operation = Operation.fetch(event.params.operationId).id;
    entity.schedule = event.params.schedule;
    entity.caller = Account.fetch(event.params.caller).id;
    entity.target = Account.fetch(event.params.target).id;
    entity.data = event.params.data;
    entity.save();

    return entity;
  }
}

class RoleAdminChanged extends RoleAdminChangedSchema {
  static create(event: RoleAdminChangedEvent): RoleAdminChanged {
    const entity = new RoleAdminChanged(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.role = Role.fetch(event.params.roleId).id;
    entity.admin = Role.fetch(event.params.admin).id;
    entity.save();

    return entity;
  }
}

class RoleGrantDelayChanged extends RoleGrantDelayChangedSchema {
  static create(event: RoleGrantDelayChangedEvent): RoleGrantDelayChanged {
    const entity = new RoleGrantDelayChanged(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.role = Role.fetch(event.params.roleId).id;
    entity.delay = event.params.delay;
    entity.since = event.params.since;
    entity.save();

    return entity;
  }
}

class RoleGranted extends RoleGrantedSchema {
  static create(event: RoleGrantedEvent): RoleGranted {
    const entity = new RoleGranted(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.role = Role.fetch(event.params.roleId).id;
    entity.account = Account.fetch(event.params.account).id;
    entity.delay = event.params.delay;
    entity.since = event.params.since;
    entity.newMember = event.params.newMember;
    entity.save();

    return entity;
  }
}

class RoleGuardianChanged extends RoleGuardianChangedSchema {
  static create(event: RoleGuardianChangedEvent): RoleGuardianChanged {
    const entity = new RoleGuardianChanged(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.role = Role.fetch(event.params.roleId).id;
    entity.guardian = Role.fetch(event.params.guardian).id;
    entity.save();

    return entity;
  }
}

class RoleLabel extends RoleLabelSchema {
  static create(event: RoleLabelEvent): RoleLabel {
    const entity = new RoleLabel(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.role = Role.fetch(event.params.roleId).id;
    entity.label = event.params.label;
    entity.save();

    return entity;
  }
}

class RoleRevoked extends RoleRevokedSchema {
  static create(event: RoleRevokedEvent): RoleRevoked {
    const entity = new RoleRevoked(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.role = Role.fetch(event.params.roleId).id;
    entity.account = Account.fetch(event.params.account).id;
    entity.save();

    return entity;
  }
}

class TargetAdminDelayUpdated extends TargetAdminDelayUpdatedSchema {
  static create(event: TargetAdminDelayUpdatedEvent): TargetAdminDelayUpdated {
    const entity = new TargetAdminDelayUpdated(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.target = Account.fetch(event.params.target).id;
    entity.delay = event.params.delay;
    entity.since = event.params.since;
    entity.save();

    return entity;
  }
}

class TargetClosed extends TargetClosedSchema {
  static create(event: TargetClosedEvent): TargetClosed {
    const entity = new TargetClosed(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.target = Account.fetch(event.params.target).id;
    entity.closed = event.params.closed;
    entity.save();

    return entity;
  }
}

class TargetFunctionRoleUpdated extends TargetFunctionRoleUpdatedSchema {
  static create(
    event: TargetFunctionRoleUpdatedEvent
  ): TargetFunctionRoleUpdated {
    const entity = new TargetFunctionRoleUpdated(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.target = Account.fetch(event.params.target).id;
    entity.selector = Selector.fetch(event.params.selector).id;
    entity.role = Role.fetch(event.params.roleId).id;
    entity.save();

    return entity;
  }
}

export {
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
};
