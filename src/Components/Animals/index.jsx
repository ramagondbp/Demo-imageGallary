import React from 'react';
import ThumbnailGrid from '../Shared/ThumbnailGrid/';
import { Modal, handleClick, handleClose } from '../Shared/';

class AnimalCompnent extends React.Component{

    componentWillMount(){
        const {            
            AnimalsAction = () => {},
        } = this.props;  
        AnimalsAction();
    } 
     
    render(){      
       const {
        animalsList = [],
       } = this.props;
        const isArray  = Array.isArray(animalsList);
        if(!isArray){
            return <h4>Network Issue....! Data is not available</h4>
        }else {
            return(                
                <div className="grid-wrap">
                    <h3>Animals</h3>
                    <ThumbnailGrid list={animalsList} handleClick={handleClick}/>
                    <Modal handleClose={handleClose}/>
                </div> 
            );
        }
    }
}

export default AnimalCompnent; 