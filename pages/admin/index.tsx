import type { NextPage } from 'next'
import styled from 'styled-components'
import { Article } from 'ui/molecules/Article'

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
`

const Admin: NextPage = () => {
  return (
    <Wrapper>
      
    </Wrapper>
  )
}

export default Admin
