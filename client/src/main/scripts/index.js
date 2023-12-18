import "../styles/main.css";
import { loadWidgets } from "./content/load";
import { applySavedTheme } from "./ui/themeHandler";
import { initializeLikeHandler } from "./likes/likeHandler";

loadWidgets();
applySavedTheme();
initializeLikeHandler();
