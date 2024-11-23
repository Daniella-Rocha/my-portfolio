import { useTypewriter, Cursor } from 'react-simple-typewriter';

import styles from './TypeWriter.module.css';

const TypeWriter = () => {
    const [text] = useTypewriter({
        words: ['Olá, eu sou a Daniella 🙂', `Desenvolvedora Front-End 💻`],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 30
    });

    return (
        <div className={styles.type_writer}>
            <h1 className={styles.title}>
                {text}
                <Cursor cursorStyle={'|'} />
            </h1>
        </div>
    )
}

export default TypeWriter;