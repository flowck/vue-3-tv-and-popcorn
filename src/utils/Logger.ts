import dayjs from "dayjs";

export interface Logger {
  info(info: unknown): void;
  warn(info: unknown): void;
  error(info: unknown): void;
  trace(info: unknown): void;
  table(info: unknown): void;
}

enum LogType {
  INFO = "[INFO]",
  WARN = "[WARN]",
  ERROR = "[ERROR]",
  TRACE = "[TRACE]",
  TABLE = "[TABLE]",
}

export class Logger implements Logger {
  private log(type: LogType, msg: unknown) {
    console.log(`${type}`, dayjs().format(), msg);
  }

  info(info: unknown): void {
    this.log(LogType.INFO, info);
  }

  warn(info: unknown): void {
    this.log(LogType.WARN, info);
  }
  error(info: unknown): void {
    console.error(LogType.ERROR, info);
  }

  trace(info: unknown): void {
    console.trace(LogType.TRACE, info);
  }

  table(info: unknown): void {
    this.table(info);
  }
}

export const logger = new Logger();
