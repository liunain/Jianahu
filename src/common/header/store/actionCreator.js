import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: 'actionTypes.CHANGE_LIST',//type: ''注意单引号;
    data: fromJS(data),//将普通数组变为immutable对象
    totalPage: Math.ceil(data.length/10)
});

export const searchFocus = () => ({
    type: 'actionTypes.SEARCH_FOCUS'
});
export const searchBlur = () => ({
    type: 'actionTypes.SEARCH_BLUR'
});
export const mouseEnter = () => ({
    type: 'actionTypes.MOUSE_ENTER'
});
export const mouseLeave = () => ({
    type: 'actionTypes.MOUSE_LEAVE'
});
export const  changePage = (page) => ({
    type: 'actionTypes.CHANGE_PAGE',
    page
});
//rredux-thunk使得可以返回函数；
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
            console.log(data);
        }).catch(() =>{
            console.log('error')
        })
    }
}