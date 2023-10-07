import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import {
  Account,
  DelayedBigInt,
  Operation,
  Selector,
  Transaction,
} from "../../generated/schema";

export function fetchAccount(address: Address): Account {
  let account = Account.load(address);

  if (account == null) {
    account = new Account(address);
    account.save();
  }

  return account;
}

export function fetchDelayedBigInt(id: string): DelayedBigInt {
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

export function updateDelayedBigInt(
  id: string,
  timestamp: BigInt,
  newValue: BigInt,
  since: BigInt
): DelayedBigInt {
  const delayedBigInt = fetchDelayedBigInt(id);
  const valueEffectPassed = delayedBigInt.since.ge(timestamp);
  if (valueEffectPassed) {
    delayedBigInt.oldValue = delayedBigInt.value;
  }
  delayedBigInt.value = newValue;
  delayedBigInt.since = since;
  delayedBigInt.save();
  return delayedBigInt;
}

export function fetchTransaction(event: ethereum.Event): Transaction {
  let transaction = Transaction.load(event.transaction.hash);

  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash);
    transaction.timestamp = event.block.timestamp;
    transaction.blockNumber = event.block.number;
    transaction.sender = fetchAccount(event.transaction.from).id;
    transaction.save();
  }

  return transaction;
}

export function fetchSelector(id: Bytes): Selector {
  let selector = Selector.load(id);

  if (selector == null) {
    selector = new Selector(id);
    selector.save();
  }

  return selector;
}

export function fetchOperation(operationId: Bytes): Operation {
  let operation = Operation.load(operationId);

  if (operation == null) {
    operation = new Operation(operationId);
    operation.save();
  }

  return operation;
}
