import "../styles/main.css";
import { loadWidgets } from "./load";
import { applySavedTheme } from "./ui/themeHandler";
import "./ui/likeHandler";

applySavedTheme();
loadWidgets();
