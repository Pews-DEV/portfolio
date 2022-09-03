import totoro from '../../assets/totoro.png'
import amigos from '../../assets/amigos.png'
import * as S from './styles'

const Landing = () => {
  return(
    <S.Body>
      <S.Home>
        <S.Introduction>
          <S.TextContainer>
            <S.Welcome>BEM VINDOS,</S.Welcome>
            <S.Nipon src={amigos} alt="amigos" />
          </S.TextContainer>
          <S.TextContainer>
            <S.Text>SOU O PEWS,</S.Text>
            <S.Text>AMANTE DE TECNOLOGIA</S.Text>
            <S.Text>E ESSE É MEU</S.Text>
            <S.Text>HUMILDE</S.Text>
            <S.Text>PORTFÓLIO</S.Text>
          </S.TextContainer>
        </S.Introduction>
        <S.ImgContainer>
          <S.Image src={totoro} alt="totoro" />
        </S.ImgContainer>
      </S.Home>
    </S.Body>
  )
};

export default Landing;