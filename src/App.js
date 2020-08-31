import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Counter from './components/Counter';

function App() {
	const [counterValue, updateCounterValue] = useState(0);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Counter
					counterValue={counterValue}
					updateCounterValue={updateCounterValue}
				/>
			</header>
		</div>
	);
}

export default App;
