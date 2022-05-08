import { React } from 'react';
import './Menu.css'

const Menu = () => {

       return (
            <nav className='menu center'>
                <a href="#home" ><img className='img' type='svg' src={require("../image/home.png")} /></a>
                <a href="#about" ><img className='img' type='svg' src={require("../image/pessoa.png")} /></a>
                <a href="#tech" ><img className='img' type='svg' src={require("../image/cpu.png")} /></a>
                <a href="#projects" ><img className='img' type='svg' src={require("../image/mala.png")} /></a>
                <a href="#contact" ><img className='img' type='svg' src={require("../image/phone.png")} /></a>
            </nav>                                                                                                  
       )

}

export default Menu
