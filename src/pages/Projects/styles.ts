import styled from 'styled-components'

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImgContainer = styled(ProjectContainer)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  margin-top: 3re;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h3 {
      font-size: 2rem;
      font-weight: 400;
    }

    h3,
    a {
      opacity: 0;
      padding: 0.8rem;
    }

    &:hover h3 {
      opacity: 1;
    }

    &:hover a {
      opacity: 1;
    }

    &:hover img {
      opacity: 0.6;
      transition: 0.3s;
      border-color: ${(props) => props.theme['orange-700']};
    }
  }

  img {
    width: 30rem;
    height: 15rem;
    border: 3px solid ${(props) => props.theme['gray-300']};
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
