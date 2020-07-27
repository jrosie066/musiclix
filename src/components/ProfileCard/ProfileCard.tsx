import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export interface Props {
  classes?: any;
  id: string;
  name: string;
};

const ProfileCard = (props: Props): JSX.Element => {
  const {
    classes, id, name,
  } = props;
  return (
    <Card id={id} variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h4">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export { ProfileCard };
