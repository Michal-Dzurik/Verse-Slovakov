import logo from '../assets/big-feather.svg'
import Input from "../components/Input";
import {useState} from "react";
import Checkbox from "../components/Checkbox.tsx";
import {Link, useNavigate} from "react-router-dom";
import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";
import {useFirebase} from "../contexts/FirebaseContext.tsx";
import {PoemType} from "../types/PoemType.ts";
import {ValidationResult} from "../types/ValidationResult.ts";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {EmailType} from "../types/EmailType.ts";
import {Firestore} from "@firebase/firestore";

function AddPoem() {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [poem, setPoem] = useState<string>('');
    const [terms, setTerms] = useState<boolean>(false);
    const [anonymous, setAnonymous] = useState<boolean>(false);

    const [pending, setPending] = useState<boolean>(false);

    const db: Firestore = useFirebase();
    const navigate = useNavigate();

    const goToVerification = () => {
        navigate("/email-uspesne-poslany");
    };

    const isPoemValid = (): ValidationResult => {
        if (!terms)
            return {
                valid: false,
                message: 'Pre odoslanie veršu je potrebné prijať podmienky stránky.'
            }

        if (!anonymous && (name.trim() == '') && (lastName.trim() == ''))
            return {
                valid: false,
                message: 'Začiarknite políčko \'Prispieť anonymne\' alebo vyplňte meno a priezvisko.'
            }

        if (email.trim() == '' || poem.trim() == '') {

            return {
                valid: false,
                message: 'Vyplňte všetky povinné polia.'
            }
        }

        return {
            valid: true
        };
    }

    const savePoem = async (poem: PoemType) => {
        setPending(true);
        try {
            const doc = await addDoc(collection(db,'Poems'), poem);

            const email: EmailType = {
                to: [poem.email],
                message: {
                    subject: 'Potvrdenie vaších veršov',
                    text: `Ďakujeme za váš príspevok \n ${window.location.protocol}//${window.location.host}/verifikacia/${doc.id}`,
                    html: `Ďakujeme za váš príspevok<br><a href="${window.location.protocol}//${window.location.host}/verifikacia/${doc.id}">Kliknite sem pre potvrdenie</a>`
                }
            }

            await addDoc(collection(db,'mail'), email);

            goToVerification()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }catch (e) {
            console.log(e)
            alert("Niekde nastala chyba");
        }

        setPending(false);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validation: ValidationResult = isPoemValid();

        if (validation.valid) savePoem({
            name: name,
            lastName: lastName,
            email: email,
            poem: poem,
            verified: false,
            timestamp: Timestamp.now(),
            shareCount: 0
        });
        else alert(validation.message);
    }

    return (
        <PageAnimationWrapper>
            <div className='text-center'>
                <img className='inline-block' src={logo} alt="symbol"/>

                <form className='mt-14 w-full flex flex-col' onSubmit={handleSubmit}>
                    <div>
                        <Input className='w-[47%] mr-[6%]'
                               name={name}
                               setName={setName}
                               type='text'
                               placeholder='Meno'></Input>
                        <Input className='w-[47%]'
                               name={lastName}
                               setName={setLastName}
                               type='text'
                               placeholder='Priezvisko'></Input>
                    </div>

                    <Input className='w-full mt-6'
                           name={email}
                           setName={setEmail}
                           type='eamil'
                           placeholder='Email'
                           required={true}></Input>

                    <textarea rows={6}
                              className='input mt-6 w-full font-normal placeholder:font-normal'
                              name='poem'
                              value={poem}
                              onChange={(e) => setPoem(e.target.value)}
                              placeholder='Vaše verše'
                              required={true}></textarea>

                    <Checkbox required={true} className='mt-6 mx-auto' checked={terms} setChecked={setTerms} name='terms'>
                        Súhlasím so spracovaním <Link target='_blank' className='text-white font-bold underline' to='/podmienky'>osobných údajov.</Link>
                    </Checkbox>

                    <Checkbox className='mt-6 mx-auto' checked={anonymous} setChecked={setAnonymous} name='anonymous'>
                        Prispieť <span className='text-white font-bold'>anonymne.</span>
                    </Checkbox>

                    <button type='submit' disabled={pending} className='link-button mx-auto mt-8'>Odoslať</button>

                </form>
            </div>

        </PageAnimationWrapper>
    )
}

export default AddPoem
