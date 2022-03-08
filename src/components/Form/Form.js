import './Form.css'

const Form = () => (
  <section className='section contact center' id='form'>
    <form
      name='cleanfolio'
      method='POST'
      type='hidden'
      data-netlify='true'
      className='ContactForm'
    >
      <input type='hidden' name='form-name' value='cleanfolio' />
      <p>
        <input type='text' name='name' placeholder='Name' className='name' />
      </p>
      <p>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className='email'
        />
      </p>

      <p>
        <textarea name='message' placeholder='Message' className='message' />
      </p>
      <p>
        <button type='submit' className=' submit btn btn--outline'>
          Submit
        </button>
      </p>
    </form>
  </section>
)

export default Form
