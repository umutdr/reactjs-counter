import React from 'react';

const Counter = ({ counterValue, updateCounterValue }) => {
	let counterMinValue = 0;
	let counterMaxValue = 5;

	const increaseCounterValue = () => {
		updateCounterValue((prev) => prev + 1);
	};

	const decreaseCounterValue = () => {
		updateCounterValue((prev) => prev - 1);
	};

	return (
		<table className='counter'>
			<tbody>
				<tr>
					<td colSpan='2'>Counter</td>
				</tr>
				<tr>
					<td colSpan='2'>{counterValue}</td>
				</tr>
				<tr>
					<td>
						<button
							onClick={increaseCounterValue}
							className='counterBtn'
							disabled={counterValue === counterMaxValue ? 'disabled' : ''}
						>
							+
						</button>
					</td>
					<td>
						<button
							onClick={decreaseCounterValue}
							className='counterBtn'
							disabled={counterValue === counterMinValue ? 'disabled' : ''}
						>
							-
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Counter;
