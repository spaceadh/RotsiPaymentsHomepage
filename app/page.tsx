import type { Metadata } from 'next';
import RotsiLogo from '../src/components/brand/RotsiLogo';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Rotsi — Rethinking Technology',
  description:
    'Rotsi rethinks technology for modern businesses. Explore our creative arm, Malaika Studios.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="/" aria-label="Rotsi home">
          <RotsiLogo className={styles.wordmark} kind="wordmark" title="Rotsi" />
        </a>

        <span className={styles.location}>Nairobi, Kenya</span>
      </header>

      <section className={styles.hero} aria-labelledby="home-heading">
        <p className={styles.introduction}>Hi, we are Rotsi.</p>
        <h1 id="home-heading" className={styles.title}>
          Rethinking
          <br />
          technology.
        </h1>
      </section>

      <footer className={styles.footer}>
        <div className={styles.rule} aria-hidden="true" />

        <div className={styles.footerContent}>
          <p className={styles.prompt}>
            Looking for our creative arm?
            <span> Meet Malaika Studios.</span>
          </p>

          <a
            className={styles.malaikaLink}
            href="https://malaikastudios.rotsi.co.ke"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visit Malaika Studios</span>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}
