import { closeModalWindow } from "hooks/modalWindow";
import { useState } from "react";
import { useDispatch } from "react-redux";//, useSelector
import { cleanModal } from "redux/modal/operation";
// import { modalComponent } from "redux/modal/selectors";
// import ReactDOM from 'react-dom';
import {
    BackDrop,
    ButtonBackText,
    ButtonBox,
    ButtonFirst,
    ButtonSecond,
    ButtonText,
    ButtonText2,
    ContainerCloseModal,
    ContainerInfo,
    ContainerPositionForCloseModal,
    ErrBox,
    FieldItemFile,
    ImgTitle,
    InfoList, InfoList2, InfoListInput,
    InfoListLable,
    InfoListText, InfoListTextArea, PetsItemTitle,
    UserPetContainerItem
} from "./ModalAddsPet.styled";
import { MdClose } from "react-icons/md";
import { Formik, useFormik } from "formik";
import schemas from "components/Schemas/schemas";
import { setImage } from "utils/setimage";

export const ModalAddsPet = () => {
    const dispatch = useDispatch();
    // const modal = useSelector(modalComponent);

    const closeModalForItemPet = e => {
        e.preventDefault();
        dispatch(cleanModal());
        closeModalWindow(e);
    };

    // const [, setData] = useState([]);//data
    // const [isLoading] = useState(false);//setIsLoading
    // const [error] = useState(null);//, setError
    const [isShown, setIsShown] = useState(true);
    // const [file, setFile] = useState('');


    // const { BASE_URL } = window.global;
    // let itemForFetch = `${BASE_URL}/notices/byid/${modal.id}`;

    const showForm = () => {
        setIsShown(false);
    };

    const hideForm = () => {
        setIsShown(true);
    };

    // async function postNotice(values) {
    //     setIsLoading(true);
    //     try {
    //         console.log(values);
    //         const { code } = await fetchNotice('/pets', values);
    //         if (code && code !== 201) {
    //             return onFetchError('Whoops, something went wrong');
    //         }
    //     } catch (error) {
    //         setError(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    // const onSubmit = (values, action) => {
    //     console.log(values);
    // }

    const formik = useFormik({
        initialValues: {
            name: '',
            birthday: '',
            breed: '',
            imageUrl: '',
            comments: '',
        },
        validationSchema: schemas.addPetsUser,
        onSubmit: (values, action) => {
            console.log('form values: ', values);
            // onSubmit({ values, action });
        },
    });

    const isValid =
        (formik.errors.name && formik.touched.name) ||
            (formik.errors.birthday && formik.touched.birthday) ||
            (formik.errors.breed && formik.touched.breed) ||
            (formik.errors.imageUrl && formik.touched.imageUrl) ||
            (formik.errors.comments && formik.touched.comments)
            ? true
            : false;

            //  ReactDOM.createPortal
    return(
        // Object.values(modal)[0] === 'itemPet' && (
            <BackDrop onClick={closeModalForItemPet}>
                <Formik>
                    {({
                        handleChange,
                    }) => (
                        <UserPetContainerItem onSubmit={formik.handleSubmit}>
                            <ContainerPositionForCloseModal>
                                <ContainerCloseModal onClick={closeModalForItemPet}>
                                    <MdClose style={{ width: '15.5px', height: '15.5px' }} />
                                </ContainerCloseModal>
                            </ContainerPositionForCloseModal>

                            <ContainerInfo>
                                <PetsItemTitle>Add pet</PetsItemTitle>

                                {isShown && (
                                    <>
                                        <InfoList>
                                            {isShown && (
                                                <InfoListLable>
                                                    <InfoListText>Name pet</InfoListText>
                                                    <InfoListInput
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.name}
                                                        // onBlur={formik.handleBlur}
                                                        placeholder="Type name pet" />
                                                    {formik.errors.name || formik.touched.name ? (
                                                        <ErrBox>{formik.errors.name}</ErrBox>
                                                    ) : null}
                                                </InfoListLable>
                                            )}

                                            {isShown && (
                                                <InfoListLable>
                                                    <InfoListText>Date of birth</InfoListText>
                                                    <InfoListInput
                                                        onFocus={e => {
                                                            e.target.setAttribute('type', 'date');
                                                        }}
                                                        onBlur={e => {
                                                            e.target.setAttribute('type', 'text');
                                                        }}
                                                        type="text"
                                                        id="birthday"
                                                        name="birthday"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.birthday}
                                                        placeholder="Type date of birth" />

                                                    {formik.errors.birthday || formik.touched.birthday ? (
                                                        <ErrBox>{formik.errors.birthday}</ErrBox>
                                                    ) : null}
                                                </InfoListLable>

                                            )}

                                            {isShown && (
                                                <InfoListLable>
                                                    <InfoListText>Breed</InfoListText>
                                                    <InfoListInput
                                                        type='text'
                                                        id="breed"
                                                        name="breed"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.breed}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Type breed" />

                                                    {formik.errors.breed || formik.touched.breed ? (
                                                        <ErrBox>{formik.errors.breed}</ErrBox>
                                                    ) : null}
                                                </InfoListLable>
                                            )}
                                        </InfoList>

                                        <ButtonBox>
                                            {isShown && (
                                                <ButtonFirst type="button" onClick={showForm} disabled={isValid}>
                                                    <ButtonText>Next</ButtonText>
                                                </ButtonFirst>
                                            )}

                                            {isShown && (
                                                <ButtonSecond type="button">
                                                    <ButtonText2>Cancel</ButtonText2>
                                                </ButtonSecond>
                                            )}
                                        </ButtonBox>
                                    </>
                                )}

                                <InfoList2>
                                    {!isShown && (
                                        // <InfoListLable>
                                        <>
                                            <ImgTitle>Add petAdd photo and some comments</ImgTitle>

                                            <FieldItemFile
                                                type="file"
                                                id="imageUrl"
                                                name="imageUrl"
                                                accept=".jpeg,.jpg,.png,.gif"
                                                value={formik.values.imageUrl}
                                                // onBlur={formik.handleBlur}
                                                onChange={e => {
                                                    handleChange(e);
                                                    setImage(e);
                                                }}
                                            />

                                            {/* {formik.errors.imageUrl || formik.touched.imageUrl ? (
                                                <ErrBox>{formik.errors.imageUrl}</ErrBox>
                                            ) : null} */}
                                        </>
                                        // {/* </InfoListLable> */}
                                    )}

                                    {!isShown && (
                                        <InfoListLable>
                                            <InfoListText>Comments</InfoListText>
                                            <InfoListTextArea
                                                onChange={formik.handleChange}
                                                value={formik.values.comments}
                                                onBlur={formik.handleBlur}
                                                name="comments" placeholder="Type comments" />
                                            {formik.errors.comments || formik.touched.comments ? (
                                                <ErrBox>{formik.errors.comments}</ErrBox>
                                            ) : null}
                                        </InfoListLable>
                                    )}
                                </InfoList2>

                                <ButtonBox>
                                    {!isShown &&
                                        <ButtonFirst type="submit">
                                            <ButtonText>Done</ButtonText>
                                        </ButtonFirst>
                                    }
                                    {!isShown && (
                                        <ButtonSecond type="button" onClick={hideForm}>
                                            <ButtonBackText>Back</ButtonBackText>
                                        </ButtonSecond>
                                    )}
                                </ButtonBox>
                            </ContainerInfo>
                        </UserPetContainerItem>
                    )}
                </Formik >
            </BackDrop >
        // ),
        // document.querySelector('#popup-root'),
    );
}