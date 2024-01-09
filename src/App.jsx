import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle.styles';
import AppRoutes from './routes';
import { db } from './firebase-config';

function App() {
    const [courses, setCourses] = useState({});
    const coursesCollection = collection(db, 'data');

    // const addTodo = async () => {
    //     try {
    //         const docRef = await addDoc(collection(db, 'users'));
    //         console.log('Document written with ID: ', docRef.id);
    //     } catch (error) {
    //         console.error('Error adding document: ', error);
    //     }
    // };

    const fetchPost = async () => {
        await getDocs(coursesCollection).then((querySnapshot) => {
            console.log(querySnapshot);
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setCourses(newData);
            console.log(courses, newData);
        });
    };
    useEffect(() => {
        // addTodo();
        setTimeout(() => {
            fetchPost();
        }, 0);
    }, []);
    console.log(courses);
    return (
        <>
            <GlobalStyle />
            <AppRoutes />
        </>
    );
}

export default App;
