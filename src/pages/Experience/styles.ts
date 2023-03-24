import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 6rem;
    font-size: 2rem;
    font-weight: 400;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  font-size: 1.5rem;

  div {
    width: 22.5rem;
    height: 6rem;

    border: 3px solid ${(props) => props.theme['gray-600']};
    border-radius: 0.8rem;

    background-color: ${(props) => props.theme['gray-600']};

    display: flex;
    align-items: center;
    gap: 1.5rem;

    &:hover {
      border-color: ${(props) => props.theme['orange-700']};
    }
  }

  img {
    width: 3.5rem;
    height: 3rem;
    margin-left: 1rem;
  }

  svg {
    margin-left: 0.8rem;
  }
`
