import * as S from './styles'

const ButtonMedia = (props) => {
  return (
    <S.ButtonMedia href={props.link} target="_blank" >
      <img src={props.image} alt={props.alt} />
    </S.ButtonMedia>
  )
}

export default ButtonMedia