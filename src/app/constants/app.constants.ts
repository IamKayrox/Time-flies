import { App, DateOperation } from "../models/app.model";
import { SelectOption } from "../models/common.model";

export const DATE_OPERATIONS_OPTIONS: SelectOption<DateOperation>[] = [
  {
    value: DateOperation.Elapsed,
    label: "home.elapsed"
  }
]

export const APP_INITIAL_STATE: App = {
  baseDate: null,
  currentOperation: null,
}