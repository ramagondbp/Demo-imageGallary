import { RequestHandler } from '../Shared/RequestHandler/';
import { get } from 'lodash';

export const listDispatcher = (dispatch = () => {}, response = {}, actionType = '') => {
    const actioPlayload = get(response, 'data');
    dispatch({
        type: actionType,
        payLoad: actioPlayload,
    })   
}

export const errorInList = (dispatch, err, actionType) => {    
    dispatch({
        type: actionType,
        payLoad: err,
    })
}

export const AnimalsAction = () => dispatch => {
    let dataUrl = `http://styleguide.effectivedigital.com/interview/api/animals`;   
    const inputParam = {
        method: 'GET',
        url: dataUrl,
        responseType: 'text',
        successCalBack: (responseData) => {
            listDispatcher(dispatch, responseData, 'ANIMALS_LIST')
        },
        errorCalBack: (errorData) => {
            errorInList(dispatch, errorData, 'ERROR_IN_ANIMALS_LIST')
        },
    };
    RequestHandler(inputParam)
   
}
