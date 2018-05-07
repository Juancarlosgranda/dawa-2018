import React, { Component } from 'react';
import './Calculadora.css'
export default class Contador extends Component {
    state = {
        cont: this.props.valor,
        signo:""
    }
    disminuirHandler = () => {
        this.setState({
            cont: this.state.cont - 1
        })
    }
    aumentarHandler = () => {
        var input = this.refs.myInput;
        var inputValue = input.value;
        this.setState({
            cont: this.state.cont + inputValue
            
        })
    }
    resetHandler = () => {
        this.setState({
            cont: this.props.valor
        })
    }
    render() {
        let advertencia = (<p>Iniciamos con un número mayor a 5!</p>)
        if (this.props.valor <= 5) {
            advertencia = null
        }
        return (<div>
            <form name="calculator">
                <h3>Calculadora </h3>
                <p>Haz algun calculo para ver el resultado.</p>
                <input type="textfield" name="ans" value={this.state.cont}/>
                <br/>
                <input type="button" value="1" ref="myInput" onClick={this.aumentarHandler}/>
                <input type="button" value="2" ref="myInput" onClick={this.aumentarHandler}/>
                <input type="button" value="3" ref="myInput" onClick={this.aumentarHandler}/>
                <input type="button" value="+" onClick="document.calculator.ans.value+='+'"/>
                <br/>
                <input type="button" value="4" ref="myInput" onClick={this.aumentarHandler}/>
                <input type="button" value="5" onClick="document.calculator.ans.value+='5'"/>
                <input type="button" value="6" onClick="document.calculator.ans.value+='6'"/>
                <input type="button" value="-" onClick="document.calculator.ans.value+='-'"/>
                <br/>
                <input type="button" value="7" onClick="document.calculator.ans.value+='7'"/>
                <input type="button" value="8" onClick="document.calculator.ans.value+='8'"/>
                <input type="button" value="9" onClick="document.calculator.ans.value+='9'"/>
                <input type="button" value="*" onClick="document.calculator.ans.value+='*'"/>
                <br/>
                <input type="button" value="0" onClick="document.calculator.ans.value+='0'"/>
                <input type="reset" value="c" onClick={this.resetHandler}/>
                <input type="button" value="/" onClick="document.calculator.ans.value+='/'"/>
                <input type="button" value="=" onClick="document.calculator.ans.value=eval(document.calculator.ans.value)"/>
            </form>
        </div>
        )
    }
}