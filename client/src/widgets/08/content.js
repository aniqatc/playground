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
    <a class="bookmark-content" href="#">
        <div class="bookmark-content--container">
            <div class="bookmark-content--header">
                <h2>Megamillions</h2>
                <span>@megamillions</span>
            </div>
            <div class="bookmark-content--description">
                <p>Mega Millions is one of America's two big jackpot games, and the only one with Match 5 prizes up to $5 million.</p>
            </div>
            <div class="bookmark-content--topics">#megamillions #lottery #millions #money</div>
        </div>
        <div class="bookmark-content--img">
            <img src="${placeholderImage}" alt=""/>
        </div>
    </a>
    <div class="bookmark-sidebar">
        <div class="sidebar--actions">
            <a class="sidebar--actions--likes" href="#">
                <i class="fa-regular fa-thumbs-up"></i>
                <span>11</span>
            </a>
            <a class="sidebar--actions--dislikes" href="#">
                <i class="fa-regular fa-thumbs-down"></i>
                <span>11</span>
            </a>
        </div>
    </div>
</div>
<div class="bookmark">
    <a class="bookmark-content" href="#">
        <div class="bookmark-content--container">
            <div class="bookmark-content--header">
                <h2>Megamillions</h2>
                <span>@megamillions</span>
            </div>
            <div class="bookmark-content--description">
                <p>Mega Millions is one of America's two big jackpot games, and the only one with Match 5 prizes up to $5 million.</p>
            </div>
            <div class="bookmark-content--topics">#megamillions #lottery #millions #money</div>
        </div>
        <div class="bookmark-content--img">
            <img src="${placeholderImage}" alt=""/>
        </div>
    </a>
    <div class="bookmark-sidebar">
        <div class="sidebar--actions">
            <a class="sidebar--actions--likes" href="#">
                <i class="fa-regular fa-thumbs-up"></i>
                <span>11</span>
            </a>
            <a class="sidebar--actions--dislikes" href="#">
                <i class="fa-regular fa-thumbs-down"></i>
                <span>11</span>
            </a>
        </div>
    </div>
</div>
<div class="bookmark">
    <a class="bookmark-content" href="#">
        <div class="bookmark-content--container">
            <div class="bookmark-content--header">
                <h2>Megamillions</h2>
                <span>@megamillions</span>
            </div>
            <div class="bookmark-content--description">
                <p>Mega Millions is one of America's two big jackpot games, and the only one with Match 5 prizes up to $5 million.</p>
            </div>
            <div class="bookmark-content--topics">#megamillions #lottery #millions #money</div>
        </div>
        <div class="bookmark-content--img">
            <img src="${placeholderImage}" alt=""/>
        </div>
    </a>
    <div class="bookmark-sidebar">
        <div class="sidebar--actions">
            <a class="sidebar--actions--likes" href="#">
                <i class="fa-regular fa-thumbs-up"></i>
                <span>11</span>
            </a>
            <a class="sidebar--actions--dislikes" href="#">
                <i class="fa-regular fa-thumbs-down"></i>
                <span>11</span>
            </a>
        </div>
    </div>
</div>
<div class="bookmark">
    <a class="bookmark-content" href="#">
        <div class="bookmark-content--container">
            <div class="bookmark-content--header">
                <h2>Megamillions</h2>
                <span>@megamillions</span>
            </div>
            <div class="bookmark-content--description">
                <p>Mega Millions is one of America's two big jackpot games, and the only one with Match 5 prizes up to $5 million.</p>
            </div>
            <div class="bookmark-content--topics">#megamillions #lottery #millions #money</div>
        </div>
        <div class="bookmark-content--img">
            <img src="${placeholderImage}" alt=""/>
        </div>
    </a>
    <div class="bookmark-sidebar">
        <div class="sidebar--actions">
            <a class="sidebar--actions--likes" href="#">
                <i class="fa-regular fa-thumbs-up"></i>
                <span>11</span>
            </a>
            <a class="sidebar--actions--dislikes" href="#">
                <i class="fa-regular fa-thumbs-down"></i>
                <span>11</span>
            </a>
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