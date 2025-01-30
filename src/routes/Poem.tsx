import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {useFirebase} from "../contexts/FirebaseContext.tsx";
import { doc } from "firebase/firestore";
import {Firestore, getDoc} from "@firebase/firestore";
import {PoemType} from "../types/PoemType.ts";
import PoemView from "../components/PoemView.tsx";

type Params =  {
    id: string| undefined;
}

function PoemVerify() {
    const { id } = useParams<Params>();
    const db: Firestore = useFirebase();
    const navigate = useNavigate();

    const [poem, setPoem] = useState<PoemType|null>(null);

    const load = async () =>{
        if (id == undefined) return;


        try{
            const poemRef = doc(db, "Poems", id);
            const poemSnap = await getDoc(poemRef);

            if (poemSnap.exists()) setPoem({ id: poemSnap.id, ...poemSnap.data() } as PoemType);
            else navigate('/404');


            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }catch(err){
            navigate('/404');
        }
    }

    useEffect(() => {
        if (id != undefined) {
            load();
            return;
        }

        navigate('/404');
    }, []);

    return (
        <PageAnimationWrapper>
            {poem ? (
                <article className="text-left fade-in">
                    <PoemView poem={poem}/>
                </article>
            ) : ''}
        </PageAnimationWrapper>
    )
}

export default PoemVerify
