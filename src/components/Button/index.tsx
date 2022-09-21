import React from "react";
import style from './Button.module.scss'

function Button ({texto}: {texto: string}) {
  
    return (
        <button className={style.button}>
          {texto}
        </button>
      )
    
}

export default Button;