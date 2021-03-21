import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from '../service/users.service';
import { fromUsersActions, UsersActionType } from '../store/action'
import { User } from '../shared/user.interface';

@Injectable()
export class UserEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType('[Users] Load Users'),
        mergeMap(() => this.usersService.getUsers()
            .pipe(
                map((res: any) => {
                    return fromUsersActions.LoadUsersSuccess({
                        users: res.data
                    })
                })
            ))
    ));
                
    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }
}