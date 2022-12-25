import React from 'react'
import { Controller } from "react-hook-form";

import { IconContainer,InputContainer,InputText,ErroText} from './styles';
import { IIinput } from './types';

const Input =({leftIcon, name,control, errorMenssege, ...rest} : IIinput) => {
  return (
        <>
          <InputContainer>        
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller 
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field :{value, onChange} }) => (
                    <InputText value={value}  onChange={onChange} {...rest}/>
                  )}
                />       
          </InputContainer>
          
          {errorMenssege ?( <ErroText>{errorMenssege} </ErroText>) : null } 
        
        </> 
  )
}

export {Input}