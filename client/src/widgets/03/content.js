import './style.scss';
import { card, docsUrl } from '../_card';

const fact = (label, className, mono = false) =>
  `<div><dt>${label}</dt><dd class="${className}${mono ? ' font-mono' : ''}"></dd></div>`;

export function getMarkup() {
  return card({
    id: '03',
    title: 'Digital footprint',
    tags: 'Mapbox · IP API',
    color: { w: '#E8762B', wf: '#E8762B', won: '#1A0D00' },
    span: 4,
    note: 'Nothing is stored',
    docs: docsUrl('03-digital-footprint.md'),
    body: `
      <div class="ip-box">
        <div class="ip-title"><span class="dot"></span>Your IP address</div>
        <div class="user-ip font-mono"></div>
      </div>
      <div class="map-box" aria-hidden="true">
        <img class="user-map-img" src="" alt="" />
        <span class="map-pin-ring"></span>
      </div>
      <dl class="data-grid">
        ${fact('City', 'user-city')}
        ${fact('Region', 'user-region')}
        ${fact('Country', 'user-country')}
        ${fact('Timezone', 'user-timezone')}
        ${fact('Latitude', 'user-lat', true)}
        ${fact('Longitude', 'user-lon', true)}
        <hr />
        ${fact('Browser', 'user-browser')}
        ${fact('OS', 'user-os')}
        ${fact('Platform', 'user-platform')}
        ${fact('ISP', 'user-isp')}
      </dl>
    `,
  });
}
