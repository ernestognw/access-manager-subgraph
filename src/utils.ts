import { Bytes, ethereum } from "@graphprotocol/graph-ts";

function eventId(event: ethereum.Event): Bytes {
  return event.transaction.hash.concatI32(event.logIndex.toI32());
}

export { eventId };
