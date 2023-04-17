import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/NavBar/NavBar.css"

export const NavBar = () => {
  
  const funcion_btn = ()=>{
    const desplegar = document.querySelector(".menu");
    desplegar.classList.toggle("open")
  }

  const funcion_btnes = ()=>{
    const botones = document.querySelectorAll(".list")

    botones.forEach((item)=>{
    item.onclick=()=>{
        botones.forEach((articulo)=>{
            articulo.classList.remove("active")
            item.classList.add("active")
        })
    }
})
  }
  return (
    <div className="menu">
        <div className="navegacion" onClick={funcion_btn}></div>
        <ul>
            <li className="list active" onClick={funcion_btnes}>
                <Link to="/">
                   <span className="icon" ><ion-icon name="home-outline" ></ion-icon></span>
                   <span className="text" >Home</span>
                </Link>   
            </li>
            <li className="list" onClick={funcion_btnes}>
                <Link to="/cines">
                   <span className="icon" ><ion-icon name="person-outline"></ion-icon></span>
                   <span className="text" >Cines</span>
                </Link>   
            </li>
            <li className="list" onClick={funcion_btnes}>
                <Link to="/comidas">
                   <span className="icon" ><ion-icon name="chatbubble-outline"></ion-icon></span>
                   <span className="text" >Messages</span>
                </Link>      
            </li>
            <li className="list" onClick={funcion_btnes}>
                <Link to="/comidas" activeclassname="active">
                   <span className="icon" ><ion-icon name="camera-outline"></ion-icon></span>
                   <span className="text" >Photos</span>
                </Link>   
            </li>
            <li className="list" onClick={funcion_btnes}>
                <Link to="/comidas" activeclassname="active">
                   <span className="icon" ><ion-icon name="settings-outline"></ion-icon></span>
                   <span className="text">Settings</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}
