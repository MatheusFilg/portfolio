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
          <h3>Coffee Delivery</h3>
          <img src={projeto1} alt=""></img>
          <span>
            <NavLink
              to="https://github.com/MatheusFilg/-desafio02-CoffeeDelivery-Rocketseat"
              target="_blank"
            >
              <button>Github</button>
            </NavLink>
            <NavLink
              to="https://matheusf-coffeedelivery.netlify.app"
              target="_blank"
            >
              <button>Site</button>
            </NavLink>
          </span>
        </div>

        <div>
          <h3>Timer</h3>
          <img src={projeto2} alt=""></img>
          <span>
            <NavLink
              to="https://github.com/MatheusFilg/mod02-Timer-Rocketseat"
              target="_blank"
            >
              <button>Github</button>
            </NavLink>
            <NavLink to="https://matheusf-timer.netlify.app/" target="_blank">
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
