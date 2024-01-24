import { Button } from 'antd';
import React, { useState } from 'react'

function MyForm() {

    const [name, setName] =useState("");
    const [email,setEmail] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
    };

  return (
    <form className='form1' onSubmit={handleSubmit}>
        <label>
            Name:
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
        </label>
            <p></p>
            <label>
                Email:
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default MyForm
