import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email && !contact.phone) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>

      <div style={{ display: 'flex', gap: 14.4 }}>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div>Email me</div>
            </div>
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
