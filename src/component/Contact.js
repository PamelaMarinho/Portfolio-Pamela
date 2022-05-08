import { React } from 'react';
import Name from './Name';
import './Contact.css'

const Contact = () => {

       return (
        <section id='contact' className='section-contact'>
                <Name msg="CONTATO" />
                <nav className='main-contact'>
                    <div className='contact'> <img src={require("../image/linkedin.png")}/> <p className='p-contact'>Pode me conhecer um pouco mais no <a href="https://www.linkedin.com/in/pamelamarinhosilva/" target={"_blanket"}>Linkedin</a></p></div>
                    <div className='contact'> <img src={require("../image/whatsapp.png")}/> <p className='p-contact'>Mas também pode me contatar pelo <a href='https://wa.me/5511953872853' target={"_blanket"}>WhatsApp</a>.. Sem trote, heim?</p></div>
                    <div className='contact'> <img src={require("../image/email.png")}/> <p className='p-contact'>Se restou alguma dúvida me envie um <a href='mailto:pamelamarinhopm@hotmail.com?' target={"_blanket"}>email</a></p></div>
                    <div className='contact'> <img src={require("../image/github.png")}/> <p className='p-contact'>Ah, todos os projetos estão públicos no meu <a href='https://github.com/PamelaMarinho' target={"_blanket"}>Github</a></p></div>
                    <div className='contact'> <img src={require("../image/discord.png")}/> <p className='p-contact'>Quer discutir sobre algum projeto ou sobre a vida? <a>Pamela#8767</a> é o user no Discord</p></div>
                    <div className='contact'> <img src={require("../image/instagram.png")}/> <p className='p-contact'>Devo ser a usuária menos ativa no <a href='https://www.instagram.com/pamela_marint/' target={"_blanket"}>Instagram</a>... Ninguém é perfeito!</p></div>
                </nav>
        </section>
       )
}

export default Contact