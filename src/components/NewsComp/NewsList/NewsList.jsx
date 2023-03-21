
import { useState } from 'react';
import { NewsListItem } from "./NewsListItem/NewsListItem";
import { List } from "./NewsList.styled";
import news from '../news.json';

export const NewsList = () => {
    const [data] = useState(news);
  
    return (
      <List>
        {data.map(data=> (
          <NewsListItem data={data} key={data.id} />
        ))}
      </List>
    );
  };