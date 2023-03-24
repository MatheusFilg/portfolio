import { NavLink } from 'react-router-dom'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <h2>
        Olá, eu sou <span>Matheus Filgueiras</span>
      </h2>
      <h1>Desenvolvedor Front-End</h1>
      <p>Feliz em vê-lo por aqui, espero que aproveite o conteúdo.</p>

      <NavLink to="/about">
        <button>Sobre mim</button>
      </NavLink>
    </HomeContainer>
  )
}
