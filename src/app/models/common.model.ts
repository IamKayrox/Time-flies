export enum TimeUnit {
  Seconds = "seconds",
  Minutes = "minutes",
  Hours = "hours",
  Days = "days"
}

export interface SelectOption<T> {
  value: T;
  label: string;
}