import palavras from "../palavras";


function App() {

  return (
    <div className="motherbox">

      <div className="jogo">

       
          <img className="forca" src="assets/forca0.png"/>

          <button className="escolher">Escolher Palavra</button>
     

      </div>

      <div className="teclado">
        <button className="tecla">A</button>
        <button className="tecla">B</button>
        <button className="tecla">C</button>
        <button className="tecla">D</button>
        <button className="tecla">E</button>
        <button className="tecla">F</button>
        <button className="tecla">G</button>
        <button className="tecla">H</button>
        <button className="tecla">I</button>
        <button className="tecla">J</button>
        <button className="tecla">K</button>
        <button className="tecla">L</button>
        <button className="tecla">M</button>
        <button className="tecla">N</button>
        <button className="tecla">O</button>
        <button className="tecla">P</button>
        <button className="tecla">Q</button>
        <button className="tecla">R</button>
        <button className="tecla">S</button>
        <button className="tecla">T</button>
        <button className="tecla">U</button>
        <button className="tecla">V</button>
        <button className="tecla">W</button>
        <button className="tecla">X</button>
        <button className="tecla">Y</button>
        <button className="tecla">Z</button>
      </div>


      <div className="footer">
        <div className="jasei">Já sei a palavra!</div>
        <input></input>
        <button className="chutar">Chutar</button>

  


      </div>

     







    </div>
    

  );
}

export default App;
