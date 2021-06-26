import axios from 'axios';

export const GetContactsList = () => {
    return axios.get(process.env.REACT_APP_API_ENDPOINT + 'contacts')
        .then(async (response) => {
            return response
        })
}

export const Getcontactbyid = id => {
    return axios.get(process.env.REACT_APP_API_ENDPOINT + 'contacts/Getcontactbyid/' + id,
        {
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Methods': '*'
            }
        })
        .then(response => {
            return response
        })
}

export const CreateProfile = profileObject => {
    return axios.post(process.env.REACT_APP_API_ENDPOINT + 'contacts', profileObject,
        {
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Methods': '*'
            }
        })
        .then(async (response) => {
            return response
        })
}

export const UpdateProfile = profileObject => {
    return axios.put(process.env.REACT_APP_API_ENDPOINT + 'contacts', profileObject,
        {
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Methods': '*'
            }
        })
        .then(async (response) => {
            return response
        })
}

export const UpdateStatus = (id, status) => {
    return axios.put(process.env.REACT_APP_API_ENDPOINT + 'contacts/UpdateStatus/' + id + '/' + status,
        {
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Methods': '*'
            }
        })
        .then(async (response) => {
            return response
        })
}
export const DeleteProfile = id => {
    return axios.delete(process.env.REACT_APP_API_ENDPOINT + 'contacts?id=' + id,
        {
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Methods': '*'
            }
        })
        .then(async (response) => {
            return response
        })
}