import styles from './Sobre.module.css';

const Sobre = () => {
    return (
        <section id="sobre" className={styles.sobre_container}>
            <div>
                <h1 >Sobre mim</h1>
                <p >
                    Meu primeiro contato com o mundo da programação foi em 2022, mas foi em 2023 que descobri o quanto gosto de desnvolvimento Front-End. Desde então busquei realizar vários cursos livres e estou sempre à procura aprender cada vez mais.
                </p>
                <p>
                    Fiz um curso de qualificação profissional em Programador de Sistemas e um de Programador Web no SENAC através do programa Jovem Programador. Aprendi conceitos básicos de SQL e modelagem de dados, além de lógica de programação, vi um pouco sobre testes e elaboração de projetos web e publicar rpojetos web. No curso de programação para web vi sobre HTML, CSS, JavaScript e conceitos básicos de php.
                </p>
                <p>
                    Também participei do Programa ONE Oracle + Alura, tive aulas de HTML, CSS, JavaScript, arquitetura CSS, React, Git e soft skills. Realizei outros cursos online sobre desenvolvimento Front-End.
                    Agora estou criando projetos para praticar o que tenho estudado, e cada vez mais gosto de React.
                    Planos para 2024: aprender Typescript, NextJs, UI/UX, Styled Components e NodeJs.
                </p>
            </div>
            <div className=''>
                <h2 >Tecnologias que utilizo atualmente</h2>
            </div>
        </section>
    )
}

export default Sobre;