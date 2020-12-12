import React from 'react';

function User(props) {

  function handleDeleteClick() {
    props.onArticleDelete(props.user);
  }

  return (
    <li className="userCard">
      <button type="button" aria-label="delete" className='userCard__delete-button' onClick={handleDeleteClick}></button>
      <div className="userCard__info">
        <h2 className="userCard__title">{props.user.name}</h2>
        <p className="userCard__text">{props.user.email}</p>
      </div>
    </li>
  );
};

export default User;
