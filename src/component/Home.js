import { React } from 'react';
import Name from './Name';
import './Home.css'

const Home = () => {

       return (
        <div id='home' className='home center'>
               <Name msg="PAMELA"/>
               <Name msg="MARINHO"/>
               <p className='title-home'>Analista de Sistema - Desenvolvedora Web</p>
        </div>
       )
}

export default Home