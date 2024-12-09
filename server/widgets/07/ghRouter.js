const express = require('express');
const router = express.Router();

(async () => {
    const { Octokit } = await import ('@octokit/rest');
    const octokit = new Octokit({ auth: process.env.GH_API_KEY });

    router.get('/:owner/:repo?', async (req, res) => {
        let { owner, repo } = req.params;

        if (!owner) {
            return res.status(404).json({ message: "User not found." })
        }

        if (!repo) {
            const ownerRepos = await octokit.repos.listForUser({
                username: owner,
                sort: 'updated',
                per_page: 1
            });
            if (!ownerRepos.data.length) {
                return res.status(404).json({ message: "No repositories found." });
            }
            repo = ownerRepos.data[0].name;
        }

        const details = await octokit.repos.get({
            owner: owner,
            repo: repo,
        })
        const languages = await octokit.repos.listLanguages({
            owner: owner,
            repo: repo,
        })

        if (!details || !languages) {
            return res.status(404).json({ message: "Repository not found." })
        }
        res.json({
            owner: {
                avatar: details.data.owner.avatar_url,
                url: details.data.owner.html_url,
                username: details.data.owner.login,
            },
            details: {
                name: details.data.name,
                size: details.data.size,
                stars: details.data.stargazers_count,
                topics: details.data.topics,
                updatedAt: details.data.updated_at,
                createdAt: details.data.created_at,
                url: details.data.html_url,
                watchers: details.data.watchers_count,
                license: details.data.license || null,
                homepage: details.data.homepage,
                forks: details.data.forks_count,
                description: details.data.description,
            },
            languages: languages.data
        });
    })
})();

module.exports = router;