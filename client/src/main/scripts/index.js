import "../styles/main.css";
import { loadWidgets } from "./content/load";
import { applySavedTheme } from "./ui/themeHandler";
import { initializeLikeHandler } from "./likes/likeHandler";
import { createNewUser, fetchUserData } from "./user/userHandler";

loadWidgets();
applySavedTheme();
initializeLikeHandler();
createNewUser();

// temp
fetchUserData().then((data) => console.log(data));
