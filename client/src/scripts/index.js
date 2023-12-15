import "../styles/main.css";
import { loadWidgets } from "./load";
import { applySavedTheme } from "./ui/themeHandler";
import { initializeLikeHandler } from "./ui/likeHandler";

applySavedTheme();
loadWidgets();
initializeLikeHandler();
