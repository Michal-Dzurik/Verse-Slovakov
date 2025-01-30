import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";
import heart from '../assets/heart.svg'

function EmailSent() {

    return (
        <PageAnimationWrapper>
            <article className="text-center">
                <img className='inline-block' src={heart} alt="symbol"/>
                <p className='mt-8'>
                    Skontrolujte svoj email a <span className='highlighted-text'>potvrďte pridanie</span> vaších veršov. <br/><br/>

                    V prípade, že pridanie nepotvrdíte, vaše verše nebudú verejne viditeľné ani v elektronickej knihe.
                </p>
            </article>
        </PageAnimationWrapper>
    )
}

export default EmailSent
