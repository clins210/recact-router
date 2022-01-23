import { Link } from "react-router-dom";
import Grid from '../../Components/Layout/Grid'
import Row from '../../Components/Layout/Row'
import Column from '../../Components/Layout/Column'
import Paper from '@mui/material/Paper';
import styled from 'styled-components'
import PartCard from '../../Components/Cards/PartCard'
import Navbar from '../../Components/Navbar'
import { useParams, useHistory } from 'react-router-dom';
import { getbookUnits } from '../../data'

const StyledDiv = styled.div`
    height: 50vh;
    width: 80%;
    margin: 1vh auto;
    display: flex;
    max-width: 300px;
`;



const Units = () =>  {

  const { book, unit } = useParams();
  const ready = getbookUnits(book).ready[unit-1].part;
  // const 
console.log(ready)
  
    return (
      <Grid>
        <Navbar/>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
        </nav>
        <StyledDiv>
          <Column>
            {ready.map((item,index)=>(
              <Link underline="none" to={`/${book}/unit${unit}/part${item}`}>
                <PartCard 
                  item={item}
                  key={index}
                />
              </Link>
              ))}
          </Column>
        </StyledDiv>


      </Grid>
    );
  }

export default Units;