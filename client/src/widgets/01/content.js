import "./style.scss";

export function getMarkup() {
  return `
    <section
        class="relative rounded bg-stone-50 px-3 py-2 shadow-md dark:bg-zinc-800"
      >
        <p>
          A place to showcase a variety of independent widgets with different
          functionalities.
        </p>
        <div>

        </div>
        <div
          class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
        >
          <p class="mr-auto">About</p>
          <button><i class="fa-regular fa-heart"></i></button
          ><span>00</span>
        </div>
    </section>
    `;
}
