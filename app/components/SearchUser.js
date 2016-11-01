var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        GitHubUser.getByUsername(this.refs.username.value);
    },
    render: function(){
        return(
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>username</label>
                            <input ref="username" type="text" className="form-control" placeholder="Ex. perna" />
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = SearchUser;
