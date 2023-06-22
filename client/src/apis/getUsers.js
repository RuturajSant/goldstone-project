import axios from "axios";

const getUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/get`)
    return response.data
}

// export 

export default getUsers