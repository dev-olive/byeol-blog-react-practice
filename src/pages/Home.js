import styled from '@emotion/styled';

const BigCardInfo = {
    title: "리액트",
    content : "리액트로 개발 진행 중입니다.\n 프론트엔드 프레임워크를 공부하고 있습니다. "
}

const SmallCardInfo = [
    {
        title: "타입스크립트",
        content : "곧 타입스크립트로 변경 예정입니다.",
        img : "/icons/IMG_4128.jpg"
    },
    {
        title: "퇴근",
        content : "퇴근하고 공부하는 중",
        img : "/icons/IMG_4129.jpg"
    },
    {
        title: "리액트프로젝트 ",
        content : "추후에 Next.js로 변경하고 싶어요. 정적블로그 도전!",
        img : "/icons/IMG_5873.jpg"
    },
]
const Blog = () => {
    return(
        <HomeWrap>
            <ContentWrap>
                <BigCard>
                    <img src="/logo192.png"></img>
                    <CardText>
                        <span style={{fontWeight: 800, fontSize:"20px"}}>{BigCardInfo.title}</span>
                        <span style={{fontWeight: 200, fontSize:"15px"}}>{BigCardInfo.content}</span>
                    </CardText>
                </BigCard>
            </ContentWrap>
            <ContentWrap>
                {SmallCardInfo.map((card) => {
                    return (
                        <SmallCard>
                            <img style={{height:"100px"}}src={card.img}></img>
                            <CardText>
                                <span style={{fontWeight: 600, fontSize:"17px"}}>{card.title}</span>
                                <span style={{fontWeight: 200, fontSize:"13px"}}>{card.content}</span>
                            </CardText>
                        </SmallCard>
                    )
                })}
            </ContentWrap>
            {/* <SmallCard></SmallCard> */}
        </HomeWrap>
    )
}
export default Blog;

const HomeWrap = styled.section`
    
`
const ContentWrap = styled.section`
    display:flex;
    justify-content:space-around;
    & > div {
        white-space : pre-line;
        margin: 10px;
        box-shadow: rgba(0,0,0,0.08) 0px 4px 12px;
    }
`
const BigCard = styled.div`
    display: flex;
    flex-flow:row;
    flex: 1;
    justify-content: space-around;
    mind-width: 300px;
    min-height: 200px;
    border-radius: 10px;
    padding: 10px;
    & > img {
        width : auto;
        height: 180px;
        border-radius: 10px;
        object-fit:cover;
    }
`

const SmallCard = styled.div`
    display: flex;
    flex-flow:row;
    flex: 1;
    justify-content: space-around;
    mind-width: 100px;
    min-height: 100px;
    border-radius: 10px;
    padding: 10px;
    & > img {
        width : auto;
        height: 180px;
        border-radius: 10px;
        object-fit:cover;
    }
`
const CardText = styled.div`
    display: flex;
    flex-flow:column;
    flex: 1;
    justify-content: space-around;
    padding: 10px;
`