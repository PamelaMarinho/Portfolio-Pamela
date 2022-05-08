import { React } from 'react';
import Name from './Name';
import './About.css'

const About = () => {

       return (
        <section id='about' className='section-about center'>
                <Name msg="SOBRE" />
                <div className='text-about'>
                     <p> Graduada em análise e desenvolvimento de sistemas que descobriu na programação web uma grande paixão e a criatidade que estava escondida. Anseio sempre conhecer tecnologias novas e aperfeiçoar todos os dias as que já tenho contato.</p>
                </div>
        </section>
       )
}

export default About