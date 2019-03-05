import { fromJS } from 'immutable';
import * as actionType from './actionType';
const defaultState = fromJS({
    //immutable数据
    page: 1,
    totalPage: 1,
    topicList: [],
    articleList: [],
    userList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState,action) => {
    switch(action.type) {
        case 'actionType.CHANGE_HOME_DATA':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList:  fromJS(action.articleList),
                userList:  fromJS(action.userList),
                totalPage: action.totalPage
            })
        case 'actionType.CHANGE_WRITER_PAGE':
            return state.set('page',action.page);
        case 'actionType.ADD_ARTICLE_LIST':
            //console.log("addarcticlelist");
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            });
        case 'actionType.TOGGLE_SCROLL_TOP':
            return state.set(['showScroll',action.show])
        default:
            return state;
    }
}
