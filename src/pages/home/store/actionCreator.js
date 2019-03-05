import * as actionType from './actionType';
import { fromJS, List } from 'immutable';
// List只能将数组转换为immutable,不能将里面的对象转换
import axios from 'axios';
//非常注意注意action被thunk变为函数。

const changeHomeData = (result) => ({
    type: 'actionType.CHANGE_HOME_DATA',
    topicList: result.topicList,
    articleList: result.articleList,
    userList: result.userList,
    totalPage: Math.ceil(result.userList.length/5)
})
const addHomeList = (result,nextPage) => ({
    type: 'actionType.ADD_ARTICLE_LIST',
    list: fromJS(result),
    nextPage
})
//换一批（换页）
export const  changePage = (page) => ({
    type: 'actionType.CHANGE_WRITER_PAGE',
    page
});
//获取列表此时home里的创建的action为函数。
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result =res.data.data;
            console.log(Math.ceil(result.userList.length/5));  //从后台拿到数据，将数据给action，派发action
            dispatch(changeHomeData(result));
        }).catch(() =>{
            console.log('error')
        })
    }
}
//拿到加载更多的数据
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) =>{
            const result =res.data.data;
            console.log(result);  //从后台拿到数据，将数据给action，派发action
            dispatch(addHomeList(result,page+1));
        }).catch(() =>{
            console.log('error')
        })
    }
}
export const toggleTopShow = (show) =>({
    type: 'actionType.TOGGLE_SCROLL_TOP',
    show
})