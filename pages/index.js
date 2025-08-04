import Head from 'next/head';
import styles from '../styles/Home.module.css';
const apps = [
    {
        name: 'CodeEdit',
        description: 'A lightweight, fast, and native code editor for macOS.',
        icon: '💻',
        downloadUrl: '#',
    },
    {
        name: 'CleanShot X',
        description: 'The ultimate screen capturing tool for macOS.',
        icon: '📸',
        downloadUrl: '#',
    },
    {
        name: 'Raycast',
        description: 'A blazingly fast, totally extendable launcher.',
        icon: '🚀',
        downloadUrl: '#',
    },
    {
        name: 'Alfred',
        description: 'Award-winning app for macOS which boosts your efficiency.',
        icon: '🎩',
        downloadUrl: '#',
    },
    {
        name: 'Things 3',
        description: 'The award-winning personal task manager that helps you achieve your goals.',
        icon: '✅',
        downloadUrl: '#',
    },
    {
        name: 'Fantastical',
        description: 'The calendar and tasks app you won\'t be able to live without.',
        icon: '📅',
        downloadUrl: '#',
    },
];

export default function Home() {
    const siteUrl = ""
    const title = "Home Page"
    const description = "맥 환경을 더욱 간편하게 만들어 보세요. 개똥 같은 맥을 기똥차게 만들어 줄겁니다."
    return (
        <div className={styles.container}>
            <Head>
                <title>Maclify - Home Page</title>
                <meta name="description" content="The best place to find and distribute Mac software." />
                <meta name="keywords" content="맥, 맥북, 맥북 썸네일 오류, 맥 썸네일 오류, 맥 미리보기 안됨, 맥북 미리보기 안됨, 
                무료 맥북 소프트웨어, 무료 맥 썸네일 생성기, Mac, macOS, software, apps, download, utility, free, mac apps" />
                <meta name="author" content="Maclify" />
                <link rel="icon" href="/img/maclify-favicon.png" type="image/png" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="#">Maclify</a>
                </h1>

                <p className={styles.description}>
                    맥 환경을 더욱 간편하게 만들어 보세요. 개똥 같은 맥을 기똥차게 만들어 줄겁니다.
                </p>

                <div className={styles.grid}>
                    {apps.map((app, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardIcon}>{app.icon}</div>
                            <h2>{app.name} &rarr;</h2>
                            <p>{app.description}</p>
                            <a href={app.downloadUrl} className={styles.downloadButton}>Download</a>
                        </div>
                    ))}
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by You
                </a>
            </footer>
        </div>
    );
}