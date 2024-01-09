import ButtonStyled from './ButtonForChange.style';

function ButtonForFetch(props) {
    return <ButtonStyled type="button">{props.children}</ButtonStyled>;
}

export default ButtonForFetch;
