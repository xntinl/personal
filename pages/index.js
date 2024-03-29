import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Oscar Campos</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <nav className={styles.main_nav}>
                <ul>
                    <li>
                        <a href="#section_main">
                            <img src="/user.svg" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="#section_technologies">
                            <img src="/tools.svg" alt=""/>
                        </a>
                    </li>
                </ul>
            </nav>
            <main className={styles.main}>
                <div id='section_main' className={styles.section_main}>
                    <img className={styles.user} src={`/oscar.jpg`}/>
                    <h1 className={styles.title}>
                        Ingenieria de software
                    </h1>
                    <ul className={styles.social_links}>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/oscar-camposh/">
                                <img src="/linkedin.svg" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://github.com/w0nde">
                                <img src="/github.svg" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://github.com/w0nde">
                                <img src="/youtube.svg" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.section_technologies}>
                    <div id='section_technologies' className={styles.technologies}>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Java - Spring Boot</li>
                            <li>Python</li>
                            <li>Nodejs, Go</li>
                            <li>Angular</li>
                            <li>React</li>
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Linux</li>
                            <li>Nginx</li>
                        </ul>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a rel="noopener noreferrer">

                </a>
            </footer>
        </div>
    )
}
