import { NavLink } from 'react-router-dom'
import code from '../../assets/code.svg'
import { HeaderContainer, InfoContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={code} alt="" />

      <InfoContainer>
        <NavLink to="/" title="Home">
          Home
        </NavLink>
        <NavLink to="/about" title="Sobre">
          Sobre
        </NavLink>
        <NavLink to="/graduation" title="Formação">
          Formação
        </NavLink>
        <NavLink to="/experience" title="Experiência">
          Experiência
        </NavLink>
        <NavLink to="/projects" title="Projetos">
          Projetos
        </NavLink>
      </InfoContainer>

      <NavLink to="/contact">Contato</NavLink>
    </HeaderContainer>
  )
}
