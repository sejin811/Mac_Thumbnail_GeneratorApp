import Head from 'next/head';
import { useRouter } from 'next/router'; // useRouter 훅을 import
import styles from '../styles/home.module.css';

const apps = [
    {
        name: 'Thumbnail Generator',
        description: '썸네일이 생성되지 않는 사진파일 썸네일 생성하기',
        icon: <img src='/img/thumbnailgenerator.png' height="80" alt="Thumbnail Generator" />,
        downloadUrl: 'https://github.com/sejin811/Mac_Thumbnail_GeneratorApp/releases/download/untagged-d7aa58e948e8d9795f45/ThumbnailApp.dmg',
        pageUrl: '/thumbnail-generator', // 상세 페이지로 이동할 URL
    },
    {
        name: '개발중이에요 :)',
        description: '이용해주셔서 감사합니다 :)',
        icon: '🔨',
        downloadUrl: '#',
        pageUrl: null, // 링크가 없는 경우
    },
];

export default function Home() {
    const router = useRouter(); // useRouter 훅을 초기화

    const handleCardClick = (url) => {
        if (url) {
            router.push(url);
        }
    };

    const siteUrl = "https://maclify.site"
    const title = "Home Page"
    const description = "맥 환경을 더욱 간편하게 만들어 보세요. 개똥 같은 맥을 기똥차게 만들어 줄겁니다."

    return (
        <div className={styles.container}>
            <Head>
                <title>Maclify - Home Page</title>
                <meta name="description" content="The best place to find and distribute Mac software." />
                <meta name="keywords" content="맥, 맥북, 맥북 썸네일 오류, 맥 썸네일 오류, 맥 미리보기 안됨,맥북 미리보기 안됨,
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
                        <div
                            key={index}
                            className={styles.card}
                            onClick={() => handleCardClick(app.pageUrl)}
                            style={{ cursor: app.pageUrl ? 'pointer' : 'default' }}
                        >
                            <div className={styles.cardIcon}>{app.icon}</div>
                            <h2>{app.name} &rarr;</h2>
                            <p>{app.description}</p>
                            <a
                                href={app.downloadUrl}
                                className={styles.downloadButton}
                                onClick={(e) => e.stopPropagation()} // 다운로드 버튼 클릭 시 페이지 이동 방지
                            >
                                Download
                            </a>
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
                    ⓒ 2025 Maclify. All rights reserved.
                </a>
            </footer>
        </div>
    );
}