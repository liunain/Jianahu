import React, { Component } from 'react';
import {TopicWrapper,TopicItem,TopImg} from '../style'
import { connect } from 'react-redux';

class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) =>(
                        //return 组件（小括号表示直接return不用显示书写）
                        <TopicItem key={item.get('id')}>
                            <TopImg  src={item.get('imgUrl')} alt=''></TopImg>
                            {item.get('title')}
                        </TopicItem>  
                    ))
                }
            </TopicWrapper>
        );
    }
}

const mapState = (state) =>({
    list: state.getIn(['home','topicList'])
})
export default connect(mapState,null)(Topic);
// 获取护具