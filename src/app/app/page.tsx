'use client';

import { useEffect, useState } from 'react';

const LINK_IOS = 'https://apps.apple.com/br/app/finance-lab/id6800523206';
const LINK_ANDROID =
  'https://play.google.com/store/apps/details?id=com.labaitech.financelab';
const LINK_SITE = 'https://www.labai-tech.com/';

export default function BaixarApp() {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [ios, setIos] = useState(LINK_IOS);
  const [android, setAndroid] = useState(LINK_ANDROID);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const isAndroid = /android/i.test(ua);
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (/Mac/.test(ua) && navigator.maxTouchPoints > 1);

    // Repassa ?utm_source=... para a loja, pra saber de onde veio o download
    const qs = window.location.search;
    const comQuery = (url: string) =>
      qs ? url + (url.includes('?') ? '&' : '?') + qs.slice(1) : url;

    setIos(comQuery(LINK_IOS));
    setAndroid(comQuery(LINK_ANDROID));

    if (isAndroid) {
      window.location.replace(comQuery(LINK_ANDROID));
      const t = setTimeout(() => setMostrarOpcoes(true), 2500);
      return () => clearTimeout(t);
    }
    if (isIOS) {
      window.location.replace(comQuery(LINK_IOS));
      const t = setTimeout(() => setMostrarOpcoes(true), 2500);
      return () => clearTimeout(t);
    }
    setMostrarOpcoes(true);
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        textAlign: 'center',
        color: '#fff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background:
          'radial-gradient(ellipse 70% 40% at 50% 10%, rgba(0,200,83,.22), transparent 70%), linear-gradient(165deg, #0e1a12, #0A0C0A 60%)',
      }}
    >
      <div style={{ maxWidth: 420, width: '100%' }}>
        {!mostrarOpcoes ? (
          <>
            <div
              style={{
                width: 30,
                height: 30,
                margin: '0 auto 22px',
                border: '3px solid rgba(255,255,255,.15)',
                borderTopColor: '#00C853',
                borderRadius: '50%',
                animation: 'girar .8s linear infinite',
              }}
            />
            <p style={{ color: 'rgba(255,255,255,.62)' }}>Abrindo a loja…</p>
            <style>{'@keyframes girar { to { transform: rotate(360deg) } }'}</style>
          </>
        ) : (
          <>
            <h1
              style={{
                margin: '0 0 12px',
                fontSize: 30,
                lineHeight: 1.15,
                letterSpacing: '-.02em',
              }}
            >
              Baixe o FinanceLab
            </h1>
            <p style={{ margin: '0 0 28px', color: 'rgba(255,255,255,.62)' }}>
              Sua carteira analisada por IA. Plano gratuito, sem cartão.
            </p>

            <a
              href={android}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '17px 24px',
                marginBottom: 12,
                borderRadius: 60,
                fontWeight: 700,
                fontSize: 17,
                textDecoration: 'none',
                background: '#00C853',
                color: '#06210f',
              }}
            >
              Baixar no Android
            </a>

            <a
              href={ios}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '17px 24px',
                marginBottom: 12,
                borderRadius: 60,
                fontWeight: 700,
                fontSize: 17,
                textDecoration: 'none',
                color: '#fff',
                boxShadow: 'inset 0 0 0 2px rgba(255,255,255,.22)',
              }}
            >
              Baixar no iPhone
            </a>

            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,.38)',
                margin: '22px 0 0',
              }}
            >
              Conteúdo educativo. Não é recomendação de investimento.
              <br />
              <a href={LINK_SITE} style={{ color: 'rgba(255,255,255,.55)' }}>
                labai-tech.com
              </a>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
