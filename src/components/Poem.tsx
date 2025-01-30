import {PoemType} from "../types/PoemType.ts";
import { format } from "date-fns";

interface Props{
    poem: PoemType
}

function Poem(props: Props) {
    const {poem,name,lastName,timestamp} = props.poem;

    return (
        <article className="poem">
            <p className='text-sm mb-2'><span className='font-bold text-[#fff]'>{ lastName && name ? name + " " + lastName : 'Anonym'}</span><span className='text-meta-data'> • <time className='text-meta-data' dateTime={timestamp.toDate().toISOString()}>{format(new Date(timestamp.nanoseconds), "dd.MM.yyyy")}</time></span></p>
            <p style={{whiteSpace: "pre-wrap"}} className='text-white'>{poem}</p>
        </article>
    );
}

export default Poem;
