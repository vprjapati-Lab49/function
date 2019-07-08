import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { createStyles } from '@material-ui/core';

import { colors } from './components/shared/common-styles';

export const globalContainer = {
    '@global html, body, #root': {
        margin: 0,
        padding: 0,
        height: '100%'
    },
    '@global html': {
        fontSize: '62.5%'
    },
    '@global body': {
        backgroundColor: colors.contentBackground,
        fontFamily: 'Titillium Web, sans-serif',
        color: colors.content
    }
};

const styles = createStyles({
    palette: {
        primary: { main: colors.primary },
        secondary: { main: colors.secondary }
    },
    typography: {
        htmlFontSize: 10,
        fontFamily: 'Titillium Web, sans-serif'
    },
    overrides: {
        MuiLinearProgress: {
            root: {
                height: '0.3rem'
            }
        },
        MuiButton: {
            root: {
                fontWeight: 200,
                fontSize: '1.5rem',
                textTransform: 'unset',
                backgroundColor: colors.buttonActiveBackground,
                color: colors.buttonActiveFont,
                '&:hover': {
                    backgroundColor: colors.buttonActiveBackground
                }
            },
            disabled: {
                backgroundColor: colors.buttonInactiveBackground,
                color: colors.buttonInactiveFont
            }
        },
        MuiInputLabel: {
            shrink: {
                color: colors.secondary
            }
        }
    }
});

export const theme = createMuiTheme(styles);