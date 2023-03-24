import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  margin-top: 2rem;

  font-size: 1.3rem;
  font-weight: 400;
`

export const TextContainer = styled.div`
  max-width: 40rem;

  margin-bottom: 2rem;

  text-align: justify;
`

export const SocialContatiner = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }
  svg {
    margin-left: 0.8rem;
  }

  div {
    display: flex;
    align-items: center;

    width: 18rem;
    height: 5rem;
    background-color: ${(props) => props.theme['gray-600']};

    border: 3px solid ${(props) => props.theme['gray-600']};
    border-radius: 0.8rem;

    gap: 1.5rem;

    span {
      margin-left: -6rem;
      font-size: 0.85rem;
      opacity: 0;
    }

    h4 {
      font-size: 1.3rem;
      font-weight: 400;
    }

    &:hover {
      border-color: ${(props) => props.theme['orange-700']};

      h4 {
        opacity: 0;
      }

      span {
        opacity: 1;
      }
    }
  }
`
