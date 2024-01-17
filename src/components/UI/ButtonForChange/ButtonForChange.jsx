import ButtonStyled from './ButtonForChange.style';

function ButtonForFetch(props) {
    return (
        <ButtonStyled onClick={props.onClick} type="button">
            {props.children}
        </ButtonStyled>
    );
}

export default ButtonForFetch;
