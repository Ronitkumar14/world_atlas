import React from 'react'

const Contact = () => {
  const handleFormSubmit=(formdata)=>{
    const formInputData=Object.fromEntries(formdata.entries())
    console.log(formInputData)
  }
  return (
    <section className='section-contact'>
      <h2 className='contact-title'>Contact us</h2>

      <form className={handleFormSubmit}>
        <div className="inputs-container grid grid-four-rows">
          <input type="text" className='form-control'  required autoComplete='false' placeholder='Enter your name' name='username'/>
          <input type="email" className='form-control' required autoComplete='false' placeholder='Enter your email' name='email' />
          <textarea name="message" className=' form-control form-message' required autoComplete='off' rows={"10"} placeholder='Enter your message' ></textarea>

          <button type='submit' value={"send"} >Send</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
