/** @type {import('next').NextConfig} */ const isProd = process.env.NODE_ENV === 'production'; const nextConfig = {   // GitHub Pages 배포를 위한 설정   // 실제 리포지토리 이름으로 경로를 설정합니다.   basePath: isProd ? '/Mac_Thumbnail_GeneratorApp' : '',   assetPrefix: isProd ? '/Mac_Thumbnail_GeneratorApp/' : '',

    // 정적 사이트(Static Site Generation)로 빌드되도록 설정
    output: 'export',

    // 이미지 최적화 비활성화 (GitHub Pages 정적 호스팅과 호환되도록)
    images: {
        unoptimized: true,
    },

    reactStrictMode: true,
};

module.exports = nextConfig;