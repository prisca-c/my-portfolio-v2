import React from 'react';

class Setup extends React.Component {
  render() {
    return (
      <div id="setup">

        <div id='first-row' className="row">

          <div id='first-panel' className="container-setup col">
            <p>
              Pour se sentir bien dans ses chaussures.... ou plutôt dans son code, il faut un poste
              de travail approprié !
            </p>
          </div>

          <div id="second-panel" className="container-setup col-xs-12 col-md-8 col-lg-8">
            <h2>Mon environnement de travail</h2>
            <div className="row mt-4 mb-4">
              <div className="info-panel col-xs-12 col-md-6 col-lg-6 text-nowrap">
                <p>
                  Système:
                  <a href="https://www.microsoft.com/fr-fr/windows?r=1" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/windows.svg" title="Windows" alt="icone windows" />
                  </a>
                  <a href="https://www.apple.com/fr/macos/monterey/" target="_blank" rel="noopener noreferrer">
                    <img alt="icone mac os" title="Mac OS" src="assets/img/mac.svg" />
                  </a>
                </p>
              </div>

              <div className="info-panel col-xs-12 col-md-6 col-lg-6 text-nowrap">
                <p>
                  Editeur de code:
                  <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      alt="icone visual studio code"
                      title="Visual Studio Code"
                      src="assets/img/visual-studio-code.svg"
                    />
                  </a>
                </p>
              </div>

            </div>

            <div className="mt-xs-2 mt-md-4 mt-lg-4">
              <h3> Les outils qui donnent un petit plus :</h3>
              <div className="more-tools d-flex flex-row flex-wrap mt-4 ">
                <div>
                  <a href="https://www.notion.so/fr-fr" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/notion.svg" alt="icone notion" />
                  </a>
                  <p>Notion</p>
                </div>

                <div>
                  <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/figma.svg" alt="icone figma" />
                  </a>
                  <p>Figma</p>
                </div>

                <div>
                  <a
                    href="https://apps.apple.com/fr/app/amphetamine/id937984704?mt=12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/img/amphetamine.png" alt="icone amphetamine" />
                  </a>
                  <p>Amphetamine</p>
                </div>

                <div>
                  <a href="https://iterm2.com/" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/iterm.svg" alt="icone iterm" />
                  </a>
                  <p>iTerm</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div id='second-row' className="row">
          
          <div id="third-panel" className="container-setup col">
            <h2 className='mb-4'>Informatique</h2>
            <div className='d-grid gap-3'>
              <div className='d-flex flex-column'>
                <h3 className='third-panel-title'>Ordinateur fixe:</h3>
                <span>Processeur: <b>Ryzen 7 5800X</b> </span>
                <span>Carte graphique: <b>KFA2 RTX 2060 Super</b></span>
                <span>Mémoire RAM: <b>Corsair Vengeance Pro SL 2x16go 3200MHz</b></span>
                <span>Carte Mère: <b>MSI MAG B550 Tomahawk</b></span>
              </div>
              <div className='d-flex flex-column'>
                <h3 className='third-panel-title'>Ordinateur portable :</h3>
                <span>Macbook Pro 14" M1 Pro</span>
              </div>
            </div>
          </div>

          <div id='fourth-panel' className='container-setup col-xs-12 col-md-6 col-lg-6'>
            <h2 className='mb-4'>Accessoires</h2>
            
            <div className='d-flex flex-row gap-4'>

              <p className='d-flex flex-column gap-1'>
                <span>Écran 1: <b>Koorui 27" 2K 144hz</b> </span>
                <span>Écran 2: <b>Huawei 24"</b></span>
                <span>Clavier: <b>Keychron K3 v2</b></span>
                <span>Souris 1: <b>G502 Hero</b></span>
                <span>Souris 2: <b>Trackpad</b></span>
              </p>

              <p className='d-flex flex-column gap-1'>
                <span>Micro: <b>Rode PodMic</b></span>
                <span>Bras Micro: <b>Rode PSA-1</b></span>
                <span>Table de mixage: <b>GO XLR Mini</b></span>
                <span><b>Stream Deck</b></span>
                <span><b>Xiaomi Lightbar</b></span>
                <span>Mouse Bungee: <b>xTrfy</b></span>
                <span><b>Nulaxy Stand for Macbook</b></span>
              </p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Setup;
