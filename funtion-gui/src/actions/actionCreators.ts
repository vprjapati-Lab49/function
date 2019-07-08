import ActionTypes from './ActionTypes';
import { Message } from '../types/mapping';

export const toggleActivation = (emailIds: Array<string>, isActive: boolean) => ({
    type: ActionTypes.USER_MANAGEMENT.TOGGLE_STATUS.REQUEST,
    payload: {emailIds, isActive}
});

export const sendMessage = (message: Message) => {
    return ({
        type: ActionTypes.USER_MANAGEMENT.SEND.MESSAGES,
        payload: JSON.stringify(message)
    });
};

export const sendInvite = (message: Message) => {
    return ({
        type: ActionTypes.USER_MANAGEMENT.SEND.INVITE,
        payload: JSON.stringify(message)
    });
};