import { Address, Bytes } from "@graphprotocol/graph-ts";
import {
  AccessManaged as AccessManagedSchema,
  Account as AccountSchema,
} from "../../../generated/schema";
import { Account } from "../base";

class AccessManaged extends AccessManagedSchema {
  static id(address: AccountSchema): Bytes {
    return address.id;
  }

  static fetch(address: AccountSchema): AccessManagedSchema {
    const id = this.id(address);
    let accessManaged = AccessManaged.load(id);

    if (accessManaged == null) {
      accessManaged = new AccessManaged(id);
      accessManaged.asAccount = address.id;
      accessManaged.authority = Account.fetch(Address.zero()).id; // Need override
      accessManaged.save();

      address.asAccessManaged = accessManaged.id;
      address.save();
    }

    return accessManaged;
  }
}

export { AccessManaged };
