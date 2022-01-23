import { Link } from "react-router-dom";
import Grid from '../../Components/Layout/Grid'
import Column from '../../Components/Layout/Column'
import Paper from '@mui/material/Paper';
import styled from 'styled-components'
import InfoCard from '../../Components/Cards/InfoCard'
import Navbar from '../../Components/Navbar'
import { getData } from '../../data'

const StyledDiv = styled.div`
    height: 50vh;
    width: 80%;
    margin: 1vh auto;
    display: flex;
    max-width: 300px;
`;



const Home = () =>  {

  const books = getData();

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
            {books.map((item)=>(
              <Link underline="none" to={`/${item.booksName}`}>
                <InfoCard 
                  item={item}
                  key={item.booksName}
                />
              </Link>
              ))}
          </Column>
        </StyledDiv>
      </Grid>
    );
  }

export default Home;