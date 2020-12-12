import React from 'react';

import SearchForm from '../SearchForm/SearchForm';

function Main(props) {
  return (
    <main className='main'>
      <div className='main__content-box'>
        <h2 className='main__title'>Что творится в мире?</h2>
        <p className='main__text'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <SearchForm
        />
        <button type='button' aria-label='openPopup' className='main__button-createUser' onClick={props.openPopup}>Создать пользователя</button>
      </div>
    </main>
  );
};

export default Main;
