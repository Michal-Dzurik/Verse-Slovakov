import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";
import done from "../assets/done.svg";

function PoemVerify() {

    return (
        <PageAnimationWrapper>
            <article className="text-center">
                <img className='inline-block' src={done} alt="symbol"/>
                <p className='mt-8'>
                    Vaše verše boli <span className='highlighted-text'>úspešne pridané</span>.
                </p>
            </article>
        </PageAnimationWrapper>
    )
}

export default PoemVerify
