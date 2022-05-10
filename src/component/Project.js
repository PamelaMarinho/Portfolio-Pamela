import { React } from 'react';
import './Project.css'
import Name from './Name';

const Project = () => {

       return (
        <section id='projects' className='section-project'>
            <Name msg="PROJETOS"/>
            <div className='main-box center'>
                    <div className="box-out">
                        <div className='box'>
                            <p className='title-box'>Colored</p>
                            <p className='text-box'>Ferramenta para pré-visualização de paleta de cores para seu projeto.</p>
                            <p>**estilização pela dev <a className='mimi' href='https://github.com/alreadymimi' target={"_blanket"}>Mimi</a></p>
                            <a className='button-box' href='https://pamelamarinho.github.io/colored/' target="_blanket" >Teste Aqui</a>
                        </div>
                    </div>
                    <div className="box-out">
                        <div className='box'>
                            <p className='title-box'>Mega Sorte Game</p>
                            <p className='text-box'>Jogo que simula Mega Sena para testar sua sorte.</p>
                            <a className='button-box' href='https://pamelamarinho.github.io/mega-sorte/' target="_blanket" >Teste Aqui</a>
                        </div>
                    </div>
            </div>
        </section>
       )
}

export default Project