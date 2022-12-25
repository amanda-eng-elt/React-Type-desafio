import React from "react";

export interface IUserinfo {
    nome:string;
    image?: string | undefined;
    percentual:number;
}

export interface IUserinfoStyle{
    percentual?:number;
    src?: string | undefined
}