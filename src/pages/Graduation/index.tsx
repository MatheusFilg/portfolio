import {
  CVButton,
  GraduationContainer,
  IbmrButton,
  RocketSeatButton,
} from './styles'
import cvlogo from '../../assets/cursoemvideo-logo.png'
import rocketlogo from '../../assets/rocketseatlogo.png'
import ibmrlogo from '../../assets/ibmrlogo.png'
import { NavLink } from 'react-router-dom'
import { Check, Lock } from 'phosphor-react'

export function Graduation() {
  return (
    <GraduationContainer>
      <div>
        <li>
          <img src={cvlogo} alt="" />
        </li>
        <p>
          Comecei meus estudos como desenvolvedor através do Curso em vídeo, no
          qual aprendi a base do Javascript, além disso o curso também ensina
          fundamentos importante de HTML e CSS.
        </p>
        <NavLink to={'http://surl.li/frqrl'} target="_blank">
          <CVButton>
            <Check size={32} color="#c4c4cc" weight="bold" />
            Visualizar Curso
          </CVButton>
        </NavLink>
      </div>

      <div>
        <li>
          <img src={rocketlogo} alt="" />
        </li>
        <p>
          Atualmente, estudo React pela Rocketseat, onde é ensinado toda a base
          do framework até o mais avançado, durante esse caminho é realizado
          projetos, com o intuito de por em prática toda a teoria ensinada
          durante o módulo.
        </p>
        <NavLink to="">
          <RocketSeatButton disabled>
            <Lock size={32} color="#c4c4cc" weight="bold" />
            Em Progresso
          </RocketSeatButton>
        </NavLink>
      </div>

      <div>
        <li>
          <img src={ibmrlogo} alt="" />
        </li>
        <p>
          Atualmente cursando o 1º período de Ciências da Computação na
          modalidade EAD da IBMR.
        </p>
        <NavLink to="">
          <IbmrButton disabled>
            <Lock size={32} color="#c4c4cc" weight="bold" />
            Em Progresso
          </IbmrButton>
        </NavLink>
      </div>
    </GraduationContainer>
  )
}
