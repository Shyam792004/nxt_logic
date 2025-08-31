import React from 'react'

class AddContact extends React.Component  {
      state={
        name:" ",
        email:"",
      }
    render()
    {
        return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form'>
              <div className='field'>
                   <label htmlFor="name">Name</label>
              </div>
              <div className='field'>
                   <label htmlFor="email">Email</label>
                   <input type="text" name="email" id="email" placeholder='@gmail.com'/>
              </div>
              <button className='ui button blue'>Add</button>
            </form>
        </div>
      )

    }
}

export default AddContact