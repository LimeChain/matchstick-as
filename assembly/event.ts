import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";

let defaultBlockHash = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
let defaultBlockParentHash = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
let defaultBlockUnclesHash = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
let defaultBlockAuthor = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
);
let defaultBlockStateRoot = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
let defaultBlockTransactionsRoot = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
let defaultBlockReceiptsRoot = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
let defaultBlockNumber = BigInt.fromI32(1);
let defaultBlockGasUsed = BigInt.fromI32(1);
let defaultBlockGasLimit = BigInt.fromI32(1);
let defaultBlockTimestamp = BigInt.fromI32(1);
let defaultBlockDifficulty = BigInt.fromI32(1);
let defaultBlockTotalDifficulty = BigInt.fromI32(1);
let defaultBlockSize = BigInt.fromI32(1);
let defaultBlock = new ethereum.Block(defaultBlockHash, defaultBlockParentHash, defaultBlockUnclesHash, defaultBlockAuthor,
    defaultBlockStateRoot, defaultBlockTransactionsRoot, defaultBlockReceiptsRoot, defaultBlockNumber, defaultBlockGasUsed,
    defaultBlockGasLimit, defaultBlockTimestamp, defaultBlockDifficulty, defaultBlockTotalDifficulty, defaultBlockSize);

let defaultTransactionHash = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
let defaultTransactionIndex = BigInt.fromI32(1);
let defaultTransactionFrom = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
);
let defaultTransactionTo = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
);
let defaultTransactionValue = BigInt.fromI32(1);
let defaultTransactionGasLimit = BigInt.fromI32(1);
let defaultTransactionGasPrice = BigInt.fromI32(1);
let defaultTransactionInput = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
) as Bytes;
let defaultTransaction = new ethereum.Transaction(defaultTransactionHash, defaultTransactionIndex, defaultTransactionFrom,
    defaultTransactionTo, defaultTransactionValue, defaultTransactionGasLimit, defaultTransactionGasPrice, defaultTransactionInput);

let defaultEventDataAddress = Address.fromString(
    "0xA16081F360e3847006dB660bae1c6d1b2e17eC2A",
);
let defaultEventDataLogIndex = BigInt.fromI32(1);
let defaultEventDataLogType = "default_log_type";
let defaultEventDataBlock = defaultBlock;
let defaultEventDataTransaction = defaultTransaction;
let defaultEvent: ethereum.Event = new ethereum.Event(defaultEventDataAddress, defaultEventDataLogIndex,
    defaultEventDataLogIndex, defaultEventDataLogType, defaultEventDataBlock, defaultEventDataTransaction, []);

export function newMockEvent(): ethereum.Event {
    return defaultEvent;
}
