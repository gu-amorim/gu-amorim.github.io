import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import resume from '../../files/CV_ENG_GustavoAmorim.pdf'
import resumePTBR from '../../files/CV_PTBR_GustavoAmorim.pdf'

const About = () => {
  const { name, role, description, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc' style={{ textAlign: 'justify' }}>
        {description && description}
      </p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {resumePTBR && (
          <a href={resumePTBR} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume (Portuguese)
            </span>
          </a>
        )}

        {social && (
          <>
            {social.lattes && (
              <a href={social.lattes} target='_blank' rel='noreferrer'>
                <span type='button' className='btn btn--outline'>
                  Lattes Resume
                </span>
              </a>
            )}

            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
