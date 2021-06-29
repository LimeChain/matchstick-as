import { log } from "./log";
let map = new Map<i32, string>();

// TODO: pass the name parameter to Rust for logging
export function test(_name: string, f: () => void): bool {
  f();
  return true;
}

export function mockFunction(
  contractAddress: string,
  fnName: string,
  fnArguments: string[],
  expectedReturnValue: string
): void {
  let hash = createHash(contractAddress, fnName, fnArguments);
  map.set(hash, expectedReturnValue);
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
  log.citical(
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
