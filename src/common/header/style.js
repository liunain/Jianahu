import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0px;
    left: 0px;
    display: block;
    height: 58px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
    //background: orange;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: orange;
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size:14px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {                                                                     //本身的classname
        width:240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }      
`;
export const Addition = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 56px;
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;   //使之宽度合适；
    .zoom {                                                                    //子元素的classname
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;
export const Button = styled.div`
    float: left;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px; //宽度
    line-height: 38px; //高度
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0px;
    top: 58px;
    width: 240px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    padding: 0 20px;
    background: #fff;
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    float: right;
    //cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
       // transform: rotate(0deg);//旋转角度
        transform-origin: center center;//旋转中心
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 15px;
    line-height: 20px;
    padding: 0 5px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;

`
