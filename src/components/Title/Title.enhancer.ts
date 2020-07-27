import { withStyles } from '@material-ui/core/styles';
import { memo, FunctionComponent } from 'react';
import { compose } from 'redux';
import { styles } from './Title.styles';
import { Props } from './Title';

const enhance = compose<FunctionComponent<Props>>(
  memo,
  withStyles(styles)
);
export { enhance };