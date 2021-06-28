import React from 'react';


class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = { count: this.props.count } //só aqui podemos utilizar o this.state
        this.add = this.add.bind(this)
        console.log(this)
    }


    add() {
        // this.setState({ count: this.state.count + 1 }) //sempre que formos alterar um estado nao podemos alterar diretamento com this.state()
        this.setState((state) => { //Melhor forma é colocando função, pq o setState cria uma fila de execução e garante que todos estado seram ataulizados.

            return { count: state.count + 1 }

        })
    }


    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

export default Counter;