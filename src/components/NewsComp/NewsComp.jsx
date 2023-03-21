import { NewsList } from './NewsList/NewsList';
import { NewsSearch } from './NewsSearch/NewsSearch';
import { Wrapper } from './NewsComp.styled';

export const NewsComp = () => {
    return (
       
        <Wrapper>
            <NewsSearch />
            <NewsList />
        </Wrapper>
     
    );
};