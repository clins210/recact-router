import axios from 'axios'

const instance = axios.create( { baseURL = "http://localhost:4000/api"})

const getMenu = async () => {
    const {data: {menu}}  = await instance.get('/menu') 
    return menu
}

const getData = async( bookid ) => {
    
    try{
        const {data: {dataSet}}  = await instance.get('/questions', {params: {bookid}})
        return dataSet

    }catch(error){
        console.log(error)
    }
}

const sendRecord = async (userInfo) => {
    try{
        return msg
    }catch(error){
        console.log(error)
    }
    
}

export {getMenu, getData, }