export declare namespace log {
  // Host export for logging, providing basic logging functionality
  export function log(level: Level, msg: string): void;
}

export namespace log {
  export enum Level {
    CRITICAL = 0,
    ERROR = 1,
    WARNING = 2,
    INFO = 3,
    DEBUG = 4,
  }

  export function critical(msg: string): void {
    log(Level.CRITICAL, msg);
  }

  export function error(msg: string): void {
    log(Level.ERROR, msg);
  }

  export function warning(msg: string): void {
    log(Level.WARNING, msg);
  }

  export function info(msg: string): void {
    log(Level.INFO, msg);
  }

  export function debug(msg: string): void {
    log(Level.DEBUG, msg);
  }
}
