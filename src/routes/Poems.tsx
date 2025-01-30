import PageAnimationWrapper from "../components/PageAnimationWrapper.tsx";
import {useEffect, useState} from "react";
import {PoemType} from "../types/PoemType.ts";
import Poem from "../components/Poem.tsx";

function Poems() {
    const [data, setData] = useState<PoemType[]>([]);

    useEffect(() => {
        setData([
            {
                lastName: 'Dzurík',
                name: 'Michal',
                email: 'misko7104@gmail.com',
                timestamp: 1738218838,
                poem: 'Slovnesko nám znova krváca \n' +
                    'pred očami demokracia sa vytráca \n' +
                    'vytvára sa autokratický vládca \n' +
                    'a hlas ľudu moc stráca \n' +
                    '\n' +
                    'Začalo to voľbami \n' +
                    'tak ako vždy \n' +
                    'Mysleli sme, že zlé časi sú za nami \n' +
                    'A je? Opýtajte sa tejto vlády \n' +
                    '\n' +
                    'Kultúru rozvracajú nám \n' +
                    'Zdravotníkom slobodu berú \n' +
                    'A za ministerské posty sa div nepobijú \n' +
                    'A čo ja bežný občan? Čo ja robiť mám? \n' +
                    '\n' +
                    'Na námestí budem protestovať \n' +
                    'Známych obvolám, že mali by domov pricestovať \n' +
                    'Prísť do domoviny a s nami bojovať \n' +
                    'A spolu s nami vládu odvolať ',
            },
            {
                lastName: 'Dzurík',
                name: 'Michal',
                email: 'misko7104@gmail.com',
                timestamp: 1738218838,
                poem: 'Slovnesko nám znova krváca \n' +
                    'pred očami demokracia sa vytráca \n' +
                    'vytvára sa autokratický vládca \n' +
                    'a hlas ľudu moc stráca \n' +
                    '\n' +
                    'Začalo to voľbami \n' +
                    'tak ako vždy \n' +
                    'Mysleli sme, že zlé časi sú za nami \n' +
                    'A je? Opýtajte sa tejto vlády \n' +
                    '\n' +
                    'Kultúru rozvracajú nám \n' +
                    'Zdravotníkom slobodu berú \n' +
                    'A za ministerské posty sa div nepobijú \n' +
                    'A čo ja bežný občan? Čo ja robiť mám? \n' +
                    '\n' +
                    'Na námestí budem protestovať \n' +
                    'Známych obvolám, že mali by domov pricestovať \n' +
                    'Prísť do domoviny a s nami bojovať \n' +
                    'A spolu s nami vládu odvolať ',
            }
        ]);
    },[])

    return (
        <PageAnimationWrapper>
            <div className='text-left mb-4'>
                <ul>
                    { data.map((poem, index) => (
                        <li key={index}>
                            {index != 0 ? (
                                <p className='text-center text-4xl text-meta-data mb-3'>
                                    ...
                                </p>
                            ) : ''}
                            <Poem poem={poem} />
                        </li>
                    ))}
                </ul>

                <div className='text-center'>
                    <a href='#' className="load-more">Načítať ďalšie</a>
                </div>
            </div>
        </PageAnimationWrapper>
    )
}

export default Poems
