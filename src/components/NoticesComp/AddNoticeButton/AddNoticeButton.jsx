import { AddNoticeModal } from "./AddNoticeModal/AddNoticeModal";
import { Button, PlusIcon } from "./AddNoticeButton.styled";
import { useSelector } from 'react-redux';
import Notiflix from "notiflix";

export const AddNoticeButton = () => {
    const isLogin = useSelector(selectIsStateChange);

  const [showModalAddNotice, setShowModalAddNotice] = useState(false);

  const toggleModalAddNotice = () => {
isLogin ? setShowModalAddNotice(!showModalAddNotice) : Notiflix.Notify.warning('You must be loggined!');
  };
    return (
        <div>
            <Button onClick={toggleModalAddNotice}><PlusIcon/>Add pet</Button>
            {(showModalAddNotice) && <AddNoticeModal onClose={toggleModalAddNotice}/>}
        </div>
    );
}