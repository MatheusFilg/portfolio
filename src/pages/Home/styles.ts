import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${(props) => props.theme['gray-100']};

  gap: 1.75rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
  }
  span {
    color: ${(props) => props.theme['orange-700']};
  }

  h1 {
    font-size: 5rem;
    font-weight: 400;
  }

  p {
    font-size: 1.225rem;
    font-weight: 400;
  }

  button {
    background-color: ${(props) => props.theme['orange-500']};
    color: ${(props) => props.theme['gray-100']};

    width: 12.5rem;
    height: 2.75rem;

    border: 0;
    border-radius: 8px;

    cursor: pointer;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;

    &:hover {
      background-color: ${(props) => props.theme['orange-300']};
      transition: 0.3s;
    }
  }
`
