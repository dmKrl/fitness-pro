import FittingItem from '../UI/FittingItem/FittingItem';
import data from '../../data.json';

function Fitting() {
    return (
        <div>
            Подойдёт для вас, если:
            {data.courses.ab1c3f.fitting.map((fit) => {
                return <FittingItem fit={fit} />;
            })}
        </div>
    );
}

export default Fitting;
