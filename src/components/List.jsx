import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TimePickers from './TimePickers';
import IntegrationReactSelect from './StationSelecters';
import InputAdornments from './BudgetGetter';

let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer'
};

const List = (props) => (
    <ul className="siimple-list">
        <TimePickers handleAdd={this.handleAdd} />
        <InputAdornments handleAdd={this.handleAdd} />
        <IntegrationReactSelect handleAdd={this.handleAdd} />
    </ul>
);

export default List;