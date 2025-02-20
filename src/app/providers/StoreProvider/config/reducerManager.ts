import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) : ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((name) => {
                    delete state[name];
                });
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (name: StateSchemaKey, reducer: Reducer) => {
            if (!name || reducers[name]) {
                return;
            }

            reducers[name] = reducer;

            combinedReducer = combineReducers(reducers);
        },

        remove: (name: StateSchemaKey) => {
            if (!name || !reducers[name]) {
                return;
            }

            delete reducers[name];

            keysToRemove.push(name);

            combinedReducer = combineReducers(reducers);
        },
    };
}
