import Head from 'next/head';
import styles from '../styles/Home.module.css';
import layoutStyles from '../styles/Layout.module.css';
import utilsStyles from '../styles/Utils.module.css';

export default function Home() {
  return (
    <div className={layoutStyles.root}>
      <Head>
        <title>Techtailor </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={layoutStyles.nav}>
        <a href="/" className={layoutStyles.logo}>
          Techtailor
        </a>
        <div>
          {/* <a href="/" className={layoutStyles.navLink}>
            Careers
          </a> */}
        </div>
      </nav>

      <main className={layoutStyles.container}>
        <h1 className={utilsStyles.center}>
          Hire your extended dev team today
        </h1>
        <h2 className={`${utilsStyles.center} ${styles.subtitle}`}>
          We are obsessed about building great products.
        </h2>

        <div className={styles.logos}>
          <div className={styles.logosWrapper}>
            <img width={64} height={64} src="/img/ruby.svg" />
            <img width={64} height={64} src="/img/react.svg" />
            <img width={64} height={64} src="/img/javascript.svg" />
            <img width={64} height={64} src="/img/postgresql.svg" />
            <img width={64} height={64} src="/img/vue.svg" />
            <img width={64} height={64} src="/img/aws.svg" />
            <img width={64} height={64} src="/img/nodejs.svg" />
            <img width={64} height={64} src="/img/nextjs.svg" />
            <img width={64} height={64} src="/img/graphql.svg" />
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.secondaryText}>
            Ready to scale up? Talk with us.
          </p>
          <a
            href="https://calendly.com/techtailor/30min?month=2020-08"
            className={styles.button}
          >
            Schedule a call
          </a>

          {/* <a href="/" className={styles.careersLink}>
            See our job openings
          </a> */}
        </div>
      </main>
    </div>
  );
}
