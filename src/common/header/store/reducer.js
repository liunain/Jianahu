import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focused: false,            //变成了一个immutable对象，防止自己不小心改变数据；
    mouseIn: false,
    list: [],
    page: 1, 
    totalPage: 1
});

export default ( state = defaultState,action ) => {
    switch(action.type) {
        case 'actionTypes.SEARCH_FOCUS':
            return state.set('focused',true);
            //break不需要是因为直接被return出去了，否则必须要写；
        case 'actionTypes.SEARCH_BLUR':
            return state.set('focused',false);
        case 'actionTypes.MOUSE_ENTER':
            return state.set('mouseIn',true);
        case 'actionTypes.MOUSE_LEAVE':
            return state.set('mouseIn',false);
        case 'actionTypes.CHANGE_LIST':
            //console.log(123);
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case 'actionTypes.CHANGE_PAGE':
            return state.set('page',action.page)
        default:
            return state;
    }
    // if(action.type === 'actionTypes.SEARCH_FOCUS') {
    //     //immutable会生成全新的对象，并不会改变原始的值；
    //     return state.set('focused',true);
    // }
    // return state;
}