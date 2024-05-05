import axios from 'axios'
export default async function apiReq(url,method = 'GET', data){
    try {
        let result = await axios({
            method,
            baseURL:'http://localhost:4567/',
            url,
            data
        })
        return result
    } catch (error) {
        return error
    }
}