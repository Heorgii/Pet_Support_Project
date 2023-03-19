import { useState } from 'react';
import { OurFriendsItem } from 'components/OurFriendsComp/OurFriendsItem/OurFriendsItem';
import { List } from './OurFriendsList.styled';//Notify
import sponsors from '../sponsors.json';

export const OurFriendsList = () => {
  const [friends] = useState(sponsors);//setFriends

  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  return (
    <List>
      {friends.map(friend => (
        <OurFriendsItem friend={friend} key={friend.id} />
      ))}
      {/* {isLoading && !isError && <Notify>Loading...</Notify>}
      {isError && <Notify>{isError}</Notify>}
      {friends.length === 0 && !isError && !isLoading && (
        <Notify>No friends yet</Notify>
      )} */}
    </List>
  );
};