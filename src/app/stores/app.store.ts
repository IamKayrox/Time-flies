import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"
import { APP_INITIAL_STATE } from "../constants/app.constants"
import { DateOperation } from "../models/app.model";

export const AppStore = signalStore(
  withState(APP_INITIAL_STATE),
  withMethods(store => ({
    updateBaseDate(date: Date) {
      patchState(store, (state) => ({ ...state, baseDate: date }));
    },
    setCurrentOperation(operation: DateOperation) {
      patchState(store, (state) => ({ ...state, currentOperation: operation}));
    },
    resetOperation() {
      patchState(store, (state) => ({ ...state, currentOperation: null }));
    }
  }))
)