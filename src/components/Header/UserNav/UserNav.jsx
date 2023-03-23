import React from 'react';
import { AccountButton, IconUser } from './UserNav.styled';

export const UserNav = () => {
  return (
    <AccountButton to="/user">
      <IconUser />
      Account
    </AccountButton>
  );
};
