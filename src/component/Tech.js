import { React } from 'react';
import './Tech.css'

const Tech = () => {

        function slide(e){
                console.log(e)
        }

       return (
        <div className='section-tech'>

            <div className='tech-box'>
                <div className='tech'>
                    HTML
                </div>
            </div>

            <div>CSS</div>
            <div>Javascript</div>
            <div>React</div>
            <div>NodeJs</div>
            <div>Express</div>
            <div>English</div>
        </div>
       )

}

export default Tech