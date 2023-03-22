import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Item,
  Title,
  Info,
  TextWrapper,
  InfoWrapper,
  Text,
  Link,
  Ractangle,
  Date,
 
} from './NewsListItem.styled';


export const NewsListItem = ({ newsItem}) => {
  const [state] = useState({ newsItem});

  const {
    id,
    title,
    description,
    date,
    url,

    
  } = state.newsItem;
  return (
    <Item key={id} id={id}>
        <Ractangle></Ractangle>
      <Title>{title}</Title>
      <Info>
        <InfoWrapper>
          <TextWrapper>
            <Text>{description}</Text>
            <Date>{date}
            <Link target="_blank" href={url}>Read More</Link>
            </Date>
          </TextWrapper>
          
        </InfoWrapper>
      </Info>
    </Item>
    
  );
};

NewsListItem.propTypes = {
  newsItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      descriptiom: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      date:PropTypes.number.isRequired,
    }),
  ),
};