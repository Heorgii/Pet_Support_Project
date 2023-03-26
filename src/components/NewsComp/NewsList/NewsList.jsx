import { NewsListItem } from './NewsListItem/NewsListItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  return (
    <List>
      {news.map(newsItem => (
        <NewsListItem newsItem={newsItem} key={newsItem._id} />
      ))}
    </List>
  );
};
