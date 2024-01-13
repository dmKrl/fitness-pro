import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GlobalStyle from './GlobalStyle.styles';
import AppRoutes from './routes';
import { db } from './firebase-config';
import { setDataCourses } from './redux/slices/dataSlices';

function App() {
    const dispatch = useDispatch();
    console.log(process.env.REACT_APP_API_KEY);
    // const addTodo = async () => {
    //     try {
    //         const docRef = await addDoc(collection(db, 'users'));
    //         console.log('Document written with ID: ', docRef.id);
    //     } catch (error) {
    //         console.error('Error adding document: ', error);
    //     }
    // };

    const coursesCollection = collection(db, 'data');

    const fetchDataCourses = async () => {
        await getDocs(coursesCollection).then((arrayCoursesFitting) => {
            const newData = arrayCoursesFitting.docs.map((doc) => ({
                ...doc.data(),
            }));
            console.log(newData[0]);
            dispatch(setDataCourses(newData[0]));
        });
    };
    useEffect(() => {
        fetchDataCourses();
    }, []);
    return (
        <>
            <GlobalStyle />
            <AppRoutes />
        </>
    );
}

export default App;
