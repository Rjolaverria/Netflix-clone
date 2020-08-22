import { useState, useContext, useEffect } from 'react';
import FirebaseContext from '../context/firebase';

const useContent = (category) => {
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        (async () => {
            try {
                const res = await firebase
                    .firestore()
                    .collection(category)
                    .get();

                const data = res.docs.map((item) => ({
                    ...item.data(),
                    docId: item.id,
                }));

                setContent(data);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, [firebase, category]);

    return { [category]: content };
};

export default useContent;
