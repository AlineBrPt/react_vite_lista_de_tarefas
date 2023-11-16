import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function Rodape() {
  return (
    <>
      
      <footer>
        <div>
          <p className='creditos'>Aprendendo React com o professor: <span>Dimitri Teixeira</span> em: 
            <a href="www.youtube.com/@programacaoweb" target="_blank">Canal: Programação Web</a>
          </p>
          <div className='tecnologias'>
          <img src="./src/assets/html5_icon.svg" className="logo" alt="Logo HTML5" />
            <img src="./src/assets/css3_icon.svg" className="logo" alt="Logo CSS3" />
            <img src="./src/assets/javascript_icon.svg" className="logo" alt="Logo JavaScript" />
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Rodape