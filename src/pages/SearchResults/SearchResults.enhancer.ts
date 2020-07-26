import { withStyles } from '@material-ui/core/styles';
import { memo, FunctionComponent } from 'react';
import { compose } from 'redux';
import { styles } from './component/SearchResults.styles';
import { SearchResultsWrapper } from './wrapper/SearchResultsWrapper';
import { Props } from './component/SearchResults';

const enhance = compose<FunctionComponent<Props>>(
  memo,
  withStyles(styles),
  SearchResultsWrapper
);
export { enhance };
