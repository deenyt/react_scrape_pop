var React = require("react");
var helpers = require('../utils/helpers');


var Results = React.createClass({

	handleSaveClick(title,date,url) {
		helpers.postArt(title,date,url);
	},

	render: function(){

		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results:</h3>
				</div>
				<div className="panel-body text-center">
                    
                    {this.props.results.map((search, i) => {
              			return <form key={i} onSubmit={this.handleSaveClick.bind(null, search.title, search.date, search.url)}>
              			 {search.title} <br />{search.date} <br />{search.url} <br />
              			<button type="submit">Save</button>
              			<br /><br /></form>
					})}
				</div>
			</div>

		)
	 }
});
module.exports = Results;