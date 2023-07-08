import React from 'react'
import style from "../style/style.module.css"

const Picture = ({item}) => {
const{photographer, src}=item


    return (
<div className={style["card"]}>       
   
    <div className={style["frame"]}>
        <img className={style["resim"]} src={src.large} alt="" />
    </div>    
      <p  className={style["isim"]} >{photographer}</p>

</div>
  )
}

export default Picture