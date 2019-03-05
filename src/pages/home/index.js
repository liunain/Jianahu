import React, { Component } from 'react';
import { actionCreator } from './store';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class home extends Component {
    hanldeScrollTop() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeWrapper>
               <HomeLeft>
                   <img className='banner-img' alt='' src='https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'></img>
                   <Topic />
                   <List />
               </HomeLeft>
               <HomeRight>
                   <Recommand />
                   <Writer />
               </HomeRight>
               {this.props.showScroll ? <BackTop onClick={this.hanldeScrollTop}>︿</BackTop>:null} 
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.changeHomeData()//一定加this.props;
        this.bindEvents();//绑定监听事件
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
    
}
const mapDispatch = (dispatch) => {//方法
    return {
        changeHomeData() {
            console.log('home');
            dispatch(actionCreator.getHomeInfo());
        },
        changeScrollTopShow() {
            if(document.documentElement.scrollTop>400) {
                dispatch(actionCreator.toggleTopShow(true));
            }
            //用action来修改数据；
            else {
                dispatch(actionCreator.toggleTopShow(false));
            }
        }
    }
}
export default connect(mapState,mapDispatch)(home);