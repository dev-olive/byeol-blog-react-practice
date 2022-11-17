import styled from '@emotion/styled';
import Profile from './Profile';
import Menu from './Menu';
import Banner from './Banner';
import Sns from './Sns';
const Nav = () => {
    return (
        <NavContainer>
            <Profile></Profile>
            <Menu></Menu>
            <Banner></Banner>
            <Sns></Sns>
        </NavContainer>
        
    )

}

export default Nav;

let NavContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    border-right: 1.5px solid lightgray;
    padding : 0px 0px 40px 0px
`