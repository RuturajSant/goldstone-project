import axios from "axios";

const fetchUser = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/fetch`)
    return response.data
}

// export 

export default fetchUser