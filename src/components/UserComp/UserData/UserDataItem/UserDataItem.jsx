import { createAsyncThunk } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const UserDataItem = ({
  name,
  label,
  type,
  defaultValue,
  active,
  setActive,
  profile,
}) => {
  const emailRegExp = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;
  const cityRegex = /^(\w+(,)\s*)+\w+$/;
  const dayToday = new Date().toLocaleDateString();
  const minDate = new Date('01.01.1910').toLocaleDateString();

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(defaultValue ?? '');
  const [isError, setIsError] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setInputValue(value);
    }
    if (name === 'email') {
      setInputValue(value);
    } else if (name === 'birthday') {
      setInputValue(value);
    } else if (name === 'phone') {
      setInputValue(value);
    } else if (name === 'city') {
      setInputValue;
    }
  };

  const handleSubmit = name => {
    if (name === 'name') {
      setActive('name');
      if (
        inputValue.length !== 0 &&
        (inputValue.length < 2 || inputValue.length > 16)
      ) {
        setIsError('type from 2 to 16 letters');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(authOperations.update({ name: inputValue }));
    } else if (name === 'email') {
      setActiv('email');
      if (!inputValue.match(emailRegExp)) {
        setIsError('please type valid email');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(authOperations.update({ email: inputValue }));
    } else if (name === 'birthday') {
      setActive('birthday');
      if (inputValue > dayToday) {
        setIsError('date must be current');
        return;
      }
      if (inputValue < minDate) {
        setIsError('date must be current');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(authOperations.update({ birthday: inputValue }));
    } else if (name === 'phone') {
      setActive('phone');
      if (inputValue.slice(0, 4) !== '+380') {
        setIsError('phone should start +380');
        return;
      }
      if (inputValue.length < 13) {
        setIsError('please type 13 signs');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(authOperations.update({ phone: inputValue }));
    } else if (name === 'city') {
      setActive('city');
      if (!inputValue.match(cityRegex)) {
        setIsError('use format Kyiv, Brovary');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(authOperations.update({ city: inputValue }));
    }
  };

  const activeHandleClick = name => {
    if (!active) setActive(name);
  };

  return (
    <>
      <UserDataItemWrapper>
        <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
        <UserDataItemInputBtnWrapper>
          <InputWrapper>
            <UserDataItemInput
              value={!profile ? inputValue : defaultValue}
              onChange={handleChange}
              active={active === name}
              disabled={active !== name}
              type={type}
              name={name}
              id={name}
            />
            {isError && active === name ? <Error>{isError}</Error> : null}
          </InputWrapper>

          {!profile &&
            (active === name ? (
              <UserDataItemBtn>
                <CheckMarkStyle onClick={() => handleSubmit(name)} />
              </UserDataItemBtn>
            ) : (
              <UserDataItemBtn
                disabled={active && active !== name}
                onClick={() => activeHandleClick(name)}
              >
                <PensilStyle />
              </UserDataItemBtn>
            ))}
        </UserDataItemInputBtnWrapper>
      </UserDataItemWrapper>
    </>
  );
};

const update = createAsyncThunk('auth/update', async (updateData, thunkAPI) => {
  try {
    const result = await api.update(updateData);
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});

const authOperations = {
  update,
};
