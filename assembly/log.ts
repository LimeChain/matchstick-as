export declare namespace log {
    // Host export for logging, providing basic logging functionality
    export function log(level: Level, msg: string): void;
}

export enum Level {
    CRITICAL = 0,
    ERROR = 1,
    WARNING = 2,
    INFO = 3,
    DEBUG = 4,
    SUCCESS = 5
}

export function critical(msg: string): void {
    log.log(Level.CRITICAL, msg);
}

export function error(msg: string): void {
    log.log(Level.ERROR, msg);
}

export function warning(msg: string): void {
    log.log(Level.WARNING, msg);
}

export function info(msg: string): void {
    log.log(Level.INFO, msg);
}

export function debug(msg: string): void {
    log.log(Level.DEBUG, msg);
}

export function success(msg: string): void {
    log.log(Level.SUCCESS, msg);
}
