import './style.scss';

export function getMarkup() {
    return `<!-- Widget 08: Template -->
<section
  id="widget-08"
  class="relative rounded bg-stone-50 px-3 py-2 shadow-md dark:border-zinc-600 dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">community bookmarks</p>
    <button class="like-btn group cursor-pointer" aria-label="like button">
      <i class="fa-solid fa-heart group-active:scale-125"> </i>
    </button>
    <span class="like-value font-archivo" id="likes-08"></span>
  </div>
  <div class="content">
    <section class="content-body">
        <div class="bookmark-container">
            <div class="bookmark-container">
    <div class="bookmark">
        <a class="bookmark-content" href="https://css-tricks.com" target="_blank">
            <div class="bookmark-content--container">
                <div class="bookmark-content--header">
                    <h2>CSS-Tricks</h2>
                    <span>css-tricks.com</span>
                </div>
                <div class="bookmark-content--description">
                    <p>A web design and development blog covering CSS, HTML, JavaScript, and all things related to web design and development.</p>
                </div>
                <ul class="bookmark-content--topics">
                    <li>#css</li>
                    <li>#webdev</li>
                    <li>#frontend</li>
                    <li>#tutorials</li>
                </ul>
            </div>
            <div class="bookmark-content--img">
                <img src="https://css-tricks.com/favicon.ico" alt="CSS-Tricks"/>
            </div>
        </a>
        <div class="bookmark-sidebar">
            <div class="sidebar--actions">
                <div class="sidebar--actions--likes">
                    <button class="sidebar--actions--likes-btn">
                        <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <span class="sidebar--actions--likes-count">245</span>
                </div>
                <div class="sidebar--actions--dislikes">
                    <button class="sidebar--actions--dislikes-btn">
                        <i class="fa-regular fa-thumbs-down"></i>
                    </button>
                    <span class="sidebar--actions--dislikes-count">12</span>
                </div>
            </div>
        </div>
    </div>

    <div class="bookmark">
        <a class="bookmark-content" href="https://github.com" target="_blank">
            <div class="bookmark-content--container">
                <div class="bookmark-content--header">
                    <h2>GitHub</h2>
                    <span>github.com</span>
                </div>
                <div class="bookmark-content--description">
                    <p>GitHub is where over 100 million developers shape the future of software. Contribute to the open source community, manage Git repositories.</p>
                </div>
                <ul class="bookmark-content--topics">
                    <li>#github</li>
                    <li>#coding</li>
                    <li>#opensource</li>
                    <li>#development</li>
                </ul>
            </div>
            <div class="bookmark-content--img">
                <img src="https://github.githubassets.com/assets/github-logo-55c5b9a1fe52.png" alt="GitHub"/>
            </div>
        </a>
        <div class="bookmark-sidebar">
            <div class="sidebar--actions">
                <div class="sidebar--actions--likes">
                    <button class="sidebar--actions--likes-btn">
                        <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <span class="sidebar--actions--likes-count">389</span>
                </div>
                <div class="sidebar--actions--dislikes">
                    <button class="sidebar--actions--dislikes-btn">
                        <i class="fa-regular fa-thumbs-down"></i>
                    </button>
                    <span class="sidebar--actions--dislikes-count">15</span>
                </div>
            </div>
        </div>
    </div>

    <div class="bookmark">
        <a class="bookmark-content" href="https://figma.com" target="_blank">
            <div class="bookmark-content--container">
                <div class="bookmark-content--header">
                    <h2>Figma</h2>
                    <span>figma.com</span>
                </div>
                <div class="bookmark-content--description">
                    <p>The collaborative interface design tool that lets you create, share, and prototype designs. Work together in real-time with your team.</p>
                </div>
               <ul class="bookmark-content--topics">
                    <li>#design</li>
                    <li>#ux</li>
                    <li>#collaboration</li>
                    <li>#tool</li>
                </ul>
            </div>
            <div class="bookmark-content--img">
                <img src="https://static.figma.com/app/icon/1/favicon.png" alt="Figma"/>
            </div>
        </a>
        <div class="bookmark-sidebar">
            <div class="sidebar--actions">
                <div class="sidebar--actions--likes">
                    <button class="sidebar--actions--likes-btn">
                        <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <span class="sidebar--actions--likes-count">167</span>
                </div>
                <div class="sidebar--actions--dislikes">
                    <button class="sidebar--actions--dislikes-btn">
                        <i class="fa-regular fa-thumbs-down"></i>
                    </button>
                    <span class="sidebar--actions--dislikes-count">8</span>
                </div>
            </div>
        </div>
    </div>

    <div class="bookmark">
        <a class="bookmark-content" href="https://mdn.dev" target="_blank">
            <div class="bookmark-content--container">
                <div class="bookmark-content--header">
                    <h2>MDN Web Docs</h2>
                    <span>mdn.dev</span>
                </div>
                <div class="bookmark-content--description">
                    <p>The Mozilla Developer Network provides comprehensive documentation and learning resources for web technologies including HTML, CSS, and JavaScript.</p>
                </div>
                <ul class="bookmark-content--topics">
                    <li>#documentation</li>
                    <li>#webdev</li>
                    <li>#learning</li>
                    <li>#mozilla</li>
                </ul>
            </div>
            <div class="bookmark-content--img">
                <img src="https://developer.mozilla.org/apple-touch-icon.528534bba673c38049c2.png" alt="MDN Web Docs"/>
            </div>
        </a>
        <div class="bookmark-sidebar">
            <div class="sidebar--actions">
                <div class="sidebar--actions--likes">
                    <button class="sidebar--actions--likes-btn">
                        <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <span class="sidebar--actions--likes-count">298</span>
                </div>
                <div class="sidebar--actions--dislikes">
                    <button class="sidebar--actions--dislikes-btn">
                        <i class="fa-regular fa-thumbs-down"></i>
                    </button>
                    <span class="sidebar--actions--dislikes-count">5</span>
                </div>
            </div>
        </div>
    </div>

    <div class="bookmark">
        <a class="bookmark-content" href="https://vercel.com" target="_blank">
            <div class="bookmark-content--container">
                <div class="bookmark-content--header">
                    <h2>Vercel</h2>
                    <span>vercel.com</span>
                </div>
                <div class="bookmark-content--description">
                    <p>Deploy web projects with zero configuration, built-in CI/CD, and automatic SSL. Perfect for Next.js and other frontend frameworks.</p>
                </div>
                <ul class="bookmark-content--topics">
                    <li>#hosting</li>
                    <li>#deployment</li>
                    <li>#nextjs</li>
                    <li>#development</li>
                </ul>
            </div>
            <div class="bookmark-content--img">
                <img src="https://www.svgrepo.com/show/327408/logo-vercel.svg" alt="Vercel"/>
            </div>
        </a>
        <div class="bookmark-sidebar">
            <div class="sidebar--actions">
                <div class="sidebar--actions--likes">
                    <button class="sidebar--actions--likes-btn">
                        <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <span class="sidebar--actions--likes-count">156</span>
                </div>
                <div class="sidebar--actions--dislikes">
                    <button class="sidebar--actions--dislikes-btn">
                        <i class="fa-regular fa-thumbs-down"></i>
                    </button>
                    <span class="sidebar--actions--dislikes-count">7</span>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    </section>
    <section class="content-footer">
        <input class="add-input" type="text" placeholder="Share a resource with the community">
        <button class="add-btn"><i class="fa-solid fa-plus"></i></button>
    </section>
</div>
</section>`
}