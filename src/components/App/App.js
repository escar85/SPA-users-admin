import React, { useCallback } from 'react';
import { Route } from 'react-router-dom';


import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

function App() {

  // переменные состояний видимости попапов
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
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

  return (
    <div className='root'>

      <Header />

      <Main />

      <Footer />

      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
      />

      <RegisterPopup
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
      />

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={closeAllPopups}

      />

    </div>
  );
};

export default App;
