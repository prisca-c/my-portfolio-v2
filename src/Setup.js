import React from 'react';

const Setup = () => (
    <div id='setup'>
        <div className='row'>
            <div className='container-setup col'>
                <div className='vertical-center-margin'>
                    <p>
                        Pour se sentir bien dans ses chaussures.... ou plutôt dans son code,
                        il faut un poste de travail approprié !
                    </p>
                </div>
            </div>

            <div className='container-setup col-xs-12 col-md-8 col-lg-8'>
                <div className='vertical-center-margin'>
                    <h3>Mon environnement de travail</h3>
                    <div id='first-environment' className='row mt-4 mb-4'>
                        <div className='col-xs-12 col-md-6 col-lg-6 text-nowrap'>
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
                        </div>
                        <div className='col-xs-12 col-md-6 col-lg-6 text-nowrap'>
                            Editeur de code:
                                <img
                                    alt="icone visual studio code"
                                    title="Visual Studio Code"
                                    src="assets/img/visual-studio-code.svg"
                                />
                        </div>
                    </div>
                    <div id='second-environment'>
                        <p> Les outils qui donnent un petit plus :</p>
                    </div>
                </div>
            </div> 
        </div>

        <div className='row'>
            <div className='container-setup col'>
                <div className='vertical-center-margin'>
                    <h3>Matériel</h3>
                </div>
            </div>
        </div>
    </div>
)

export default Setup;