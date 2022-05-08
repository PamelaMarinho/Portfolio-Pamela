import { React } from 'react';
import './Tech.css'

const Tech = () => {

        function slide(e){
                console.log(e)
        }

       return (
       <section id='tech' className="section-tech">
                <div className="box-tech">
                    <div className='text'>Structure DOM - HTML Intermediate Level </div>
                    <div className="tech">HTML</div>
                </div>
                <div className='box-tech'>
                    <div className='text'> @Media Flex Style - CSS Intermediate Level </div>
                    <div className="tech">CSS</div>
                </div>
                <div className='box-tech'>
                    <div className='text'> Inheritance POO - JS Intermediate Level </div>
                    <div className="tech">Javascript</div>
                </div>
                <div className='box-tech'>
                    <div className='text'> Components Route Hooks - React Basic Level</div>
                    <div className="tech">React</div>
                </div>
                <div className='box-tech'>
                    <div className='text'> JS Backend V8 - Node Basic Level </div>
                    <div className="tech">NodeJs</div>
                </div>
                <div className='box-tech'>
                    <div className='text'> Router Request Response - Express Basic Level  </div>
                    <div className="tech">Express</div>
                </div>
                <div className='box-tech'>
                    <div className='text'> Conversation Writing - English Intermediate Level  </div>
                    <div className="tech">English</div>
                </div>

        </section>
       )

}

export default Tech