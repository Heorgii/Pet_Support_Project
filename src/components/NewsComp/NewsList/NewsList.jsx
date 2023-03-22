
import { useState } from 'react';
import { NewsListItem } from "./NewsListItem/NewsListItem";
import { List } from "./NewsList.styled";
import news from '../news.json';

export const NewsList = () => {
    const [newsItem] = useState(news);
  
    return (
      <List>
        {newsItem.map(newsItem=> (
          <NewsListItem newsItem={newsItem} key={newsItem.id} />
        ))}
      </List>
    );
  };