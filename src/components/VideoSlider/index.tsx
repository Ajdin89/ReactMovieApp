import React, { Component } from 'react';

interface IProps {
	items: string[];
}

interface IState {
	index: number;
}

class VideoSlider extends Component<IProps, IState> {
	state: IState = {
		index: 0,
	};

	prev = () => {
		if (this.state.index === 0)
			this.setState({ index: this.props.items.length - 1 });
		else this.setState({ index: this.state.index - 1 });
	};

	next = () => {
		if (this.state.index === this.props.items.length - 1)
			this.setState({ index: 0 });
		else this.setState({ index: this.state.index + 1 });
	};

	render() {
		const { index } = this.state;
		const { items } = this.props;

		return (
			<div>
				<div>
					{items.map((i: any, ind: number) => (
						<div
							key={i.id}
							className={`${ind === index ? 'd-block' : 'd-none'}`}
						>
							<iframe
								src={`https://www.youtube.com/embed/${i.key}`}
								title='video'
								style={{ height: '400px', width: '100%' }}
							/>
						</div>
					))}
				</div>
				<button onClick={this.prev} className='btn-control'>
					<span>Prev</span>
				</button>
				<button onClick={this.next} className='btn-control'>
					<span>Next</span>
				</button>
			</div>
		);
	}
}

export default VideoSlider;
