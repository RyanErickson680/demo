import axios from 'axios'


const messageInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api/message`,
    timeout: 5000,
})

export const createMessage = ({
    firstName,
    lastName,
    email,
    company,
    phone,
    message,
}) => messageInstance.post('/create', {
    firstName,
    lastName,
    email,
    company,
    phone,
    message,
})