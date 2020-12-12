import React from 'react';

import User from '../User/User';



function UsersList(props) {

  const [index, setIndex] = React.useState(3);
  const [renderedUsers, setRenderedUsers] = React.useState(props.users.slice(0, 3))

  function showMore() {
    const arr = props.users.slice(index, index + 3);
    setIndex(index + 3);
    setRenderedUsers([...renderedUsers, ...arr]);
  }

  React.useEffect(() => {
    setRenderedUsers(props.users.slice(0, 3))
  }, [props.users])

  return (
    <>
      { props.users.length > 0
        ?
        <section className='usersList'>
          <h3 className='usersList__title'>Список пользователей</h3>
          <ul className='usersList__users'>
            {renderedUsers.map(({ name, password, email, phoneNumber, date }) => (
              <User
                user={{ name, password, email, phoneNumber, date }}
                key={email}
              />
            ))}
          </ul>
          {props.users.length > 2 && !(renderedUsers.length === props.users.length)
            ? <button type="button" aria-label="showMore" onClick={showMore} className="usersList__showMore-button">Показать ещё</button>
            : ''
          }
        </section>
        : <h3 className='usersList__title'>Здесь будут созданные пользователи</h3> 
      }
    </>
  );
};

export default UsersList;
