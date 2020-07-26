import { memo, FunctionComponent } from 'react';
import { compose } from 'redux';
import { Props } from './SearchField';

const enhance = compose<FunctionComponent<Props>>(
  memo
);
export { enhance };
