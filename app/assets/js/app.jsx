var
	React = require('react'),
	Carousel = require('./components/carousel.jsx'),
	data = require('../../data/carousel.js');

console.log(data);

// options to be passed to carousel component 
var optionsAutoSlide = {
	autoSlide: true,
	duration: 4000
};

var optionsAutoSlideFast = {
	autoSlide: true,
	duration: 1000
}

var optionsArrow = {
	autoSlide: false
};

var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2>Carousel with arrows and clickable indicators </h2>
						<Carousel key="0" data={data.items} options={optionsArrow}/>

						<br></br>
						<br></br>
						<br></br>
						<br></br>
					
						<h2>Carousel autoSlide with duration 4 sec</h2>
						<Carousel key="1" data={data.items} options={optionsAutoSlide}/>

						<br></br>
						<br></br>
						<br></br>
						<br></br>
						
						<h2>Carousel autoSlide with duration 1 sec</h2>
						<Carousel key="2" data={data.items} options={optionsAutoSlideFast}/>

						<br></br>
						<br></br>
						<br></br>
						<br></br>
						
					</div>
				</div>
			</div>
		)
	}
});

React.render(
	<App />,
	document.body
);
