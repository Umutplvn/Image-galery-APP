
import style from "../style/style.module.css"
import data from "../helper/data"
import Picture from "../components/Picture"

const Homepage = () => {
  return (
    <div> 
        <p className={style["title"]}>Image Gallery</p>
        <div className={style["container"]}>
     
     {data.map((item, index) =>{
        return(
            <Picture key={index} item={item} />
        )

     })}   
       </div>
    </div>
  )
}

export default Homepage