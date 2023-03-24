import { ImgContainer, InfoContainer } from './styles'
import nextlogo from '../../assets/nextjs-logo.png'
import { Atom, FileCss, FileHtml, FileJs, FileTs } from 'phosphor-react'

export function Experience() {
  return (
    <InfoContainer>
      <h2>Experiência nas seguintes linguagens</h2>
      <ImgContainer>
        <div>
          <FileJs size={48} color="#ead204" weight="light" />
          <p>Javascript</p>
        </div>
        <div>
          <FileHtml size={48} color="#e44d26" weight="light" />
          <p>HTML</p>
        </div>
        <div>
          <FileCss size={48} color="#105487" weight="light" />
          CSS
        </div>
        <div>
          <Atom size={48} color="#01d8ff" weight="light" />
          React
        </div>
        <div>
          <FileTs size={48} color="#3178c6" weight="light" />
          Typescript
        </div>
        <div>
          <img src={nextlogo} alt="" />
          Next.js
        </div>
      </ImgContainer>
    </InfoContainer>
  )
}
