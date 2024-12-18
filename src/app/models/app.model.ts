export enum DateOperation {
  Elapsed = "elapsed",
}

export interface App {
  baseDate: Date | null;
  currentOperation: DateOperation | null;
}