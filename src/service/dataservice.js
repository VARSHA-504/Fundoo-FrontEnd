import axios from 'axios';

const  headerConfig = {

    headers : {
        Authorization: "bearer" + ' ' +localStorage.getItem('token')
    }

}
export const addNote = (noteObj) =>{
    let response = axios.post('http://localhost:5000/api/v1/notes/new', noteObj, headerConfig)
    return response;
}

export const getAllNotes = () =>{
    let response = axios.get('http://localhost:5000/api/v1/notes/getAll', headerConfig)
    return response;
}

export const updateNote = (updateObj, id) =>{
    let response = axios.post(`http://localhost:5000/api/v1/notes/update/${id}`, updateObj , headerConfig)
    return response;
}

export const archiveTheNote = (id) =>{
    let response = axios.put(`http://localhost:5000/api/v1/notes/isArchived/${id}`, null, headerConfig)
    return response;
}