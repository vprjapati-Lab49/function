import { createStyles } from '../../../node_modules/@material-ui/core';

import color from '../../constants/colors';
import space from '../../constants/spaces';

export const colors = {
    background: color.lightGray.light,
    primary: color.purple.primary,
    secondary: color.blue.primary,
    contentBackground: color.white,
    containerBorder: color.gray.light,
    content: color.slate.primary,
    content_light: color.gray.primary,
    content_lighter: color.lightGray.primary,
    highlight: color.green.primary,
    highlight_lighter: color.green.lighter,
    botBubbleBackground: color.lightGray.lighter,
    botBubbleContent: color.black,
    error: color.red.primary,
    success: color.green.dark,
    buttonInactiveBackground: color.lightGray.lighter,
    buttonInactiveFont: color.lightGray.primary,
    buttonActiveBackground: color.blue.primary,
    buttonActiveFont: color.white,
    buttonLinkBackground: color.white,
    buttonLinkFont: color.lightGray.primary,
    buttonLinkActiveBackground: color.lightGray.lighter,
    buttonLinkActiveFont: color.lightGray.primary,
    otpValidation: color.green.dark,
    whiteBackground: color.white,
    switchOffBackground: color.gray.lighter,
    barBackground: color.purple.light,
    sideBarContent: color.gray.dark,
    sectionBackground: color.lightGray.primary,
    sectionLabelColor: color.white,
    cellTextColor: color.gray.dark,
    sideBarBackground: color.blue.primary,
    loginPageBackground: color.slate.primary
};

export const visibility = createStyles({
    visible: {
        visibility: 'visible'
    },
    hidden: {
        visibility: 'hidden'
    }
});

export const containers = createStyles({
    flex: {
        display: 'flex',
        flex: 1
    },
    flexCol: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    flexAlign: {
        display: 'flex',
        flex: 1,
        alignItems: 'center'
    },
    responsive: {
        '@media (max-width: 55em) , (max-height: 60em)': {
            margin: '1rem 2rem',
            overflow: 'auto'
        }
    }
});

export const elements = createStyles({
    h1: {
        fontSize: '2rem',
        fontWeight: 600,
        color: colors.secondary
    },
    h2: {
        fontSize: '3rem',
        fontWeight: 200,
        color: colors.secondary,
        textAlign: 'center',
        marginTop: space.zero,
        marginBottom: space.basex3
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: colors.secondary
    },
    h4: {
        fontSize: '2rem',
        fontWeight: 200,
        color: colors.secondary,
    },
    p: {
        fontSize: '1.3rem'
    }
});

export const editor = createStyles({
    pageContainer: {
        padding: space.basex5,
        height: 'fit-content',
        width: '60rem',
        background: colors.contentBackground,
        border: `1px solid ${colors.containerBorder}`
    },
    pageContainerError: {
        padding: space.basex5,
        height: 'fit-content',
        width: '60rem',
        background: colors.contentBackground,
        border: `1px solid ${colors.containerBorder}`,
        borderTop: `3px solid ${colors.error}`,
        paddingTop: '0.6rem'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    formHeader: {
        width: '100%',
        fontSize: '1.5rem',
        fontWeight: 200,
        color: colors.content_light,
        margin: space.zero
    },
    formFooter: {
        marginTop: space.basex3,
        '& > button, a': {
            marginRight: space.basex2
        },
        '& > a': {
            fontSize: '1.5rem',
            fontWeight: 200,
            fontStyle: 'italic',
            color: colors.content_light,
            verticalAlign: 'middle'
        }
    },
    formField1: {
        marginTop: space.basex3,
        width: '100%'
    },
    formField1WithIcon: {
        marginTop: space.basex3,
        width: '100%',
        '& > div': {
            width: `calc(100% - ${space.basex4})`,
        },
        '& > i': {
            verticalAlign: 'bottom',
            marginRight: space.base
        }
    },
    formField2: {
        marginTop: space.basex3,
        width: `calc(1/2*100% - (1-1/2)*${space.basex2})`
    },
    passwordAsterisk: {
        opacity: 0.5
    },
    progressBar: {
        marginTop: space.basex5,
        marginLeft: space.negative.basex5,
        marginRight: space.negative.basex5,
        marginBottom: space.negative.basex5
    },
    formSubTitle: {
        fontSize: '2rem',
        fontWeight: 200,
        color: colors.secondary,
    },
    paper: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-60%)',
        backgroundColor: colors.contentBackground,
        position: 'absolute'
    },
    textField: {
        marginTop: '1rem',
        '& > div ': {
            backgroundColor: colors.background
        },
        '& textarea': {
            padding: '0.5rem 0.2rem 0 1rem',
            fontFamily: 'Titillium Web, Light'
        }
    },
    icon: {
        extend: containers.flex,
        justifyContent: 'flex-end',
        color: colors.content_light,
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

export const confirmation = createStyles({
    container: {
        height: '100%',
        extend: containers.flexCol,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 200
    },
    header: {
        fontSize: '1.6rem',
        color: colors.secondary,
        textAlign: 'center'
    },
    message: {
        extend: elements.p,
        color: colors.content
    },
    link: {
        color: colors.content,
        textDecoration: 'none'
    }
});

export const mainLogo = {
    width: '10rem',
    height: '3.2rem'
};

export const error = createStyles({
    msg: {
        color: colors.error,
        textAlign: 'center',
        fontSize: '1.3rem',

        '& .material-icons': {
            verticalAlign: 'middle',
            marginRight: '0.5rem',
            marginBottom: '0.3rem'
        }
    }
});

export const indicatorMsg = {
    extend: elements.p,
    color: colors.secondary,
    fontStyle: 'italic',
    fontWeight: 300,
    opacity: .5,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export const linkHover = {
    '&:hover': {
        cursor: 'pointer',
        color: colors.secondary,
        opacity: 1,
        backgroundColor: 'transparent'
    }
};

export const tooltip = {
    content: {
        extend: containers.flexAlign
    },
    tooltip: {
        extend: containers.flexAlign,
        marginLeft: '1rem',
        color: colors.background
    }
};

export const zIndex = {
    base: 100
};