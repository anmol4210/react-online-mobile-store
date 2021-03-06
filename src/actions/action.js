export const ADD_MOBILE = "ADD_MOBILE"
export const DELETE_MOBILE = "DELETE_MOBILE"
export const GET_ALL_MOBILES = "GET_MOBILES"
export const GET_MOBILE_BY_ID = "GET_MOBILE_BY_ID"
export const DELETE_ALL_MOBILES = "DELETE_ALL_MOBILES"

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


export const mobile = (mob) => {
    // console.log(data)
    return {

        type: GET_MOBILE_BY_ID,
        mob
    }
};

export const getMobileById = (id) => {
    return (dispatch) => {
        var url = apiUrl + `/${id}`
        return fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log("getting mobile action", data)
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

export function removeAllMobiles(data = []) {
    return {
        type: DELETE_ALL_MOBILES,
        data
    }

}

// export const removeAllMobiles = (page_number = 0, limit = 3) => {
//     return (dispatch) => {
//         var url = apiUrl + `?_page=${page_number}&_limit=${limit}`
//         return fetch(url, requestOptions)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 dispatch(removeAllMobiles(data))
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };