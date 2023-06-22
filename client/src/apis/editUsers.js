import axios from "axios";

const editUsers = async (id, payload) => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/${id}`, payload)
    return response.data
}

// export 

export default editUsers