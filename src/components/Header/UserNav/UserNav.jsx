import React from 'react';
import { MobileAccountButton, AccountButton, IconUser } from './UserNav.styled';

export const MobileUserNav = () => {
  return (
    <MobileAccountButton to="/user">
      <IconUser />
      Account
    </MobileAccountButton>
  );
};
export const UserNav = () => {
  return (
    <AccountButton to="/user">
      <IconUser />
      Account
    </AccountButton>
  );
};
