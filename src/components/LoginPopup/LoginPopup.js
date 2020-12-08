import React from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';
import { useFormWithValidation } from '../../utils/Validation';

function LoginPopup(props) {

  const { values, handleChange, errors, isValid, } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({
      password: values.password,
      email: values.email
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
      redirectTo={props.redirectTo}
    >

      <PopupInput
        name='email'
        minLength='6'
        maxLength='30'
        id='inputEmailLogin'
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
        name='phoneNumber'
        minLength='11'
        maxLength='30'
        placeholder='Введите номер телефона в формате 8-XXX-XXXXXXX'
        onChange={handleChange}
        errorText={errors.phoneNumber}
        label='Номер телефона'
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
        name='password'
        minLength='8'
        maxLength='30'
        placeholder='Введите пароль'
        onChange={handleChange}
        errorText={errors.password}
        label='Пароль'
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

    </PopupWithFrom>
  );
};

export default LoginPopup;
