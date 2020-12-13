import React from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';
import { useFormWithValidation } from '../../utils/Validation';

function SearchPopup(props) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit() {
    values.search === 'byEmail'
      ? props.onSearchByEmail({
        email: values.search
      })
      : props.onSearchByTel({
        tel: values.search
      })
  }

  return (
    <PopupWithFrom
      name='SearchUser'
      title='Поиск пользователя'
      submitButtonName='Найти'
      isOpen={props.isOpen}
      isValid={isValid}
      onClose={props.onClose}
      onClick={handleSubmit}
    >

      <PopupInput
        name='search'
        minLength='6'
        maxLength='30'
        placeholder='Введите данные для поиска'
        onChange={handleChange}
        errorText={errors.search}
        label='Поиск'
      />

      <label className='popup__input_label'>Выберите вид поиска:</label>
      <select name='searchType' className='popup__select' onChange={handleChange}>
        <option className='popup__select_option' value='byEmail'>По email</option>
        <option className='popup__select_option' value='byTel'>По номеру телефона</option>
      </select>

    </PopupWithFrom>
  );
};

export default SearchPopup;
