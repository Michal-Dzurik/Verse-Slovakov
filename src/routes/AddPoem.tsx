import logo from '../assets/big-feather.svg'
import Input from "../components/Input";
import {useState} from "react";
import Checkbox from "../components/Checkbox.tsx";
import {Link} from "react-router-dom";
import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";

/*interface FormData {
    name?: string,
    lastName?: string,
    email: string,
    poem: string,
}*/

function AddPoem() {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [poem, setPoem] = useState<string>('');

    const [terms, setTerms] = useState<boolean>(false);
    const [anonymous, setAnonymous] = useState<boolean>(false);

    return (
        <PageAnimationWrapper>
            <div className='text-center'>
                <img className='inline-block' src={logo} alt="symbol"/>

                <form className='mt-14 w-full flex flex-col'>
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
                           placeholder='Email'></Input>

                    <textarea rows={6}
                              className='input mt-6 w-full font-normal placeholder:font-normal'
                              name='poem'
                              onChange={(e) => setPoem(e.target.value)}
                              placeholder='Vaše verše'>{poem}</textarea>

                    <Checkbox className='mt-6 mx-auto' checked={terms} setChecked={setTerms} name='terms'>
                        Súhlasím so spracovaním <Link target='_blank' className='text-white font-bold underline' to='/podmienky'>osobných údajov.</Link>
                    </Checkbox>

                    <Checkbox className='mt-6 mx-auto' checked={anonymous} setChecked={setAnonymous} name='anonymous'>
                        Prispieť anonymne <span className='text-white font-bold'>anonymne.</span>
                    </Checkbox>

                    <button className='link-button mx-auto mt-8'>Odoslať</button>

                </form>
            </div>

        </PageAnimationWrapper>
    )
}

export default AddPoem
