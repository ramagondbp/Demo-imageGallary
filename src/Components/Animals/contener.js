import AnimalCompnent from '../Animals/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AnimalsAction } from '../Animals/action';

const mapStateToProps = state =>({
    animalsList: state.animalList.listResponse,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    AnimalsAction,
 }, dispatch);

const AnimalsContainer = connect(mapStateToProps, mapDispatchToProps)(AnimalCompnent);

export default AnimalsContainer;