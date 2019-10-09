import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  textField: {
    flexBasis: 200,
  },
}));


function TimePick(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.textField)} noValidate>
        <FormHelperText id="time-helper-text">訪問時間</FormHelperText>
        <Input
          id="adornment-time"
          type="time"
          defaultValue="07:30"
          onChange={e => props.handleVisitTimeChange(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          aria-describedby="time-helper-text"
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </FormControl>
    </div>
  );
}

export default TimePick;