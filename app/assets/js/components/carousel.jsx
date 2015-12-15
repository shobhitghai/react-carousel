var
	React = require('react');
	CarouselItem = require('./carouselItem.jsx');
	ArrowControls = require('./arrowControls.jsx');
	ItemIndicators = require(('./itemIndicators.jsx'));

var Carousel = React.createClass({
	getInitialState: function() {
		return {
		  key: 0,
		  currentItem: this.props.data[0]
		};
	},
	setCurrentItem: function(key) {
		return this.setState({
		  key: key,
		  currentItem: this.props.data[key]
		});
	},
	nextItem: function() {
		if (this.state.key === this.props.data.length - 1) {
			return this.setCurrentItem(0);
		}
		return this.setCurrentItem(this.state.key + 1);
	},
	previousItem: function() {
		if (this.state.key === 0) {
			return this.setCurrentItem(this.props.data.length - 1);
		}
		return this.setCurrentItem(this.state.key - 1);
	},
	render: function() {
		var carouselItem = <CarouselItem item={this.state.currentItem} />
		
		var options = this.props.options;

		if(options.autoSlide){
			var slideInterval = setInterval(function(){
				this.nextItem();
				clearInterval(slideInterval);
			}.bind(this), options.duration);
		}

		var arrowControls = options.autoSlide ? "" : <ArrowControls onNext={this.nextItem} onPrevious={this.previousItem}/>;
		var itemIndicators = <ItemIndicators data={this.props.data} current={this.state.key} autoSlide={options.autoSlide} indicatorClick={this.setCurrentItem}/>;

	    return (
		    	<div className="carousel">
						{carouselItem}
						{arrowControls}
						{itemIndicators}
				</div>
			);
  	}

});

module.exports = Carousel;
