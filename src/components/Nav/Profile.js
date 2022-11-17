import { css } from '@emotion/react';
import styled from '@emotion/styled';

const profileInfo = {
    profileImg : "https://avatars.githubusercontent.com/u/47773959?s=96&v=4",
    engName : "Byeol Kim",
    korName : "김별",
    nickName : "olive"
}

const Profile = () => {
    return (
        <ProfileWrap>
            <img src={profileInfo.profileImg} style={profileImgCss} alt="profile"></img>
            <div style={profileBigName}>{profileInfo.engName}</div>
            <div style={profileSmallName}>{profileInfo.korName}</div>
            <div style={profileSmallName}>{profileInfo.nickName}</div>
        </ProfileWrap>
    )
}

export default Profile;

const ProfileWrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding : 30px;
    height: 30%;
`

const profileImgCss = {
    borderRadius: 100,
    margin: '30px 0px 0px 0px',
    height : '60px',
    width : '60px'
}

const profileBigName = {
    textAlign : 'left',
    fontSize : '20px',
    fontWeight : 'bold',
    margin: '10px 0px 10px 0px'
}

const profileSmallName = {
    textAlign : 'left',
    fontSize : '17px',
    fontWeight : 'lighter',
    margin: '0px 0px 0px 0px'
}