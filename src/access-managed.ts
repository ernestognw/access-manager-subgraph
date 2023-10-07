import { AuthorityUpdated as AuthorityUpdatedEvent } from "../generated/AccessManaged/AccessManaged";
import { fetchAccessManaged, fetchAccessManager } from "./fetch/access-manager";
import { createAuthorityUpdated } from "./fetch/events";

export function handleAuthorityUpdated(event: AuthorityUpdatedEvent): void {
  createAuthorityUpdated(event);
  const accessManaged = fetchAccessManaged(event.address);
  accessManaged.manager = fetchAccessManager(event.params.authority).id;
  accessManaged.save();
}
