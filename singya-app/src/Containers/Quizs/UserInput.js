import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { message } from 'antd';
import { useState } from 'react'

const StyledDiv = styled.div`
    height: 80vh;
    width: 80%;
    margin: 1vh auto;
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
// max-width: 300px;

const UserInput = ({ setUsername, setIsStart })=>{

    const [userInput, setUserInput] = useState("")

    return(
        <StyledDiv>
            請輸入姓名：
            <TextField
                id="name"
                value={userInput}
                onChange={(e)=>setUserInput(e.target.value)}
                sx={{ m: 1, width: '25ch' }}
            />
            <Button variant="contained" 
                onClick={()=>{
                    if (userInput === "") {
                        message.error('姓名不可為空！');
                    }
                    else {
                        setUsername(userInput)
                        setIsStart(true)
                    }
                }}
            > 開始作答 </Button>
        </StyledDiv>

    )
}

export default UserInput;