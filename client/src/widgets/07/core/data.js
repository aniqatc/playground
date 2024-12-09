async function fetchRepositoryDetails(owner, repo = null) {
    try {
        const url = repo ? `${process.env.SERVER}/widget/gh/${owner}/${repo}` : `${process.env.SERVER}/widget/gh/${owner}`
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function fetchRandomRepository() {
    const response = await fetch(`${process.env.SERVER}/widget/gh/random`);
    const { owner, repo }= await response.json();
    return await fetchRepositoryDetails(owner, repo);
}

export { fetchRepositoryDetails, fetchRandomRepository };