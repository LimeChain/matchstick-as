// TODO: pass the name parameter to Rust for logging
export function test(_name: string, f: () => void): bool {
  f();
  return true;
}