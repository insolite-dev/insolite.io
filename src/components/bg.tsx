import { useState, useEffect } from 'react';
import { doc, collection, getDoc } from "firebase/firestore";
import { db } from "../api/firebase";

export default function Bg() {
    const [bgSrc, setBgSrc] = useState('');

    const defaultImage = "https://firebasestorage.googleapis.com/v0/b/insoliteio.appspot.com/o/ctd.png?alt=media&token=24c1842e-1fcd-4778-a539-78113bde1deb";
    useEffect(() => {
        const mainCol = collection(db, 'main');
        const initialDocRef = doc(mainCol, 'data');

        const fetchData = async () => {
            try {
                const docSnapshot = await getDoc(initialDocRef);
                if (!docSnapshot.exists()) {
                    console.error('No data found in Firebase');
                    setBgSrc(defaultImage);
                } else {
                    const bg = docSnapshot.data().bg;
                    setBgSrc(bg);
                }
            } catch (error) {
                console.error('Error fetching data from Firebase: ', error);
                setBgSrc(defaultImage);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="ctd-bg">
            <img
                src={bgSrc}
                alt="bg"
                className="ctd-bg-img"
            />
        </div>
    );
}

