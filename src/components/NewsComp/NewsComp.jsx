import { NewsList } from './NewsList/NewsList';
import { NewsSearch } from './NewsSearch/NewsSearch';

export const NewsComp = () => {
    return (
        <div>
            <h1>News page</h1>
            <NewsSearch />
            <NewsList />
        </div>
    );
}