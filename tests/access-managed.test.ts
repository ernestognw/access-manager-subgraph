import { describe, test } from "matchstick-as/assembly/index";
import { Address } from "@graphprotocol/graph-ts";
import { handleAuthorityUpdated } from "../src/datasources/AccessManaged";
import { createAuthorityUpdatedEvent } from "./utils/access-managed";
import { EventEntityHelper } from "./utils/entity";
import { eventId } from "../src/utils";
import { ACCOUNTS } from "./utils/constants";

const AUTHORITY_UPDATED_ENTITY_TYPE = "AuthorityUpdated";

describe("handleAuthorityUpdated()", () => {
  describe("events", function() {
    test("AuthorityUpdated created and stored", () => {
      // Args
      const authority = ACCOUNTS[0];

      // Event handling
      const authorityUpdatedEvent = createAuthorityUpdatedEvent(authority);
      handleAuthorityUpdated(authorityUpdatedEvent);

      // Helper
      const entityId = eventId(authorityUpdatedEvent).toHexString();
      const helper = new EventEntityHelper(
        AUTHORITY_UPDATED_ENTITY_TYPE,
        entityId
      );

      // Asserts
      helper.entityCount(1);
      helper.fieldEquals("authority", authority.toHexString());
      helper.testAsEvent(authorityUpdatedEvent);
    });
  });

  // TODO: Other entities
});
