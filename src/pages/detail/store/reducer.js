import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
    title: '',
    content: ''
})
export default (state = defaultState,action) => {
    switch (action.type) {
        case 'actionType.CHANGE_DETAIL':
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            })
                
            
        default:
            return state;
    }
}