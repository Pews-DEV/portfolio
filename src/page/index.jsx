import Home from "../components/home";
import Header from "../components/header";
import Projects from "../components/projects";
import * as S from './styles'

const Page = () => {
return(
  <S.MainContainer>
    <Header />
    <Home />
    <Projects />
  </S.MainContainer>
)
};

export default Page;