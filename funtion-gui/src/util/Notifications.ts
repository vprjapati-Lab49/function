import ActionTypes from '../actions/ActionTypes';
import { messages } from '../constants/index';

export interface NotificationMeta {
    actionType: string;
    message?: any; // tslint:disable-line:no-any
    autoHideDuration?: number;
}

export default {
    COMMON: {
        SERVER_UP: {
            actionType: ActionTypes.NOTIFY.CLEAR.GLOBAL,
            message: messages.error.SERVER_UP
        },
        SERVER_ERROR: {
            actionType: ActionTypes.NOTIFY.TOAST.GLOBAL,
            message: messages.error.SERVER_ERROR
        },
        DENIED: {
            actionType: ActionTypes.NOTIFY.TOAST.COMMON,
            message: 'You are not authorised to perform the requested operation.',
            autoHideDuration: 10000
        },
        CONFLICT: {
            action: 'Refresh',
            message: 'Conflict during request.',
            autoHideDuration: 30000,
            type: 'warning'
        }
    }
};
