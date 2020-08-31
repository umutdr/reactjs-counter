import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
	const [counterValue, updateCounterValue] = useState(0);

	return (
		<div className='App'>
			<Counter counterValue={counterValue} updateCounterValue={updateCounterValue} />
		</div>
	);
}

export default App;
