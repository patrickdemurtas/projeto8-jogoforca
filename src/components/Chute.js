export default function Chute(props) {
    return (
        <div className="footer">

            <div className="jasei">Já sei a palavra!</div>
            <input data-test="guess-input" disabled={props.inicio} value={props.chutar} onChange={props.inputMuda}/>
            <button data-test="guess-button" onClick={props.palpite} disabled={props.inicio} className="chutar">Chutar</button>

        </div>

    )
}