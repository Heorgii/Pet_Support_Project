import { NoticesSearch } from "./NoticesSearch/NoticesSearch";
import { NoticesCategoriesNav } from "./NoticesCategoriesNav/NoticesCategoriesNav";
import { AddNoticeButton } from "./AddNoticeButton/AddNoticeButton";
import { NoticesCategoriesList } from "./NoticesCategoriesList/NoticesCategoriesList";


export const NoticesComp = () => {
    return (
        <div>
            <NoticesSearch />
            <NoticesCategoriesNav />
            <NoticesCategoriesList />
            <AddNoticeButton />
        </div>
    );
}