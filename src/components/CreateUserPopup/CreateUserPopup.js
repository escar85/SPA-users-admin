import React from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';
import { useFormWithValidation } from '../../utils/Validation';

function CreateUserPopup(props) {

  const { values, handleChange, errors, isValid, } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onCreate({
      password: values.password,
      email: values.email,
      name: values.name,
      phoneNumber: values.phoneNumber
    })
  }

  return (
    <PopupWithFrom
      name='createUser'
      title='Создание нового пользователя'
      submitButtonName='Создать'
      isOpen={props.isOpen}
      isValid={isValid}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onClick={handleSubmit}
    >

      <PopupInput
        name='email'
        minLength='6'
        maxLength='30'
        placeholder='Введите почту'
        onChange={handleChange}
        errorText={errors.email}
        label='Email'
      />

      <PopupInput
        name='password'
        minLength='8'
        maxLength='30'
        placeholder='Введите пароль'
        onChange={handleChange}
        errorText={errors.password}
        label='Пароль'
      />

<PopupInput
        name='name'
        minLength='8'
        maxLength='60'
        placeholder='Введите ФИО'
        onChange={handleChange}
        errorText={errors.name}
        label='ФИО'
      />

<PopupInput
        name='tel'
        minLength='11'
        maxLength='30'
        placeholder='Введите номер телефона в формате 8-XXX-XXXXXXX'
        onChange={handleChange}
        errorText={errors.phoneNumber}
        label='Номер телефона'
      />

    </PopupWithFrom>
  );
};

export default CreateUserPopup;
