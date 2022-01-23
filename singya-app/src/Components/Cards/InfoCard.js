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

const InfoCard = ({item}) =>{

    const units = [1,2,3,4,5,6,7,8]
    return(
        <Paper >
            <CardBox>
                {item.booksName}
            </CardBox>
        </Paper>
    )

}
export default InfoCard;