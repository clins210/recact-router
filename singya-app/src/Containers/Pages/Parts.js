
import styled from 'styled-components'
import Navbar from '../../Components/Navbar'
import { useParams, useHistory } from 'react-router-dom';
import PartA from '../Quizs/PartA';
import PartB from '../Quizs/PartB';
import PartC from '../Quizs/PartC';
import PartD from '../Quizs/PartD';
import {csvJSON} from '../../data/csvTojsonParser'

const StyledDiv = styled.div`
    height: 50vh;
    width: 80%;
    margin: 1vh auto;
    display: flex;
    max-width: 300px;
`;



const Parts = () =>  {

  const {book, unit, part} = useParams();

    const TaregetdataPath = `"../../data/${book}/unit${unit}/part${part}.json"`
    // console.log(TaregetdataPath);
    // // if
    // // check the data of /data/book/ unit+unit/part+part
    // get(TaregetdataPath, function (data) {

    //   var data = JSON.parse(csvJSON(data));

    //   (data).each(function (k, v) {
    //       console.log(v);
    //   })

    // })

    if (part ==="A") return <PartA/>
    else if (part ==="B") return <PartB/>
    else if (part ==="C") return <PartC/>
    else if (part ==="D") return <PartD/>

  }

export default Parts;