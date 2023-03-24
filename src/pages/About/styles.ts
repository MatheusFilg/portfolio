import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 3rem 0 3rem;
  text-align: justify;

  img {
    width: 18rem;
    height: 32rem;

    border: 3px solid ${(props) => props.theme['orange-500']};
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem
      ${(props) => props.theme['orange-500']};
  }

  div {
    max-width: 40rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.25rem;
    font-size: 1.25rem;

    gap: 0.5rem;
  }

  h2 {
    margin: 1.25rem 0 1.25rem 0;
    font-size: 2.5rem;
    font-weight: 400;
  }

  strong {
    color: ${(props) => props.theme['orange-300']};
  }

  p {
    margin-bottom: 2rem;
  }
`

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  button {
    background-color: ${(props) => props.theme['orange-500']};
    color: ${(props) => props.theme['gray-100']};

    width: 12.5rem;
    height: 2.75rem;

    border: 0;
    border-radius: 8px;

    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: ${(props) => props.theme['orange-300']};
      transition: 0.3s;
    }
  }
`
