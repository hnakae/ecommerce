import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

export default class CartBtn extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div href="#" className="cart-link">
				Cart<div>4</div>
			</div>
		);
	}
}

