import { useState } from 'react';
import Card from '../Ui/Card';
import Button from '../Ui/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return;

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          onChange={usernameHandler}
          id='username'
          type='text'
          value={enteredUsername}
        />
        <label htmlFor='age'>Age (years)</label>
        <input
          onChange={ageHandler}
          id='age'
          type='number'
          value={enteredAge}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
