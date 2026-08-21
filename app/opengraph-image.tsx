import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Felipe Silva | Senior Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 72,
          background: '#0B1220',
          color: '#F3F5F7',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 50% at 20% 20%, rgba(44,74,54,0.55), transparent 55%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 56,
            right: 72,
            fontSize: 28,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C5D6CB',
            fontFamily: 'ui-monospace, monospace',
          }}
        >
          Madrid
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}>
            Felipe Silva
          </div>
          <div
            style={{
              fontSize: 34,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              color: '#E4E8EE',
            }}
          >
            Senior Software Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: 'ui-monospace, monospace',
              color: '#C5D6CB',
              letterSpacing: '0.08em',
            }}
          >
            .NET · SQL Server · AWS
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
