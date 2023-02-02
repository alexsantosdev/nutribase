import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div>
                    <Link href='/'><img src='/images/logo.svg' alt='Nutribase logo' /></Link>
                    <nav>
                        {/* <Link href='/documentation'>Documentação</Link> */}
                        <Link href='/help'>Ajuda</Link>
                        <Link href='/pricing'>Preços</Link>
                        <Link href='/about'>Sobre</Link>
                    </nav>
                </div>
                
                <div className={styles.authContainer}>
                    <Link href='/auth'>Acessar</Link>
                    <Link href='/auth/register'>Registrar</Link>
                </div>
            </div>
        </header>
    )
}