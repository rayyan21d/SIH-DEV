import { useState } from 'react';

const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
    
  }
  
  return (

    <>
      <form onSubmit={handleSubmit} >
      <select>
        <option value="railway">Railway Admin</option>
        <option value="mine">Mine Admin</option>
      </select>

      <br />

      <label>
        Username
        <input
          type="text"
          name="lastName"
         
        />
      </label>
      <br />

      <label>
        Password
        <input
          type="password"
          name="pass"
        />
      </label>
      <br />

      <button type="submit"  >Submit</button>
    </form>
    </>
  );
};

export default Form;