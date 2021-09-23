import React, { Component } from "react";
import "./StatusBar.css";

class StatusBar extends Component {
	render() {
		return (
			<div className="status">
				<div
					className={`status-white ${this.props.black_turn ? "" : "active"}`}>
					<div className="circle white" />
					{this.props.white}
				</div>
				<div
					className={`status-black ${this.props.black_turn ? "active" : ""}`}>
					{this.props.black}

					<div className="circle black" />
				</div>
			</div>
		);
	}
}

export default StatusBar;
