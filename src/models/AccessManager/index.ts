import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  AccessManager as AccessManagerSchema,
  AccessManagerTarget as AccessManagerTargetSchema,
  AccessManagerRoleMember as AccessManagerRoleMemberSchema,
  AccessManagerRole as AccessManagerRoleSchema,
  AccessManagerTargetSelector as AccessManagerTargetSelectorSchema,
  AccessManagedOperation as AccessManagedOperationSchema,
} from "../../../generated/schema";
import {
  Account,
  DelayType,
  DelayedBigInt,
  Role,
  Selector,
  Operation,
} from "../base";

enum AccessManagerOperationStatus {
  SCHEDULED,
  EXECUTED,
  CANCELED,
}

const ADMIN_ROLE = BigInt.fromI32(0);

class AccessManager extends AccessManagerSchema {
  static id(address: Account): Bytes {
    return address.id;
  }

  static fetch(address: Account): AccessManager {
    const id = this.id(address);
    let accessManager = AccessManager.load(id);

    if (accessManager == null) {
      accessManager = new AccessManager(id);
      accessManager.asAccount = id;
      accessManager.save();

      address.asAccessManager = accessManager.id;
      address.save();
    }

    return changetype<AccessManager>(accessManager);
  }
}

class AccessManagerTarget extends AccessManagerTargetSchema {
  static id(accessManager: AccessManager, target: Account): string {
    return accessManager.id
      .toHexString()
      .concat("/")
      .concat(target.id.toHexString());
  }

  static fetch(
    accessManager: AccessManager,
    target: Account
  ): AccessManagerTarget {
    const id = this.id(accessManager, target);
    let accessManagerTarget = AccessManagerTarget.load(id);

    if (accessManagerTarget == null) {
      accessManagerTarget = new AccessManagerTarget(id);
      accessManagerTarget.manager = accessManager.id;
      accessManagerTarget.target = target.id;
      accessManagerTarget.adminDelay = DelayedBigInt.fetch(
        DelayType.ADMIN,
        id
      ).id;
      accessManagerTarget.closed = false;
      accessManagerTarget.save();
    }

    return changetype<AccessManagerTarget>(accessManagerTarget);
  }
}

class AccessManagerRole extends AccessManagerRoleSchema {
  static id(accessManager: AccessManager, role: Role): string {
    return accessManager.id
      .toHexString()
      .concat("/")
      .concat(role.id.toString());
  }

  static fetch(accessManager: AccessManager, role: Role): AccessManagerRole {
    const id = this.id(accessManager, role);
    let accessManagerRole = AccessManagerRole.load(id);

    if (accessManagerRole == null) {
      accessManagerRole = new AccessManagerRole(id);
      accessManagerRole.role = role.id;
      accessManagerRole.manager = accessManager.id;
      accessManagerRole.grantDelay = DelayedBigInt.fetch(
        DelayType.EXECUTION,
        id
      ).id;
      const adminRole = Role.fetch(ADMIN_ROLE);
      const defaultAccessManagerRoleId =
        this.id(accessManager, role) == accessManagerRole.id
          ? accessManagerRole.id
          : AccessManagerRole.fetch(accessManager, adminRole).id;
      accessManagerRole.admin = defaultAccessManagerRoleId;
      accessManagerRole.guardian = defaultAccessManagerRoleId;
      accessManagerRole.save();
    }

    return changetype<AccessManagerRole>(accessManagerRole);
  }
}

class AccessManagerRoleMember extends AccessManagerRoleMemberSchema {
  static id(accessManagerRole: AccessManagerRole, member: Account): string {
    return accessManagerRole.id.concat("/").concat(member.id.toHexString());
  }

  static fetch(
    accessManagerRole: AccessManagerRole,
    member: Account
  ): AccessManagerRoleMember {
    const id = this.id(accessManagerRole, member);
    let accessManagedRoleMember = AccessManagerRoleMember.load(id);

    if (accessManagedRoleMember == null) {
      accessManagedRoleMember = new AccessManagerRoleMember(id);
      accessManagedRoleMember.manager = accessManagerRole.manager;
      accessManagedRoleMember.asAccount = member.id;
      accessManagedRoleMember.role = accessManagerRole.id;
      accessManagedRoleMember.since = BigInt.fromI32(0); // Needs override
      accessManagedRoleMember.executionDelay = DelayedBigInt.fetch(
        DelayType.GRANT,
        id
      ).id; // Needs override
      accessManagedRoleMember.save();

      member.asAccessManagerRoleMember = accessManagedRoleMember.id;
      member.save();
    }

    return changetype<AccessManagerRoleMember>(accessManagedRoleMember);
  }
}

class AccessManagerTargetSelector extends AccessManagerTargetSelectorSchema {
  static id(
    accessManagedTarget: AccessManagerTarget,
    selector: Selector
  ): string {
    return accessManagedTarget.id.concat("/").concat(selector.id.toHexString());
  }

  static fetch(
    accessManagedTarget: AccessManagerTarget,
    selector: Selector
  ): AccessManagerTargetSelector {
    const id = this.id(accessManagedTarget, selector);
    let accessManagerTargetSelector = AccessManagerTargetSelector.load(id);

    if (accessManagerTargetSelector == null) {
      accessManagerTargetSelector = new AccessManagerTargetSelector(id);
      accessManagerTargetSelector.manager = accessManagedTarget.manager;
      accessManagerTargetSelector.target = accessManagedTarget.id;
      accessManagerTargetSelector.selector = selector.id;
      const accessManagerAccount = Account.fetch(
        Address.fromBytes(accessManagedTarget.manager)
      );
      const adminRole = Role.fetch(ADMIN_ROLE);
      accessManagerTargetSelector.role = AccessManagerRole.fetch(
        AccessManager.fetch(accessManagerAccount),
        adminRole
      ).id;
      accessManagerTargetSelector.save();
    }

    return changetype<AccessManagerTargetSelector>(accessManagerTargetSelector);
  }
}

class AccessManagedOperation extends AccessManagedOperationSchema {
  static id(
    accessManager: AccessManager,
    operation: Operation,
    nonce: BigInt
  ): string {
    return accessManager.id
      .toHexString()
      .concat("/")
      .concat(operation.id.toHexString())
      .concat("/")
      .concat(nonce.toString());
  }

  static fetch(
    accessManager: AccessManager,
    operation: Operation,
    nonce: BigInt
  ): AccessManagedOperation {
    const id = this.id(accessManager, operation, nonce);
    let accessManagedOperation = AccessManagedOperation.load(id);

    if (accessManagedOperation == null) {
      accessManagedOperation = new AccessManagedOperation(id);
      accessManagedOperation.nonce = nonce;
      accessManagedOperation.schedule = BigInt.fromString("0"); // Needs override
      accessManagedOperation.data = Bytes.fromI32(0); // Needs override
      accessManagedOperation.status = AccessManagerOperationStatus.SCHEDULED.toString();
      accessManagedOperation.operation = operation.id;
      accessManagedOperation.manager = accessManager.id;
      accessManagedOperation.caller = Account.fetch(Address.zero()).id; // Needs override
      accessManagedOperation.target = Account.fetch(Address.zero()).id; // Needs override
      accessManagedOperation.save();
    }

    return changetype<AccessManagedOperation>(accessManagedOperation);
  }
}

export {
  AccessManagerOperationStatus,
  AccessManager,
  AccessManagerTarget,
  AccessManagerRole,
  AccessManagerRoleMember,
  AccessManagerTargetSelector,
  AccessManagedOperation,
};
