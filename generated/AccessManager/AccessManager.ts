// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OperationCanceled extends ethereum.Event {
  get params(): OperationCanceled__Params {
    return new OperationCanceled__Params(this);
  }
}

export class OperationCanceled__Params {
  _event: OperationCanceled;

  constructor(event: OperationCanceled) {
    this._event = event;
  }

  get operationId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get nonce(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OperationExecuted extends ethereum.Event {
  get params(): OperationExecuted__Params {
    return new OperationExecuted__Params(this);
  }
}

export class OperationExecuted__Params {
  _event: OperationExecuted;

  constructor(event: OperationExecuted) {
    this._event = event;
  }

  get operationId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get nonce(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OperationScheduled extends ethereum.Event {
  get params(): OperationScheduled__Params {
    return new OperationScheduled__Params(this);
  }
}

export class OperationScheduled__Params {
  _event: OperationScheduled;

  constructor(event: OperationScheduled) {
    this._event = event;
  }

  get operationId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get nonce(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get schedule(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get caller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get target(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get data(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get roleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get admin(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RoleGrantDelayChanged extends ethereum.Event {
  get params(): RoleGrantDelayChanged__Params {
    return new RoleGrantDelayChanged__Params(this);
  }
}

export class RoleGrantDelayChanged__Params {
  _event: RoleGrantDelayChanged;

  constructor(event: RoleGrantDelayChanged) {
    this._event = event;
  }

  get roleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get delay(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get since(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get roleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get delay(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get since(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get newMember(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class RoleGuardianChanged extends ethereum.Event {
  get params(): RoleGuardianChanged__Params {
    return new RoleGuardianChanged__Params(this);
  }
}

export class RoleGuardianChanged__Params {
  _event: RoleGuardianChanged;

  constructor(event: RoleGuardianChanged) {
    this._event = event;
  }

  get roleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get guardian(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RoleLabel extends ethereum.Event {
  get params(): RoleLabel__Params {
    return new RoleLabel__Params(this);
  }
}

export class RoleLabel__Params {
  _event: RoleLabel;

  constructor(event: RoleLabel) {
    this._event = event;
  }

  get roleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get label(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get roleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TargetAdminDelayUpdated extends ethereum.Event {
  get params(): TargetAdminDelayUpdated__Params {
    return new TargetAdminDelayUpdated__Params(this);
  }
}

export class TargetAdminDelayUpdated__Params {
  _event: TargetAdminDelayUpdated;

  constructor(event: TargetAdminDelayUpdated) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get delay(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get since(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TargetClosed extends ethereum.Event {
  get params(): TargetClosed__Params {
    return new TargetClosed__Params(this);
  }
}

export class TargetClosed__Params {
  _event: TargetClosed;

  constructor(event: TargetClosed) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get closed(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class TargetFunctionRoleUpdated extends ethereum.Event {
  get params(): TargetFunctionRoleUpdated__Params {
    return new TargetFunctionRoleUpdated__Params(this);
  }
}

export class TargetFunctionRoleUpdated__Params {
  _event: TargetFunctionRoleUpdated;

  constructor(event: TargetFunctionRoleUpdated) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get selector(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get roleId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AccessManager__canCallResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getImmediate(): boolean {
    return this.value0;
  }

  getDelay(): BigInt {
    return this.value1;
  }
}

export class AccessManager__getAccessResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getSince(): BigInt {
    return this.value0;
  }

  getCurrentDelay(): BigInt {
    return this.value1;
  }

  getPendingDelay(): BigInt {
    return this.value2;
  }

  getEffect(): BigInt {
    return this.value3;
  }
}

export class AccessManager__hasRoleResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getIsMember(): boolean {
    return this.value0;
  }

  getExecutionDelay(): BigInt {
    return this.value1;
  }
}

export class AccessManager__scheduleResult {
  value0: Bytes;
  value1: BigInt;

  constructor(value0: Bytes, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getOperationId(): Bytes {
    return this.value0;
  }

  getNonce(): BigInt {
    return this.value1;
  }
}

export class AccessManager extends ethereum.SmartContract {
  static bind(address: Address): AccessManager {
    return new AccessManager("AccessManager", address);
  }

  ADMIN_ROLE(): BigInt {
    let result = super.call("ADMIN_ROLE", "ADMIN_ROLE():(uint64)", []);

    return result[0].toBigInt();
  }

  try_ADMIN_ROLE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ADMIN_ROLE", "ADMIN_ROLE():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PUBLIC_ROLE(): BigInt {
    let result = super.call("PUBLIC_ROLE", "PUBLIC_ROLE():(uint64)", []);

    return result[0].toBigInt();
  }

  try_PUBLIC_ROLE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PUBLIC_ROLE", "PUBLIC_ROLE():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  canCall(
    caller: Address,
    target: Address,
    selector: Bytes
  ): AccessManager__canCallResult {
    let result = super.call(
      "canCall",
      "canCall(address,address,bytes4):(bool,uint32)",
      [
        ethereum.Value.fromAddress(caller),
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(selector)
      ]
    );

    return new AccessManager__canCallResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_canCall(
    caller: Address,
    target: Address,
    selector: Bytes
  ): ethereum.CallResult<AccessManager__canCallResult> {
    let result = super.tryCall(
      "canCall",
      "canCall(address,address,bytes4):(bool,uint32)",
      [
        ethereum.Value.fromAddress(caller),
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(selector)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessManager__canCallResult(
        value[0].toBoolean(),
        value[1].toBigInt()
      )
    );
  }

  cancel(caller: Address, target: Address, data: Bytes): BigInt {
    let result = super.call(
      "cancel",
      "cancel(address,address,bytes):(uint32)",
      [
        ethereum.Value.fromAddress(caller),
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBigInt();
  }

  try_cancel(
    caller: Address,
    target: Address,
    data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "cancel",
      "cancel(address,address,bytes):(uint32)",
      [
        ethereum.Value.fromAddress(caller),
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  expiration(): BigInt {
    let result = super.call("expiration", "expiration():(uint32)", []);

    return result[0].toBigInt();
  }

  try_expiration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("expiration", "expiration():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAccess(roleId: BigInt, account: Address): AccessManager__getAccessResult {
    let result = super.call(
      "getAccess",
      "getAccess(uint64,address):(uint48,uint32,uint32,uint48)",
      [
        ethereum.Value.fromUnsignedBigInt(roleId),
        ethereum.Value.fromAddress(account)
      ]
    );

    return new AccessManager__getAccessResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getAccess(
    roleId: BigInt,
    account: Address
  ): ethereum.CallResult<AccessManager__getAccessResult> {
    let result = super.tryCall(
      "getAccess",
      "getAccess(uint64,address):(uint48,uint32,uint32,uint48)",
      [
        ethereum.Value.fromUnsignedBigInt(roleId),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessManager__getAccessResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getNonce(id: Bytes): BigInt {
    let result = super.call("getNonce", "getNonce(bytes32):(uint32)", [
      ethereum.Value.fromFixedBytes(id)
    ]);

    return result[0].toBigInt();
  }

  try_getNonce(id: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNonce", "getNonce(bytes32):(uint32)", [
      ethereum.Value.fromFixedBytes(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(roleId: BigInt): BigInt {
    let result = super.call("getRoleAdmin", "getRoleAdmin(uint64):(uint64)", [
      ethereum.Value.fromUnsignedBigInt(roleId)
    ]);

    return result[0].toBigInt();
  }

  try_getRoleAdmin(roleId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(uint64):(uint64)",
      [ethereum.Value.fromUnsignedBigInt(roleId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleGrantDelay(roleId: BigInt): BigInt {
    let result = super.call(
      "getRoleGrantDelay",
      "getRoleGrantDelay(uint64):(uint32)",
      [ethereum.Value.fromUnsignedBigInt(roleId)]
    );

    return result[0].toBigInt();
  }

  try_getRoleGrantDelay(roleId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleGrantDelay",
      "getRoleGrantDelay(uint64):(uint32)",
      [ethereum.Value.fromUnsignedBigInt(roleId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleGuardian(roleId: BigInt): BigInt {
    let result = super.call(
      "getRoleGuardian",
      "getRoleGuardian(uint64):(uint64)",
      [ethereum.Value.fromUnsignedBigInt(roleId)]
    );

    return result[0].toBigInt();
  }

  try_getRoleGuardian(roleId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleGuardian",
      "getRoleGuardian(uint64):(uint64)",
      [ethereum.Value.fromUnsignedBigInt(roleId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSchedule(id: Bytes): BigInt {
    let result = super.call("getSchedule", "getSchedule(bytes32):(uint48)", [
      ethereum.Value.fromFixedBytes(id)
    ]);

    return result[0].toBigInt();
  }

  try_getSchedule(id: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getSchedule", "getSchedule(bytes32):(uint48)", [
      ethereum.Value.fromFixedBytes(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTargetAdminDelay(target: Address): BigInt {
    let result = super.call(
      "getTargetAdminDelay",
      "getTargetAdminDelay(address):(uint32)",
      [ethereum.Value.fromAddress(target)]
    );

    return result[0].toBigInt();
  }

  try_getTargetAdminDelay(target: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTargetAdminDelay",
      "getTargetAdminDelay(address):(uint32)",
      [ethereum.Value.fromAddress(target)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTargetFunctionRole(target: Address, selector: Bytes): BigInt {
    let result = super.call(
      "getTargetFunctionRole",
      "getTargetFunctionRole(address,bytes4):(uint64)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(selector)
      ]
    );

    return result[0].toBigInt();
  }

  try_getTargetFunctionRole(
    target: Address,
    selector: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTargetFunctionRole",
      "getTargetFunctionRole(address,bytes4):(uint64)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(selector)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(roleId: BigInt, account: Address): AccessManager__hasRoleResult {
    let result = super.call(
      "hasRole",
      "hasRole(uint64,address):(bool,uint32)",
      [
        ethereum.Value.fromUnsignedBigInt(roleId),
        ethereum.Value.fromAddress(account)
      ]
    );

    return new AccessManager__hasRoleResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_hasRole(
    roleId: BigInt,
    account: Address
  ): ethereum.CallResult<AccessManager__hasRoleResult> {
    let result = super.tryCall(
      "hasRole",
      "hasRole(uint64,address):(bool,uint32)",
      [
        ethereum.Value.fromUnsignedBigInt(roleId),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessManager__hasRoleResult(
        value[0].toBoolean(),
        value[1].toBigInt()
      )
    );
  }

  hashOperation(caller: Address, target: Address, data: Bytes): Bytes {
    let result = super.call(
      "hashOperation",
      "hashOperation(address,address,bytes):(bytes32)",
      [
        ethereum.Value.fromAddress(caller),
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_hashOperation(
    caller: Address,
    target: Address,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashOperation",
      "hashOperation(address,address,bytes):(bytes32)",
      [
        ethereum.Value.fromAddress(caller),
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isTargetClosed(target: Address): boolean {
    let result = super.call(
      "isTargetClosed",
      "isTargetClosed(address):(bool)",
      [ethereum.Value.fromAddress(target)]
    );

    return result[0].toBoolean();
  }

  try_isTargetClosed(target: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTargetClosed",
      "isTargetClosed(address):(bool)",
      [ethereum.Value.fromAddress(target)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minSetback(): BigInt {
    let result = super.call("minSetback", "minSetback():(uint32)", []);

    return result[0].toBigInt();
  }

  try_minSetback(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minSetback", "minSetback():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  multicall(data: Array<Bytes>): Array<Bytes> {
    let result = super.call("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);

    return result[0].toBytesArray();
  }

  try_multicall(data: Array<Bytes>): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  schedule(
    target: Address,
    data: Bytes,
    when: BigInt
  ): AccessManager__scheduleResult {
    let result = super.call(
      "schedule",
      "schedule(address,bytes,uint48):(bytes32,uint32)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromUnsignedBigInt(when)
      ]
    );

    return new AccessManager__scheduleResult(
      result[0].toBytes(),
      result[1].toBigInt()
    );
  }

  try_schedule(
    target: Address,
    data: Bytes,
    when: BigInt
  ): ethereum.CallResult<AccessManager__scheduleResult> {
    let result = super.tryCall(
      "schedule",
      "schedule(address,bytes,uint48):(bytes32,uint32)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromUnsignedBigInt(when)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessManager__scheduleResult(value[0].toBytes(), value[1].toBigInt())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get initialAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get caller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get target(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ConsumeScheduledOpCall extends ethereum.Call {
  get inputs(): ConsumeScheduledOpCall__Inputs {
    return new ConsumeScheduledOpCall__Inputs(this);
  }

  get outputs(): ConsumeScheduledOpCall__Outputs {
    return new ConsumeScheduledOpCall__Outputs(this);
  }
}

export class ConsumeScheduledOpCall__Inputs {
  _call: ConsumeScheduledOpCall;

  constructor(call: ConsumeScheduledOpCall) {
    this._call = call;
  }

  get caller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ConsumeScheduledOpCall__Outputs {
  _call: ConsumeScheduledOpCall;

  constructor(call: ConsumeScheduledOpCall) {
    this._call = call;
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get roleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get executionDelay(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class LabelRoleCall extends ethereum.Call {
  get inputs(): LabelRoleCall__Inputs {
    return new LabelRoleCall__Inputs(this);
  }

  get outputs(): LabelRoleCall__Outputs {
    return new LabelRoleCall__Outputs(this);
  }
}

export class LabelRoleCall__Inputs {
  _call: LabelRoleCall;

  constructor(call: LabelRoleCall) {
    this._call = call;
  }

  get roleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get label(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class LabelRoleCall__Outputs {
  _call: LabelRoleCall;

  constructor(call: LabelRoleCall) {
    this._call = call;
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get roleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get callerConfirmation(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get roleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class ScheduleCall extends ethereum.Call {
  get inputs(): ScheduleCall__Inputs {
    return new ScheduleCall__Inputs(this);
  }

  get outputs(): ScheduleCall__Outputs {
    return new ScheduleCall__Outputs(this);
  }
}

export class ScheduleCall__Inputs {
  _call: ScheduleCall;

  constructor(call: ScheduleCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get when(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ScheduleCall__Outputs {
  _call: ScheduleCall;

  constructor(call: ScheduleCall) {
    this._call = call;
  }

  get operationId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }

  get nonce(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class SetGrantDelayCall extends ethereum.Call {
  get inputs(): SetGrantDelayCall__Inputs {
    return new SetGrantDelayCall__Inputs(this);
  }

  get outputs(): SetGrantDelayCall__Outputs {
    return new SetGrantDelayCall__Outputs(this);
  }
}

export class SetGrantDelayCall__Inputs {
  _call: SetGrantDelayCall;

  constructor(call: SetGrantDelayCall) {
    this._call = call;
  }

  get roleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newDelay(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetGrantDelayCall__Outputs {
  _call: SetGrantDelayCall;

  constructor(call: SetGrantDelayCall) {
    this._call = call;
  }
}

export class SetRoleAdminCall extends ethereum.Call {
  get inputs(): SetRoleAdminCall__Inputs {
    return new SetRoleAdminCall__Inputs(this);
  }

  get outputs(): SetRoleAdminCall__Outputs {
    return new SetRoleAdminCall__Outputs(this);
  }
}

export class SetRoleAdminCall__Inputs {
  _call: SetRoleAdminCall;

  constructor(call: SetRoleAdminCall) {
    this._call = call;
  }

  get roleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get admin(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetRoleAdminCall__Outputs {
  _call: SetRoleAdminCall;

  constructor(call: SetRoleAdminCall) {
    this._call = call;
  }
}

export class SetRoleGuardianCall extends ethereum.Call {
  get inputs(): SetRoleGuardianCall__Inputs {
    return new SetRoleGuardianCall__Inputs(this);
  }

  get outputs(): SetRoleGuardianCall__Outputs {
    return new SetRoleGuardianCall__Outputs(this);
  }
}

export class SetRoleGuardianCall__Inputs {
  _call: SetRoleGuardianCall;

  constructor(call: SetRoleGuardianCall) {
    this._call = call;
  }

  get roleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get guardian(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetRoleGuardianCall__Outputs {
  _call: SetRoleGuardianCall;

  constructor(call: SetRoleGuardianCall) {
    this._call = call;
  }
}

export class SetTargetAdminDelayCall extends ethereum.Call {
  get inputs(): SetTargetAdminDelayCall__Inputs {
    return new SetTargetAdminDelayCall__Inputs(this);
  }

  get outputs(): SetTargetAdminDelayCall__Outputs {
    return new SetTargetAdminDelayCall__Outputs(this);
  }
}

export class SetTargetAdminDelayCall__Inputs {
  _call: SetTargetAdminDelayCall;

  constructor(call: SetTargetAdminDelayCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newDelay(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetTargetAdminDelayCall__Outputs {
  _call: SetTargetAdminDelayCall;

  constructor(call: SetTargetAdminDelayCall) {
    this._call = call;
  }
}

export class SetTargetClosedCall extends ethereum.Call {
  get inputs(): SetTargetClosedCall__Inputs {
    return new SetTargetClosedCall__Inputs(this);
  }

  get outputs(): SetTargetClosedCall__Outputs {
    return new SetTargetClosedCall__Outputs(this);
  }
}

export class SetTargetClosedCall__Inputs {
  _call: SetTargetClosedCall;

  constructor(call: SetTargetClosedCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get closed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetTargetClosedCall__Outputs {
  _call: SetTargetClosedCall;

  constructor(call: SetTargetClosedCall) {
    this._call = call;
  }
}

export class SetTargetFunctionRoleCall extends ethereum.Call {
  get inputs(): SetTargetFunctionRoleCall__Inputs {
    return new SetTargetFunctionRoleCall__Inputs(this);
  }

  get outputs(): SetTargetFunctionRoleCall__Outputs {
    return new SetTargetFunctionRoleCall__Outputs(this);
  }
}

export class SetTargetFunctionRoleCall__Inputs {
  _call: SetTargetFunctionRoleCall;

  constructor(call: SetTargetFunctionRoleCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get selectors(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get roleId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetTargetFunctionRoleCall__Outputs {
  _call: SetTargetFunctionRoleCall;

  constructor(call: SetTargetFunctionRoleCall) {
    this._call = call;
  }
}

export class UpdateAuthorityCall extends ethereum.Call {
  get inputs(): UpdateAuthorityCall__Inputs {
    return new UpdateAuthorityCall__Inputs(this);
  }

  get outputs(): UpdateAuthorityCall__Outputs {
    return new UpdateAuthorityCall__Outputs(this);
  }
}

export class UpdateAuthorityCall__Inputs {
  _call: UpdateAuthorityCall;

  constructor(call: UpdateAuthorityCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newAuthority(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateAuthorityCall__Outputs {
  _call: UpdateAuthorityCall;

  constructor(call: UpdateAuthorityCall) {
    this._call = call;
  }
}
