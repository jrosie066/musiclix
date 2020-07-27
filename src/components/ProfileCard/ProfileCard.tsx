import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export interface Props {
  classes?: any;
  image: string;
  name: string;
};

const ProfileCard = (props: Props): JSX.Element => {
  const { classes, name } = props;
  console.log(classes);
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export { ProfileCard };
