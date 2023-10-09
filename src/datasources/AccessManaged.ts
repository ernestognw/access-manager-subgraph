import { AuthorityUpdated as AuthorityUpdatedEvent } from "../../generated/AccessManaged/AccessManaged";
import { Account } from "../models/base";
import { AccessManaged } from "../models/AccessManaged";
import { AuthorityUpdated } from "../models/AccessManaged/events";

function handleAuthorityUpdated(event: AuthorityUpdatedEvent): void {
  // Event
  const authorityUpdated = AuthorityUpdated.create(event);

  // Entities
  const emitter = Account.fetch(event.address);
  const accessManaged = AccessManaged.fetch(emitter);
  accessManaged.authority = authorityUpdated.authority;
  accessManaged.save();
}

export { handleAuthorityUpdated };
