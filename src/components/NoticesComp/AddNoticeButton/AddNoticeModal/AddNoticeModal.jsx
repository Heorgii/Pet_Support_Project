import { useEffect } from 'react';
import { Formik } from 'formik';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalAddNoticeStyled,
  FormStyled,
  FieldCategories,
  LabelCategory,
  FieldCategory,
  Title,
  Paragraph,
  FieldList,
  LabelList,
  FieldItem,
  ButtonClose,
  IconClose,
  ButtonNext,
  ButtonCancel,
} from './AddNoticeModal.styled';
import { nanoid } from 'nanoid';

const modalAddNoticeRoot = document.querySelector('#modalAddNotice-root');

export const AddNoticeModal = ({ onClose }) => {
  const start = true;

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

  function onNext() {}

  return createPortal(
    <Overlay onClick={onClickBackdrop}>
      <ModalAddNoticeStyled>
        <ButtonClose onClick={onClose}>
          <IconClose />
        </ButtonClose>
        <Title>Add pet</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur
        </Paragraph>
        {start ? (
          <div>
            <Formik
              initialValues={{
                radio: 'sell',
                title: '',
                name: '',
                date: '',
                breed: '',
              }}
              onSubmit={values => {
                console.log({ values });
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <FormStyled onSubmit={handleSubmit}>
                  <FieldCategories role="group">
                    <FieldCategory
                      type="radio"
                      id="radioOne"
                      name="radio"
                      value="lost/found"
                      checked={values.radio === 'lost/found'}
                    />
                    <LabelCategory htmlFor="radioOne" key={nanoid()}>
                      lost/found
                    </LabelCategory>

                    <FieldCategory
                      type="radio"
                      id="radioTwo"
                      name="radio"
                      value="in good hands"
                      checked={values.radio === 'in good hands'}
                    />
                    <LabelCategory htmlFor="radioTwo" key={nanoid()}>
                      in good hands
                    </LabelCategory>

                    <FieldCategory
                      type="radio"
                      id="radioThree"
                      name="radio"
                      value="sell"
                      checked={values.radio === 'sell'}
                    />
                    <LabelCategory htmlFor="radioThree" key={nanoid()}>
                      sell
                    </LabelCategory>
                  </FieldCategories>
                  <FieldList>
                    <LabelList htmlFor="title" key={nanoid()}>
                      <span>Tittle of ad</span>
                    </LabelList>

                    <FieldItem
                      type="title"
                      id="title"
                      name="title"
                      placeholder="Type name"
                      required={true}
                    />

                    <LabelList
                      htmlFor="name"
                      onChange={handleChange}
                      key={nanoid()}
                    >
                      <span>Name pet</span>
                    </LabelList>

                    <FieldItem
                      type="name"
                      id="name"
                      name="name"
                      placeholder="Type name pet"
                      required={true}
                    />

                    <LabelList
                      htmlFor="date"
                      onChange={handleChange}
                      key={nanoid()}
                    >
                      <span>Date of birth</span>
                    </LabelList>

                    <FieldItem
                      type="text"
                      id="date"
                      name="date"
                      placeholder="Type date of birth"
                      required={true}
                    />

                    <LabelList
                      htmlFor="breed"
                      onChange={handleChange}
                      key={nanoid()}
                    >
                      <span>Breed</span>
                    </LabelList>

                    <FieldItem
                      type="breed"
                      id="breed"
                      name="breed"
                      placeholder="Type breed"
                      required={true}
                    />
                  </FieldList>
                </FormStyled>
              )}
            </Formik>
            <div className='btns'>
              <ButtonNext type="submit" onClick={onNext} key={nanoid()}>
                Next
              </ButtonNext>
              <ButtonCancel type="button" onClick={onClose} key={nanoid()}>
                Cancel
              </ButtonCancel>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </ModalAddNoticeStyled>
    </Overlay>,
    modalAddNoticeRoot,
  );
};
