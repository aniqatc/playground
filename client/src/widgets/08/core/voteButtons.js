import bookmarkContext from "./context";
const { widget } = bookmarkContext;
import { addVote, fetchUserVoteCount } from "./data";

export default async function initializeVoteButtons(bookmark) {
    const el = widget.querySelector(`#id-${bookmark._id}`);
    const likeButton = el.querySelector(`.sidebar--actions--likes-btn`);
    const dislikeButton = el.querySelector(`.sidebar--actions--dislikes-btn`);
    const likesCount = el.querySelector(".sidebar--actions--likes-count");
    const dislikesCount = el.querySelector(".sidebar--actions--dislikes-count");

    likeButton.addEventListener("click", async () => {
        const userVote = await fetchUserVoteCount(bookmark._id);
        if (userVote.likeCount === 0) {
            const updatedCount = await addVote(bookmark._id, 'like');
            likesCount.textContent = updatedCount.likeCount;
            dislikesCount.textContent = updatedCount.dislikeCount;
            likeButton.classList.add('active');
            dislikeButton.classList.remove('active');
            console.log(userVote);
        }
    })

    dislikeButton.addEventListener("click", async () => {
        const userVote = await fetchUserVoteCount(bookmark._id);
        if (userVote.dislikeCount === 0) {
            const updatedCount = await addVote(bookmark._id, 'dislike');
            console.log(updatedCount);
            dislikesCount.textContent = updatedCount.dislikeCount;
            likesCount.textContent = updatedCount.likeCount;
            dislikeButton.classList.add('active');
            likeButton.classList.remove('active');
        }
    })
}