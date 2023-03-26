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
export const NewsListItem = ({ newsItem }) => {
  const { _id, title, description, date, url } = newsItem;
  return (
    <Item key={_id} id={_id}>
      <Ractangle></Ractangle>

      <Title>{title}</Title>

      <Info>
        <InfoWrapper>
          <TextWrapper>
            <Text>{description}</Text>
            <Date>
              {date}
              <Link target="_blank" href={url}>
                Read More
              </Link>
            </Date>
          </TextWrapper>
        </InfoWrapper>
      </Info>
    </Item>
  );
};

NewsListItem.propTypes = {
  newsItem: PropTypes.shape({
    _id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string,
  }),
};
