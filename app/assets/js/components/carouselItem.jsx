var React = require('react');

var CarouselItem = React.createClass({
  render: function() {
    return  (
		    <div className="carousel-inner">
				<img src={this.props.item.img}/>
			</div>
		);
  }
});

module.exports = CarouselItem;