async function fetchRepositoryDetails(owner, repo = null) {
  const url = repo
    ? `${process.env.SERVER}/widget/gh/${owner}/${repo}`
    : `${process.env.SERVER}/widget/gh/${owner}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  localStorage.setItem('repo', JSON.stringify([data.owner.username, data.details.name]));
  return data;
}

async function fetchRandomRepository() {
  const response = await fetch(`${process.env.SERVER}/widget/gh/random`);
  const { owner, repo } = await response.json();

  localStorage.setItem('repo', JSON.stringify([owner, repo]));
  return await fetchRepositoryDetails(owner, repo);
}

export { fetchRepositoryDetails, fetchRandomRepository };
