import axios from 'axios';
import * as actionType from './actionType';

const getData = (result) => ({
    type: 'actionType.CHANGE_DETAIL',
    title: result.title,
    content: result.content
})
export const getDetail = (id) =>{
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            const result = res.data.data; 
            dispatch(getData(result));
            console.log(result);
        })
    }
}