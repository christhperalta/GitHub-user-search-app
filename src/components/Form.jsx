import { useState } from "react";
import Icon from "./Icon";


export default function Form({onGetUser,error}) {
 
  const [user,setUser] = useState('');


  function handleChange({target}){
    setUser(target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(user.length <= 1) return
    onGetUser(user);
    setUser('');
  }
  

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <label className='Form-label'>
        <Icon className='Form-search' name='search' />
        <input
          className='Form-input'
          type='text'
          placeholder='Search GitHub username…'
          value={user}
          onChange={handleChange}
        />
      </label>
      {error !== null && <p className='Form-error'>{error.message}</p>}
      <button className='Form-btn' type='submit'>
        Search

      </button>
    </form>
  );
}
