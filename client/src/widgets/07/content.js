import './style.scss';

export function getMarkup() {
    return `<!-- Widget 07: GitHub Repository Card -->
<section
  id="widget-07"
  class="relative h-min rounded bg-stone-50 px-3 py-2 shadow-md dark:border-zinc-600 dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">repo card</p>
    <button class="like-btn group cursor-pointer" aria-label="like button">
      <i class="fa-solid fa-heart group-active:scale-125"> </i>
    </button>
    <span class="like-value font-archivo" id="likes-07"></span>
  </div>
  <div class="content">
    <section class="content-header">
        <input class="search-input" type="text" placeholder="https://github.com/facebook/react" />
        <button class="search-btn"><i class="fas fa-search"></i></button>
    </section>
    <section class="content-body">
        <div class="repo-card">
            <div class="repo-header">
                <img class="repo-header--img" src="https://avatars.githubusercontent.com/u/69631?s=200&v=4" alt="company logo"/>
                <div class="repo-header--title">
                    <h2>Meta</h2>
                    <span>@meta</span>
                </div>
            </div>
            <div class="repo-description">The library for web and native user interfaces.</div>
            <ul class="repo-tags">
                <li class="tag">web-development</li>
                <li class="tag">machine-learning</li>
                <li class="tag">javascript</li>
            </ul>
            <div class="repo-stats">
                <div class="repo-stats--item">
                    <i class="fa-regular fa-star"></i>
                    <span class="repo-stats--item--title">Stars</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">48,232</span>
                </div>
                <div class="repo-stats--item">
                    <i class="fa-solid fa-code-fork"></i>
                    <span class="repo-stats--item--title">Forks</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">10,324</span>
                </div>
                <div class="repo-stats--item">
                    <i class="fa-regular fa-eye"></i>
                    <span class="repo-stats--item--title">Watchers</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">422</span>
                </div>
                <div class="repo-stats--item">
                    <i class="fa-regular fa-clock"></i>
                    <span class="repo-stats--item--title">Last Updated</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">10/23/23</span>
                </div>
                <div class="repo-stats--item">
                    <i class="fa-regular fa-copyright"></i>
                    <span class="repo-stats--item--title">License</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">AGPL-3.0</span>
                </div>
                <div class="repo-stats--item">
                    <i class="fa-solid fa-weight-scale"></i>
                    <span class="repo-stats--item--title">Size</span>
                    <span class="repo-stats--item--line"></span>
                    <span class="repo-stats--item--value">242KB</span>
                </div>
            </div>
            <div class="repo-languages">
                <h3>Language Breakdown</h3>
                <div class="language-item">
                    <span class="language-name">JavaScript</span>
                    <div class="language-bar"><div class="bar" style="--final-width: 18%"></div></div>
                    <span class="language-count">350 lines <span class="slash">/</span> 34 bytes</span>
                    <div class="tooltip"><strong>18%</strong> of 3500 LOC</div>
                </div>
                <div class="language-item">
                    <span class="language-name">CSS</span>
                    <div class="language-bar"><div class="bar" style="--final-width: 25%"></div></div>
                    <span class="language-count">140 lines <span class="slash">/</span> 22 bytes</span>
                    <div class="tooltip"><strong>25%</strong> of 3500 LOC</div>
                </div>
                <div class="language-item">
                    <span class="language-name">Python</span>
                    <div class="language-bar"><div class="bar" style="--final-width: 45%"></div></div>
                    <span class="language-count">503 lines <span class="slash">/</span> 43 bytes</span>
                    <div class="tooltip"><strong>45%</strong> of 3500 LOC</div>
                </div>
                <div class="language-item">
                    <span class="language-name">TypeScript</span>
                    <div class="language-bar"><div class="bar" style="--final-width: 12%"></div></div>
                    <span class="language-count">49 lines <span class="slash">/</span> 10 bytes</span>
                    <div class="tooltip"><strong>12%</strong> of 3500 LOC</div>
                </div>
                <div class="language-item">
                    <span class="language-name">HTML</span>
                    <div class="language-bar"><div class="bar" style="--final-width: 5%"></div></div>
                    <span class="language-count">10 lines <span class="slash">/</span> 1 byte</span>
                    <div class="tooltip"><strong>5%</strong> of 3500 LOC</div>
                </div>
            </div>
        </div>
    </section>
    <section class="content-footer">
        <button class="btn-random"><i class="fa-solid fa-shuffle"></i> Random</button>
        <button class="btn-save"><i class="fa-solid fa-download"></i> Download <span>.png</span></button>
    </section>
  </div>
</section>`
}