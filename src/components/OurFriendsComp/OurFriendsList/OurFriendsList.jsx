import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { OurFriendsItem } from 'components/OurFriendsComp/OurFriendsItem/OurFriendsItem';
import { List, Notify } from './OurFriendsList.styled';
import sponsors from '../sponsors.json';
import { ApiDocs } from 'components/ApiDocs/ApiDocs';

export const OurFriendsList = () => {
  const [friends, setFriends] = useState(sponsors);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <List>
      {friends.map(friend => (
        <OurFriendsItem friend={friend} key={friend.id} />
      ))}
      {isLoading && !isError && <Notify>Loading...</Notify>}
      {isError && <Notify>{isError}</Notify>}
      {friends.length === 0 && !isError && !isLoading && (
        <Notify>No friends yet... Maybe you want to be our friend?</Notify>
      )}
    </List>
  );
};
