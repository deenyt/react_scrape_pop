// Include React
var React = require("react");

// Results component

var Saved = React.createClass({
  render: function() {
    return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title text-center">Saved Articles:</h3>
			</div>
			<div className="panel-body text-center">
                 
				 {this.props.history.map(function(search, i)
						{return <p key={i}>{search.title} <br /> 
						{search.date} <br /> 
						{search.url} <br /><br /></p> 
				     }
				  )}

					
			</div>
		</div>
    );
  }
});

module.exports = Saved;