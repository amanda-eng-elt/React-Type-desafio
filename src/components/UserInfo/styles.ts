import styled from "styled-components";
import { IUserinfoStyle } from "./types";

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom:24x;
`
export const UserPicture = styled.img `
    width: 32px;
    height:32px;
    border-radius: 22px;
    border 3px solid #FFFF;
`
export const NameText = styled.div`

    font-family: 'Open Sans'
    font-style:normal;
    font-size: 18px;
    font-weight: 700;
    line-heigth:25px;
    color : #FFFF;
`
export const Progress = styled.div<IUserinfoStyle>`
    width: 180px;
    height:6px;
    border-radius: 3px;
    background-color: #FFFFFF;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top:0;
        left:0;
        width: ${({percentual})=>percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`
