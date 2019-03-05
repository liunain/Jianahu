import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header,Content } from './style';
import {actionCreator} from './store';
import marked from 'marked';

class detail extends Component {
    render() {
        const input = '# This is a header\n\nAnd this is a paragraph\n\n'+'``` 父组</div>)})} ```';
        const output = marked(input);
        console.log(this.props.match.params.id);
        return (
           <DetailWrapper>
               <Header>{this.props.title}</Header>
               {/* 使标签效果正常显示，防止被转义 */}
               <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
               <div dangerouslySetInnerHTML={{__html:output}}></div>
           </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}
//return{}
const mapState = (state) => {
    return{
        title: state.getIn(['detail','title']),
        content: state.getIn(['detail','content'])
    }
}
const mapDispatch = (dispatch) => {
    return{
        getDetail(id) {
            dispatch(actionCreator.getDetail(id));
        }
    }
    
}
export default connect(mapState,mapDispatch)(detail);
// detail获得传递的id（传递路由参数）:动态路由；
//动态路由<Link key={index} to={'/detail/'+item.get('id')}></Link>
//动态路由<Route path='/detail/:id' exact component={detail}></Route>
//动态路由this.props.match.params.id取得id值
//2<Link key={index} to={'/detail?id='+item.get('id')}></Link>
//2<Route path='/detail' exact component={detail}></Route>
//console.log(this.props.location.search)(?id=2)还需要手动解析才可以获得