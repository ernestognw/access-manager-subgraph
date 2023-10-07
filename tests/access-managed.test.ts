import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as/assembly/index";
import { Address } from "@graphprotocol/graph-ts";
import { AuthorityUpdated } from "../generated/schema";
import { AuthorityUpdated as AuthorityUpdatedEvent } from "../generated/AccessManaged/AccessManaged";
import { handleAuthorityUpdated } from "../src/access-managed";
import { createAuthorityUpdatedEvent } from "./access-managed-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let authority = Address.fromString(
      "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7"
    );
    let AuthorityUpdatedEvent = createAuthorityUpdatedEvent(authority);
    handleAuthorityUpdated(AuthorityUpdatedEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AuthorityUpdated created and stored", () => {
    assert.entityCount("AuthorityUpdated", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AuthorityUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "authority",
      "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
