import { withStyles } from '@material-ui/core/styles';
import { memo, FunctionComponent } from 'react';
import { compose } from 'redux';
import { styles } from './ProfileCard.styles';
import { Props } from './ProfileCard';

const enhance = compose<FunctionComponent<Props>>(
  memo,
  withStyles(styles)
);
export { enhance };
