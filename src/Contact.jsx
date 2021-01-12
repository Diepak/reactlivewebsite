import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile no is ${data.phone} and email is ${data.email}, here is what I want to say ${data.message}`
    );
  };

  return (
    <>
      <div className='my-4'>
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Full name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='fullname'
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder='Enter your name'
                  autoComplete='off'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Phone
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='phone'
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder='Enter you phone'
                  autoComplete='off'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlTextarea1' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  name='message'
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <br />
              <div class='col-12' className='justify-content-center'>
                <button class='btn btn-outline-primary' type='submit'>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
