import React,{ Fragment,Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreator }  from './store';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Button
 } from './style';


class Header extends Component {
    getListArea()  {//组件是否渲染
        //console.log(this.props.focused);
        //console.log(this.props.mouseIn);
        const { focused,list,page,mouseIn,totalPage,hanleChangePage } = this.props;//解构赋值
        const jsList = list.toJS();//将immutable数据装换为js数据
        const pageList = [];
        if(jsList.length) {//为了避免第一次被渲染时，list为空的情况
            //console.log(jsList);
            for (let i=(page-1) * 10;i<page*10;i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{ jsList[i] }</SearchInfoItem>
                );
            //immutable不能通过list[i]取得，所以要先转换js
            }
        }
        if(focused || mouseIn) {
            return (
               <SearchInfo 
                    onMouseEnter={this.props.handleMouseEnter}
                    onMouseLeave={this.props.handleMouseLeave}
                >
                   <SearchInfoTitle>热门搜索
                       <SearchInfoSwitch onClick={() => hanleChangePage(page,totalPage,this.spinIcon)}>
                       <i ref={(icon) => {this.spinIcon = icon }} className='iconfont spin'>&#xe851;</i>
                            换一批
                       </SearchInfoSwitch>
                   </SearchInfoTitle>
                   <SearchInfoList>
                       {/* {js代码用花括号 */
                           pageList
                       }
                   </SearchInfoList>
               </SearchInfo>
            )
        }
        else{
           return null;
        }
    }
    render() {
        const { focused,list,handleInputFocus } = this.props;//解构赋值
        return(
                <HeaderWrapper>
                    <Logo/>
                        <Nav>
                            <NavItem className='left active'>首页</NavItem>
                            <NavItem className='left'>下载</NavItem>
                            <NavItem className='right'>登录</NavItem>
                            <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                            <SearchWrapper>
                                <CSSTransition
                                    in={focused}
                                    timeout={200}
                                    classNames='slide'
                                >
                                    <NavSearch 
                                        className={focused ? 'focused':''}
                                        onFocus={() => handleInputFocus(list)}
                                        //一定一定要注意传递参数时写成箭头函数。
                                        onBlur={this.props.handleInputBlur}
                                    ></NavSearch>
                                </CSSTransition>
                                <i className={focused ? 'focused iconfont zoom':'zoom iconfont'}>&#58919;</i>
                                {this.getListArea()}
                            </SearchWrapper>
                        </Nav>
                        <Addition>
                            <Button className='reg'>注册</Button>
                            <Button className='writting'><i className='iconfont'>&#xe624;</i>写文章</Button>
                        </Addition>
                </HeaderWrapper>
                 );
    }

    // handleInputFocus() {
    //     this.setState({
    //         focused: true,
    //     })
    // }
  }

const mapStateToProps = (state) => {//拿到总store里的数据
    return {
        //focused: state.header.get('focused')//state为store里的数据
        //focused: state.get(header).get('focused')//state(为immutable对象)为store里的数据
        focused: state.getIn(['header','focused']),//同上
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn'])
    }
   
}
const mapDispathToProps = (dispatch) => {//方法
    return {
        handleInputFocus(list) {
            //中间件介于action,store
           console.log(1123);
           if (list.size === 0){
                dispatch(actionCreator.getList());
           }
           //没有数据时才请求。使只请求一次，保证第一次请求。
           const action = actionCreator.searchFocus();
           dispatch(action);
        },
        handleInputBlur() {
            console.log(11);
            dispatch(actionCreator.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave());
        },
        hanleChangePage(page,totalPage,spin) {
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

export default connect(mapStateToProps,mapDispathToProps)(Header); 