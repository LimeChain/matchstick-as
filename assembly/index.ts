export const map = new Map<string, string>();

// TODO: pass the name parameter to Rust for logging
export function test(_name: string, f: () => void): bool {
  f();
  return true;
}

export function mockFunction(fnName: string, param: string, expectedReturnValue: string): void {
  map.set(fnName + param, expectedReturnValue);
}

export function callFunction(fnName: string, param: string): string {
  const hash = fnName + param;
  if (map.has(hash)) {
    return map.get(hash);
  }
  throw new Error("No function with hash " + hash + " found.");
}