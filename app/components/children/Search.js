// Include React
var React = require("react");

//Search component

var Search = React.createClass({

  getInitialState: function(){
		return {
			term: "",
			startYear: 0,
			endYear: 0
		}
	},

  handleChange: function(event) {
  	var myNewState ={};
  	myNewState[event.target.id] = event.target.value;
  	this.setState(myNewState);
  },

  handleClick: function(){
  		this.props.setTerm(this.state.term);
  		this.props.setStartYear(this.state.startYear);
  		this.props.setEndYear(this.state.endYear);

  },

  render: function() {
  	return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search</h3>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								
								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange}  />
								<br />
								<h4 className=""><strong>Start Year:</strong></h4>
								<input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChange}  />
								<br />
								<h4 className=""><strong>End Year:</strong></h4>
								<input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChange} />
								<br />
								<button type="button" className="btn btn-primary" onClick ={this.handleClick} >Submit</button>
							</div>

						</form>
				</div>
			</div>



    );
  }
});

// Export the component back for use in other files
module.exports = Search;