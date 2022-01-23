import styled from 'styled-components'
import Paper from '@mui/material/Paper';

const StyledDiv = styled.div`
    height: 20vh;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
`;

const Border = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: auto;
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 10px 10px;
`;

const InfoCard = ({item}) =>{

    const units = [1,2,3,4,5,6,7,8]
    return(
        <StyledDiv>
            <Paper elevation={3} />
            <Border flex-direction="column">
                    {item.booksName}
                {/* </div> */}
                {/* <Divider /> */}
                <hr size="0.5px" align="center" width="100%" color="gray"></hr>
                {units.map((unit)=>(
                <>{"Unit "+unit}</>
                ))}

                <br/>
                <> {item.unitName}   </>   
            </Border>
        </StyledDiv>


    )

}
export default InfoCard;