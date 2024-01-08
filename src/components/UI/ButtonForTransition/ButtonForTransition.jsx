import ButtonStyled from './ButtonForTransition.styled';

function ButtonForTransition(props) {
    return <ButtonStyled> {props.children}</ButtonStyled>;
}

export default ButtonForTransition;
