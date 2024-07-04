import axios from 'axios';

export const fetchUserRepo=()=>{
    return axios({
        baseURL:"https://jsonplaceholder.typicode.com/",
        method:"GET",
        url:"posts",
        // params:
    })
}