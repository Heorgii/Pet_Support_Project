import { NoticesSearch } from "./NoticesSearch/NoticesSearch";
import { NoticesCategoriesNav } from "./NoticesCategoriesNav/NoticesCategoriesNav";
import { AddNoticeButton } from "./AddNoticeButton/AddNoticeButton";
import { NoticesCategoriesList } from "./NoticesCategoriesList/NoticesCategoriesList";

export const NoticesComp = () => {
    return (
        <div>
            <h1>NoticesComp/ Find pet</h1>
            <NoticesSearch />
            <NoticesCategoriesNav />
            <NoticesCategoriesList />
            <AddNoticeButton />
        </div>
    );
}