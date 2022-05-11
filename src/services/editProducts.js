import axios from "axios"

const editProducts = async (id, prodObj) => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    const req = await axios.put(URL, prodObj)
    return req
}

export default editProducts