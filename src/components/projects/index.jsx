import Title from '../Title';
import book from '../../assets/book.png'
import portfolio from '../../assets/portfolio.png'
import pitanga from '../../assets/pitanga.png'
import * as S from './styles'

const Projects = () => {
  return(
    <S.Container>
      <S.CallAction onClick={() => window.open('https://github.com/Pews-DEV', "_blank")}>
        <S.CallDescription>PARA MAIS PROJETOS</S.CallDescription>
        <S.CallGithub>GITHUB</S.CallGithub>
      </S.CallAction>
      <Title title="PROJETOS" nipon="プロジェクト" />
      <S.Board>
        <S.LeftContainer>
          <S.LeftPanel>
            <S.LeftDescription>PORTFOLIO PARA DOCUMENTAR MEUS PRINCIPAIS PROJETOS</S.LeftDescription>
            <img src={portfolio} alt="portfolio" />
          </S.LeftPanel>
          <S.LeftPanel>
            <S.LeftDescription>PROJETO OPEN SOURCE COM A IDEIA DE SER UMA REDE SOCIAL PARA AMANTES DE LIVROS</S.LeftDescription>
            <img src={book} alt="book writer" />
          </S.LeftPanel>
        </S.LeftContainer>
        <S.RightContainer>
          <img src={pitanga} alt="maria pitanga" />
          <S.RightDescription>PROJETO FREELANCER PARA ATENDER AO DELIVERY DE UMA DAS MAIORES FRANQUIAS DE AÇAÍDO BRASIL</S.RightDescription>
        </S.RightContainer>
      </S.Board>
    </S.Container>
  )
};

export default Projects;