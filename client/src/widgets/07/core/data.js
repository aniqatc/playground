export default async function fetchRepositoryDetails(owner, repo = null) {
    const url = repo ? `${process.env.SERVER}/widget/gh/${owner}/${repo}` : `${process.env.SERVER}/widget/gh/${owner}`
    const response = await fetch(url);
    return await response.json();
}