import styled from 'styled-components'
import Paper from '@mui/material/Paper';


const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 80px;
    margin: 10px 50px 20px;
`;

const PartCard = ({item}) =>{


    return(
        <Paper >
            <CardBox>
            {"part"+item}
            </CardBox>
        </Paper>
    )

}
export default PartCard;