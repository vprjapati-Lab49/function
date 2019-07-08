interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}

interface NodeModule {
    hot: any; // tslint:disable-line:no-any
}

declare module 'appProps' {
    import { Dispatch } from 'react-redux';
    import { PayloadAction as PAction } from 'typesafe-actions';

    interface ReduxProps<T = object> {
        dispatch: Dispatch<T>;
    }

    interface Action extends PAction<string, any> { // tslint:disable-line:no-any

    }

    interface PayloadAction<P> extends PAction<string, P> {

    }
}

declare module 'redux-history-transitions';