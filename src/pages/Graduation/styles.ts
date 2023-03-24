import styled from 'styled-components'

export const GraduationContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 22rem;

    gap: 2rem;
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  li::before {
    content: '🔶';
    margin-right: 1rem;
  }

  img {
    width: 12.1rem;
    height: 3rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: column;
    font-size: 1.25rem;
    font-weight: 400;

    text-align: justify;

    max-height: 9.25rem;
  }
`

export const BaseButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 2.5rem 0 2.5rem;
  margin-top: 1rem;

  font-weight: bold;

  width: 15rem;
  height: 2.75rem;

  border: 0;
  border-radius: 8px;
`
export const CVButton = styled(BaseButtonContainer)`
  background-color: ${(props) => props.theme['orange-500']};
  color: ${(props) => props.theme['gray-100']};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['orange-300']};
    transition: 0.3s;
  }
`

export const RocketSeatButton = styled(BaseButtonContainer)`
  background-color: transparent;

  border: 2px solid ${(props) => props.theme['gray-400']};

  color: ${(props) => props.theme['gray-100']};

  cursor: not-allowed;
`

export const IbmrButton = styled(BaseButtonContainer)`
  background-color: transparent;

  border: 2px solid ${(props) => props.theme['gray-400']};

  color: ${(props) => props.theme['gray-100']};

  cursor: not-allowed;

  margin-top: 5.7rem;
`
