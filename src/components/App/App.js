import React, { useCallback } from 'react';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import CreateUserPopup from '../CreateUserPopup/CreateUserPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import UsersList from '../UsersList/UsersList';

function App() {

  const [users, setUsers] = React.useState([]);
  const [date, setDate] = React.useState('');
  console.log(date)
  // переменные состояний видимости попапов
  const [isCreateUserPopupOpen, setIsCreateUserPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setIsCreateUserPopupOpen(false);
    setIsSuccessPopupOpen(false);
  }


  function openPopup() {
    setIsCreateUserPopupOpen(true)
  }

  // эффект для закрытия попапов кликом на оверлей или по нажатию клавиши "ESC"
  React.useEffect(() => {
    function handleCloseByOverlayClickAndPressEscape(e) {
      if (e.key === 'Escape' || e.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }

    document.addEventListener('click', handleCloseByOverlayClickAndPressEscape);
    document.addEventListener('keydown', handleCloseByOverlayClickAndPressEscape);

    return () => {
      document.removeEventListener('click', handleCloseByOverlayClickAndPressEscape);
      document.removeEventListener('keydown', handleCloseByOverlayClickAndPressEscape);
    }
  })

  function createUser({ email, password, name, phoneNumber }) {
    const newUser = { name, password, email, phoneNumber, date }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    closeAllPopups()
  }

  const storage = useCallback(() => {
    const storage = JSON.parse(localStorage.getItem('users'))
    if (storage) {
      setUsers(storage)
    }
  }, [])

  React.useEffect(() => {
    storage()
  }, [storage])

  React.useEffect(() => {
    const date = new Date();
    const dateTo = date.toISOString().substring(0, 10)
    setDate(dateTo)
  }, [])

  return (
    <div className='root'>

      <Main
        openPopup={openPopup}
      />
      <UsersList
        users={users}
      />

      <Footer />

      <CreateUserPopup
        isOpen={isCreateUserPopupOpen}
        onClose={closeAllPopups}
        onCreate={createUser}
      />

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={closeAllPopups}
      />

    </div>
  );
};

export default App;
