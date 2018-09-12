const initialState = {
    List: {},
}

const FruitVegReducers = (state=initialState, { type = '', payLoad={} }) => {
    switch(type){
        case 'FRUIT_VEG__LIST':
            return{
                ...state,
                fruitVegResponse: payLoad
            };
        case 'ERROR_IN_FRUIT_VEG__LIST':
            return{
                ...state,
                fruitVegResponse: payLoad
            }
        default: 
            return state;
    }
}

export default FruitVegReducers;