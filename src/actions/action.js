export const ADD_MOBILE = "ADD_MOBILE"
export const DELETE_MOBILE = "DELETE_MOBILE"
export const GET_ALL_MOBILES = "GET_MOBILES"
export const GET_MOBILE_BY_ID = "GET_MOBILE_BY_ID"


const apiUrl = 'http://localhost:3000/mobiles';
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
}
export const allMobiles = (data) => {
    // console.log(data)
    return {

        type: GET_ALL_MOBILES,
        data
    }
};

export const getMobiles = (page_number = 0, limit = 3) => {
    return (dispatch) => {
        var url = apiUrl + `?_page=${page_number}&_limit=${limit}`
        return fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                dispatch(allMobiles(data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const mobile = (data) => {
    // console.log(data)
    return {

        type: GET_MOBILE_BY_ID,
        data
    }
};

export const getMobileById = (id) => {
    return (dispatch) => {
        var url = apiUrl + `/${id}`
        return fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("getting mobile", data)
                dispatch(mobile(data))
            })
            .catch(error => {
                throw (error);
            });
    };
};



export function addMobileById(mobile) {
    const action = {
        type: ADD_MOBILE,
        mobile
    }
    return action;
}

export function removeMobileById(mobile) {
    const action = {
        type: DELETE_MOBILE,
        mobile
    }
    return action;
}