import React from 'react';
import User from '../User/User';
import { useForm } from '../../utils/Validation';

function UsersList(props) {

  const { values, handleChange } = useForm();

  function handleFilter() {
    props.onFilter({
      status: values.status || 'client'
    })
  }

  return (
    <>
      { props.users.length > 0
        ?
        <section className='usersList'>
          <h3 className='usersList__title'>Список пользователей</h3>

          <label className='popup__input_label'>Выберите статус для фильтрации пользователей:</label>
          <select name='status' className='popup__select' onChange={handleChange}>
            <option className='popup__select_option' value='Client'>Client</option>
            <option className='popup__select_option' value='Partner'>Partner</option>
            <option className='popup__select_option' value='Admin'>Admin</option>
          </select>

          <button type='button' aria-label='filter' className='usersList__button' onClick={handleFilter}>Отфильтровать</button>
          <button type='button' aria-label='reset' className='usersList__button' onClick={props.handleReset}>Показать всех</button>

          <ul className='usersList__users'>
            { props.filteredUsers.length > 0
            ? props.filteredUsers.map(({ name, password, email, phoneNumber, status, dateOfCreate, editDate }) => (
              <User
                user={{ name, password, email, phoneNumber, status, dateOfCreate, editDate }}
                key={email}
                onUserDelete={props.onUserDelete}
                openEditPopup={props.openPopup}
              />
            ))
            : props.users.map(({ name, password, email, phoneNumber, status, dateOfCreate, editDate }) => (
              <User
                user={{ name, password, email, phoneNumber, status, dateOfCreate, editDate }}
                key={email}
                onUserDelete={props.onUserDelete}
                openEditPopup={props.openPopup}
              />
            ))}
          </ul>
        </section>
        : <h3 className='usersList__title'>Здесь будут созданные пользователи</h3>
      }
    </>
  );
};

export default UsersList;
