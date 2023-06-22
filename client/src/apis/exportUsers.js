import axios from "axios";

const exportUser = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/export`)
    return response.data
}

// export 

export default exportUser