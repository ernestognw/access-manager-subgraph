import { describe, test } from "matchstick-as/assembly/index";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
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
} from "../src/datasources/AccessManager";
import {
  createOperationCanceledEvent,
  createOperationExecutedEvent,
  createOperationScheduledEvent,
  createRoleAdminChangedEvent,
  createRoleGrantDelayChangedEvent,
  createRoleGrantedEvent,
  createRoleGuardianChangedEvent,
  createRoleLabelEvent,
  createRoleRevokedEvent,
  createTargetAdminDelayUpdatedEvent,
  createTargetClosedEvent,
  createTargetFunctionRoleUpdatedEvent,
} from "./utils/access-manager";
import { EventEntityHelper } from "./utils/entity";
import { eventId } from "../src/utils";
import { ACCOUNTS } from "./utils/constants";

const OPERATION_CANCELED_EVENT_TYPE = "OperationCanceled";
const OPERATION_EXECUTED_EVENT_TYPE = "OperationExecuted";
const OPERATION_SCHEDULED_EVENT_TYPE = "OperationScheduled";
const ROLE_ADMIN_CHANGED_EVENT_TYPE = "RoleAdminChanged";
const ROLE_GRANT_DELAY_CHANGED_EVENT_TYPE = "RoleGrantDelayChanged";
const ROLE_GRANTED_EVENT_TYPE = "RoleGranted";
const ROLE_GUARDIAN_CHANGED_EVENT_TYPE = "RoleGuardianChanged";
const ROLE_LABEL_EVENT_TYPE = "RoleLabel";
const ROLE_REVOKED_EVENT_TYPE = "RoleRevoked";
const TARGET_ADMIN_DELAY_UPDATED_EVENT_TYPE = "TargetAdminDelayUpdated";
const TARGET_CLOSED_EVENT_TYPE = "TargetClosed";
const TARGET_FUNCTION_ROLE_UPDATED_EVENT_TYPE = "TargetFunctionRoleUpdated";

