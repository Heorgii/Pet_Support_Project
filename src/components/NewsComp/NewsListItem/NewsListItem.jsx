import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import {
  Item,
  Title,
  TextWrapper,
  Text,
  Link,
  Ractangle,
  Date,
} from './NewsListItem.styled';

export const NewsListItem = ({ newsItem }) => {
  const { _id, title, description, date, url } = newsItem;
  return (
    <Item key={_id} id={_id}>
      <Ractangle />
      <Title>
        <EllipsisText text={title} length={38} />
      </Title>
      <TextWrapper>
        <Text>
          <EllipsisText text={description} length={200} />
        </Text>
        {date !== null ? (
          <Date>
            {date}
            <Link target="_blank" href={url}>
              Read More
            </Link>
          </Date>
        ) : (
          <Date>
            -------/----/----
            <Link target="_blank" href={url}>
              Read More
            </Link>
          </Date>
        )}
      </TextWrapper>
    </Item>
  );
};

NewsListItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};
