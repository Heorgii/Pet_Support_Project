import { closeModalWindow } from "hooks/modalWindow";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanModal } from "redux/modal/operation";
import { modalComponent } from "redux/modal/selectors";
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
    InfoList, InfoListInput,
    InfoListLable,
    InfoListText, InfoListTextArea, PetsItemTitle,
    UserPetContainerItem
} from "./ModalAddsPet.styled";
import { MdClose } from "react-icons/md";
import { onInfo } from "components/helpers/Messages/NotifyMessages";
import { Formik, useFormik } from "formik";
import schemas from "components/Schemas/schemas";

export const ModalAddsPet = () => {
    const dispatch = useDispatch();
    const modal = useSelector(modalComponent);

    const closeModalForItemPet = e => {
        e.preventDefault();
        dispatch(cleanModal());
        closeModalWindow(e);
    };

    // const [, setData] = useState([]);//data
    const [isLoading] = useState(false);//setIsLoading
    const [error] = useState(null);//, setError
    const [isShown, setIsShown] = useState(true);

    console.log(isLoading, error);

    // const { BASE_URL } = window.global;
    // let itemForFetch = `${BASE_URL}/notices/byid/${modal.id}`;

    const showForm = () => {
        setIsShown(false);
    };

    const hideForm = () => {
        setIsShown(true);
    };

    function setImage(e) {
        const input = document.querySelector('.file');
        if (input.files[0] && input.files[0].size >= 2048000) {
            input.value = '';
            e.target.style = '';
            onInfo('File size must be less than 2Mb!');
            return;
        }
        if (
            input.files[0] &&
            !['jpeg', 'png', 'webp', 'gif', 'jpg'].includes(
                input.files[0].type.split('/')[1],
            )
        ) {
            input.value = '';
            e.target.style = '';
            onInfo('File type must be only image!');
            return;
        }
        const reader = new FileReader();
        e.target.style = '';

        reader.onload = function () {
            e.target.style = `background-image: url(${reader.result}); background-size: contain; background-position: center; background-repeat: no-repeat;`;
        };
        if (input.files[0]) {
            reader.readAsDataURL(input.files[0]);
        }
    }

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

    // const onSubmit = () => {
    //     postNotice();
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
        // onSubmit: (values, action) => {
        //     console.log('form values: ', values);
        //     onSubmit({ values, action });
        // },
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
    return (
        // Object.values(modal)[0] === 'itemPet' && (
        <BackDrop onClick={closeModalForItemPet}>
            <Formik>
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    setFieldValue,
                }) => (
                    <UserPetContainerItem onSubmit={formik.handleSubmit}>
                        <ContainerPositionForCloseModal>
                            <ContainerCloseModal onClick={closeModalForItemPet}>
                                <MdClose style={{ width: '15.5px', height: '15.5px' }} />
                            </ContainerCloseModal>
                        </ContainerPositionForCloseModal>

                        <ContainerInfo>
                            <div>
                                <PetsItemTitle>Add pet</PetsItemTitle>
                                <InfoList>
                                    {isShown && (
                                        <InfoListLable>
                                            <InfoListText>Name pet</InfoListText>
                                            <InfoListInput
                                                type="text"
                                                id="name"
                                                name="name"
                                                onBlur={formik.handleBlur}
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
                                                // onFocus={e => {
                                                //     e.target.setAttribute('type', 'date');
                                                // }}
                                                // onBlur={e => {
                                                //     e.target.setAttribute('type', 'text');
                                                // }}
                                                type="text"
                                                id="birthday"
                                                name="birthday"
                                                // value={formik.values.birthday}
                                                // onBlur={formik.handleBlur}
                                                placeholder="Type date of birth" />

                                            {/* {formik.errors.birthday || formik.touched.birthday ? (
                                                <ErrBox>{formik.errors.birthday}</ErrBox>
                                            ) : null} */}
                                        </InfoListLable>

                                    )}

                                    {isShown && (
                                        <InfoListLable>
                                            <InfoListText>Breed</InfoListText>
                                            <InfoListInput
                                                type='text'
                                                id="breed"
                                                name="breed"
                                                // value={formik.values.breed}
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
                            </div>

                            <div>
                                <InfoList>

                                    {!isShown && (
                                        <InfoListLable>
                                            <FieldItemFile
                                                className="file"
                                                type="file"
                                                id="imageUrl"
                                                name="imageUrl"
                                                accept=".jpeg,.jpg,.png,.gif"
                                                onBlur={formik.handleBlur}
                                                onChange={e => {
                                                    handleChange(e);
                                                    setImage(e);
                                                }}
                                            />
                                        </InfoListLable>
                                    )}

                                    {!isShown && (
                                        <InfoListLable>
                                            <InfoListText>Comments</InfoListText>
                                            <InfoListTextArea
                                                onBlur={formik.handleBlur}
                                                name="comments" placeholder="Type comments" />
                                        </InfoListLable>
                                    )}

                                </InfoList>

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
                            </div>
                        </ContainerInfo>
                    </UserPetContainerItem>
                )}
            </Formik >
        </BackDrop >
        // )
        // document.querySelector('#popup-root'),
        //     { isShown && (
        //         <>
        //             <div>
        //                 <Input
        //                     name="email"
        //                     type="email"
        //                     placeholder="Email"
        //                     validate={schemas.registerSchema.email}
        //                     onChange={formik.handleChange}
        //                     value={formik.values.email}
        //                     onBlur={formik.handleBlur}
        //                 />
        //    
        //                 {formik.errors.email || formik.touched.email ? (
        //                     <ErrBox>{formik.errors.email}</ErrBox>
        //                 ) : null}
        //             </div>
        //         </>
        //     )}
        // {
        //     isShown && (
        //         <>
        //             <div>
        //                 <Input
        //                     name="password"
        //                     type={showPass ? 'text' : 'password'}
        //                     placeholder="Password"
        //                     onChange={formik.handleChange}
        //                     value={formik.values.password}
        //                     onBlur={formik.handleBlur}
        //                 />

        //                 <ShowPassword onClick={showPassword}>
        //                     {!showPass ? <ImEyeBlocked /> : <ImEye />}
        //                 </ShowPassword>
        //                 {formik.errors.password && formik.touched.password ? (
        //                     <ErrBox>{formik.errors.password}</ErrBox>
        //                 ) : null}
        //             </div>
        //         </>
        //     )
        // }
        // {
        //     isShown && (
        //         <>
        //             <div>
        //                 <Input
        //                     name="confirmPassword"
        //                     type={showConfirmPass ? 'text' : 'password'}
        //                     placeholder="Confirm Password"
        //                     onChange={formik.handleChange}
        //                     value={formik.values.confirmPassword}
        //                     onBlur={formik.handleBlur}
        //                 />
        //                 <ShowPassword onClick={showConfirmPassword}>
        //                     {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
        //                 </ShowPassword>
        //                 {formik.errors.confirmPassword &&
        //                     formik.touched.confirmPassword ? (
        //                     <ErrBox>{formik.errors.confirmPassword}</ErrBox>
        //                 ) : null}
        //             </div>
        //         </>
        //     )
        // }
        // {
        //     isShown && (
        //         <Button type="button" onClick={showForm} disabled={isValid}>
        //             Next
        //         </Button>
        //     )
        // }
        // {
        //     !isShown && (
        //         <>
        //             <div>
        //                 <Input
        //                     name="name"
        //                     type="text"
        //                     placeholder="Name"
        //                     onChange={formik.handleChange}
        //                     value={formik.values.name}
        //                     onBlur={formik.handleBlur}
        //                 />

        //                 {formik.errors.name && formik.touched.name ? (
        //                     <ErrBox>{formik.errors.name}</ErrBox>
        //                 ) : null}
        //             </div>
        //         </>
        //     )
        // }
        // {
        //     !isShown && (
        //         <>
        //             <div>
        //                 <Input
        //                     name="location"
        //                     type="text"
        //                     placeholder="Location, region"
        //                     onChange={formik.handleChange}
        //                     value={formik.values.location}
        //                     onBlur={formik.handleBlur}
        //                 />

        //                 {formik.errors.location && formik.touched.location ? (
        //                     <ErrBox>{formik.errors.location}</ErrBox>
        //                 ) : null}
        //             </div>
        //         </>
        //     )
        // }
        // {
        //     !isShown && (
        //         <>
        //             <div>
        //                 <Input
        //                     // mask={phoneNumberMask}
        //                     id="phone"
        //                     type="phone"
        //                     placeholder="Mobile phone"
        //                     onChange={formik.handleChange}
        //                     value={formik.values.phone}
        //                     onBlur={formik.handleBlur}
        //                     name="phone"
        //                 />

        //                 {formik.errors.phone && formik.touched.phone ? (
        //                     <ErrBox>{formik.errors.phone}</ErrBox>
        //                 ) : null}
        //             </div>
        //         </>
        //     )
        // }
        // { !isShown && <Button type="submit">Register</Button> }
        // {
        //     !isShown && (
        //         <BackButton type="button" onClick={hideForm}>
        //             Back
        //         </BackButton>
        //     )
        // }
    );
}