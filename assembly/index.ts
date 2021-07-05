import { log } from "./log";
import { defaultEventParams } from "./event";
// import { mockLogger as log } from "./mocks"; // For unit tests
let map = new Map<i32, string>();

export function test(name: string, f: () => void): bool {
  log.info("TEST " + name)
  f();
  return true;
}

export function mockFunction(
  contractAddress: string,
  fnName: string,
  fnArguments: string[],
  expectedReturnValue: string,
  reverts: bool
): void {
  let hash = createHash(contractAddress, fnName, fnArguments);
  if (reverts) {
    map.set(hash, "Function reverted");
  } else {
    map.set(hash, expectedReturnValue);
  }
}

export function callFunction(
  contractAddress: string,
  fnName: string,
  fnArguments: string[]
): string {
  let hash = createHash(contractAddress, fnName, fnArguments);
  if (map.has(hash)) {
    return map.get(hash);
  }
  log.error(
    "No function with name '" +
      fnName +
      "', contract address '" +
      contractAddress +
      "' and given arguments found."
  );
  return "";
}

function createHash(
  address: string,
  fnName: string,
  fnArguments: string[]
): i32 {
  let stringToHash = address + fnName;
  for (let i = 0; i < fnArguments.length; i++) {
    stringToHash.concat(fnArguments[i]);
  }

  let hash = 0;
  if (stringToHash.length == 0) {
    return hash;
  }

  for (let i = 0; i < stringToHash.length; i++) {
    let char = stringToHash.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}
