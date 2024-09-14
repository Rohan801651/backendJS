require('dotenv').config()
// import express from 'express'; 
const express = require('express');

const app = express();
const port = /* process.env.PORT || */ 4000; // production ke lie env file banana 100% zarori ha 

const data = {
    "login": "Rohan801651",
    "id": 163097787,
    "node_id": "U_kgDOCbisuw",
    "avatar_url": "https://avatars.githubusercontent.com/u/163097787?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rohan801651",
    "html_url": "https://github.com/Rohan801651",
    "followers_url": "https://api.github.com/users/Rohan801651/followers",
    "following_url": "https://api.github.com/users/Rohan801651/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rohan801651/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rohan801651/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rohan801651/subscriptions",
    "organizations_url": "https://api.github.com/users/Rohan801651/orgs",
    "repos_url": "https://api.github.com/users/Rohan801651/repos",
    "events_url": "https://api.github.com/users/Rohan801651/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rohan801651/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Muhammad Rohan Ali",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2024-03-12T05:55:30Z",
    "updated_at": "2024-09-14T13:34:55Z"
}

app.get('/', (req, res) => {
    res.send('server is working');

});

app.get('/admin', (req, res) => {
    res.send('<h1>Admin portal</h1>');
});

app.get('/github', (req, res) => {
    res.json(data)
});

app.listen(process.env.PORT, () => {
    console.log(`server at http://localhost:${port}`);
});


