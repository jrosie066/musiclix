import React from 'react';
import {
  Card, CardContent, Typography,
} from '@material-ui/core';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';

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
      <CardContent className={classes.container}>
        <SettingsVoiceIcon
          color="secondary"
          classes={{
            root: classes.icon,
          }}
        />
        <Typography variant="h4" className={classes.artistName}>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export { ProfileCard };
