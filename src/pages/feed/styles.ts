import styled from "styled-components";
import { IColumn } from "./type";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display:flex;
    flex-direction: row;
    justinfy-content: space-between;
    align-items: center;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style:normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom:20px;
    line-height: 24px;
    color: #ffff;
`

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style:normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom:24px;
    line-height: 25px;
    color: #ffffff70;
`
export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
    padding-right:24px;
`