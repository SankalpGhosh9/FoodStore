/* eslint-disable no-unused-vars */
import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
import PropTypes from 'prop-types';
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id='explore-menu'>
    <h1>Explore our Menu</h1>
    <p className='explore-menu-text'>Dive into our menu to uncover your new favorite and embark on a flavor journey that will indulge your senses.</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>  
    <hr />
    </div>
  )
}
ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
  };

export default ExploreMenu