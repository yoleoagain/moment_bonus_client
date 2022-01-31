import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

export const Column: React.FC<Props> = ({ className, children }) => {
  return (
    <Col className={className}>
      {children}
    </Col>
  )
}