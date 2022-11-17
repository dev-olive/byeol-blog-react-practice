import styled from '@emotion/styled';

const Header = () => {
    return (
        <HeaderWrap>
            <div style={titleStyle}>Byeol_DEV</div>
        </HeaderWrap>
    )
}

export default Header;

const HeaderWrap = styled.section`
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    height : 100px;
    align-items: center;
    width : 100%;
`

const titleStyle = {
    display: "flex",
    padding: "40px 0px 0px 30px",
    fontSize : "30px",
    fontWeight: "bold",
}