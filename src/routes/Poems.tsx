import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";
import {useEffect, useState} from "react";
import {PoemType} from "../types/PoemType.ts";
import PoemView from "../components/PoemView.tsx";
import {collection, getDocs, orderBy, query, where, startAfter, limit, QueryDocumentSnapshot, DocumentData} from "firebase/firestore";
import {useFirebase} from "../contexts/FirebaseContext.tsx";


function Poems() {
    const LIMIT = 5;

    const [poems, setPoems] = useState<PoemType[]>([]);
    const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>>();
    const [hasMore, setHasMore] = useState<boolean>(true);

    const db = useFirebase();

    const updatePoems = (poemsList: PoemType[]) => {
        for (const newPoem of poemsList) {
            setPoems((prevPoems) => {
                const exists = prevPoems.some((poem) => poem.id === newPoem.id);
                return exists ? prevPoems : [...prevPoems, newPoem];
            });
        }

    }

    const fetchPoems = async (startAfterDoc?: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
        try {
            const poemsCollection = collection(db, 'Poems');

            let poemsQuery = query(
                poemsCollection,
                where('verified', '==', true),
                orderBy('timestamp'),
                limit(LIMIT),
            );

            if (startAfterDoc) {
                poemsQuery = query(poemsQuery, startAfter(startAfterDoc));
            }

            const querySnapshot = await getDocs(poemsQuery);

            if (querySnapshot.empty) {
                setHasMore(false);
                return;
            }

            const poemsList: PoemType[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                poem: doc.data().poem || '',
                name: doc.data().name || '',
                lastName: doc.data().lastName || '',
                timestamp: doc.data().timestamp || '',
                email: doc.data().email || '',
                verified: doc.data().verified || false,
            }));

            if (poemsList.length <= LIMIT) setHasMore(false);

            updatePoems(poemsList);

            setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        } catch (error) {
            console.error('Error fetching poems: ', error);
        }
    }

    useEffect(() => {
        fetchPoems();
    },[]);

    const loadMorePoems = () => {
        if (lastVisible) fetchPoems(lastVisible);
    };

    return (
        <PageAnimationWrapper>
            <div className={poems.length != 0 ? "text-left mb-4 fade-in block" : "text-left mb-4 opacity-0 hidden"}>
                <ul>
                    { poems.map((poem, index) => (
                        <li key={index}>
                            {index != 0 ? (
                                <p className='text-center text-4xl text-meta-data mb-3'>
                                    ...
                                </p>
                            ) : ''}
                            <PoemView poem={poem} share={true} />
                        </li>
                    ))}
                </ul>

                { hasMore ? (
                    <div className='text-center'>
                        <a href='#' onClick={ (e) => {
                            e.preventDefault();
                            loadMorePoems();
                        }} className="load-more">Načítať ďalšie</a>
                    </div>
                ) : ''}
            </div>
        </PageAnimationWrapper>
    )
}

export default Poems
