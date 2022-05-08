import { React } from 'react';
import Name from './Name';
import './About.css'

const About = () => {

       return (
        <section id='about' className='section-about center'>
                <Name msg="SOBRE" />
                <div className='text-about'>
                     <p> Graduada em análise e desenvolvimento de sistemas que descobriu na programação web uma grande paixão.
                        Já passei por 30 primaveras e 3 delas estudando tecnologia.</p>
                </div>
        </section>
       )
}

export default About