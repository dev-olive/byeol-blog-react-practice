import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

const MenuInfo = [
    {
        title : 'HOME',
        menuImg : 'icons/icons8-home-page-64.png',
        path : '/'
    },
    {
        title : 'BLOG',
        menuImg : 'icons/icons8-book-64.png',
        path : '/Blog'
    },
    {
        title : 'TIL',
        menuImg : 'icons/icons8-typewriter-with-paper-64.png',
        path : '/Til'
    }
]
const Menu = () => {
    const navigate = new useNavigate();
    return(
        <MenuWrap>
            {MenuInfo.map((ele) => {
                return (
                <MenuItem onClick={() => {navigate(ele.path)}}>
                    <span style={{lineHeight:"30px"}}>{ele.title}</span>
                    <img src={ele.menuImg} style={menuIcon}/>
                </MenuItem>
                );
            })}
            
        </MenuWrap>
    )
}

export default Menu;

const MenuWrap = styled.section`
    justify-content : space-between;
    padding : 30px;
    height : 60%;
`
const MenuItem = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin : 0px 0px 20px 0px;
    cursor: pointer;
`


const menuIcon = {
    width : "30px",
    height : "30px",
}