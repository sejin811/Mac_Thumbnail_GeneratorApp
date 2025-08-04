import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function ThumbnailGeneratorPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Maclify - Thumbnail Generator</title>
                <meta name="description" content="macOS에서 jpg, png, WebP 등 미리보기가 안 보이는 이미지 파일의 썸네일을
                생성해주는 가벼운 무료 유틸리티 앱입니다. 드래그 앤 드롭으로 쉽게 사용하세요." />
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
                    macOS에서 특정 이미지 파일(jpg, png, WebP 등)의 미리보기가 생성되지 않아 <br /> 불편하셨나요? <br /><br />
                    저도 불편했습니다!! <br /><br /> 그래서 만들었습니다 "Thumbnail Generator"<br />
                    Thumbnail Generator는 간단한 드래그 앤 드롭만으로 보이지 않던 썸네일을 즉시 생성해주는 가벼운
                    유틸리티 앱입니다.
                </p>

                {/* 앱 사용 예시 동영상 */}
                <div style={{ marginTop: '3rem', maxWidth: '800px', width: '100%', padding: '0 1rem' }}>
                    <video
                        src="/img/thumbnail-generator-demo.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            borderRadius: '18px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* 주요 기능 섹션 */}
                <div style={{ textAlign: 'left', marginTop: '3rem', maxWidth: '600px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>주요 기능</h2>
                    <ul style={{ fontSize: '1.5rem', color: "rgb(47, 110, 235)", lineHeight: '1.8' }}>
                        <li>간단하고 직관적인 드래그 앤 드롭 인터페이스</li>
                        <li>jpg, png, WebP 등 다양한 포맷 지원</li>
                        <li>원본 파일을 수정하지 않고 안전하게 썸네일만 추가</li>
                        <li>가볍고 빠른 네이티브 앱</li>
                        <li><del>공짜라는게 진짜 최고인</del></li>
                    </ul>
                </div>

                {/* 최초 실행 가이드 섹션 */}
                <div style={{
                    marginTop: '4rem', maxWidth: '800px', width: '100%', padding: '0 1rem', borderTop: '1px solid #eaeaea', paddingTop: '3rem'
                }}>,
                    <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>최초 실행 시 권한 설정 방법</h2>
                    <p className={styles.description} style={{ fontSize: '1.1rem' }}>
                        앱을 처음 실행할 때 '확인되지 않은 개발자'라는 경고가 표시될 수 있습니다. <br />
                        아래 영상에 따라 '시스템 설정'에서 앱을 허용해주세요.<br />
                        <del>악성코드 없습니다 :(</del>
                    </p>
                    <video
                        src="/img/permission-guide.mov" // 권한 설정 안내 영상 파일 경로
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            borderRadius: '18px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                            marginTop: '2rem'
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* 다운로드 버튼 */}
                <a href="https://github.com/sejin811/Mac_Thumbnail_GeneratorApp/releases/download/untagged-d7aa58e948e8d9795f45/ThumbnailApp.dmg" className={styles.downloadButton} style={{ marginTop: '3rem', transform: 'scale(1.2)' }}>
                    Download Now (v1.0)
                </a>

                {/* 메인으로 돌아가기 링크 */}
                <div style={{ marginTop: '4rem' }}>
                    <Link href="/">
                        &larr; Back to Home
                    </Link>
                </div>
            </main >

            <footer className={styles.footer}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    ⓒ 2025 Maclify. All rights reserved.
                </a>
            </footer>
        </div >
    );
}