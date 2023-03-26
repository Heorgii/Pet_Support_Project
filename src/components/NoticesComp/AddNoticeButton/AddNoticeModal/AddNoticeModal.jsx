import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import ReactDOM from 'react-dom';
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
Li,
} from './AddNoticeModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import schemas from 'components/Schemas/schemas';
import { useState } from 'react';
import { fetchNotice } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import usePlacesAutocomplete from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export const AddNoticeModal = () => {
  const [formQueue, setFormQueue] = useState(true);
  const [fieldPrice, setFieldPrice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);

  const onClickBackdrop = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  function toggleForm() {
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

  async function postNotice(values) {
    setIsLoading(true);
    try {
console.log(values)
      const { code } = await fetchNotice('/pets', values);
      if (code && code !== 201) {
        return onFetchError('Whoops, something went wrong');
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
  const {
    ready,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {

    },
    debounce: 300,
  });


  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };


  const renderSuggestions = (setFieldValue) =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Li key={place_id} onClick={() => {setFieldValue('location', suggestion.description);
      clearSuggestions();}}>
          {main_text}{', '}{secondary_text}
        </Li>
      );
    });

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'formSell' && (
      <Overlay onClick={e => onClickBackdrop(e)}>
        <ModalAddNoticeStyled onClick={e => e.stopPropagation()}>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          <ButtonClose onClick={onClickBackdrop}>
            <IconClose />
          </ButtonClose>
          <Title>Add pet</Title>
          <div>
            <Formik
              initialValues={{
                category: '',
                title: '',
                name: '',
                birthday: '',
                breed: '',
                sex: '',
                location: '',
                price: '',
                imageUrl: '',
                comments: '',
              }}
              onSubmit={values =>
                !formQueue
                  ? postNotice(values) &&
                    navigate('/notices/own') &&
                    (e => onClickBackdrop(e))
                  : toggleForm()
              }
enableReinitialize={true}
              validationSchema={
                formQueue
                  ? schemas.noticeSchemaFirst
                  : !fieldPrice
                  ? schemas.noticeSchemaSecond
                  : schemas.noticeSchemaSecondPrice
              }
            >
              {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                <FormStyled
                  onSubmit={handleSubmit}
                  onChange={e => {
                    handleChange(e);
                    values.category === 'sell' && setFieldPrice(true);
                  }}
                >
                  <div>
                    {formQueue ? (
                      <div>
                        <Paragraph>
                          Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                          dolor sit amet, consectetur
                        </Paragraph>
                        <FieldsRadio role="group" id="category">
                          {errors.category && touched.category ? (
                            <Error style={{ top: '-20px' }}>
                              {errors.category}
                            </Error>
                          ) : null}
                          <FieldRadio
                            type="radio"
                            id="radioOne"
                            name="category"
                            value="lost/found"
                            checked={values.category === 'lost/found'}
                          />
                          <LabelRadio htmlFor="radioOne">
                            lost/found
                          </LabelRadio>

                          <FieldRadio
                            type="radio"
                            id="radioTwo"
                            name="category"
                            value="in good hands"
                            checked={values.category === 'in good hands'}
                          />
                          <LabelRadio htmlFor="radioTwo">
                            in good hands
                          </LabelRadio>

                          <FieldRadio
                            type="radio"
                            id="radioThree"
                            name="category"
                            value="sell"
                            checked={values.category === 'sell'}
                          />
                          <LabelRadio htmlFor="radioThree">
                            sell
                          </LabelRadio>
                        </FieldsRadio>
                        <FieldList>
                          <LabelItem htmlFor="title">
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
                          <LabelItem htmlFor="name">
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
                          <LabelItem htmlFor="birthday">
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
                          <LabelItem htmlFor="breed">
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
                      <div ref={ref}>
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
                          <LabelRadioSex htmlFor="radioOneSex">
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
                          <LabelRadioSex htmlFor="radioTwoSex">
                            <IconFemale />
                            <span>Female</span>
                          </LabelRadioSex>
                        </FieldsRadioSex>
                        <FieldList>
                          <LabelItem htmlFor="location">
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
disabled={!ready}
onChange={(e) => {handleChange(e); handleInput(e)}}
                        />
{status === "OK" && <ul>{renderSuggestions(setFieldValue)}</ul>}
                          {values.category === 'sell' ? (
                            <div>
                              <LabelItem htmlFor="price">
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
                          <LabelItem htmlFor="imageUrl">
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
                          <LabelItemTextArea htmlFor="comments">
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
                      <ButtonFirst
                        className="btn__submit"
                        type="submit"
                      >
                        {formQueue ? 'Next' : 'Done'}
                      </ButtonFirst>
                      <ButtonSecond
                        type="button"
                        onClick={
                          formQueue
                            ? () => {
                                // onClean();
                                onClickBackdrop();
                              }
                            : toggleForm
                        }
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
      </Overlay>
    ),
    document.querySelector('#popup-root'),
  );
};
