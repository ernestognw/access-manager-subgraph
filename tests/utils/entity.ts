import { assert } from "matchstick-as/assembly";
import { ethereum } from "@graphprotocol/graph-ts";

class EntityHelper {
  entityType: string;
  entityId: string;

  constructor(entityType: string, entityId: string) {
    this.entityType = entityType;
    this.entityId = entityId;
  }

  fieldEquals(fieldName: string, expectedVal: string): void {
    assert.fieldEquals(this.entityType, this.entityId, fieldName, expectedVal);
  }

  entityCount(expectedCount: i32): void {
    assert.entityCount(this.entityType, expectedCount);
  }
}

class EventEntityHelper extends EntityHelper {
  testAsEvent(event: ethereum.Event): void {
    this.fieldEquals("transaction", event.transaction.hash.toHexString());
    this.fieldEquals("emitter", event.address.toHexString());
    this.fieldEquals("timestamp", event.block.timestamp.toString());
    this.fieldEquals("sender", event.transaction.from.toHexString());
  }
}

export { EntityHelper, EventEntityHelper };
