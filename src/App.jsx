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

    // const addTodo = async () => {
    //     try {
    //         const docRef = await addDoc(collection(db, 'users'));
    //         console.log('Document written with ID: ', docRef.id);
    //     } catch (error) {
    //         console.error('Error adding document: ', error);
    //     }
    // };

    const fetchDataCourses = async () => {
        await getDocs(coursesCollection).then((querySnapshot) => {
            // console.log(querySnapshot);
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data([]),
                id: doc.id,
            }));
            // console.log(newData[0]?.dataCourses);
            dispatch(setDataCourses(newData[0]?.data));
        });
    };
    useEffect(() => {
        // addTodo();
        setTimeout(() => {
            fetchDataCourses();
        }, 0);
    }, []);

    // console.log(courses);

    return (
        <>
            <GlobalStyle />
            <AppRoutes />
        </>
    );
}

export default App;
