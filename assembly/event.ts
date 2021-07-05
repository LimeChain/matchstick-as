import {
  EthereumEvent,
  EthereumEventParam,
  Address,
  BigInt,
  EthereumBlock,
  Bytes,
  typeConversion,
  EthereumTransaction,
  EthereumValue,
  EthereumValueKind
} from "../node_modules/@graphprotocol/graph-ts";

let defaultBlock: EthereumBlock;
defaultBlock.hash = typeConversion.stringToH160("1");
defaultBlock.parentHash = typeConversion.stringToH160("1");
defaultBlock.unclesHash = typeConversion.stringToH160("1");
defaultBlock.author = Address.fromString("123456");
defaultBlock.stateRoot = typeConversion.stringToH160("1");
defaultBlock.transactionsRoot = typeConversion.stringToH160("1");
defaultBlock.receiptsRoot = typeConversion.stringToH160("1");
defaultBlock.number = BigInt.fromI32(1);
defaultBlock.gasUsed = BigInt.fromI32(1);
defaultBlock.gasLimit = BigInt.fromI32(1);
defaultBlock.timestamp = BigInt.fromI32(1);
defaultBlock.difficulty = BigInt.fromI32(1);
defaultBlock.totalDifficulty = BigInt.fromI32(1);
defaultBlock.size = BigInt.fromI32(1);

let defaultTransaction: EthereumTransaction;
defaultTransaction.hash = typeConversion.stringToH160("1");
defaultTransaction.index = BigInt.fromI32(1);
defaultTransaction.from = Address.fromString("123456");
defaultTransaction.to = Address.fromString("123456");
defaultTransaction.value = BigInt.fromI32(1);
defaultTransaction.gasUsed = BigInt.fromI32(1);
defaultTransaction.gasPrice = BigInt.fromI32(1);
defaultTransaction.input = typeConversion.stringToH160("1");

let defaultEventParams: Array<EthereumEventParam>;

let eventParam: EthereumEventParam;
eventParam.name = "name";

let ethereumValue: EthereumValue;
ethereumValue.kind = EthereumValueKind.INT;
ethereumValue.data = 1;

defaultEventParams.push(eventParam);

let defaultEventData: EthereumEvent;
defaultEventData.address = Address.fromString("123456");
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
