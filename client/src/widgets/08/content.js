import './style.scss';
import placeholderImage from "../06/assets/megamillions-blue.png";

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
            <div class="bookmark">
                <div class="bookmark-content">
                    <div class="bookmark-content--header">
                        <h2>Meta</h2>
                        <a>@meta</a>
                    </div>
                    <div class="bookmark-content--description">
                        <p>Cross-platform remote desktop solution offering seamless control, file transfer, and screen.</p>
                    </div>
                    <div class="bookmark-content--topics">#ui #react #framework #javascript</div>
                </div>
                <div class="bookmark-sidebar">
                    <img src="${placeholderImage}" alt=""/>
                    <div class="sidebar--actions">
                        <div class="sidebar--actions--likes">
                            <i class="fa-regular fa-thumbs-up"></i>
                            <span>11</span>
                        </div>
                        <div class="sidebar--actions--dislikes">
                            <i class="fa-regular fa-thumbs-down"></i>
                            <span>11</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bookmark">
                <div class="bookmark-content">
                    <div class="bookmark-content--header">
                        <h2>Meta</h2>
                        <a>@meta</a>
                    </div>
                    <div class="bookmark-content--description">
                        <p>Cross-platform remote desktop solution offering seamless control, file transfer, and screen.</p>
                    </div>
                    <div class="bookmark-content--topics">#ui #react #framework #javascript</div>
                </div>
                <div class="bookmark-sidebar">
                    <img src="${placeholderImage}" alt=""/>
                    <div class="sidebar--actions">
                        <div class="sidebar--actions--likes">
                            <i class="fa-regular fa-thumbs-up"></i>
                            <span>11</span>
                        </div>
                        <div class="sidebar--actions--dislikes">
                            <i class="fa-regular fa-thumbs-down"></i>
                            <span>11</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bookmark">
                <div class="bookmark-content">
                    <div class="bookmark-content--header">
                        <h2>Meta</h2>
                        <a>@meta</a>
                    </div>
                    <div class="bookmark-content--description">
                        <p>Cross-platform remote desktop solution offering seamless control, file transfer, and screen.</p>
                    </div>
                    <div class="bookmark-content--topics">#ui #react #framework #javascript</div>
                </div>
                <div class="bookmark-sidebar">
                    <img src="${placeholderImage}" alt=""/>
                    <div class="sidebar--actions">
                        <div class="sidebar--actions--likes">
                            <i class="fa-regular fa-thumbs-up"></i>
                            <span>11</span>
                        </div>
                        <div class="sidebar--actions--dislikes">
                            <i class="fa-regular fa-thumbs-down"></i>
                            <span>11</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bookmark">
                <div class="bookmark-content">
                    <div class="bookmark-content--header">
                        <h2>Meta</h2>
                        <a>@meta</a>
                    </div>
                    <div class="bookmark-content--description">
                        <p>Cross-platform remote desktop solution offering seamless control, file transfer, and screen.</p>
                    </div>
                    <div class="bookmark-content--topics">#ui #react #framework #javascript</div>
                </div>
                <div class="bookmark-sidebar">
                    <img src="${placeholderImage}" alt=""/>
                    <div class="sidebar--actions">
                        <div class="sidebar--actions--likes">
                            <i class="fa-regular fa-thumbs-up"></i>
                            <span>11</span>
                        </div>
                        <div class="sidebar--actions--dislikes">
                            <i class="fa-regular fa-thumbs-down"></i>
                            <span>11</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="content-footer">
        <input class="add-input" type="text" placeholder="Add a website to the community bookmarks...">
        <button class="add-btn"><i class="fa-solid fa-plus"></i></button>
    </section>
</div>
</section>`
}