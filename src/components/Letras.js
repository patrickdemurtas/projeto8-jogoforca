import React from "react";
export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    

    return (
        <div className="teclado">
           {alfabeto.map((l) => <Tecla functClicou={() => props.functClicouLetra(l)} comeco={props.inicio} tecla={l.toUpperCase()}/>)}
        </div>
    )

}

function Tecla(props){
    const [disabled, setDisabled] = React.useState(false)

    function desabilita(){
        setDisabled(true)
    }
    
    return (
        <button data-test="letter" disabled={props.comeco || disabled} onClick={() => {props.functClicou(); desabilita();}} className={(props.comeco || disabled) ? "selecionada":"nao-selecionada"}>{props.tecla}</button>
    )

}