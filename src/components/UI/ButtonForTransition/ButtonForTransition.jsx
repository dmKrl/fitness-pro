import ButtonStyled from './ButtonForTransition.styled';

function ButtonForTransition(props) {
    return (
        <ButtonStyled to={`/training/${props.id}`}>
            {' '}
            {props.children}
        </ButtonStyled>
    );
}

export default ButtonForTransition;
