import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is <strong>Jason Paulino</strong>. I am a software engineer student at The Marcy Lab School located in Industry City in Brooklyn.</p>
      </section>
    </Layout>
  );
}