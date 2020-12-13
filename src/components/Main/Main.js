import React from 'react';

function Main(props) {
  return (
    <main className='main'>
      <div className='main__content-box'>
        <button type='button' aria-label='openPopup' className='main__button' onClick={props.openCreatePopup}>Создать пользователя</button>
        <button type='button' aria-label='openPopup' className='main__button' onClick={props.openSearchPopup}>Поиск пользователя</button>
      </div>
    </main>
  );
};

export default Main;
