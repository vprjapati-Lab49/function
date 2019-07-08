import React from 'react';

import { routes } from '../../constants/index';

interface Props {
    className: string;
}

export const Logo: React.SFC<Props> = props => (
    <img  className={props.className} src={`${routes.home}assets/svg/logo.png`}/>
);