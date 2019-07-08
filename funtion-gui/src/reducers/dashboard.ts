import { Action } from 'appProps';
import ActionTypes from '../actions/ActionTypes';

export type State = {
    drawerOpen: boolean
};

const defaultState = {
    drawerOpen: false
};

export const dashboard = (state: State = defaultState, { type, payload }: Action) => {
    switch (type) {

        case ActionTypes.DASHBOARD.DRAWER_TOGGLE:
            return {
                ...state,
                drawerOpen: payload
            };

        default:
            return state;
    }
};