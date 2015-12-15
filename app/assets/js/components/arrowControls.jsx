var React = require('react');

var ArrowControls = React.createClass({
  render: function() {
    return (
	    	<div className="carousel-controls">
					<a href="javascript:void(0)" className="carousel-control left" onClick={this.props.onPrevious}>
						<span className="glyphicon glyphicon-chevron-left"></span>
					</a> 
					<a href="javascript:void(0)" className="carousel-control right" onClick={this.props.onNext}>
						<span className="glyphicon glyphicon-chevron-right"></span>
					</a>
			</div>
		)
  }
});

module.exports = ArrowControls;
