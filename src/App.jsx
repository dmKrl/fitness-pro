import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDataCourses } from './redux/slices/dataSlices';
import GlobalStyle from './GlobalStyle.styles';
import AppRoutes from './routes';
import { db } from './firebase-config';

function App() {
    const dispatch = useDispatch();

    const coursesCollection = collection(db, 'data');

    const fetchDataCourses = async () => {
        await getDocs(coursesCollection).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data([]),
                id: doc.id,
            }));
            dispatch(setDataCourses(newData[0]?.data));
        });
    };
    useEffect(() => {
        setTimeout(() => {
            fetchDataCourses();
        }, 0);
    }, []);

    return (
        <>
            <GlobalStyle />
            <AppRoutes />
        </>
    );
}

export default App;
