import Head from 'next/head'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nutribase: Construir uma tabela nutricional nunca foi tão fácil</title>
        <meta name="description" content="Construir uma tabela nutricional nunca foi tão fácil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.mainContainer}>
        <h1>Construir uma tabela nutricional<br />nunca foi tão fácil.</h1>
        <span>
          Poderoso, flexível e orientado a dados, o Nutribase é a facilidade de<br />
          criação de tabelas nutricionais que a sua empresa precisa.
        </span>

        <button>Começar</button>
      </main>
    </>
  )
}
