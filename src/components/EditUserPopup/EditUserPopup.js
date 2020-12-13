import React from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';
import { useFormWithValidation } from '../../utils/Validation';

function EditUserPopup(props) {

  const { values, handleChange, errors, isValid, setIsValid } = useFormWithValidation();

  function handleSubmit() {
    props.onEdit({
      password: values.password || props.user.password,
      email: values.email || props.user.email,
      name: values.name || props.user.name,
      phoneNumber: values.tel || props.user.phoneNumber,
      status: values.status || props.user.status
    })
  }

  React.useEffect(() => {
    setIsValid(true)
  }, [setIsValid])



  return (
    <PopupWithFrom
      name='editUser'
      title='Редактирование пользователя'
      submitButtonName='Изменить'
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
        defaultValue={props.user.email}
      />

      <PopupInput
        name='password'
        minLength='8'
        maxLength='30'
        placeholder='Введите пароль'
        onChange={handleChange}
        errorText={errors.password}
        label='Пароль'
        defaultValue={props.user.password}
      />

      <PopupInput
        name='name'
        minLength='8'
        maxLength='60'
        placeholder='Введите ФИО'
        onChange={handleChange}
        errorText={errors.name}
        label='ФИО'
        defaultValue={props.user.name}
      />

      <PopupInput
        name='tel'
        minLength='11'
        maxLength='30'
        placeholder='Введите номер в формате 7(XXX)XXX-XX-XX'
        onChange={handleChange}
        errorText={errors.tel}
        label='Номер телефона'
        defaultValue={props.user.phoneNumber}
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

export default EditUserPopup;
