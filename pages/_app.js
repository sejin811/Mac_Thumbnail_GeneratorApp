import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Next.js 기본 전역 스타일
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
export default MyApp;