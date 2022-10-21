import * as S from './styles'

const Title = (props) => {
  return(
    <S.Container>
      <S.Title>{props.title}</S.Title>
      <S.Nipon>{props.nipon}</S.Nipon>
    </S.Container>
  )
};

export default Title;