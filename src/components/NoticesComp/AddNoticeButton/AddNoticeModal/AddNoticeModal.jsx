import { useEffect, useState } from 'react';
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
} from './AddNoticeModal.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addNotice, cleanNotice } from 'redux/notice/slice';
import { noticeState } from 'redux/notice/selectors';

const modalAddNoticeRoot = document.querySelector('#modalAddNotice-root');

export const AddNoticeModal = ({ onClose }) => {
  const {
    radio,
    title,
    name,
    date,
    breed,
    sex,
    location,
    price,
    image,
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
    setFormQueue(!formQueue);
  }

  function setImage() {
    const input = document.querySelector('.file');
    const preview = document.querySelector('.preview');

    const reader = new FileReader();

    reader.onload = function () {
      preview.src = reader.result;
      console.log(preview.src);
    };
    if (input.files[0]) {
      reader.readAsDataURL(input.files[0]);
      preview.style = 'opacity:1;';
    } else {
      preview.src = '';
    }
  }

  function submitForm() {}

  function onClean() {}

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
              radio: radio,
              title: title,
              name: name,
              date: date,
              breed: breed,
              sex: sex,
              location: location,
              price: price,
              image: image,
              comments: comments,
            }}
            onSubmit={values => {
              console.log({ values });
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <FormStyled onSubmit={handleSubmit}>
                <div>
                  {formQueue ? (
                    <div>
                      <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                        dolor sit amet, consectetur
                      </Paragraph>
                      <FieldsRadio role="group">
                        <FieldRadio
                          type="radio"
                          id="radioOne"
                          name="radio"
                          value="lost/found"
                          checked={values.radio === 'lost/found'}
                        />
                        <LabelRadio htmlFor="radioOne" key={nanoid()}>
                          lost/found
                        </LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioTwo"
                          name="radio"
                          value="in good hands"
                          checked={values.radio === 'in good hands'}
                        />
                        <LabelRadio htmlFor="radioTwo" key={nanoid()}>
                          in good hands
                        </LabelRadio>

                        <FieldRadio
                          type="radio"
                          id="radioThree"
                          name="radio"
                          value="sell"
                          checked={values.radio === 'sell'}
                          required={true}
                        />
                        <LabelRadio htmlFor="radioThree" key={nanoid()}>
                          sell
                        </LabelRadio>
                      </FieldsRadio>
                      <FieldList>
                        <LabelItem htmlFor="title" key={nanoid()}>
                          <span>Tittle of ad</span>
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Type name"
                          value={values.title}
                          required={true}
                        />

                        <LabelItem
                          htmlFor="name"
                          onChange={handleChange}
                          key={nanoid()}
                        >
                          <span>Name pet</span>
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Type name pet"
                          value={values.name}

                          required={true}
                        />

                        <LabelItem
                          htmlFor="date"
                          onChange={handleChange}
                          key={nanoid()}
                        >
                          <span>Date of birth</span>
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="date"
                          name="date"
                          placeholder="Type date of birth"
                          value={values.date}

                          required={true}
                        />

                        <LabelItem
                          htmlFor="breed"
                          onChange={handleChange}
                          key={nanoid()}
                        >
                          <span>Breed</span>
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="breed"
                          name="breed"
                          placeholder="Type breed"
                          value={values.breed}

                          required={true}
                        />
                      </FieldList>
                    </div>
                  ) : (
                    <div>
                      <FieldsRadioSex role="group" required={true}>
                        <span>The sex</span>
                        <FieldRadioSex
                          type="radio"
                          id="radioOne"
                          name="radio"
                          value="male"
                          checked={values.radio === 'male'}
                        />
                        <LabelRadioSex htmlFor="radioOne" key={nanoid()}>
                          <IconMale />
                          <span>Male</span>
                        </LabelRadioSex>

                        <FieldRadioSex
                          type="radio"
                          id="radioTwo"
                          name="radio"
                          value="female"
                          checked={values.radio === 'female'}
                          required={true}
                        />
                        <LabelRadioSex htmlFor="radioTwo" key={nanoid()}>
                          <IconFemale />
                          <span>Female</span>
                        </LabelRadioSex>
                      </FieldsRadioSex>
                      <FieldList>
                        <LabelItem htmlFor="location" key={nanoid()}>
                          <span>Location</span>
                        </LabelItem>

                        <FieldItem
                          type="text"
                          id="location"
                          name="location"
                          placeholder="Type location"
                          value={values.location}

                          required={true}
                        />

                        <LabelItem
                          htmlFor="price"
                          onChange={handleChange}
                          key={nanoid()}
                        >
                          <span>Price</span>
                        </LabelItem>

                        <FieldItem
                          type="number"
                          id="price"
                          name="price"
                          placeholder="Type price"
                          value={values.price}

                          required={true}
                        />

                        <LabelItem htmlFor="image" key={nanoid()}>
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
                        </LabelItem>

                        <FieldItemFile
                          className="file"
                          type="file"
                          id="image"
                          name="image"
                          onChange={e => {
                            handleChange(e);
                            // setImage()
                          }}
                          required={true}
                        />
                        <LabelItemTextArea
                          htmlFor="comment"
                          onChange={handleChange}
                          key={nanoid()}
                        >
                          <span>Comments</span>
                        </LabelItemTextArea>

                        <FieldItemTextArea
                          maxLength="120"
                          minLength="8"
                          as="textarea"
                          style={{ resize: 'none', overflow: 'auto' }}
                          type="text"
                          id="comment"
                          name="comment"
                          placeholder="Type comment"
                          value={values.comment}
                          required={true}
                        />
                      </FieldList>
                    </div>
                  )}
                  <div className="btns">
                    <ButtonFirst
                      type="submit"
                      onClick={formQueue ? toggleForm : (submitForm, onClean)}
                      key={nanoid()}
                    >
                      {formQueue ? 'Next' : 'Done'}
                    </ButtonFirst>
                    <ButtonSecond
                      type="button"
                      onClick={formQueue ? (onClose, onClean) : toggleForm}
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
