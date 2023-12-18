import "./content/load";
import "../styles/main.css";
import { applySavedTheme } from "./ui/themeHandler";
import { initializeLikeHandler } from "./likes/likeHandler";

applySavedTheme();
initializeLikeHandler();
