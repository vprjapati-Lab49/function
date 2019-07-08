import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { RouteComponentProps } from 'react-router-dom';
import { ReduxProps } from 'appProps';
import { RootState } from '../reducers';
import styles from './Dashboard.styles';
import { State as DashboardState } from '../reducers/dashboard';

type Props = {
  dashboard: DashboardState;
} & RouteComponentProps<{}>
  & ReduxProps
  & WithStyles<typeof styles>;

export class Dashboard extends React.Component<Props> {

  render() {

    return (
      <div>
        Hello!
      </div>
    );
  }
}

const componentWithStyles = withStyles(styles)(Dashboard);

export default connect(createStructuredSelector({
  dashboard: (state: RootState) => state.dashboard
}))(componentWithStyles);
