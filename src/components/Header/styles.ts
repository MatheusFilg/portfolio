import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;

  background-color: ${(props) => props.theme['gray-800']};

  padding: 0 2rem;

  position: sticky;
  top: 0;
`

export const BaseHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme['gray-100']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['orange-500']};
    }
    &.active {
      color: ${(props) => props.theme['orange-500']};
    }
  }
`

export const InfoContainer = styled(BaseHeaderContainer)`
  gap: 2rem;
`
