import React from 'react';

function User(props) {

  function handleDeleteClick() {
    props.onUserDelete(props.user);
  }

  function handleEditClick() {
    props.openEditPopup(props.user);
  }

  return (
    <li className="userCard">
      <button type="button" aria-label="delete" className='userCard__delete-button' onClick={handleDeleteClick}></button>
      <button type="button" aria-label="edit" className='userCard__edit-button' onClick={handleEditClick}></button>
      <div className="userCard__info">
        <h2 className="userCard__title">Имя: {props.user.name}</h2>
        <p className="userCard__text">Почта: {props.user.email}</p>
        <p className="userCard__text">Статус: {props.user.status}</p>
        <p className="userCard__text">Пароль: {props.user.password}</p>
        <p className="userCard__text">Номер телефона: {props.user.phoneNumber}</p>
        <p className="userCard__text">Дата создания: {props.user.dateOfCreate}</p>
        {props.user.editDate
          ? <p className="userCard__text">Дата изменения: {props.user.editDate}</p>
          : ''
        }
      </div>
    </li>
  );
};

export default User;
