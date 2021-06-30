export class mockLogger {
  public static critical(msg: string): void {
    log("CRITICAL " + msg);
  }
  public static error(msg: string): void {
    log("ERROR " + msg);
  }
  public static warning(msg: string): void {
    log("WARNING " + msg);
  }
  public static info(msg: string): void {
    log("INFO " + msg);
  }
  public static debug(msg: string): void {
    log("DEBUG " + msg);
  }
}
