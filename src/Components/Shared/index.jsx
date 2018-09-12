import React from 'react';

export const Modal = ({ handleClose = () => {} }) => (
    <div id="myModal" className="modal" >
        <div className="modal-content">           
            <span className="close" id="close" onClick={handleClose}>&times;</span>
            <div id="img-wrap"></div>                      
        </div>
    </div>
);

export const handleClick = (event, src = '', alt='', width='', height='') => {           
    const {
        currentTarget:{
            nextSibling:{
                parentNode:{
                    parentNode:{
                        childNodes = [],
                    } = {},
                } = {},
            } = {},
        } = {},
    } = event;
    let childNode = childNodes[2];
    let imgWrap = childNode.childNodes[0].childNodes[1];
    let img = document.createElement('img');   
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('style', `height:${height}px; width:${width}px;`);
    imgWrap.appendChild(img);        
    if(img.previousSibling){
        img.previousSibling.remove();
    }   
    childNode.setAttribute('style', 'display:block;');
} 

export const handleClose = (event) => {
    const {
        currentTarget:{
            parentNode:{
                parentNode = {},
            } = {},
        } = {},
    } = event;        
    parentNode.setAttribute('style', 'display: none;');
}