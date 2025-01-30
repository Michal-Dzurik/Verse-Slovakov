import {PoemType} from "../types/PoemType.ts";
import { format } from "date-fns";

interface Props{
    poem: PoemType
}

function Poem(props: Props) {
    const {poem,name,lastName,timestamp} = props.poem;

    return (
        <article className="poem">
            <p className='text-sm mb-2'><span className='font-bold text-[#fff]'>{ lastName && name ? name + " " + lastName : 'Anonym'}</span><span className='text-meta-data'> • <time className='text-meta-data' dateTime={format(new Date(timestamp * 1000), "yyyy-MM-dd HH:mm:ss")}>{format(new Date(timestamp * 1000), "dd.MM.yyyy")}</time></span></p>
            <p style={{whiteSpace: "pre-wrap"}} className='text-white'>{poem}</p>
        </article>
    );
}

export default Poem;
