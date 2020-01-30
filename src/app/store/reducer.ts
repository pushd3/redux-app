import { createReducer, on, Action } from "@ngrx/store";

import { fromUsersActions } from "../store/action";
import { User } from "../shared/user.interface";


export interface UserState {
    name: string;
    id?: number
}

export const initialState: User = {
    name: null
};

const _reducer = createReducer(
    initialState,
    on(fromUsersActions.LoadUsers, (state) =>
        ({
            ...state,
        })
    ),
    on(fromUsersActions.LoadUsersSuccess, (state, { users }) => {
        return {
            ...state,
            users
        };
    }),
);

export function reducer(state: User | undefined, action: Action) {
    return _reducer(state, action);
}