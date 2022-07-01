import React from 'react';

class Setup extends React.Component {
    render() {
        return(
            <div id='setup'>
                <div className='row'>
                    <div className='container-setup col'>
                        <p>
                            Pour se sentir bien dans ses chaussures.... ou plutôt dans son code,
                            il faut un poste de travail approprié !
                        </p>
                    </div>

                    <div id='second-panel' className='container-setup col-xs-12 col-md-8 col-lg-8'>
                        <h2>Mon environnement de travail</h2>
                        <div className='row mt-4 mb-4'>

                            <div className='info-panel col-xs-12 col-md-6 col-lg-6 text-nowrap'>
                                <p>
                                    Système:
                                        <img
                                            src="assets/img/windows.svg"
                                            title='Windows'
                                            alt="icone windows"
                                        />
                                        <img
                                            alt="icone mac os"
                                            title="Mac OS"
                                            src="assets/img/mac.svg"
                                        />
                                </p>
                            </div>

                            <div className='info-panel col-xs-12 col-md-6 col-lg-6 text-nowrap'>
                                <p>Editeur de code:
                                    <img
                                        alt="icone visual studio code"
                                        title="Visual Studio Code"
                                        src="assets/img/visual-studio-code.svg"
                                    />
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3> Les outils qui donnent un petit plus :</h3>
                            <p></p>
                        </div>

                    </div> 
                </div>

                <div id='third-panel' className='row'>
                    <div className='container-setup col'>
                        <h2>Matériel</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Setup;