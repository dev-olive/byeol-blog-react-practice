import styled from '@emotion/styled';

const SnsInfo = [
    {
        type : 'github',
        icon : 'icons/Github-Mark-64px.png',
        path : 'https://github.com/dev-olive',
    },
    {
        type : 'tistory',
        icon : 'icons/티스토리-4.png',
        path : 'https://devolive.tistory.com',
    },
    {
        type : 'naver',
        icon : 'icons/네이버-블로그1.png',
        path : 'https://blog.naver.com/imstar893',
    },
]
const Sns = () => {
    return(
        <SnsWrap>
            {SnsInfo.map((ele) => {
                return(
                    <a href={ele.path} target="_blank"><img src={ele.icon} style={snsIcon} /></a>
                )
            })}
        </SnsWrap>
    )
}

export default Sns;

const SnsWrap = styled.section`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    height : 10%;
`
const snsIcon = {
    height: "20px",
    margin: "0px 10px 0px 1px"
}