import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";

function NotFound() {

    return (
        <PageAnimationWrapper>
            <article className="text-center">
                <h1 className='text-4xl text-white'>404</h1>
                <p>Táto stránka neexistuje</p>
            </article>
        </PageAnimationWrapper>
    )
}

export default NotFound
