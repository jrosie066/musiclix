import React from 'react';
import { Typography } from '@material-ui/core';
import { Tag } from '../../redux/types';
import TagComp from '../Tag';

export interface Props {
  classes?: any;
  tags: Tag[];
};

const TagContainer = (props: Props): JSX.Element => {
  const { classes, tags } = props;
  console.log(tags);
  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h6">Tags</Typography>
      <div className={classes.container}>
        {tags.map((tag) => (<TagComp url={tag.url} tag={tag.name} />))}
      </div>
    </div>
  );
};

export { TagContainer };
