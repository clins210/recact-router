import { useParams, useHistory } from 'react-router-dom';


const PartB = ()=>{
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

export default PartB;