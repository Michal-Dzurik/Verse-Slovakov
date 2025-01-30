import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";

function Terms() {

    return (
        <PageAnimationWrapper>
            <article className="text-center">
                <p>
                    Táto stránka ukladá vaše <span className='highlighted-text'>meno, priezvisko</span> (ak nezačiarknete políčko “Prispieť anonymne.”) <span className='highlighted-text'>emailovú adresu a samotné verše</span>. <br/><br/>

                    Tieto údaje <span className='highlighted-text'>slúžia na overnie autorstva a vyhnutia sa internetovým botom</span> (pomocou emailovej verifikácie). <br/><br/>

                    Dáta <span className='highlighted-text'>sú uložené v službe Firebase</span> a má k nim prístup LEN administrátor stránky a samotná služba. <br/><br/>

                    Pre viac info pozri <a className='highlighted-text underline' target='_blank' href="https://firebase.google.com/support/privacy">Firebase privacy policy</a>. <br/><br/>
                </p>
            </article>
        </PageAnimationWrapper>
    )
}

export default Terms
