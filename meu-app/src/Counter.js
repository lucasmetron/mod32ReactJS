import React, { useEffect, useState } from 'react';


function Counter(props) {

    const [count, setCount] = useState(props.count);

    useEffect(() => {
        if (localStorage.getItem('count') === null) {
            localStorage.setItem('count', 0);
        }
        setCount(parseFloat(localStorage.getItem('count')));

    }, []);

    useEffect(() => {
        document.title = count
        localStorage.setItem('count', count)
    }, [count]);


    function add() {

        setCount(count + 1);

    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>add</button>
        </div>
    );
}

// class Counter extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = { count: 0 } //só aqui podemos utilizar o this.state
//         this.add = this.add.bind(this)
//     }


//     add() {
//         // this.setState({ count: this.state.count + 1 }) //sempre que formos alterar um estado nao podemos alterar diretamento com this.state()
//         this.setState((state) => { //Melhor forma é colocando função, pq o setState cria uma fila de execução e garante que todos estado seram ataulizados.

//             return { count: state.count + 1 }

//         }, () => {
//             localStorage.setItem('state', JSON.stringify(this.state));
//         })
//     }


//     componentDidMount() {
//         this.setState(JSON.parse(localStorage.getItem('state')))
//     }

//     shouldComponentUpdate() {
//         return true;
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.add}>add</button>
//             </div>
//         )
//     }
// }

export default Counter;