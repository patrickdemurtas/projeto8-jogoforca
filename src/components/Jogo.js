export default function Jogo() {
    return (

        <div className="jogo">

            <div className="jogoEsquerda">

                <img className="forca" src="assets/forca0.png" />

            </div>

            <div className="jogoDireita">

                <button className="escolher">Escolher Palavra</button>
                <div className="palavraEscolhida">________</div>

            </div>


        </div>
    )
}