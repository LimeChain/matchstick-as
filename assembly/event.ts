import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";

let defaultBlock = new ethereum.Block();
defaultBlock.hash = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
defaultBlock.parentHash = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
defaultBlock.unclesHash = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
defaultBlock.author = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
);
defaultBlock.stateRoot = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
defaultBlock.transactionsRoot = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
defaultBlock.receiptsRoot = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
defaultBlock.number = BigInt.fromI32(1);
defaultBlock.gasUsed = BigInt.fromI32(1);
defaultBlock.gasLimit = BigInt.fromI32(1);
defaultBlock.timestamp = BigInt.fromI32(1);
defaultBlock.difficulty = BigInt.fromI32(1);
defaultBlock.totalDifficulty = BigInt.fromI32(1);
defaultBlock.size = BigInt.fromI32(1);

let defaultTransaction = new ethereum.Transaction();
defaultTransaction.hash = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
defaultTransaction.index = BigInt.fromI32(1);
defaultTransaction.from = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
);
defaultTransaction.to = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
);
defaultTransaction.value = BigInt.fromI32(1);
defaultTransaction.gasUsed = BigInt.fromI32(1);
defaultTransaction.gasPrice = BigInt.fromI32(1);
defaultTransaction.input = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;

let defaultEventData: ethereum.Event = new ethereum.Event();
defaultEventData.address = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
);
defaultEventData.logIndex = BigInt.fromI32(1);
defaultEventData.logType = "default_log_type";
defaultEventData.block = defaultBlock;
defaultEventData.transaction = defaultTransaction;

export function addMetadata(event: ethereum.Event): ethereum.Event {
    event.address = defaultEventData.address;
    event.logIndex = defaultEventData.logIndex;
    event.logType = defaultEventData.logType;
    event.block = defaultEventData.block;
    event.transaction = defaultEventData.transaction;

    return event;
}
