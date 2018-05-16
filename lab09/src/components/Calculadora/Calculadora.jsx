import React, { Component } from 'react';
import './Calculadora.css'
export default class Contador extends Component {
    state = {
        pass:0,
        cont: "",
        signo:"",
        }
   
    aumentarHandler = (e) => {     
        var input = e.target.value
        this.setState({
             cont: this.state.cont + input
            
         })
    }
    signoHandler = (e) => {
        var input = e.target.value
        this.setState({
            pass: parseInt(this.state.cont),
            cont: "",
            signo: input

        })
    }
    operarHandler = () => {
        var resultado=0;
        var operando2 = parseInt(this.state.cont)
        if (this.state.signo === "+") {
            resultado = this.state.pass + operando2
        }
        else if (this.state.signo === "-") {
            resultado = this.state.pass - operando2
        } else if (this.state.signo === "*") {
            resultado = this.state.pass * operando2
        } else if (this.state.signo === "/") {
            resultado = this.state.pass / operando2
        }else{
            resultado = this.state.pass * ((operando2) / 100)
        }
        this.setState({
            pass: "",
            cont: resultado,
            signo: ""

        }) 
    }
    render() {
        return (<div>
            <form name="calculator">
                <h3>Calculadora </h3>
                <p>Haz algun calculo para ver el resultado.</p>
                <input type="textfield" name="ans" value={this.state.cont}/>
                <br/>
                <input type="button" value="1" onClick={this.aumentarHandler}/>
                <input type="button" value="2"  onClick={this.aumentarHandler}/>
                <input type="button" value="3"  onClick={this.aumentarHandler}/>
                <input type="button" value="+" onClick={this.signoHandler}/>
                <br/>
                <input type="button" value="4" onClick={this.aumentarHandler}/>
                <input type="button" value="5" onClick={this.aumentarHandler}/>
                <input type="button" value="6" onClick={this.aumentarHandler}/>
                <input type="button" value="-" onClick={this.signoHandler}/>
                <br/>
                <input type="button" value="7" onClick={this.aumentarHandler}/>
                <input type="button" value="8" onClick={this.aumentarHandler}/>
                <input type="button" value="9" onClick={this.aumentarHandler}/>
                <input type="button" value="*" onClick={this.signoHandler}/>
                <br/>
                <input type="button" value="0" onClick={this.aumentarHandler}/>
                <input type="reset" value="%" onClick={this.signoHandler}/>
                <input type="button" value="/" onClick={this.signoHandler}/>
                <input type="button" value="=" onClick={this.operarHandler}/>
            </form>
        </div>
        )
    }
}