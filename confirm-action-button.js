import React from 'react';
import Modal from 'react-clean-modal';


export default class ConfirmActionButton extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = () => this._handleClick();
		this.performAction = () => this._performAction();
		this.close = () => this._close();
	}

	_handleClick() {
		if (!this.props.skip) {
			this.refs.dialog.open();
			if (typeof this.props.onOpen === 'function') {
				this.props.onOpen();
			}
		} else {
			this.performAction();
		}
	}

	_performAction() {
		if (this.props.hasOwnProperty('actionUrl')) {
			window.location = this.props.actionUrl;
			return;
		}
		if (this.props.hasOwnProperty('action')) {
			this.props.action();
			this.close();
		}
	}

	_close() {
		this.refs.dialog.close();
	}

	render() {
		return <div className={`confirm-button ${this.props.className}`}>
			<button
				onClick={this.handleClick}
				className={this.props.buttonClassName}
			>
				{this.props.callToAction}
			</button>
			<Modal
				className={`confirm-prompt ${this.props.className}`}
				title={this.props.title}
				onClose={this.props.onClose}
				ref="dialog"
			>
				<div className="message">
					{this.props.message}
				</div>
				<div className="action-row">
					<button
						className="cancel"
						onClick={this.close}
					>
						{this.props.cancelMessage}
					</button>
					<button
						className="confirm"
						onClick={this.performAction}
					>
						{this.props.confirmMessage}
					</button>
				</div>
			</Modal>
		</div>;
	}
}

ConfirmActionButton.defaultProps= {
	className: '',
	skip: false,
	confirmMessage: 'ΣΥΝΕΧΕΙΑ',
	cancelMessage: 'ΑΚΥΡΩΣΗ',
};
