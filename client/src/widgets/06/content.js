import "./style.scss";
import MegamillionsLogo from "./assets/megamillions-blue.png";
import PowerballLogo from "./assets/powerball-blue.png";

export function getMarkup() {
    return `<!-- Widget 06: Historical Lottery -->
<section
  id="widget-06"
  class="relative h-min rounded bg-stone-50 px-3 py-2 shadow-md dark:border-zinc-600 dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">lottery history</p>
    <button class="like-btn group cursor-pointer" aria-label="like button">
      <i class="fa-solid fa-heart group-active:scale-125"></i>
    </button>
    <span class="like-value font-archivo" id="likes-06"></span>
  </div>

  <div class="content" data-game="megamillions">
    <!-- Header -->
    <header class="content-header">
      <!-- Game-specific logos -->
      <img 
        src="${MegamillionsLogo}" 
        alt="Mega Millions logo" 
        class="lottery-logo megaball-content"
        aria-label="Mega Millions Lottery"
      >
      <img 
        src="${PowerballLogo}" 
        alt="Powerball logo" 
        class="lottery-logo powerball-content hidden"
        aria-label="Powerball Lottery"
      >
    </header>

    <!-- Main content -->
    <main class="content-body">
      <h2 class="lottery-title">Check if your numbers ever hit the <strong>jackpot</strong></h2>

      <div class="lottery-search-range">
        <i class="fa-regular fa-calendar"></i>
        <span>Search Range: 02/23/1980 - 11/14/2024</span>
      </div>
      
      <!-- Lottery number inputs -->
      <div class="lottery-input-container" aria-label="Enter lottery numbers">
        <div class="lottery-inputs" role="group" aria-label="Main lottery numbers">
          <div class="lottery-main-numbers" role="group" aria-label="Pick 5 numbers">
            <div class="number-input-wrapper">
              <input type="number" placeholder=" " min="1" max="70" class="lottery-number-input" aria-label="Number 1">
              <span class="input-hint megaball-content">Max. 70</span>
              <span class="input-hint powerball-content hidden">Max. 69</span>
            </div>
            <div class="number-input-wrapper">
              <input type="number" placeholder=" " min="1" max="70" class="lottery-number-input" aria-label="Number 2">
              <span class="input-hint megaball-content">Max. 70</span>
              <span class="input-hint powerball-content hidden">Max. 69</span>
            </div>
            <div class="number-input-wrapper">
              <input type="number" placeholder=" " min="1" max="70" class="lottery-number-input" aria-label="Number 3">
              <span class="input-hint megaball-content">Max. 70</span>
              <span class="input-hint powerball-content hidden">Max. 69</span>
            </div>
            <div class="number-input-wrapper">
              <input type="number" placeholder=" " min="1" max="70" class="lottery-number-input" aria-label="Number 4">
              <span class="input-hint megaball-content">Max. 70</span>
              <span class="input-hint powerball-content hidden">Max. 69</span>
            </div>
            <div class="number-input-wrapper">
              <input type="number" placeholder=" " min="1" max="70" class="lottery-number-input" aria-label="Number 5">
              <span class="input-hint megaball-content">Max. 70</span>
              <span class="input-hint powerball-content hidden">Max. 69</span>
            </div>
          </div>
          
          <div class="lottery-special-wrapper" role="group">
            <div class="number-input-wrapper">
              <input 
                type="number" 
                placeholder=" "
                class="lottery-number-input special-ball" 
                id="special-ball-number"
                aria-label="Special Ball"
              >
              <span class="input-hint megaball-content">Max. 25</span>
              <span class="input-hint powerball-content hidden">Max. 26</span>
              <label class="special-ball-label megaball-content" for="special-ball-number">Megaball</label>
              <label class="special-ball-label powerball-content hidden" for="special-ball-number">Powerball</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="lottery-actions">
        <button class="lottery-btn btn-random" aria-label="Generate random numbers">
          <i class="fa-solid fa-shuffle"></i>
          <span>Search Random</span>
        </button>
        <button class="lottery-btn btn-search" aria-label="Search for matches">
          <span>Find Matches</span>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <!-- Results section -->
      <div class="lottery-results" role="tabpanel">
        <div class="lottery-tabs" role="tablist">
          <button class="lottery-tab active" role="tab" aria-selected="true">
            <i class="fa-solid fa-trophy"></i>
            <span>Matches</span>
          </button>
          <button class="lottery-tab" role="tab" aria-selected="false">
            <i class="fa-solid fa-chart-simple"></i>
            <span>Stats</span>
          </button>
        </div>

        <div class="lottery-results-content">
          <div class="lottery-locked-message">
            <i class="fa-solid fa-lock"></i> Search to unlock historical lottery results.
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="content-footer">
      <p class="megaball-content">
        Switch to 
        <a href="#" class="lottery-switch-link" aria-label="Switch to Powerball Lottery">
          <span>Powerball</span></a> Results
      </p>
      <p class="powerball-content hidden">
        Switch to 
        <a href="#" class="lottery-switch-link" aria-label="Switch to Mega Millions Lottery">
          <span>Mega Millions</span></a> Results
      </p>
      <button class="lottery-info-btn" aria-label="Show lottery information">
        <i class="fa-solid fa-circle-info"></i>
      </button>
      <button class="lottery-reset-btn" aria-label="Reset lottery results">
        <i class="fa-solid fa-rotate"></i>
       </button>
    </footer>
  </div>
</section>`
}