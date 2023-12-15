import "../styles/main.css";
import { loadWidgets } from "./load";
import { applySavedTheme } from "./ui/themeHandler";
import { initializeLikes } from "./ui/likeHandler";

applySavedTheme();
loadWidgets().then(initializeLikes);
