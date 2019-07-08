
export const routes = (() => {
    const publicPath = process.env.REACT_APP_PUBLIC_PATH && process.env.REACT_APP_PUBLIC_PATH.includes('http') ?
        new URL(process.env.REACT_APP_PUBLIC_PATH).pathname :
        process.env.REACT_APP_PUBLIC_PATH || '/';
    return {
        publicPath: publicPath,
        index: '/'
    };
})();

export const labels = {
    titles: {
        notifications: {
            HEADER: 'notifications'
        }
    }
};

export const messages = {
    indicators: {
        agGrid: {
            OVERLAY: '<span class="{0}">{1}</span>',
            ICON: '<i class="material-icons">{0}</i>'
        },
        filters: {
            NO_MATCHES: 'Your search did not match any {0}',
        }
    },
    validations: {
        error: {
            SERVER_UP: '',
            SERVER_ERROR: 'There was a problem connecting to the server.',
            OUTDATED_LE_ERROR: 'Your Legal Entity data is out of date. Please refresh the page.'
        },
        confirmation: {
            disableDomain: 'You are about to disable this email domain.' +
              ' All rawUtilData with this email domain will also be disabled!',
            enableDomain: 'You are about to enable this email domain.' +
              ' All rawUtilData with this email domain will need to be manually re-activated.'
        }
    }
};

export const constants = {
    http: {
        UNAUTHORIZED: 401,
        SUCCESS: 200,
        UNPROCESSABLE_ENTITY: 422
    }
};

export const filterDefaultValues = {
    ALL_MANAGERS: 'All Managers',
    ALL_LOCATIONS: 'All Locations',
    ALL_RESOURCES: 'All Resources',
    ALL_PRACTICES: 'All Practices'
};

export const csvDownloadParams = {
    allColumns: true
};

export const dateFormats = {
    MM_DD_YYYY: 'MM.DD.YYYY',
    FILE_DATE_FORMAT: 'YYYY-MM-DD'
};

export const EMPTY_STRING = '';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const START_DATE = 'startDate';
export const END_DATE = 'endDate';
