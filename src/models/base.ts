import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import {
  Account as AccountSchema,
  DelayedBigInt as DelayedBigIntSchema,
  Operation as OperationSchema,
  Selector as SelectorSchema,
  Transaction as TransactionSchema,
  Role as RoleSchema,
} from "../../generated/schema";

class Account extends AccountSchema {
  static fetch(address: Address): Account {
    let account = Account.load(address);

    if (account == null) {
      account = new Account(address);
      account.save();
    }

    return changetype<Account>(account);
  }
}

class Role extends RoleSchema {
  static id(roleId: BigInt): string {
    return roleId.toString();
  }

  static fetch(roleId: BigInt): Role {
    const id = this.id(roleId);
    let role = Role.load(id);

    if (role == null) {
      role = new Role(id);
      role.save();
    }

    return changetype<Role>(role);
  }

  static loadExistent(roleId: BigInt): Role {
    const id = this.id(roleId);
    const account = this.load(id);
    if (!account) throw new Error("Account not found");
    return account;
  }
}

class Selector extends SelectorSchema {
  static fetch(id: Bytes): Selector {
    let selector = Selector.load(id);

    if (selector == null) {
      selector = new Selector(id);
      selector.save();
    }

    return changetype<Selector>(selector);
  }
}

class Operation extends OperationSchema {
  static fetch(id: Bytes): Operation {
    let operation = Operation.load(id);

    if (operation == null) {
      operation = new Operation(id);
      operation.save();
    }

    return changetype<Operation>(operation);
  }
}

export enum DelayType {
  ADMIN,
  GRANT,
  EXECUTION,
}

class DelayedBigInt extends DelayedBigIntSchema {
  static id(type: DelayType, complementaryId: string): string {
    return type
      .toString()
      .concat("/")
      .concat(complementaryId);
  }

  static fetch(type: DelayType, complementaryId: string): DelayedBigInt {
    const id = this.id(type, complementaryId);
    let delay = DelayedBigInt.load(id);

    if (delay == null) {
      delay = new DelayedBigInt(id);
      delay.oldValue = BigInt.fromI32(0);
      delay.value = BigInt.fromI32(0);
      delay.since = BigInt.fromI32(0);
      delay.save();
    }

    return delay;
  }

  static load(id: string): DelayedBigInt | null {
    return changetype<DelayedBigInt | null>(DelayedBigIntSchema.load(id));
  }

  static loadExistent(id: string): DelayedBigInt {
    const delay = this.load(id);
    if (!delay) throw new Error(`DelayedBigInt with id: ${id} not found`);
    return delay;
  }

  update(timestamp: BigInt, newValue: BigInt, since: BigInt): void {
    const valueEffectPassed = this.since.ge(timestamp);
    if (valueEffectPassed) {
      this.oldValue = this.value;
    }
    this.value = newValue;
    this.since = since;
    this.save();
  }
}

class Transaction extends TransactionSchema {
  static id(event: ethereum.Event): Bytes {
    return event.transaction.hash;
  }

  static fetch(event: ethereum.Event): Transaction {
    const id = this.id(event);
    let transaction = Transaction.load(id);

    if (transaction == null) {
      transaction = new Transaction(event.transaction.hash);
      transaction.timestamp = event.block.timestamp;
      transaction.blockNumber = event.block.number;
      transaction.sender = Account.fetch(event.transaction.from).id;
      transaction.save();
    }

    return changetype<Transaction>(transaction);
  }
}

export { Account, DelayedBigInt, Operation, Selector, Transaction, Role };
