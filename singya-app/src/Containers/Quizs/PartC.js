import { useParams, useHistory } from 'react-router-dom';


const PartC = ()=>{
    const { book, unit, part } = useParams();
    return(
        <div>
            {book}
            <hr/>
            {unit}
            <hr/>
            {part}
            <hr/>
        </div>
    )
}

export default PartC;