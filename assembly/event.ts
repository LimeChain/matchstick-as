import {
    Address,
    BigInt,
    EthereumBlock,
    EthereumEvent,
    EthereumEventParam,
    EthereumTransaction,
    EthereumValue,
    EthereumValueKind,
    typeConversion,
} from "@graphprotocol/graph-ts";

let defaultBlock: EthereumBlock = new EthereumBlock();
defaultBlock.hash = typeConversion.stringToH160(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultBlock.parentHash = typeConversion.stringToH160(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultBlock.unclesHash = typeConversion.stringToH160(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultBlock.author = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultBlock.stateRoot = typeConversion.stringToH160(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultBlock.transactionsRoot = typeConversion.stringToH160(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultBlock.receiptsRoot = typeConversion.stringToH160(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultBlock.number = BigInt.fromI32(1);
defaultBlock.gasUsed = BigInt.fromI32(1);
defaultBlock.gasLimit = BigInt.fromI32(1);
defaultBlock.timestamp = BigInt.fromI32(1);
defaultBlock.difficulty = BigInt.fromI32(1);
defaultBlock.totalDifficulty = BigInt.fromI32(1);
defaultBlock.size = BigInt.fromI32(1);

let defaultTransaction: EthereumTransaction = new EthereumTransaction();
defaultTransaction.hash = typeConversion.stringToH160(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultTransaction.index = BigInt.fromI32(1);
defaultTransaction.from = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultTransaction.to = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultTransaction.value = BigInt.fromI32(1);
defaultTransaction.gasUsed = BigInt.fromI32(1);
defaultTransaction.gasPrice = BigInt.fromI32(1);
defaultTransaction.input = typeConversion.stringToH160(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);

let defaultEventParams: Array<EthereumEventParam> =
    new Array<EthereumEventParam>();

let eventParam: EthereumEventParam = new EthereumEventParam();
eventParam.name = "name";

let ethereumValue: EthereumValue = new EthereumValue();
ethereumValue.kind = EthereumValueKind.INT;
ethereumValue.data = 1;

defaultEventParams.push(eventParam);

let defaultEventData: EthereumEvent = new EthereumEvent();
defaultEventData.address = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A"
);
defaultEventData.logIndex = BigInt.fromI32(1);
defaultEventData.logType = "default_log_type";
defaultEventData.block = defaultBlock;
defaultEventData.transaction = defaultTransaction;
defaultEventData.parameters = defaultEventParams;

export function addMetadata(event: EthereumEvent): EthereumEvent {
    event.address = defaultEventData.address;
    event.logIndex = defaultEventData.logIndex;
    event.logType = defaultEventData.logType;
    event.block = defaultEventData.block;
    event.transaction = defaultEventData.transaction;
    event.parameters = defaultEventData.parameters;

    return event;
}
