import '../styles/globals.css';
import Layout from '../components/layout/Layout/Layout';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <Layout>
            <div className="wrapper">
                <Component {...pageProps} />
            </div>
        </Layout>
    );
};

export default MyApp;
