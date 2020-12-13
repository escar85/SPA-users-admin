import React from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';
import { useFormWithValidation } from '../../utils/Validation';

function CreateUserPopup(props) {

  const { values, handleChange, errors, isValid, } = useFormWithValidation();

  function handleSubmit() {
    props.onCreate({
      password: values.password,
      email: values.email,
      name: values.name,
      phoneNumber: values.tel,
      status: values.status || 'client'
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
        placeholder='Введите номер в формате 7(XXX)XXX-XX-XX'
        onChange={handleChange}
        errorText={errors.phoneNumber}
        label='Номер телефона'
        pattern='7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}'
      />
      <label className='popup__input_label'>Статус пользователя:</label>
      <select name='status' className='popup__select' onChange={handleChange}>
        <option className='popup__select_option' value='Client'>Client</option>
        <option className='popup__select_option' value='Partner'>Partner</option>
        <option className='popup__select_option' value='Admin'>Admin</option>
      </select>

    </PopupWithFrom>
  );
};

export default CreateUserPopup;
