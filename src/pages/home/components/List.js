import React, { Component, Fragment} from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../store';

class List extends Component {
    render() {
        const { list,page, getMoreList  } = this.props;
        console.log(page)
        return (
            <Fragment>
                {
                    list.map((item,index) => (
                        <Link key={index} to={'/detail/'+item.get('id')}>
                        <ListItem key={item.get('id')}>
                            <img className='pic' src={item.get('imgUrl')} alt=''></img>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
            </Fragment>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreator.getMoreList(page));
    }
})
export default connect(mapState,mapDispatch)(List);