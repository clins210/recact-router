import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect} from 'react'
import Row from '../../Components/Layout/Row'
import Column from '../../Components/Layout/Column'
import UserInput from './UserInput';
import { shuffle } from '../utility';

const PartD = ()=>{
    const { book, unit, part } = useParams();
    const TaregetdataPath = `"../../data/${book}/unit${unit}/part${part}.json"`
    //axiox query back

    const [score, setScore] = useState(0)
    const [username, setUsername]= useState("")
    const [isStart, setIsStart] = useState(false)
    const [isOver, setIsOver] = useState(false)

    var questionArr = []
    var requestionPair = []

    const testdata = [
        {l: "日本",r:"Japan"},
        {l: "台灣",r:"Taiwan"},
        {l: "英國",r:"UK"},
        {l: "美國",r:"USA"},
        {l: "韓國",r:"Korea"},
        {l: "義大利",r:"Italia"},
        {l: "法國",r:"France"}
    ]

    // logic 
    // random input array by shuffle
    // slice to 5 v.s. 5 if letter than 5, get All and makePair

    const [ChoiceQA,setChoiceQA]=useState([])
    const [ChoiceA,setChoiceA]=useState([])

    const getTargetArray = async (inputArr)=>{
        shuffle(inputArr);
        if(inputArr.length>5) questionArr = inputArr.slice(0,5)
        // console.log(questionArr)
        requestionPair = await makePair(questionArr);
        setChoiceQA(questionArr);

        var reOptions=[]
        await requestionPair.map((item)=>(
            reOptions.push(item.a)
        ))
        shuffle(reOptions)
        setChoiceA(reOptions);
        console.log(reOptions)

    }
    
    //
    const makePair = (inputArr)=>{
        var temp_question=[]
        console.log(temp_question)
        inputArr.map((item,index)=>(
            temp_question.push({"q":item.l,"a":item.r})
        ))
        return temp_question
    }
    // const {requestionPair:ChoiceQA, reOptions:ChoiceA} = getTargetArray(testdata)
    console.log(ChoiceQA)
    console.log(ChoiceA)

    return(
        <>
        {(!isStart)?
            <div >
                <UserInput
                    setUsername={setUsername}
                    setIsStart={setIsStart}
                />
            </div>
        :<div>
            {/* {testdata.map((item)=>{
                <Row></Row>
            })} */}
            <Row>
                <Column>3</Column>
                <Column>3</Column>
            </Row>
            <Row>
                <Column>3</Column>
                <Column>3</Column>
            </Row>
        </div>
        
        }
        {/* <div>

            {book}
            <hr/>
            {unit}
            <hr/>
            {part}
            <hr/>
            <div></div>

        </div> */}
        </>
        
    )
}

export default PartD;