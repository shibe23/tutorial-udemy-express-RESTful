// Asynchronous
console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

// Synchronous
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');


function getUser (id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'hoge' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Calling Github API...');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}