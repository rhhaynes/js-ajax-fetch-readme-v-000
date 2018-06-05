const app = "I don't do much.";

const token = '0fdff22a80a9729dc7e5c1028601c077982ff4c1';
fetch('https://api.github.com/user/repos', {
  headers: {Authorization: `token ${token}`}
})
.then(res => res.json())
.then(json => console.log(json));