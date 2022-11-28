export default function Jogo(props) {

    
    return (

        <div className="jogo">

            <div className="jogoEsquerda">

                <img data-test="game-image" className="forca" src={`assets/forca${props.quantErros}.png`} />

            </div>

            <div className="jogoDireita">

                <button data-test="choose-word" onClick={props.functEscolherPalavra} disabled={props.inicio} className="escolher">Escolher Palavra</button>
                <div data-test="word" data-answer={props.palavraVez} className={`palavraEscolhida ${props.status}`}>{props.aparencia}</div>

            </div>


        </div>
    )
}

