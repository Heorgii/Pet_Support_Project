import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalAddNoticeStyled,
  FormStyled,
  FieldsRadio,
  LabelRadio,
  FieldRadio,
  Title,
  Paragraph,
  FieldList,
  LabelItem,
  FieldItem,
  ButtonClose,
  IconClose,
  ButtonFirst,
  ButtonSecond,
  FieldItemFile,
  IconFemale,
  IconMale,
  FieldRadioSex,
  LabelRadioSex,
  FieldsRadioSex,
  LabelItemTextArea,
  FieldItemTextArea,
  Error,
} from './AddNoticeModal.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { noticeSlice } from 'redux/notice/slice';
import { noticeState } from 'redux/notice/selectors';
import { addOwnNotice } from 'redux/notices/operations';
import * as Yup from 'yup';
import { type } from '@testing-library/user-event/dist/type';

const modalAddNoticeRoot = document.querySelector('#modalAddNotice-root');

export const AddNoticeModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    category,
    title,
    name,
    birthday,
    breed,
    sex,
    location,
    price,
    imageUrl,
    comments,
  } = useSelector(noticeState);

  const [formQueue, setFormQueue] = useState('true');

  useEffect(() => {
    if (window) {
      window.addEventListener('keydown', onClickEscape);
    }
    return () => {
      window.removeEventListener('keydown', onClickEscape);
    };
  });

  const onClickEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  function toggleForm() {
    if (category === 'sell') {
      FormSchemaSecond.shape({
        price: Yup.number()
          .moreThan('0')
          .positive()
          .integer()
          .required('Price is Required!'),
      });
    }

    setFormQueue(!formQueue);
  }

  function setImage(e) {
    const input = document.querySelector('.file');
    const preview = document.querySelector('.preview');
    const reader = new FileReader();
    e.target.style = '';

    reader.onload = function () {
      e.target.style = `background-image: url(${reader.result}); background-size: contain; background-position: center; background-repeat: no-repeat;`;

      preview.src = reader.result;
    };
    if (input.files[0]) {
      reader.readAsDataURL(input.files[0]);
      preview.style = 'opacity:1;';
    } else {
      preview.src = '';
    }
  }

  function submitForm(values) {
    console.log(values);
    dispatch(noticeSlice.actions.addNotice(values));
    dispatch(addOwnNotice(values));
    onClean();
    onClose();
    navigate('/notices/own');
  }

  function onClean() {
    dispatch(noticeSlice.actions.cleanNotice());
  }

  const FormSchemaFirst = Yup.object().shape({
    category: Yup.string().required('Categori is Required!'),
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(48, 'Too Long!')
      .required('Title is Required!'),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Name is Required!'),
    birthday: Yup.date().required('BirthDay is Required!'),
    breed: Yup.string()
      .min(2, 'Too Short!')
      .max(24, 'Too Long!')
      .required('Breed is Required!'),
  });
  const FormSchemaSecond = Yup.object().shape({
    sex: Yup.string().required('Sex is Required!'),
    location: Yup.string()
      .matches(/^[A-Za-z-]+, +[A-Za-z-]/i, 'Example: Brovary, Kyiv')
      .required('Location is Required!'),
    imageUrl: Yup.string().required('Image is Required!'),
    comments: Yup.string()
      .min(8, 'Too Short!')
      .max(120, 'Too Long!')
      .required('Comments are Required!'),
  });

  return createPortal(
    <Overlay onClick={onClickBackdrop}>
      <ModalAddNoticeStyled>
        <ButtonClose onClick={onClose}>
          <IconClose />
        </ButtonClose>
        <Title>Add pet</Title>
        <div>
          <Formik
            initialValues={{
              category: category,
              title: title,
              name: name,
              birthday: birthday,
              breed: breed,
              sex: sex,
              location: location,
              price: price,
              imageUrl: imageUrl,
              comments: comments,
            }}
            onSubmit={values => {
              if (!formQueue) {
                submitForm(values);
              } else {
                toggleForm();
              }
            }}
            validationSchema={formQueue ? FormSchemaFirst : FormSchemaSecond}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <FormStyled onSubmit={handleSubmit} onChange={handleChange}>
                <div>
                  {formQueue ? (
                    <div>
                      <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                        dolor sit amet, consectetur
                      </Paragraph>
                      <FieldsRadio role="group" id="category">
                        {errors.category && touched.category ? (
                          <Error style={{ top: '-20px'}}>{errors.category}</Error>
                        ) : null}
                        <FieldRadio
                          type="radio"
                          id="radioOne"
                          name="category"
                          value="lost/found"
                          checked={values.category === 'lost/found'}
                        />
                        <LabelRadio htmlFor="radioOne" key={nanoid()}>
                          lost/found
                        </LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioTwo"
                          name="category"
                          value="in good hands"
                          checked={values.category === 'in good hands'}
                        />
                        <LabelRadio htmlFor="radioTwo" key={nanoid()}>
                          in good hands
                        </LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioThree"
                          name="category"
                          value="sell"
                          checked={values.category === 'sell'}
                        />
                        <LabelRadio htmlFor="radioThree" key={nanoid()}>
                          sell
                        </LabelRadio>
                      </FieldsRadio>
                      <FieldList>
                        <LabelItem htmlFor="title" key={nanoid()}>
                          <span>Title of ad</span>
                          {errors.title && touched.title ? (
                            <Error>{errors.title}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Type name"
                          value={values.title}
                        />
                        <LabelItem htmlFor="name" key={nanoid()}>
                          <span>Name pet</span>
                          {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Type name pet"
                          value={values.name}
                        />
                        <LabelItem htmlFor="birthday" key={nanoid()}>
                          <span>Date of birth</span>
                          {errors.birthday && touched.birthday ? (
                            <Error>{errors.birthday}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          onFocus={e => {
                            e.target.setAttribute('type', 'date');
                          }}
                          onBlur={e => {
                            e.target.setAttribute('type', 'text');
                          }}
                          type="text"
                          id="birthday"
                          name="birthday"
                          placeholder="Type day of birth"
                          value={values.birthday}
                        />
                        <LabelItem htmlFor="breed" key={nanoid()}>
                          <span>Breed</span>
                          {errors.breed && touched.breed ? (
                            <Error>{errors.breed}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="breed"
                          name="breed"
                          placeholder="Type breed"
                          value={values.breed}
                        />
                      </FieldList>
                    </div>
                  ) : (
                    <div>
                      <FieldsRadioSex role="group" id="sex">
                        <p>
                          The sex
                          {errors.sex && touched.sex ? (
                            <Error>{errors.sex}</Error>
                          ) : null}
                        </p>
                        <FieldRadioSex
                          type="radio"
                          id="radioOneSex"
                          name="sex"
                          value="male"
                          checked={values.sex === 'male'}
                        />
                        <LabelRadioSex htmlFor="radioOneSex" key={nanoid()}>
                          <IconMale />
                          <span>Male</span>
                        </LabelRadioSex>

                        <FieldRadioSex
                          type="radio"
                          id="radioTwoSex"
                          name="sex"
                          value="female"
                          checked={values.sex === 'female'}
                        />
                        <LabelRadioSex htmlFor="radioTwoSex" key={nanoid()}>
                          <IconFemale />
                          <span>Female</span>
                        </LabelRadioSex>
                      </FieldsRadioSex>
                      <FieldList>
                        <LabelItem htmlFor="location" key={nanoid()}>
                          <span>Location</span>
                          {errors.location && touched.location ? (
                            <Error>{errors.location}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="location"
                          name="location"
                          placeholder="Type location"
                          value={values.location}
                        />
                        {values.category === 'sell' ? (
                          <div>
                            <LabelItem htmlFor="price" key={nanoid()}>
                              <span>Price</span>
                              {errors.price && touched.price ? (
                                <Error>{errors.price}</Error>
                              ) : null}
                            </LabelItem>

                            <FieldItem
                              type="number"
                              id="price"
                              name="price"
                              placeholder="Type price"
                              value={values.price}
                            />
                          </div>
                        ) : (
                          ''
                        )}
                        <LabelItem htmlFor="imageUrl" key={nanoid()}>
                          <span>Load the pet’s image</span>
                          <img
                            className="preview"
                            src=""
                            alt="preview..."
                            style={{
                              opacity: '0',
                              transition: 'all 500ms ease',
                            }}
                          />
                          {errors.imageUrl && touched.imageUrl ? (
                            <Error>{errors.imageUrl}</Error>
                          ) : null}
                        </LabelItem>

                        <FieldItemFile
                          className="file"
                          type="file"
                          id="imageUrl"
                          name="imageUrl"
                          onChange={e => {
                            handleChange(e, setImage(e));
                          }}
                        />
                        <LabelItemTextArea htmlFor="comments" key={nanoid()}>
                          <span>Comments</span>
                          {errors.comments && touched.comments ? (
                            <Error>{errors.comments}</Error>
                          ) : null}
                        </LabelItemTextArea>

                        <FieldItemTextArea
                          maxLength="120"
                          minLength="8"
                          as="textarea"
                          style={{ resize: 'none', overflow: 'auto' }}
                          type="text"
                          id="comments"
                          name="comments"
                          placeholder="Type comments"
                          onChange={e => handleChange(e)}
                          defaultValue={values.comments}
                        />
                      </FieldList>
                    </div>
                  )}
                  <div className="btns">
                    <ButtonFirst type="submit" key={nanoid()}>
                      {formQueue ? 'Next' : 'Done'}
                    </ButtonFirst>
                    <ButtonSecond
                      type="button"
                      onClick={
                        formQueue
                          ? () => {
                              onClean();
                              onClose();
                            }
                          : toggleForm
                      }
                      key={nanoid()}
                    >
                      {formQueue ? 'Cancel' : 'Back'}
                    </ButtonSecond>
                  </div>
                </div>
              </FormStyled>
            )}
          </Formik>
        </div>
      </ModalAddNoticeStyled>
    </Overlay>,
    modalAddNoticeRoot,
  );
};
