import { useDispatch } from 'react-redux';
import * as S from './ButtonForTransition.styled';
import { setShowWorkout } from '../../../redux/slices/progressSlice';

function ButtonForTransition(props) {
    const dispatch = useDispatch();
    return (
        <S.ButtonStyled
            to={`/training/${props.id}`}
            onClick={() => dispatch(setShowWorkout(true))}
        >
            {props.children}
        </S.ButtonStyled>
    );
}

export default ButtonForTransition;
