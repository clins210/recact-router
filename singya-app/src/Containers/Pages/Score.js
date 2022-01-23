import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';

const Score = ({}) =>  {
  const {book, unit, part} = useParams();
  // {testinfo}

    const testInfo = {
      name:"amy",
      score:3,
      total:10,
      time:"2021/1/23",
    }

    return (
      <div className="App">
        {testInfo.name}
        {testInfo.score}/{testInfo.total}

        {book}/unit{unit}/part{part}
        {testInfo.time}
        <Link to={`/${book}/unit${unit}/part${part}`}>
          <bottom>Again</bottom>
        </Link>
        <Link to="/home">
          <bottom>Back To Home</bottom>
        </Link>
      </div>
    );
  }

export default Score;

// const testInfo={
//   name,
//   score,
//   total,
//   time,
//   book,
//   unit,
//   part
// }