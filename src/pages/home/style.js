import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 300px;
`;
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width:625px;
    .banner-img {
        width: 625px;
        height: 240px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;
export const TopicWrapper = styled.div`
    overflow: hidden; 
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopImg = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 10px;
    display: block;
    float: left;
`
export const TopicItem = styled.div`
    float: left;
    height:32px;
    line-height: 32px;
    margin-left: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
`;
export const ListItem = styled.div`
    padding: 20px 0;
    min-height: 98px;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;
// &表示同级
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
// title和desc都是他的子元素的className;
`;
export const RecommandWrapper = styled.div`
    margin-top: 30px;
    padding-bottom: 4px;
    min-height: 228px;
`
export const  RecommandItem =styled.a`
    cursor: pointer;
    color: #333;
    text-decoration: none;
    width: 560px;
    height: 100px;
    .rec-img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
}
`;
export const JianshuApp =styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 278px;
    height: 82px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    .app-img {
        float: left;
        width: 60px;
        height: 60px;
    }
`
export const JianshuInfo =styled.div`
    float: left;
    margin-top: 10px;
    margin-left:20px;
    .title {
        font-size: 15px;
        color: #333;
        margin: 0px;
    }
    .desc {
        font-size: 13px;
        color: #999;
        margin: 0px;
    }
`;
export const WriterWrapper = styled.ul`
    width: 280px;
    height: 295px;
    padding: 0px;
    margin-bottom: 20px;
    box-sizing: border-box;
    .title {
        float: left;
        font-size: 14px;
        color: #969696;
        margin-bottom: 15px;
    }
    .change {
        float: right;
        font-size: 14px;
        color: #969696;
        margin-bottom: 15px;
        cursor: pointer;
    }
    .spin {
        font-weight: bold;
        font-size: 15px;
        transition: all .5s ease-in;
        transform-origin: center center;//旋转中心
    }
`;
export const WriterInfo = styled.li`
    margin-top: 15px;
    height: 47px;
    width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .name-img {
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .add {
        display: block;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor: pointer;
    }
`
export const WriterItem = styled.div`
    margin-left: 10px;
    min-width: 180px;
    .write-name {
        cursor: pointer;
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
        text-decoration: none;
    }
    .write-count {
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
    }
`
export const SeeAll =styled.a`
    margin-top: 60px;
    padding: 7px 7px 7px 12px;
    cursor: pointer;
    width: 280px;
    display: block;
    text-align: center;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-decoration: none;
`
export const LoadMore = styled.button`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    outline: none;
`;
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    border: 1px solid #dcdcdc;
    &::hover {
        background: #F3F3F3;
    }
`