import { closeModalWindow } from "hooks/modalWindow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanModal } from "redux/modal/operation";
import { modalComponent } from "redux/modal/selectors";
import ReactDOM from 'react-dom';
import {
    BackDrop,
    ButtonBox,
    ButtonFirst,
    ButtonSecond,
    ButtonText,
    ButtonText2,
    ContainerCloseModal,
    ContainerInfo,
    ContainerPositionForCloseModal,
    InfoList, InfoListInput,
    InfoListText, PetsItemTitle, UserPetContainerItem
} from "./ModalAddsPet.styled";
import { MdClose } from "react-icons/md";

export const ModalAddsPet = () => {
    const dispatch = useDispatch();
    const modal = useSelector(modalComponent);

    const closeModalForItemPet = e => {
        e.preventDefault();
        dispatch(cleanModal());
        closeModalWindow(e);
    };

    const [, setData] = useState([]);//data
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(isLoading, error);

    const { BASE_URL } = window.global;
    let itemForFetch = `${BASE_URL}/notices/byid/${modal.id}`;

    useEffect(() => {
        setIsLoading(true);
        async function fetchNoticesList() {
            await fetch(itemForFetch)
                .then(res => {
                    setIsLoading(false);
                    if (res.ok) {
                        return res.json();
                    }
                    return Promise.reject(new Error(`Can't find anything`));
                })
                .then(value => setData(value))
                .catch(error => {
                    setError(error);
                });
        }
        if (modal.id !== null) {
            fetchNoticesList();
        }
    }, [itemForFetch, modal.id]);

    //  ReactDOM.createPortal
    return (
        // Object.values(modal)[0] === 'itemPet' && (
        <BackDrop onClick={closeModalForItemPet}>
            <UserPetContainerItem>
                <ContainerPositionForCloseModal>
                    <ContainerCloseModal onClick={closeModalForItemPet}>
                        <MdClose style={{ width: '15.5px', height: '15.5px' }} />
                    </ContainerCloseModal>
                </ContainerPositionForCloseModal>

                <ContainerInfo>
                    {/* <ContainerStatus>{data.status}</ContainerStatus> */}
                    <div>
                        <PetsItemTitle>Add pet</PetsItemTitle>
                        <InfoList>

                            <InfoListText>Name pet</InfoListText>
                            <InfoListInput placeholder="Type name pet"></InfoListInput>

                            <InfoListText>Date of birth</InfoListText>
                            <InfoListInput placeholder="Type date of birth"></InfoListInput>

                            <InfoListText>Breed</InfoListText>
                            <InfoListInput placeholder="Type breed"></InfoListInput>
                        </InfoList>
                        <ButtonBox>
                            <ButtonFirst>
                                <ButtonText>Next</ButtonText>
                            </ButtonFirst>

                            <ButtonSecond>
                                <ButtonText2>Cancel</ButtonText2>
                            </ButtonSecond>
                        </ButtonBox>
                    </div>
                </ContainerInfo>
            </UserPetContainerItem>
        </BackDrop>
        // ),
        // document.querySelector('#popup-root'),
    );
}