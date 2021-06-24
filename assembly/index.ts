export declare namespace log {
  // Host export for logging, providing basic logging functionality
  export function log(level: Level, msg: string): void
}

export namespace log {
  export enum Level {
    CRITICAL = 0,
    ERROR = 1,
    WARNING = 2,
    INFO = 3,
    DEBUG = 4,
  }

  export function critical(msg: string, args: Array<string>): void {
    log(Level.CRITICAL, format(msg, args))
  }

  export function error(msg: string, args: Array<string>): void {
    log(Level.ERROR, format(msg, args))
  }

  export function warning(msg: string, args: Array<string>): void {
    log(Level.WARNING, format(msg, args))
  }

  export function info(msg: string, args: Array<string>): void {
    log(Level.INFO, format(msg, args))
  }

  export function debug(msg: string, args: Array<string>): void {
    log(Level.DEBUG, format(msg, args))
  }
}

let map = new Map<i32, string>();
// TODO: pass the name parameter to Rust for logging
export function test(_name: string, f: () => void): bool {
  f();
  return true;
}

export function mockFunction(contractAddress: string, fnName: string, fnArguments: string[], expectedReturnValue: string): void {
  let hash = createHash(contractAddress, fnName, fnArguments);
  map.set(hash, expectedReturnValue);
}

export function testFailure(): void {
  log.error("Something went wrong.")
}

export function callFunction(contractAddress: string, fnName: string, fnArguments: string[]): string {
  let hash = createHash(contractAddress, fnName, fnArguments);
  if (map.has(hash)) {
    return map.get(hash);
  }
  return "No function with name '" + fnName + "', contract address '" + contractAddress + "' and given arguments found.";
}

function createHash(address: string, fnName: string, fnArguments: string[]): i32 {
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
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
  }
    
  return hash;
}

