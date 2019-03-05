import React, { Fragment,Component } from 'react';
import { connect } from 'react-redux';
import { RecommandWrapper, RecommandItem, JianshuApp, JianshuInfo } from '../style';
import r1 from '../../../statics/r1.png';
import r2 from '../../../statics/r2.png';
import r3 from '../../../statics/r3.png';
import r4 from '../../../statics/r4.png';
import appm from '../../../statics/m.png';

class Recommand extends Component {
    render() {
        const { list } = this.props;
        return (
            <Fragment>
                 <RecommandWrapper>
                    <RecommandItem>
                        <img className='rec-img' src={r1} alt=''></img>
                    </RecommandItem>
                    <RecommandItem>
                        <img className='rec-img' src={r2} alt=''></img>
                    </RecommandItem>
                    <RecommandItem>
                        <img className='rec-img' src={r3} alt=''></img>
                    </RecommandItem>
                    <RecommandItem>
                        <img className='rec-img' src={r4} alt=''></img>
                    </RecommandItem>
            </RecommandWrapper>
                <JianshuApp>
                    <img className='app-img' src={appm}></img>
                    <JianshuInfo>
                        <p className='title'>下载简书手机app</p>
                        <p className='desc'>随时随地分享创作内容</p>
                    </JianshuInfo>
                </JianshuApp>
            </Fragment>
           
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','recommandList'])
})


export default connect(mapState,null)(Recommand);