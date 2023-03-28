import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import {
  Item,
  Title,
  TextWrapper,
  Text,
  Link,
  Ractangle,
  Dates,
} from './NewsListItem.styled';

export const NewsListItem = ({ newsItem }) => {
  const { _id, title, description, date, url } = newsItem;

  return (
    <Item key={_id} id={_id}>
      <TextWrapper>
        <Ractangle />
        <Title>
          <EllipsisText text={title} length={38} />
        </Title>
        <Text>
          <EllipsisText text={description} length={200} />
        </Text>
        {date !== null ? (
          <Dates>
            {new Date(date).toLocaleDateString()}
            <Link target="_blank" href={url}>
              Read More
            </Link>
          </Dates>
        ) : (
          <Dates>
            -------/----/----
            <Link target="_blank" href={url}>
              Read More
            </Link>
          </Dates>
        )}
      </TextWrapper>
    </Item>
  );
};

NewsListItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};
