import { SelectOption, TimeUnit } from "../models/common.model";

export const TIME_UNIT_OPTIONS: SelectOption<TimeUnit>[] = [
  {
    value: TimeUnit.Seconds,
    label: "common.seconds",
  },
  {
    value: TimeUnit.Minutes,
    label: "common.minutes",
  },
  {
    value: TimeUnit.Hours,
    label: "common.hours",
  },
  {
    value: TimeUnit.Days,
    label: "common.days",
  }
]