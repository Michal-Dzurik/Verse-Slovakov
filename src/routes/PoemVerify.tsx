import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";
import done from "../assets/done.svg";
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {useFirebase} from "../contexts/FirebaseContext.tsx";
import { doc, updateDoc } from "firebase/firestore";
import {Firestore} from "@firebase/firestore";

type VerifyParams =  {
    id: string| undefined;
}

function PoemVerify() {
    const { id } = useParams<VerifyParams>();
    const db: Firestore = useFirebase();
    const navigate = useNavigate();

    const [verified, setVerified] = useState<boolean|null>(null);

    const verify = async () =>{
        if (id == undefined) return;
        const ref = doc(db, "Poems", id);

        try{
            await updateDoc(ref, {
                verified: true
            })

            setVerified(true);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }catch(err){
            navigate('/404');
        }
    }

    useEffect(() => {
        if (id != undefined) {
            verify();
            return;
        }

        navigate('/404');
    }, []);

    return (
        <PageAnimationWrapper>
            <article className={ verified ? "text-center fade-in block" : "text-center opacity-0 hidden"}>
                <img className='inline-block' src={done} alt="symbol"/>
                <p className='mt-8'>
                    Vaše verše boli <span className='highlighted-text'>úspešne pridané</span>.
                </p>
            </article>
        </PageAnimationWrapper>
    )
}

export default PoemVerify
