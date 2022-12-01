import { doc, addDoc, setDoc, getDoc, serverTimestamp, query, getDocs, where } from 'firebase/firestore';
import { db } from 'services/firebase';

const addDocument = async (collection, data) => {
    try {
        const docRef = await addDoc(collection(db, collection), data);
        return docRef.id;
    } catch (error) {
        console.error('Firebase/db/addDocument Error: ', error.message);
        return false;
    }
};

const setDocument = async (collection, docId, data) => {
    try {
        const cityRef = doc(db, collection, docId);
        await setDoc(cityRef, data, { merge: true });
        return true;
    } catch (error) {
        console.error('Firebase/db/setDocument Error: ', error.message);
        return false;
    }
};

const getDocument = async (collection, docId) => {
    try {
        const docRef = doc(db, collection, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error('Firebase/db/getDocument Error: ', error.message);
        return null;
    }
};

const getCollection = async (collection, conditions = []) => {
    try {
        if (conditions.length) {
            conditions = conditions.map((w) => where(w[0], w[1], w[2]));
        }

        const q = query(collection(db, collection), ...conditions);
        const querySnapshot = await getDocs(q);

        let results = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data() as object;
            results.push({
                docId: doc.id,
                ...data
            });
        });

        return results;
    } catch (error) {
        console.error('Firebase/db/getCollection Error: ', error.message);
        return null;
    }
}

export {
    addDocument,
    setDocument,
    getDocument,
    getCollection
};
