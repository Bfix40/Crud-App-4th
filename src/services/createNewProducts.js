import axios from "axios"

const createNewProducts = async (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/`
    const req = await axios.post(URL, data)
    return req
}

export default createNewProducts