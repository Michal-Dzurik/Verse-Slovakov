import logo from '../assets/big-feather.svg'
import Input from "../components/Input";
import {useEffect, useState} from "react";
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

    // Bot prevention
    const [honeyPot, setHoneyPot] = useState<string>('');
    const [startTime, setStartTime] = useState<number>(0);

    const [pending, setPending] = useState<boolean>(false);

    const db: Firestore = useFirebase();
    const navigate = useNavigate();

    const randomString = (): string => {
        return Math.random().toString(36).substr(2);
    };

    const HONEY_POT_DEFAULT = randomString();
    const MAX_TIME_FOR_BOTS = 3;

    useEffect(() => {
        setHoneyPot(HONEY_POT_DEFAULT);
        setStartTime(Date.now());
    },[])

    const goToVerification = () => {
        navigate("/email-uspesne-poslany");
    };

    const isPoemValid = (): ValidationResult => {
        if (!terms)
            return {
                valid: false,
                message: 'Pre odoslanie veršu je potrebné začiarknuť "Súhlasím so spracovaním osobných údajov".'
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

        const timeTaken = (Date.now() - startTime) / 1000;

        if (honeyPot !== HONEY_POT_DEFAULT || timeTaken < MAX_TIME_FOR_BOTS) {
            return {
                valid: false,
                message: 'Bot detekovaný.'
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
                    text: `Dobrý deň,\n\nďakujeme za váš príspevok. Verifikovať ho môžete kliknutím na tento odkaz ${window.location.protocol}//${window.location.host}/verifikacia/${doc.id}. \n\nS pozdravom, \nVerše Slovákov`,
                    html: `Dobrý deň,<br/><br/>ďakujeme za váš príspevok. Verifikovať ho môžete kliknutím na tento odkaz <br><a href="${window.location.protocol}//${window.location.host}/verifikacia/${doc.id}">${window.location.protocol}//${window.location.host}/verifikacia/${doc.id}</a>. <br><br>S pozdravom,<br>Verše Slovákov`
                }
            }

            await addDoc(collection(db,'mail'), email);

            goToVerification();
        }catch (e) {
            console.log(e)
            alert("Niekde nastala chyba.");
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
                               autoComplete='off'
                               placeholder='Meno'></Input>
                        <Input className='w-[47%]'
                               name={lastName}
                               setName={setLastName}
                               type='text'
                               autoComplete='off'
                               placeholder='Priezvisko'></Input>
                    </div>

                    <input
                        type="text"
                        name={randomString()}
                        className='hidden'
                        value={honeyPot}
                        onChange={(e) => setHoneyPot(e.target.value)}
                        autoComplete="off"
                    />

                    <Input className='w-full mt-6'
                           name={email}
                           setName={setEmail}
                           type='eamil'
                           placeholder='Email'
                           autoComplete='off'
                           required={true}></Input>

                    <textarea rows={6}
                              className='input mt-6 w-full font-normal placeholder:font-normal'
                              name='poem'
                              value={poem}
                              onChange={(e) => setPoem(e.target.value)}
                              placeholder='Vaše verše'
                              autoComplete='off'
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
