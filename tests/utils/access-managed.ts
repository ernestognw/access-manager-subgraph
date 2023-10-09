import { newMockEvent } from "matchstick-as";
import { ethereum, Address } from "@graphprotocol/graph-ts";
import { AuthorityUpdated } from "../../generated/AccessManaged/AccessManaged";

function createAuthorityUpdatedEvent(authority: Address): AuthorityUpdated {
  let authorityUpdatedEvent = changetype<AuthorityUpdated>(newMockEvent());

  authorityUpdatedEvent.parameters = new Array();

  authorityUpdatedEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(authority))
  );

  return authorityUpdatedEvent;
}

export { createAuthorityUpdatedEvent };
