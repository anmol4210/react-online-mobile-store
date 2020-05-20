export const ADD_MOBILE = "ADD_MOBILE"
export const DELETE_MOBILE = "DELETE_MOBILE"
export const GET_MOBILES = "GET_MOBILES"


const apiUrl = 'http://localhost:3000/mobiles';
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
}
export const fetchData = (data) => {
    // console.log(data)
    return {

        type: GET_MOBILES,
        data
    }
};

export const fetchMobilesData = (page_number = 0, limit = 3) => {
    return (dispatch) => {
        var url = apiUrl + `?_page=${page_number}&_limit=${limit}`
        return fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(fetchData(data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export function addMobileById(id) {
    const action = {
        type: ADD_MOBILE,
        id
    }
    return action;
}

export function removeMobileById(id) {
    const action = {
        type: DELETE_MOBILE,
        id
    }
    return action;
}