import React from "react";
import { findDOMNode } from "react-dom";
import palavras from "../palavras";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

let resetar = false
let palavraDaVez = []
let underLine = ""




function App() {

  const [erros, setErros] = React.useState(0)
  const [classes, setClasses] = React.useState("")
  const [chute, setChute] = React.useState("")
  const [comecar, setComecar] = React.useState(true)
  const [palavraEstado, setPalavraEstado] = React.useState("")




  function recarregar() {
    document.location.reload();
  }


  function escolherPalavra() {

    if (resetar) {
      resetar = false
      recarregar()
    }

    setErros(0)


    palavras.sort(comparador);

    function comparador() {
      return Math.random() - 0.5;
    }

    palavraDaVez = Array.from(palavras[palavras.length - 1])

    setComecar(false)
    underLine = ""


    for (let i = 0; i < palavraDaVez.length; i++) {
      underLine += "_"
    }

    setPalavraEstado(underLine)

  }

  function clicouLetra(tecla) {
    let posicoes = []

    for (let j = 0; j < palavraDaVez.length; j++) {
      if (tecla === palavraDaVez[j]) {
        posicoes.push(j)
      }
    }

    if (posicoes.length !== 0) {
      let arrayAux = Array.from(underLine)
      for (let z = 0; z < posicoes.length; z++) {
        arrayAux[posicoes[z]] = tecla
      }
      underLine = arrayAux.join("")
      setPalavraEstado(underLine)
    } else {
      setErros(erros + 1)
    }

    fim()
  }

  

  function chutarNoAr() {
    if (palavraDaVez.join("") === chute.toLowerCase()) {
      setClasses("ganhou")
      setPalavraEstado(palavraDaVez)
      setComecar(true)
      resetar = true
    } else if (palavraDaVez.join("") !== chute.toLowerCase()) {
      setClasses("perdeu")
      setErros(6)
      setComecar(true)
      setPalavraEstado(palavraDaVez)
      resetar = true
    }
  }

  function inputTroca(e) {
    setChute(e.target.value)
  }

  function fim() {
    if (erros > 5 && underLine !== palavraDaVez.join("")) {
      setClasses("perdeu")
      setComecar(true)
      setPalavraEstado(palavraDaVez)
      setErros(6)
      resetar = true
    } else if (underLine === palavraDaVez.join("")) {
      setClasses("ganhou")
      setComecar(true)
      resetar = true
    }
  }



  return (
    <div className="motherbox">

      <Jogo functEscolherPalavra={escolherPalavra} aparencia={palavraEstado} inicio={!comecar} palavraVez={palavraDaVez.join("")} status={classes} quantErros={erros} />

      <Letras functClicouLetra={clicouLetra} inicio={comecar} />


      <Chute inicio={comecar} chutar={chute} inputMuda={inputTroca} palpite={chutarNoAr} />


    </div>


  );
}

export default App;
