import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSistrix } from 'react-icons/fa';
import {
  SpanButton,
  FormButton,
  FormInput,
  FormSearch,
} from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (searchItem.trim() === '') {
      return toast.warn('Прошу внести дані для пошуку!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // onSubmitForm(searchName);
    setSearchItem('');
  };

  const handleChangeName = event => {
    return setSearchItem(event.currentTarget.value.toLowerCase());
  };

  return (
    <FormSearch onSubmit={handleSubmit}>
      <FormInput
        type="text"
        autoComplete="true"
        autoFocus={true}
        placeholder="Search"
        value={searchItem}
        onChange={handleChangeName}
      />
      <FormButton type="submit">
        <SpanButton>
          {<FaSistrix style={{ width: '20px', height: '20px' }} />}
        </SpanButton>
      </FormButton>
    </FormSearch>
  );
};
