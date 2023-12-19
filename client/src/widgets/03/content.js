import "./style.scss";

export function getMarkup() {
  return `
<!-- Widget 03: User Footprint -->
<section
  id="widget-03"
  class="relative h-min rounded bg-stone-50 px-3 py-2 shadow-md dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">digital footprint</p>
    <button class="like-btn group cursor-pointer" aria-label="like button">
      <i class="fa-solid fa-heart group-active:scale-125"></i>
    </button>
    <span class="like-value font-archivo" id="likes-03"></span>
  </div>
  <div class="content">
    <div class="ip-box">
        <div class="ip-title">
            <span class="dot"></span>
            Your IP Address
        </div>
        <div class="ip-value">12.313.131.95</div>
    </div>
    <div class="data-grid">
        <div class="location-box data-item">
            <i class="fa-solid fa-earth-americas"></i>
            <ul class="location-info">
                <li>Country: <span class="user-country">America</span></li>
                <li>Region <span class="user-region">America</span></li>
                <li>City <span class="user-city">New York</span></li>
                <li>Latitude: <span class="user-lat">America</span></li>
                <li>Longitude: <span class="user-lon">America</span></li>
            </ul>
        </div>
        <div class="map-box data-item">
            <img src="https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/pin-s+d27333(-122.4308,37.7805)/-122.4308,37.7805,11.99,0/300x300@2x?access_token=pk.eyJ1IjoiYW5pcWF0YyIsImEiOiJjbHFia3h1YWExdnN5MmtudXVtZGdqcTkxIn0.FxcSIqVz4JxgmyNLROrXRg">
        </div>
        <div class="device-box data-item">
            <i class="fa-solid fa-computer"></i>
            <ul class="device-info">
                <li>Browser: <span class="user-browser">Mozilla</span></li>
                <li>OS: <span class="user-os">Mac Intel</span></li>
                <li>Screen: <span class="user-res">50x50</span></li>
            </ul>
        </div>
        <div class="timezone-box data-item">
            <i class="fa-solid fa-clock"></i>
            <ul class="timezone-info">
                <li>Timezone: <span class="user-timezone">America/New_York</span></li>
            </ul>
        </div>
        <div class="isp-box data-item">
            <i class="fa-solid fa-wifi"></i>
            <ul class="isp-info">
                <li>ISP: <span class="user-isp">Verizon</span></li>
            </ul>
        </div>
    </div>
    <p class="footer-note">
    This data is <strong>not</strong> being saved outside your own browser.
    </p>
  </div>
</section>
`;
}
