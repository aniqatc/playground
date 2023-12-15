import "../styles/main.css";
import { applySavedTheme } from "./ui/themeHandler";
import { loadWidgets } from "./content/load";
import { initializeLikeHandler } from "./likes/likeHandler";

applySavedTheme();
loadWidgets();
initializeLikeHandler();
