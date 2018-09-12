import FruitVegCompnent from '../FruitVeg/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FruitVegAction } from '../FruitVeg/action';

const mapStateToProps = state =>({
    fruitVegList: state.fruitVegList.fruitVegResponse,    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    FruitVegAction,
 }, dispatch);

const FruitVegContainer = connect(mapStateToProps, mapDispatchToProps)(FruitVegCompnent);

export default FruitVegContainer;