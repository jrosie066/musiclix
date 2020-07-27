import { memo, FunctionComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { HomeWrapper } from './wrapper/HomeWrapper';
import { Props } from './component/Home';
import { styles } from './component/Home.styles';

const enhance = compose<FunctionComponent<Props>>(
  memo,
  withStyles(styles),
  HomeWrapper
);
export { enhance };
