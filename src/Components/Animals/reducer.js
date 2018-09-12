const initialState = {
    List: {},
}

const AminamReducers = (state=initialState, { type = '', payLoad={} }) => {
    switch(type){
        case 'ANIMALS_LIST':
            return{
                ...state,
            listResponse: payLoad
            };
        case 'ERROR_IN_ANIMALS_LIST':
            return{
                ...state,
                listResponse: payLoad
            }
        default: 
        return state;
    }
}

export default AminamReducers;