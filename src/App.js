import React from 'react'

import './App.css'

class App extends React.Component {

	state = {
		total: "",
		firstNumber: true
	}

	plus() {
		let stateTotal = this.state.total
		let operator = stateTotal += "+"
		this.setState({ total: operator })
	}

	minus() {
		let stateTotal = this.state.total
		let operator = stateTotal += "-"
		this.setState({ total: operator })
	}

	divise() {
		let stateTotal = this.state.total
		let operator = stateTotal += "/"
		this.setState({ total: operator })
	}

	multiply() {
		let stateTotal = this.state.total
		let operator = stateTotal += "*"
		this.setState({ total: operator })
	}

	dot() {
		let stateTotal = this.state.total
		let dot = stateTotal += "."
		this.setState({ total: dot })
	}

	clear() {
		this.setState({ total: "" })
	}

	addNumber(e, n) {
		let stateTotal = this.state.total
		let numberTrue = stateTotal += n
		let numberFalse = stateTotal = n
		this.state.firstNumber ?
		this.setState({ total: numberTrue }) : this.setState({ total: numberFalse }); this.setState({ firstNumber: true });
	}

	eval() {
		this.setState({ total: eval(this.state.total) })
		this.setState({ firstNumber: false })
	}

	render() {
		return (

			<div className="container">
				<table>
					<tbody>
						<tr>
							<td colSpan='4' id="input">{this.state.total}</td>
						</tr>
						<tr>
							<td><button onClick={e => this.clear(e)}>C</button></td>
							<td><button onClick={e => this.divise(e)}>/</button></td>
							<td><button onClick='btn(this);'>(</button></td>
							<td><button onClick='btn(this);'>)</button></td>
						</tr>
						<tr>
							<td><button onClick={e => this.addNumber(e, 7)}>7</button></td>
							<td><button onClick={e => this.addNumber(e, 8)}>8</button></td>
							<td><button onClick={e => this.addNumber(e, 9)}>9</button></td>
							<td><button onClick={e => this.multiply(e)}>*</button></td>
						</tr>
						<tr>
							<td><button onClick={e => this.addNumber(e, 4)}>4</button></td>
							<td><button onClick={e => this.addNumber(e, 5)}>5</button></td>
							<td><button onClick={e => this.addNumber(e, 6)}>6</button></td>
							<td><button onClick={e => this.minus(e)}>-</button></td>
						</tr>
						<tr>
							<td><button onClick={e => this.addNumber(e, 1)}>1</button></td>
							<td><button onClick={e => this.addNumber(e, 2)}>2</button></td>
							<td><button onClick={e => this.addNumber(e, 3)}>3</button></td>
							<td><button onClick={e => this.plus(e)}>+</button></td>
						</tr>
						<tr>
							<td colSpan='2'><button onClick={e => this.addNumber(e, 0)}>0</button></td>
							<td><button onClick={e => this.dot(e)}>.</button></td>
							<td><button onClick={e => this.eval(e)}>=</button></td>
						</tr>
					</tbody>
				</table>
			</div>

		)
	}
}

export default App