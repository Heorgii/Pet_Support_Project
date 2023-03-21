import { AddNoticeModal } from "./AddNoticeModal/AddNoticeModal";
import { ButtonStyled, PlusIcon } from "./AddNoticeButton.styled";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { selectIsStateChange } from "redux/auth/selectors";
import Notiflix from "notiflix";

export const AddNoticeButton = () => {
    // const isLogin = useSelector(selectIsStateChange);

const isLogin = true;

  const [showModalAddNotice, setShowModalAddNotice] = useState(false);

  const toggleModalAddNotice = () => {
isLogin ? setShowModalAddNotice(!showModalAddNotice) : Notiflix.Notify.warning('You must be loggined!');
  };
    return (
        <div style={{marginLeft: 'auto', position: 'relative'}}>
            <ButtonStyled onClick={toggleModalAddNotice}><div><PlusIcon/></div>Add pet</ButtonStyled>
            {(showModalAddNotice) && <AddNoticeModal onClose={toggleModalAddNotice}/>}
        </div>
    );
}