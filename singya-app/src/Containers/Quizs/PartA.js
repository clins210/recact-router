import { useParams, useHistory } from 'react-router-dom';


const PartA = ()=>{
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

export default PartA;