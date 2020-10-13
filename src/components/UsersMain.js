import React from 'react';
import Button from '@material-ui/core/Button';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = (props) => (
  <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
           <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);


