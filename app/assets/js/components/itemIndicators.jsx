var React = require('react');

var ItemIndicators = React.createClass({
  render: function() {
  	var indicator = [];
  		itemCount = this.props.data.length;
  		isActive = "";

	for (var i = 0; i < itemCount; i++) {
		if(i == this.props.current){
    		indicator.push( <li className="active" value={i} key={i} onClick={this.props.autoSlide ? "" : this.props.indicatorClick.bind(null,i)} />);
		}else{
    		indicator.push( <li className="" value={i} key={i} onClick={this.props.autoSlide ? "" : this.props.indicatorClick.bind(null, i)}/>);
		}
	}

    return (
	    	<ol className="carousel-indicators">
	    		{indicator}
	    	</ol>
		)
  }
});

module.exports = ItemIndicators;
