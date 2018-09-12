import axios from 'axios';

export const RequestHandler = ({
    method = '',
    url = '',
    responseType = '',
    successCalBack = ()=> {},
    errorCalBack = ()=> {},
}) => { 
        axios({
            method: method,
            url: url,
            responseType: responseType
        }).then((response) =>{
                successCalBack(response)
        }).catch((err) => {
                errorCalBack(err)
        })
};