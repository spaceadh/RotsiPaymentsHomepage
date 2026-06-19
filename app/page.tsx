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

        <div className={styles.thought}>
          <p className={styles.thoughtLead}>Rethinking technology for</p>
          <span className={styles.srOnly}>
            businesses, client acquisition, lasting relationships, and better work.
          </span>
          <span className={styles.rotator} aria-hidden="true">
            <span>businesses.</span>
            <span>client acquisition.</span>
            <span>lasting relationships.</span>
            <span>better work.</span>
          </span>
        </div>

        <p className={styles.explanation}>
          Through focused creative and systems arms, we help businesses become easier to find,
          easier to trust, easier to choose—and worth returning to.
        </p>
      </section>

      <footer className={styles.footer}>
        <div className={styles.rule} aria-hidden="true" />

        <div className={styles.footerContent}>
          <div className={styles.footerPath}>
            <p className={styles.prompt}>
              Websites, digital presence, client acquisition and retention.
              <span> Meet Malaika Studios.</span>
            </p>

            <a
              className={styles.textLink}
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

          <div className={styles.footerPath}>
            <p className={styles.prompt}>
              Interested in partnering?
              <span> Let&apos;s talk.</span>
            </p>

            <a className={styles.textLink} href="mailto:business@rotsi.co.ke">
              <span>business@rotsi.co.ke</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
