import { AuthorityUpdated as AuthorityUpdatedEvent } from "../../../generated/AccessManaged/AccessManaged";
import { AuthorityUpdated as AuthorityUpdatedSchema } from "../../../generated/schema";
import { Account, Transaction } from "../base";
import { eventId } from "../../utils";

class AuthorityUpdated extends AuthorityUpdatedSchema {
  static create(event: AuthorityUpdatedEvent): AuthorityUpdated {
    const entity = new AuthorityUpdated(eventId(event));
    entity.transaction = Transaction.fetch(event).id;
    entity.emitter = Account.fetch(event.address).id;
    entity.timestamp = event.block.timestamp;
    entity.sender = Account.fetch(event.transaction.from).id;

    entity.authority = Account.fetch(event.params.authority).id;
    entity.save();

    return entity;
  }
}

export { AuthorityUpdated };
