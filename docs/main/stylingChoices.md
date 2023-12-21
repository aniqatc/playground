## Styling choices for webpage and widgets

**Relevant files**: [/client/src/main/\*](../../client/src/main/styles/) and [/client/src/widgets/\*](../../client/src/widgets/)

The overall webpage styling, including the header, dark mode, card styling and layout, is handled using Tailwind's utility classes and be found directly in the main `index.html` file. The individual widgets, however, use SCSS for styling and can be found in the individual folders of each widget.

**Here are some key points**:

- Tailwind is used for the overall webpage styling and layout as it makes it easy to adjust the styling directly in the markup and keeps it separate from the individual widget styling which is declarated in its own dedicated SCSS file
- SCSS is used specifically to encapsulate and modularize the individual widget styling because of SCSS' nesting abilities. This allows me to nest classes under a single ID or class that is specific to the widget and ensure that the styles won't conflict with other widget styling. If it wasn't for this capability, I would have to create unique class names that could get very long and hard-to-read and manage (e.g. `.widget-03-header-title_icon` vs `#widget-03` and nesting all the styling under it)

Basically, anything relating to the overall webpage or layout is edited inside the main `html` file and the individual widgets are edited in its respective SCSS file.

Lastly, there is a `_var.scss` file that holds variables that I reuse throughout different widgets. This is because even though each widget may have its own styling, I still want there to be a cohesive theme across all widgets so having a file holding common variables allows me to uphold this goal and reduce repetition.
