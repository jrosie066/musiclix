import { withStyles } from '@material-ui/core/styles';
import { memo, FunctionComponent } from 'react';
import { compose } from 'redux';
import { styles } from './component/SearchResults.styles';
import { SearchResultsWrapper } from './wrapper/SearchResultsWrapper';

const enhance = compose<FunctionComponent<any>>(
  memo,
  withStyles(styles),
  SearchResultsWrapper
);
export { enhance };
