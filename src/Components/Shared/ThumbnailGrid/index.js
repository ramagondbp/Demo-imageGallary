import React from 'react';

const ThumbnailGrid = ({list = [], handleClick=() =>{}}) => (    
    <div className="grid">   
        {
            list.map((
            {
                Id = '',
                ImageURLs:{Thumb='', FullSize=''},
                Title ='',
                Width='',
                Height='',
                Description ='',
            }) => {
                    return ( <div key={`item-${Id}`} id={`item-${Id}`} onClick={(e) =>handleClick(e, FullSize, Title, Width, Height)} >
                        <img src={Thumb} alt={Title} />
                        <h4>{Title}</h4>
                        <p>{Description.substring(0, 25)}</p>                            
                    </div>);
            })
        }
           
    </div>
);

export default ThumbnailGrid;