describe("handleOperationCanceled()", () => {
  describe("events", function() {
    test("OperationCanceled created and stored", () => {
      // Args
      const operationId = Bytes.fromHexString(
        "0x7274b8fcaaa61a8b38194fea5c66df500a010f8366934b63baa7ee1aa3237045"
      );
      const nonce = BigInt.fromI32(348);

      // Event handling
      const operationCanceledEvent = createOperationCanceledEvent(
        operationId,
        nonce
      );
      handleOperationCanceled(operationCanceledEvent);

      // Helper
      const entityId = eventId(operationCanceledEvent).toHexString();
      const helper = new EventEntityHelper(
        OPERATION_CANCELED_EVENT_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("operation", operationId.toHexString());
      helper.fieldEquals("nonce", nonce.toString());
      helper.testAsEvent(operationCanceledEvent);
    });
  });

  // TODO: Other entities
});

describe("handleOperationExecuted()", () => {
  describe("events", function() {
    test("OperationExecuted created and stored", () => {
      // Args
      const operationId = Bytes.fromHexString(
        "0x7274b8fcaaa61a8b38194fea5c66df500a010f8366934b63baa7ee1aa3237045"
      );
      const nonce = BigInt.fromI32(0);

      // Event handling
      const operationExecutedEvent = createOperationExecutedEvent(
        operationId,
        nonce
      );
      handleOperationExecuted(operationExecutedEvent);

      // Helper
      const entityId = eventId(operationExecutedEvent).toHexString();
      const helper = new EventEntityHelper(
        OPERATION_EXECUTED_EVENT_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("operation", operationId.toHexString());
      helper.fieldEquals("nonce", nonce.toString());
      helper.testAsEvent(operationExecutedEvent);
    });
  });

  // TODO: Other entities
});

describe("handleOperationScheduled()", () => {
  describe("events", function() {
    test("OperationScheduled created and stored", () => {
      // Args
      const operationId = Bytes.fromHexString(
        "0x7274b8fcaaa61a8b38194fea5c66df500a010f8366934b63baa7ee1aa3237045"
      );
      const nonce = BigInt.fromI32(1235);
      const schedule = BigInt.fromI32(1696886887);
      const caller = ACCOUNTS[0];
      const target = ACCOUNTS[1];
      const data = Bytes.fromHexString("0x12345678");

      // Event handling
      const operationScheduledEvent = createOperationScheduledEvent(
        operationId,
        nonce,
        schedule,
        caller,
        target,
        data
      );
      handleOperationScheduled(operationScheduledEvent);

      // Helper
      const entityId = eventId(operationScheduledEvent).toHexString();
      const helper = new EventEntityHelper(
        OPERATION_SCHEDULED_EVENT_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("operation", operationId.toHexString());
      helper.fieldEquals("nonce", nonce.toString());
      helper.fieldEquals("caller", caller.toHexString());
      helper.fieldEquals("target", target.toHexString());
      helper.fieldEquals("data", data.toHexString());
      helper.testAsEvent(operationScheduledEvent);
    });
  });

  // TODO: Other entities
});

describe("handleRoleAdminChanged()", () => {
  describe("events", function() {
    test("RoleAdminChanged created and stored", () => {
      // Args
      const roleId = BigInt.fromI32(100);
      const admin = BigInt.fromI32(101);

      // Event handling
      const roleAdminChangedEvent = createRoleAdminChangedEvent(roleId, admin);
      handleRoleAdminChanged(roleAdminChangedEvent);

      // Helper
      const entityId = eventId(roleAdminChangedEvent).toHexString();
      const helper = new EventEntityHelper(
        ROLE_ADMIN_CHANGED_EVENT_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("role", roleId.toString());
      helper.fieldEquals("admin", admin.toString());
      helper.testAsEvent(roleAdminChangedEvent);
    });
  });

  // TODO: Other entities
});

describe("handleRoleGrantDelayChanged()", () => {
  describe("events", function() {
    test("RoleGrantDelayChanged created and stored", () => {
      // Args
      const roleId = BigInt.fromI32(100);
      const delay = BigInt.fromI32(101);
      const since = BigInt.fromI32(102);

      // Event handling
      const roleGrantDelayChanged = createRoleGrantDelayChangedEvent(
        roleId,
        delay,
        since
      );
      handleRoleGrantDelayChanged(roleGrantDelayChanged);

      // Helper
      const entityId = eventId(roleGrantDelayChanged).toHexString();
      const helper = new EventEntityHelper(
        ROLE_GRANT_DELAY_CHANGED_EVENT_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("role", roleId.toString());
      helper.fieldEquals("delay", delay.toString());
      helper.fieldEquals("since", since.toString());
      helper.testAsEvent(roleGrantDelayChanged);
    });
  });

  // TODO: Other entities
});

describe("handleRoleGranted()", () => {
  describe("events", function() {
    test("RoleGranted created and stored", () => {
      // Args
      const roleId = BigInt.fromI32(100);
      const account = ACCOUNTS[0];
      const delay = BigInt.fromI32(101);
      const since = BigInt.fromI32(102);
      const newMember = true;

      // Event handling
      const roleGranted = createRoleGrantedEvent(
        roleId,
        account,
        delay,
        since,
        newMember
      );
      handleRoleGranted(roleGranted);

      // Helper
      const entityId = eventId(roleGranted).toHexString();
      const helper = new EventEntityHelper(ROLE_GRANTED_EVENT_TYPE, entityId);

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("role", roleId.toString());
      helper.fieldEquals("account", account.toHexString());
      helper.fieldEquals("delay", delay.toString());
      helper.fieldEquals("since", since.toString());
      helper.fieldEquals("newMember", newMember.toString());
      helper.testAsEvent(roleGranted);
    });
  });

  // TODO: Other entities
});

describe("handleRoleGuardianChanged()", () => {
  describe("events", function() {
    test("RoleGuardianChanged created and stored", () => {
      // Args
      const roleId = BigInt.fromI32(100);
      const guardian = BigInt.fromI32(101);

      // Event handling
      const roleGuardianChangedEvent = createRoleGuardianChangedEvent(
        roleId,
        guardian
      );
      handleRoleGuardianChanged(roleGuardianChangedEvent);

      // Helper
      const entityId = eventId(roleGuardianChangedEvent).toHexString();
      const helper = new EventEntityHelper(
        ROLE_GUARDIAN_CHANGED_EVENT_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("role", roleId.toString());
      helper.fieldEquals("guardian", guardian.toString());
      helper.testAsEvent(roleGuardianChangedEvent);
    });
  });

  // TODO: Other entities
});

describe("handleRoleLabel()", () => {
  describe("events", function() {
    test("RoleGuardianChanged created and stored", () => {
      // Args
      const roleId = BigInt.fromI32(100);
      const label = "some-label";

      // Event handling
      const roleLabelEvent = createRoleLabelEvent(roleId, label);
      handleRoleLabel(roleLabelEvent);

      // Helper
      const entityId = eventId(roleLabelEvent).toHexString();
      const helper = new EventEntityHelper(ROLE_LABEL_EVENT_TYPE, entityId);

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("role", roleId.toString());
      helper.fieldEquals("label", label);
      helper.testAsEvent(roleLabelEvent);
    });
  });

  // TODO: Other entities
});

describe("handleRoleRevoked()", () => {
  describe("events", function() {
    test("RoleRevoked created and stored", () => {
      // Args
      const roleId = BigInt.fromI32(100);
      const account = ACCOUNTS[0];

      // Event handling
      const roleRevokedEvent = createRoleRevokedEvent(roleId, account);
      handleRoleRevoked(roleRevokedEvent);

      // Helper
      const entityId = eventId(roleRevokedEvent).toHexString();
      const helper = new EventEntityHelper(ROLE_REVOKED_EVENT_TYPE, entityId);

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("role", roleId.toString());
      helper.fieldEquals("account", account.toHexString());
      helper.testAsEvent(roleRevokedEvent);
    });
  });

  // TODO: Other entities
});

describe("handleTargetAdminDelayUpdated()", () => {
  describe("events", function() {
    test("TargetAdminDelayUpdated created and stored", () => {
      // Args
      const target = ACCOUNTS[0];
      const delay = BigInt.fromI32(101);
      const since = BigInt.fromI32(102);

      // Event handling
      const targetAdminDelayUpdatedEvent = createTargetAdminDelayUpdatedEvent(
        target,
        delay,
        since
      );
      handleTargetAdminDelayUpdated(targetAdminDelayUpdatedEvent);

      // Helper
      const entityId = eventId(targetAdminDelayUpdatedEvent).toHexString();
      const helper = new EventEntityHelper(
        TARGET_ADMIN_DELAY_UPDATED_EVENT_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("target", target.toHexString());
      helper.fieldEquals("delay", delay.toString());
      helper.fieldEquals("since", since.toString());
      helper.testAsEvent(targetAdminDelayUpdatedEvent);
    });
  });

  // TODO: Other entities
});

describe("handleTargetClosed()", () => {
  describe("events", function() {
    test("TargetClosed created and stored", () => {
      // Args
      const target = ACCOUNTS[0];
      const closed = true;

      // Event handling
      const targetClosedEvent = createTargetClosedEvent(target, closed);
      handleTargetClosed(targetClosedEvent);

      // Helper
      const entityId = eventId(targetClosedEvent).toHexString();
      const helper = new EventEntityHelper(TARGET_CLOSED_EVENT_TYPE, entityId);

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("target", target.toHexString());
      helper.fieldEquals("closed", closed.toString());
      helper.testAsEvent(targetClosedEvent);
    });
  });

  // TODO: Other entities
});

describe("handleTargetFunctionRoleUpdated()", () => {
  describe("events", function() {
    test("TargetClosed created and stored", () => {
      // Args
      const target = ACCOUNTS[0];
      const roleId = BigInt.fromI32(100);
      const selector = Bytes.fromHexString("0x12345678");

      // Event handling
      const targetFunctionRoleUpdatedEvent = createTargetFunctionRoleUpdatedEvent(
        target,
        selector,
        roleId
      );
      handleTargetFunctionRoleUpdated(targetFunctionRoleUpdatedEvent);

      // Helper
      const entityId = eventId(targetFunctionRoleUpdatedEvent).toHexString();
      const helper = new EventEntityHelper(
        TARGET_FUNCTION_ROLE_UPDATED_EVENT_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("target", target.toHexString());
      helper.fieldEquals("selector", selector.toHexString());
      helper.fieldEquals("role", roleId.toString());
      helper.testAsEvent(targetFunctionRoleUpdatedEvent);
    });
  });

  // TODO: Other entities
});
