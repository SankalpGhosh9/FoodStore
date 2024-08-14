import { useState } from "react"
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu"
import Header from "../../component/Header/Header"
import "./Home.css"
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay"
const Home = () => {
  const [category,setCategory]= useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home