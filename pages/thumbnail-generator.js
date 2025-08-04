import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function ThumbnailGeneratorPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Maclify - Thumbnail Generator</title>
                <meta name="description" content="Generate thumbnails for image files that don't show previews on
      macOS." />
                <link rel="icon" href="/img/maclify-favicon.png" type="image/png" />
            </Head>

            <main className={styles.main}>
                {/* 앱 아이콘과 제목 */}
                <img src='/img/thumbnailgenerator.png' alt="Thumbnail Generator Icon" height="120" />
                <h1 className={styles.title} style={{ marginTop: '1.5rem' }}>
                    Thumbnail Generator
                </h1>

                {/* 앱에 대한 상세 설명 */}
                <p className={styles.description} style={{ maxWidth: '800px', marginTop: '1rem' }}>
                    macOS에서 특정 이미지 파일(jpg, png, WebP 등)의 미리보기가 생성되지 않아 <br/> 불편하셨나요? <br/><br/>
                    저도 불편했습니다!! <br/><br/> 그래서 만들었습니다 "Thumbnail Generator"<br/>
                    Thumbnail Generator는 간단한 드래그 앤 드롭만으로 보이지 않던 썸네일을 즉시 생성해주는 가벼운
                    유틸리티 앱입니다.
                </p>

                {/* 주요 기능 섹션 */}
                <div style={{ textAlign: 'left', marginTop: '3rem', maxWidth: '600px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>주요 기능</h2>
                    <ul style={{ fontSize: '1.5rem', color: "rgb(47, 110, 235)" }}>
                        <li>간단하고 직관적인 드래그 앤 드롭 인터페이스</li>
                        <li>jpg, png, WebP 등 다양한 포맷 지원</li>
                        <li>원본 파일을 수정하지 않고 안전하게 썸네일만 추가</li>
                        <li>가볍고 빠른 네이티브 앱</li>
                        <li><del>이렇게나 좋은데 다운로드 안한다고?</del></li>
                    </ul>
                </div>

                {/* 다운로드 버튼 */}
                <a href="#" className={styles.downloadButton} style={{ marginTop: '3rem', transform: 'scale(1.2)' }}>
                    Download Now (v1.0)
                </a>

                {/* 메인으로 돌아가기 링크 */}
                <div style={{ marginTop: '4rem' }}>
                    <Link href="/">
                        &larr; Back to Home
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Powered by You
                </a>
            </footer>
        </div>
    );
}