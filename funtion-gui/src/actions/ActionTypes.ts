import { mapValues } from 'lodash';

function generateActionValues(obj: object, prefix?: string) {
    return mapValues(obj, (v, k) => {
        const key = (prefix ? `${prefix}.` : '') + k;
        if (typeof v === 'object') {
            return generateActionValues(v, key);
        } else if (v !== '') {
            return v;
        }

        return key;
    });
}

export interface ServiceActions {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    CONFLICT: string;
    RETRY: string;
    ABORT: string;
    DENIED: string;
    EDIT: string;
}

const serviceActions: ServiceActions = {
    REQUEST: '',
    SUCCESS: '',
    FAILURE: '',
    CONFLICT: '',
    RETRY: '',
    ABORT: '',
    DENIED: '',
    EDIT: ''
};

const actions = {
    LOCATION_CHANGE: '@@router/LOCATION_CHANGE',
    USER: {
        LOGOUT: {
            ...serviceActions
        }
    },
    NOTIFY: {
        TOAST: {
            COMMON: '',
            GLOBAL: ''
        },
        CLEAR: {
            COMMON: '',
            GLOBAL: ''
        }
    },
    APP: {
        UNHANDLED_ERROR: '',
        USER_AUTH: {
            LOGIN: {
                ...serviceActions,
                REDIRECT: ''
            }
        }
    },
    B_AND_T_STATUS_REPORT: {
        FILTER: '',
        ...serviceActions
    },
    TIME_SHEET_SUMMARY_REPORT: {
        FILTER: '',
        ...serviceActions
    },
    UNBILLABLE_TIME_DATA: {
        FILTER: '',
        ...serviceActions
    },
    RAW_CLICKTIME_DATA_REPORT: {
        FILTER: '',
        ...serviceActions
    },
    RAW_UTIL_DATA_REPORT: {
        FILTER: '',
        ...serviceActions
    },
    MISSING_TIMESHEETS: {
        FILTER: '',
        ...serviceActions
    },
    DASHBOARD: {
        DRAWER_TOGGLE: ''
    },
    QUERY_ENGINE: {
        QUERY_INPUT: '',
        SHOW_DETAILS: '',
        FETCH: {
            ...serviceActions
        }
    }
};

export default generateActionValues(actions);
