import logo from '../assets/logo.svg'
import {Link} from "react-router-dom";

function Home() {

    return (
        <>
            <img src={logo} alt="symbol" className='w-56 md:w-96'/>
            <p className='text-center'>
                Tento nezávislý študentský projekt <span className='highlighted-text'>chce kolektívnou poéziou poukázať na nespokojnosť so súčasným vládnym zriadením.</span> <br/><br/>

                Chceme bojovať za naše politické presvedčenie aj takýmto spôsobom, keďže si uvedomujeme, akú dôležitú rolu hrala poézia v našej histórii. <br/><br/>

                Taktiež si uvedomujeme, že nie každý z nás je ochotný stáť na námestí, preto ponúkame aj takúto formu protestu. Vo vhodný moment <span className='highlighted-text'>plánujeme</span> zo všetkých veršov slovenských občanov <span className='highlighted-text'>vytvoriť elektronickú knihu</span>, ktorá bude voľne dostupná na internete. <br/><br/>

                <span className='highlighted-text'>Ak máte čo povedať, pridajte aj vy svoje verše a vyjadrite svoj názor umelecky a slušne!</span> <br/><br/>
            </p>

            <Link className='link-button' to='/pridat-svoj-vers'>Prispieť svojou tvorbou</Link>
        </>
    )
}

export default Home
