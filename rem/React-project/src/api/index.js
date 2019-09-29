import axios from 'axios';
import { log } from 'util';

let nanshigou = axios.create({
    baseURL:'http://localhost:9876'
})

async function get(params){
    let {data} = await nanshigou.get(''+params.classifi)
    return data.data;
}

let post = ()=>{
    
}


let patch = ()=>{
    
}

let remove = ()=>{
    
}

export default {
    get,
    post,
    patch,
    delete:remove
}