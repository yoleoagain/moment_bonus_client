import React, { ReactElement } from 'React'
import styled from 'styled-components'

type Props = {
  className?: string
  headerContent?: ReactElement | string
}

export const SArticle = styled.article`
  display: flex;
  flex-direction: column;
`

const ArticleContent = styled.div`
  background-color: #e3dded;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239b1464' fill-opacity='0.67'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`
const ArticleHead = styled.div<{ isText: boolean }>`
  font-size: 1.1 rem;
  ${({ isText, theme }) => isText && `
    padding: ${theme.paddings.half};
  `}
`

export const Article: React.FC<Props> = ({ headerContent, className, children }) => {
  return (
    <SArticle className={className}>
      {headerContent && (
        <ArticleHead isText={typeof headerContent === 'string'}>
          {headerContent}
        </ArticleHead>
      )}
      <ArticleContent>{children}</ArticleContent>
    </SArticle>
  )
}