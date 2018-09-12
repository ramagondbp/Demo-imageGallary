import React from 'react';
import ThumbnailGrid from '../Shared/ThumbnailGrid/';
import { Modal, handleClick, handleClose  } from '../Shared/';

class FruitVegCompnent extends React.Component{
    componentWillMount(){
        const {
            FruitVegAction = () => {},
        } = this.props;
        FruitVegAction();
    }

    render(){
         const {
            fruitVegList = [],
         } = this.props;

         const isArray  = Array.isArray(fruitVegList);
         if(!isArray){
             return <h4>Network Issue....! Data is not available</h4>
         } else{
            return( 
                <div className="grid-wrap">
                    <h3>Fruit & Veg</h3>
                    <ThumbnailGrid list={fruitVegList} handleClick={handleClick} />
                    <Modal handleClose={handleClose} />
                </div>
            )
         }
        
    }
}

export default FruitVegCompnent;