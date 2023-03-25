import { NewsListItem } from './NewsListItem/NewsListItem';
import { List } from './NewsList.styled';
import newsItem from '../news.json';

export const NewsList = () => {
  return (
    <List>
      {newsItem.map(newsItem => (
        <NewsListItem newsItem={newsItem} key={newsItem.id} />
      ))}
    </List>
  );
};
