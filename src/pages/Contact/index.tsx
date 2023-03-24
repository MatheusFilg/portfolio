import { LinkedinLogo } from 'phosphor-react'
import outlooklogo from '../../assets/microsoft-outlook-logo.svg'
import whatslogo from '../../assets/whatsapp-logo.svg'
import githublogo from '../../assets/github-logo.svg'
import { ContactContainer, SocialContatiner, TextContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Contact() {
  return (
    <ContactContainer>
      <TextContainer>
        <h2>
          Espero que tenha gostado do que viu, qualquer tipo de dúvida, feedback
          ou contato pode ser feito através dos contatos abaixo.
        </h2>
      </TextContainer>
      <SocialContatiner>
        <NavLink
          to="https://www.linkedin.com/in/matheus-filgueiras-419700248/"
          target="_blank"
        >
          <div>
            <LinkedinLogo size={48} color="#f24e1e" weight="light" />
            <p>Linkedin</p>
          </div>
        </NavLink>
        <NavLink to="https://github.com/MatheusFilg" target="_blank">
          <div>
            <img src={githublogo} alt="" />
            <p>Github</p>
          </div>
        </NavLink>
        <div>
          <img src={outlooklogo} alt="" />
          <h4>Email</h4>
          <span>matheus_falmeida@hotmail.com</span>
        </div>
        <div>
          <img src={whatslogo} alt="" />
          <h4>Whatsapp</h4>
          <span>(81) 995221202</span>
        </div>
      </SocialContatiner>
    </ContactContainer>
  )
}
