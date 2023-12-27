import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
  counter: number

}

export const reducers: ActionReducerMap<State> = {

  counter: counterReducer

};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['counter'],
    rehydrate: true,
    storageKeySerializer: (key: string) => `${key}`,
    read: (key: string, value: string) => {
      if (key === 'counter') {
        return parseInt(value, 10)
      }
      return value
    },
  } as any)(reducer)
}


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [localStorageSyncReducer] : [];
