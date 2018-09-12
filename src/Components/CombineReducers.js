import { combineReducers } from 'redux';
import AnimalReducers  from '../Components/Animals/reducer';
import FruitVegReducers from '../Components/FruitVeg/reducer';

const CombineReducers = combineReducers({
    animalList: AnimalReducers,
    fruitVegList: FruitVegReducers,
});

export default CombineReducers;