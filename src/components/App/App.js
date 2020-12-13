import React, { useCallback } from 'react';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import CreateUserPopup from '../CreateUserPopup/CreateUserPopup';
import EditUserPopup from '../EditUserPopup/EditUserPopup';
import SearchPopup from '../SearchPopup/SearchPopup';
import UsersList from '../UsersList/UsersList';
import { useFormWithValidation } from '../../utils/Validation';

function App() {

  const { resetForm } = useFormWithValidation();

  const [users, setUsers] = React.useState([]);
  const [date, setDate] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  // переменные состояний видимости попапов
  const [isCreateUserPopupOpen, setIsCreateUserPopupOpen] = React.useState(false);
  const [isEditUserPopupOpen, setIsEditUserPopupOpen] = React.useState(false);
  const [isSearchPopupOpen, setSearchPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setIsCreateUserPopupOpen(false);
    setIsEditUserPopupOpen(false);
    setSearchPopupOpen(false);
    resetForm();
  }

  function openCreatePopup() {
    setIsCreateUserPopupOpen(true);
  }

  function openSearchPopup() {
    setSearchPopupOpen(true);
  }

  function openEditPopup(user) {
    setIsEditUserPopupOpen(true);
    setCurrentUser(user);
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

  function createUser({ email, password, name, phoneNumber, status }) {
    const newUser = { name, password, email, phoneNumber, status, dateOfCreate: date }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    closeAllPopups()
  }

  function handleUserDelete(user) {
    const newUsers = users.filter((u) => u.email !== user.email);
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers))
  }

  function editUser({ email, password, name, phoneNumber, status }) {
    const newUser = { name, password, email, phoneNumber, status, dateOfCreate: currentUser.dateOfCreate, editDate: date }
    const newUsers = users.filter((u) => u.email !== currentUser.email);
    newUsers.push(newUser)
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers))
    closeAllPopups()
  }

  function filterUsers({ status }) {
    const filteredUsers = users.filter((u) => u.status === status);
    setFilteredUsers(filteredUsers);
  }

  function resetFilter() {
    setFilteredUsers([]);
  }

  function searchByEmail({ email }) {
    const searchedUser = users.filter((u) => u.email === email);
    setFilteredUsers(searchedUser);
    closeAllPopups();
  }

  function searchByTel({ tel }) {
    const searchedUser = users.filter((u) => u.email === tel);
    setFilteredUsers(searchedUser);
    closeAllPopups();
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
        openCreatePopup={openCreatePopup}
        openSearchPopup={openSearchPopup}
      />
      <UsersList
        users={users}
        onUserDelete={handleUserDelete}
        openPopup={openEditPopup}
        onFilter={filterUsers}
        filteredUsers={filteredUsers}
        handleReset={resetFilter}
      />

      <Footer />

      <CreateUserPopup
        isOpen={isCreateUserPopupOpen}
        onClose={closeAllPopups}
        onCreate={createUser}
      />

      <EditUserPopup
        isOpen={isEditUserPopupOpen}
        onClose={closeAllPopups}
        onEdit={editUser}
        user={currentUser}
      />

      <SearchPopup
        isOpen={isSearchPopupOpen}
        onClose={closeAllPopups}
        onCreate={createUser}
        onSearchByEmail={searchByEmail}
        onSearchByTel={searchByTel}
      />
    </div>
  );
};

export default App;
