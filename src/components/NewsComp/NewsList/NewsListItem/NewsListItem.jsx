
import {
  Item,
  Title,
  TextWrapper,
  Text,
  Link,
  Ractangle,
  Date,
} from './NewsListItem.styled';
export const NewsListItem = ({ data }) => {
  const { id, title, description, date, url } = data;
  return (
    <Item key={id} id={id}>
      <Ractangle></Ractangle>

      <Title>{title}</Title>

          <TextWrapper>
            <Text>{description}</Text>
            <Date>
              {date}
              <Link target="_blank" href={url}>
                Read More
              </Link>
            </Date>
          </TextWrapper>
       
      
    </Item>
  );
};
export const NewsList = ({ NewsList }) => {
  const sortedNewsList = NewsList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      {sortedNewsList.map((news) => (
        <NewsListItem key={news.id} data={news} />
      ))}
    </div>
  );
}
