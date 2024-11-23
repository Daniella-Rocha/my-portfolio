import TypeWriter from '../TypeWriter';

import styles from './Inicio.module.css';


import minhaFoto from '/img/eu.jpg';

const Inicio = () => {
  return (
    <main id='inicio' className={styles.inicio}>
      <TypeWriter />
      <div className={styles.minha_foto}>
        <img src={minhaFoto} alt='Imagem do rosto da Daniella'/>
      </div>
    </main>
  )
}

export default Inicio;