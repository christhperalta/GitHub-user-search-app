import Icon from "./Icon";

export default function Form() {
  return (
    <form className='Form-form'>
      <label className='Form-label'>
        <Icon className='Form-search' name='search' />
        <input
          className='Form-input'
          type='text'
          placeholder='Search GitHub username…'
        />
      </label>
      <button className='Form-btn' type='submit'>
        Search
      </button>
    </form>
  );
}
