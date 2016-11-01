var axios = require('axios');

var GitHubUser = {
    getByUsername: function(username) {
        return axios.get('https://api.github.com/users/' + username)
                .then(function(response){
                    console.log(response);
                });
    },
    getReposByUsername: function(username) {
        return axios.get('https://api/.github.com/users' + username + '/repos');
    }
};

module.exports = GitHubUser;
