import alineLogo from './assets/logoaline.svg';

function Header (){
    return (
        <>      
            <header>                
                <h1>
                    <img src={alineLogo} alt='Aline Branco - logo' /> 
                    <span>Aline Branco</span>
                </h1>
            </header>
        </>
      )
    }

export default Header