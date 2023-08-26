import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from './Inicio.module.css'
import videos from 'json/db'

function Inicio() {
  return (
    <>

      <Banner imagem="home" />
      <Titulo />
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}

      </section>
    </>
  );
}

export default Inicio