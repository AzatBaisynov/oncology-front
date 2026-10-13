import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import styles from './About.module.scss';

const playfair = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  weight: ['700'],
  display: 'swap',
});

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className={styles.wrapper}>
          
          <div className={styles.info}>
            <span 
              className={styles.subtitle}
              style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#9ca3af',
                marginBottom: '16px'
              }}
            >
              {t('subtitle')}
            </span>
            
            <h2 
              className={`${styles.title} ${playfair.className}`}
              style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#111827',
                lineHeight: '1.2',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}
            >
              {t('title')}
            </h2>
            
            <p 
              className={styles.description}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#4b5563',
                marginBottom: '40px',
                maxWidth: '520px',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', 
              }}
            >
              {t('text')}
            </p>
            
            <div 
              className={styles.stats}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                backgroundColor: '#f2f6f8;',
                borderRadius: '12px',
                padding: '16px 8px',
                width: '100%',
                marginBottom: '40px'
              }}
            >
              
              <div 
                className={styles.statItem}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0 12px',
                  borderRight: '1px solid #cbd5e1',
                  width: '100%'
                }}
              >
                <span style={{ fontSize: '10px', fontWeight: '500', textTransform: 'lowercase', color: '#64748b', marginBottom: '4px' }}>
                  {t('stats.patients.caption')}
                </span>
                <strong style={{ fontSize: '28px', fontWeight: '700', color: '#c72d36', lineHeight: '1', marginBottom: '4px' }}>
                  <span className={styles.statValueNumber}>{t('stats.patients.value')}</span>
                </strong>
                <span style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.3', fontWeight: '400' }}>
                  {t('stats.patients.desc')}
                </span>
              </div>
              
              <div 
                className={styles.statItem}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0 12px',
                  borderRight: '1px solid #cbd5e1',
                  width: '100%'
                }}
              >
                <span style={{ fontSize: '10px', fontWeight: '500', textTransform: 'lowercase', color: '#64748b', marginBottom: '4px' }}>
                  {t('stats.doctors.caption')}
                </span>
                <strong style={{ fontSize: '28px', fontWeight: '700', color: '#c72d36', lineHeight: '1', marginBottom: '4px' }}>
                  {t('stats.doctors.value')}
                </strong>
                <span style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.3', fontWeight: '400' }}>
                  {t('stats.doctors.desc')}
                </span>
              </div>
              
              <div 
                className={styles.statItem}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0 12px',
                  width: '100%'
                }}
              >
                <span style={{ fontSize: '10px', fontWeight: '500', textTransform: 'lowercase', color: '#64748b', marginBottom: '4px' }}>
                  {t('stats.equipment.caption')}
                </span>
                <strong style={{ fontSize: '14px', fontWeight: '700', color: '#c72d36', lineHeight: '1.3', marginBottom: '4px', whiteSpace: 'normal', display: 'block' }}>
                  {t('stats.equipment.value')}
                </strong>
                <span style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.3', fontWeight: '400' }}>
                  {t('stats.equipment.desc')}
                </span>
              </div>

            </div>

            
            <a 
              href="/about" 
              className={styles.btn}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#c72d36', 
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '15px',
                padding: '16px 36px',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(199, 45, 54, 0.25)',
              }}
            >
              {t('button')}
              <svg 
                className={styles.btnIcon} 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://w3.org"
                style={{
                  width: '16px',
                  height: '16px',
                }}
              >
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

          </div>

          <div 
            className={styles.imageContainer} 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '340px',          
              height: '460px',            
              borderRadius: '24px',       
              overflow: 'hidden',
              display: 'block',
              margin: '0 auto',           
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)'
            }}
          >
            <Image 
              src="/images/about/building.jpg" 
              alt={t('imageAlt')} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
              style={{
                objectFit: 'cover',       
                objectPosition: 'center'
              }}
            />
          </div>


                    
          <div 
            className={styles.mission}
            style={{
              backgroundColor: '#f2f6f8;',     
              padding: '32px 24px',          
              borderRadius: '16px',          
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
              maxWidth: '300px',             
              marginTop: '40px'              
            }}
          >
            <span 
              className={`${styles.quoteIcon} ${playfair.className}`}
              style={{
                fontSize: '48px',
                color: '#c72d36',            
                lineHeight: '1',
                marginBottom: '16px',
                display: 'block',
                userSelect: 'none'
              }}
            >
              “
            </span>

            <p 
              className={styles.missionText}
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#111827',            
                fontWeight: '500',
                marginBottom: '24px',
                display: 'block'
              }}
            >
              {t('mission')}
            </p>

            <div 
              style={{
                width: '32px',
                height: '3px',
                backgroundColor: '#c72d36',  
                borderRadius: '2px'
              }}
            />
          </div>


        </div>
      </div>
    </section>
  );
}
