import { AuthorityUpdated as AuthorityUpdatedEvent } from "../generated/AccessManaged/AccessManaged";
import { AuthorityUpdated } from "../generated/schema";

export function handleAuthorityUpdated(event: AuthorityUpdatedEvent): void {
  let entity = new AuthorityUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.authority = event.params.authority;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
