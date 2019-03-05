import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { WriterWrapper, WriterInfo,WriterItem, SeeAll } from '../style';


class Writer extends Component {
    getWriter() {
        const { list,page,totalPage,hanleChangePage } = this.props;//解构赋值
        const jsList = list.toJS();//将immutable数据装换为js数据
        const pageList = [];
        console.log(jsList);
        if(jsList.length){
            for (let i=(page-1) * 5;i<page*5;i++) {
                pageList.push(
                    <WriterInfo key={jsList[i].id}>
                        <img className='name-img' src={jsList[i].imgUrl}></img>
                        <WriterItem>
                            <a className='write-name'>{jsList[i].name}</a>
                            <p className='write-count'>写了{jsList[i].totalCount}k字，喜欢{jsList[i].likeCount}k</p>
                        </WriterItem>
                        <span className='add'><span className='icon-add'>+</span>关注</span>
                    </WriterInfo>
                );
            //immutable不能通过list[i]取得，所以要先转换js
            }
        }
        return pageList;
    }
    render() {
        const { list,page,totalPage,hanleChangePage } = this.props;//解构赋值
        return (
            <Fragment>
                <WriterWrapper>
                    <span className='title'>推荐作者</span>
                    <span className='change' onClick={() => hanleChangePage(page,totalPage,this.spinIcon)}><i ref={(icon) => {this.spinIcon = icon }} className='iconfont spin'>&#xe851;</i>换一批</span>
                    {this.getWriter()}
                </WriterWrapper>
                <SeeAll>查看全部&nbsp;&nbsp;></SeeAll>
            </Fragment>
           
        );
    }
}

const mapState = (state) => {//拿到总store里的数据
    return {
        list: state.getIn(['home','userList']),
        page: state.getIn(['home','page']),
        totalPage: state.getIn(['home','totalPage'])
    }
}
const mapDispatch = (dispatch) => {//方法
    return {
        hanleChangePage(page,totalPage,spin) {
            console.log(totalPage)
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }
            else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if(page < totalPage) {
                dispatch(actionCreator.changePage(page+1));
            }
            else {
                dispatch(actionCreator.changePage(1));
            }
        }
    }
}
export default connect(mapState,mapDispatch)(Writer);