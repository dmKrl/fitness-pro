import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import FittingItem from '../UI/FittingItem/FittingItem';
import data from '../../data.json';
import * as S from './Fitting.style';
import { db } from '../../firebase-config';

function Fitting() {
    const [coursesFitting, setCoursesFitting] = useState();
    const coursesCollection = collection(db, 'data');

    const fetchFittingCollection = async () => {
        await getDocs(coursesCollection).then((arrayCoursesFitting) => {
            console.log(arrayCoursesFitting);
            const newData = arrayCoursesFitting.docs.map((doc) => ({
                ...doc.data(),
            }));
            setCoursesFitting(newData);
            console.log(newData);
        });
    };
    useEffect(() => {
        fetchFittingCollection();
    }, []);
    console.log(data.courses.ab1c3f.fitting, coursesFitting);

    return (
        <S.BlockFitting>
            <S.TittleFitting>Подойдёт для вас, если:</S.TittleFitting>
            <S.BlockFittingItems>
                {data.courses.ab1c3f.fitting.map((fit) => {
                    return <FittingItem fit={fit} />;
                })}
            </S.BlockFittingItems>
        </S.BlockFitting>
    );
}

export default Fitting;
