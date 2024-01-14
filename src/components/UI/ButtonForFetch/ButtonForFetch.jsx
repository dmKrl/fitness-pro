import ButtonStyled from './ButtonForFetch.style';

function ButtonForFetch(props) {
    return (
        <ButtonStyled type="button" onClick={props.onClick}>
            {props.children}
        </ButtonStyled>
    );
}

export default ButtonForFetch;
