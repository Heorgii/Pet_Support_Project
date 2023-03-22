import React from 'react';
import {
  AccountButton,
  IconUserh,
} from 'components/Header/Elements/accountBTN/AccountBTN.styled';

export const AccountBTN = () => {
  return (
    <AccountButton to="/user">
      <IconUserh />
      Account
    </AccountButton>
  );
};
