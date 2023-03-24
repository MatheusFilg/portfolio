import { ProjectContainer, ImgContainer } from './styles'
import projeto1 from '../../assets/projeto1.png'
import projeto2 from '../../assets/projeto2.png'
import projeto3 from '../../assets/projeto3.png'
import { NavLink } from 'react-router-dom'

export function Project() {
  return (
    <ProjectContainer>
      <ImgContainer>
        <div>
          <h3>Calculadora IMC</h3>
          <img src={projeto1} alt=""></img>
          <span>
            <NavLink to="https://github.com/MatheusFilg/IMC" target="_blank">
              <button>Github</button>
            </NavLink>
            <NavLink to="https://matheusf-imc.netlify.app" target="_blank">
              <button>Site</button>
            </NavLink>
          </span>
        </div>

        <div>
          <h3>Rede Social</h3>
          <img src={projeto2} alt=""></img>
          <span>
            <NavLink
              to="https://github.com/MatheusFilg/mod01-react-rocketseat"
              target="_blank"
            >
              <button>Github</button>
            </NavLink>
            <NavLink
              to="https://matheusf-redesocial.netlify.app"
              target="_blank"
            >
              <button>Site</button>
            </NavLink>
          </span>
        </div>

        <div>
          <h3>To-do List</h3>
          <img src={projeto3} alt=""></img>
          <span>
            <NavLink
              to="https://github.com/MatheusFilg/desafio-01---React"
              target="_blank"
            >
              <button>Github</button>
            </NavLink>
            <NavLink to="https://matheusf-todo.netlify.app" target="_blank">
              <button>Site</button>
            </NavLink>
          </span>
        </div>
      </ImgContainer>
    </ProjectContainer>
  )
}
