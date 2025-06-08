import axios,{CanceledError} from 'axios';


export default axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        'api-key':"ali salhab"
    }
});

export {CanceledError}