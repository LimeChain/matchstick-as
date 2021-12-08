import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";

let defaultAddress = Address.fromString("0xA16081F360e3847006dB660bae1c6d1b2e17eC2A");
let defaultAddressBytes = Address.fromString("0xA16081F360e3847006dB660bae1c6d1b2e17eC2A") as Bytes;
let defaultBigInt = BigInt.fromI32(1);
let defaultBlock = new ethereum.Block(defaultAddressBytes, defaultAddressBytes, defaultAddressBytes, defaultAddress,
    defaultAddressBytes, defaultAddressBytes, defaultAddressBytes, defaultBigInt, defaultBigInt,
    defaultBigInt, defaultBigInt, defaultBigInt, defaultBigInt, defaultBigInt, defaultBigInt);
let defaultTransaction = new ethereum.Transaction(defaultAddressBytes, defaultBigInt, defaultAddress,
    defaultAddress, defaultBigInt, defaultBigInt, defaultBigInt, defaultAddressBytes, defaultBigInt);
let defaultEventDataLogType = "default_log_type";

export function newMockEvent(): ethereum.Event {
    return new ethereum.Event(defaultAddress, defaultBigInt,
        defaultBigInt, defaultEventDataLogType, defaultBlock, defaultTransaction, []);
}

export function newMockCall(): ethereum.Call {
    return new ethereum.Call(defaultAddress, defaultAddress, defaultBlock, defaultTransaction, [], []);
}
