import { createAction, props } from "@ngrx/store";

import { User } from "../shared/user.interface";

export enum UsersActionType {
    LoadUsers = "[Users] Load Users",
    LoadUsersSuccess = "[Users] Load Users Success",
}

export const LoadUsers = createAction(UsersActionType.LoadUsers);


export const LoadUsersSuccess = createAction(
    UsersActionType.LoadUsersSuccess,
    props<{ users: User[] }>()
);


export const fromUsersActions = {
    LoadUsers,
    LoadUsersSuccess
};