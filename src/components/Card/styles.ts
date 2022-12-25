import styled from "styled-components";

export const CardContainer = styled.div`
    width:100%;
    background-color:#3B4551;
    position: relative;
    margin-bottom: 24px;

`
export const ImageBackground = styled.img`
    width:100%;
    height: 180px;
`
export const Content = styled.div`
    width:100%
    display:flex;
    flex-direction: column;
    padding: 12px;

`
export const UserInfo = styled.div`
    display: flex;
    flexdirection:row;
    margin-bottom:12px;

    div{
        margin-left:12px;
        
    }

    h4{
        font-family: 'Open Sans'
        font-style:normal;
        font-size: 18px;
        font-weight: 700;
        line-heigth:25px;
        color : #FFFF;
    }
    p{
        font-family: 'Open Sans'
        font-style:normal;
        font-weight: 400;
        font-size: 12px;
        line-heigth:16px;
        color : #FFFF;
    }
`
export const UserPicture = styled.img`
    width: 32px;
    height:32px;
    border-radius: 22px;
    border 3px solid #FFFF;
`
export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4{
        font-family: 'Open Sans'
        font-style:normal;
        font-size: 18px;
        font-weight: 700;
        line-heigth:25px;
        color : #FFFF;
    }
    p{
        font-family: 'Open Sans'
        font-style:normal;
        font-weight: 400;
        font-size: 12px;
        line-heigth:16px;
        
    }
`


export const  HasInfo = styled.div`

    margin-bottom: 12px;

    h4{
        font-family: 'Open Sans'
        font-style:normal;
        font-size: 18px;
        font-weight: 700;
        line-heigth:16px;
        color : #FFFFFF80;
    }
    p{
        font-family: 'Open Sans'
        font-style:normal;
        font-weight: 400;
        font-size: 12px;
        line-heigth:22px;
        
    }
`