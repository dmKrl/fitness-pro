import DirectionItem from '../UI/DirectionItem/DirectionItem';
import data from '../../data.json';

function Directions() {
    return (
        <div>
            <h2>Направления:</h2>
            <ul>
                {data.courses.ab1c3f.directions.map((direction) => (
                    <li>
                        <DirectionItem text={direction} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Directions;
