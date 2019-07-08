import { colors, containers, elements, linkHover, mainLogo } from './shared/common-styles';
import { createStyles } from '@material-ui/core';

export default createStyles({
    container: {
        backgroundColor: colors.background,
        display: 'flex',
        height: '100%'
    },
    main: {
        ...containers.flexCol,
        ...containers.responsive,
        margin: '3rem 6rem'
    },
    header: {
        borderBottom: `1px solid ${colors.primary}`,
        '& h3': {
            extend: elements.h3,
            margin: '1.4rem 0 0.4rem',
            color: colors.primary,
            letterSpacing: '0.05rem'
        }
    },
    tabsFlexContainer: {
        display: 'flex',
        '@media (max-width: 45em)': {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    tabsRoot: {
        marginBottom: '2.5rem',
        '@media (max-width: 45em)': {
            overflow: 'visible',
            minHeight: 'auto'
        }
    },
    tabRoot: {
        textTransform: 'none',
        fontWeight: 300,
        fontSize: '1.6rem',
        color: colors.content_light,
        margin: '1rem 1rem 0 0'
    },
    tabLabel: {
        fontSize: '1.6rem',
        color: colors.secondary,
        fontWeight: 450
    },
    tabLabelContainer: {
        padding: 0
    },
    tabSelected: {
        color: colors.otpValidation,
        fontWeight: 450
    },
    h3: {
        extend: elements.h3,
        flex: 1,
        textTransform: 'uppercase'
    },
    userMenuHeader: {
        justifyContent: 'space-between',
        display: 'flex',
        color: colors.primary,
        '& button': {
            color: colors.primary
        }
    },
    dropDownMenu: {
        marginTop: '5.5rem',
        '& i.material-icons': {
            marginRight: '1rem'
        }
    },
    drawer: {
        width: '250px',
        backgroundColor: colors.content_lighter
    },
    drawerMenu: {
        flex: 0,
        marginRight: '1.2rem'
    },
    drawerHeader: {
        backgroundColor: colors.primary
    },
    drawerContent: {
        backgroundColor: colors.background
    },
    drawerItem: {
        extend: containers.flex,
        textDecoration: 'none',
        textTransform: 'capitalize',
        '&:hover': {
            '& h3, .material-icons': {
                extend: 'iconRoot'
            },
            backgroundColor: colors.secondary
        }
    },
    drawerLink: {
        extend: containers.flex,
        textDecoration: 'none'
    },
    iconRoot: {
        color: colors.contentBackground
    },
    listRoot: {
        padding: 0
    },
    accountButton: {
        extend: linkHover,
        backgroundColor: 'transparent'
    },
    hover: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    viewDocButton: {
        composes: ['$accountButton', '$hover'] as {}
    },
    accountText: {
        fontSize: '1.5rem',
        paddingLeft: '0.5rem',
        textTransform: 'capitalize'
    },
    snackbarRootError: {
        minWidth: '100vw',
        backgroundColor: colors.error,
        '& div': {
            margin: 'auto'
        }
    },
    snackbar: {
        zIndex: 1
    },
    badgeNoDisplay: {
        display: 'none'
    },
    badgeDisplay: {
        width: '2rem',
        height: '2rem',
        right: '-0.8rem',
        background: colors.error,
        color: colors.contentBackground
    },
    mainLogo: mainLogo,
    drawerLogo: {
        height: '2rem',
        '& svg': {
            width: '6.4rem',
            height: 'inherit'
        },
        '& .logo': {
            fill: colors.contentBackground
        }
    },
    disabled: {
        opacity: 1
    },
    dataContentContainer: {
        extend: containers.flexCol,
        marginTop: '2.5rem'
    }
});