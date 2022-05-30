import { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {

	state = {
		isMobile: window.innerWidth < 1000,
	}

	updateIsMobile = () => {
		this.setState({
			isMobile: window.innerWidth < 1000
		});
	}

	componentDidMount = () => {
		window.addEventListener('resize', this.updateIsMobile);
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateIsMobile);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Counter isMobile={this.state.isMobile} />
				</header>
			</div>
		);
	}
}

export default App;
