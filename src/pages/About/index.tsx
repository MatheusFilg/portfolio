import { AboutContainer, ButtonContainer } from './styles'
import perfil from '../../assets/eu.png'
import { CaretCircleDoubleRight } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import cv from '../../document/CV Matheus Filgueiras.pdf'

export function About() {
  return (
    <AboutContainer>
      <img src={perfil} alt="" />
      <div>
        <span>
          <CaretCircleDoubleRight size={36} color="#c4c4cc" weight="fill" />
          DESENVOLVEDOR FRONT-END
        </span>
        <h2>
          Desenvolvedor com experiência em <strong>Javascript</strong>,
          <strong> React</strong>, <strong>Node</strong> e <strong>Next</strong>
          .
        </h2>
        <p>
          Meu nome é Matheus, tenho 23 anos e atuo na área de desenvolvimento há
          6 meses. Procuro uma oportunidade no mercado como desenvolvedor Jr.
        </p>
        <p>
          Abaixo tem meu curriculo, com mais alguns detalhes sobre mim. Você
          também pode conhecer um pouco mais clicando no botão abaixo.
        </p>

        <ButtonContainer>
          <a href={cv} download="CV Matheus Filgueiras">
            <button>Currículo</button>
          </a>
          <NavLink to="/Graduation">
            <button>Formação</button>
          </NavLink>
        </ButtonContainer>
      </div>
    </AboutContainer>
  )
}
