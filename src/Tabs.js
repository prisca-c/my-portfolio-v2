import React, { useState } from "react";

const Tabs = () => {

    const ListTabs = [
        {
            id: 1,
            tabTitle: 'Hard Skills',
            title: 'La boîte à outils',
            image: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 181.424 126.936"><path d="M51.887,111.335a9.039,9.039,0,0,1-6.018-2.284L-.008,68.269l48.427-43.05A9.065,9.065,0,0,1,60.461,38.774L27.288,68.269,57.916,95.486a9.072,9.072,0,0,1-6.018,15.85Zm81.1-.017,48.427-43.05L135.538,27.486A9.065,9.065,0,0,0,123.5,41.04l30.628,27.228L120.952,97.752a9.068,9.068,0,0,0,12.036,13.566ZM90.579,124.164l18.133-108.8a9.063,9.063,0,1,0-17.878-2.986L72.7,121.178a9.066,9.066,0,0,0,7.452,10.438,9.616,9.616,0,0,0,1.5.119,9.068,9.068,0,0,0,8.931-7.571Z" transform="translate(.008 -4.8)"/></svg>,
            content: 
                <div id="hard-skills" className="text-center">
                    <p className="roboto text-gray"> 
                        Depuis plusieurs années maintenant, j'ai pu apprendre de façon 
                        autodidacte plusieurs logiciels, langages, frameworks ...
                    </p>
                    <div className="hard-skills-icons ">
                        <div>
                            <img alt="icone photoshop" title="Photoshop" src="assets/img/iconephotoshop.png"/>
                            <img alt="icone illustrator" title="Illustrator" src="assets/img/iconeillustrator.png"/>
                            <img alt="icone adobe XD" title="Adobe XD" src="assets/img/iconexd.png"/>
                            <img alt="icone indesign" title="inDesign" src="assets/img/indesign.svg"/>
                            <img alt="icone Premiere pro" title="Premiere Pro" src="assets/img/adobe-premiere-cc.svg" />
                            <img alt="icone After Effect" title="After Effect" src="assets/img/after-effects.svg" />
                        </div>
                        
                        <div>
                            <img alt="icone HTML" title="HTML" src="assets/img/iconehtml.png" />
                            <img alt="icone CSS" title="CSS" src="assets/img/iconecss.png" />
                            <img alt="icone JavaScript" title="JavaScript" src="assets/img/javascript.svg" />
                            <img alt="icone sass" title="Sass" src="assets/img/sass.svg" />
                            <img alt="icone react" title="React" src="assets/img/react.svg" />
                            <img alt="icone bootstrap" title="Bootstrap" src="assets/img/bootstrap.svg" />
                        </div>
                        
                        <div>
                            <img alt="icone wordpress" title="Wordpress" src="assets/img/wordpress.svg"/>
                            <img alt="icone elementor" title="Elementor" src="assets/img/elementor.svg" />
                            <img alt="icone php" title="PHP" src="assets/img/php.svg" />
                            <img alt="icone git" title="Git" src="assets/img/git.svg" />
                            <img alt="icone MySql" title="MySQL" src="assets/img/mysql.svg" />
                            <img alt="icone visual studio code" title="Visual Studio Code" src="assets/img/visual-studio-code.svg" />
                        </div>
                    </div>
                </div>
        },
        {
            id: 2,
            tabTitle: 'Soft Skills',
            title: 'Soft Skills',
            image: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path d="M 9.1542969 0.001953125 C 7.7775914 0.001953125 6.2164838 0.24483437 4.9433594 0.99023438 C 3.670235 1.7355344 2.7109375 3.0526719 2.7109375 4.9511719 C 2.7109375 5.9648719 2.6248315 6.2682625 2.453125 6.6015625 C 2.2814181 6.9348625 1.9452765 7.3634781 1.5410156 8.3300781 A 0.50005006 0.50005006 0 0 0 2.0019531 9.0214844 L 3.0195312 9.0214844 C 3.0188181 9.1451844 3.0199531 9.1967625 3.0175781 9.4140625 A 0.50005006 0.50005006 0 0 0 3.0175781 9.4238281 L 3.0175781 11.046875 C 3.0175781 11.516075 2.9535861 11.985941 3.2792969 12.431641 C 3.4421524 12.654441 3.6977056 12.810831 3.9824219 12.894531 C 4.2671382 12.978531 4.5931965 13.007812 5.0058594 13.007812 C 5.2922988 13.008012 5.754941 13.007812 6.1542969 13.007812 L 6.1542969 15.501953 A 0.50005006 0.50005006 0 0 0 6.6542969 16.001953 L 12.193359 16.001953 A 0.50005006 0.50005006 0 0 0 12.693359 15.501953 L 12.693359 12.003906 C 12.693359 10.347006 13.123314 9.5701156 13.607422 8.7285156 C 14.069949 7.9244156 14.576334 7.0059344 14.623047 5.5527344 A 0.50005006 0.50005006 0 0 0 14.654297 5.3789062 C 14.654294 2.1770062 12.031033 0.00390625 9.1542969 0.00390625 L 9.1542969 0.001953125 z M 9.1542969 0.99804688 L 9.1542969 1.0019531 C 11.538693 1.0019531 13.654294 2.7136531 13.654297 5.3769531 C 13.654297 6.7318531 13.236312 7.3661156 12.740234 8.2285156 C 12.244157 9.0910156 11.693359 10.158353 11.693359 12.001953 L 11.693359 15 L 7.1542969 15 L 7.1542969 12.505859 A 0.50005006 0.50005006 0 0 0 6.6542969 12.005859 L 5.0058594 12.005859 C 4.6477523 12.005859 4.4026793 11.974594 4.2636719 11.933594 C 4.1246644 11.892594 4.1046151 11.862844 4.0878906 11.839844 C 4.0544416 11.793844 4.0175781 11.532322 4.0175781 11.044922 L 4.0175781 9.4277344 L 4.0175781 9.4160156 C 4.0220181 9.0105156 4.0239344 8.7875906 4.0214844 8.6503906 C 4.0202544 8.5813906 4.0215831 8.5402844 4.0078125 8.4589844 C 4.0009225 8.4179844 4.0006626 8.3620062 3.9316406 8.2539062 C 3.8626196 8.1455062 3.6347846 8.0175781 3.5019531 8.0175781 L 2.8300781 8.0175781 C 3.0032758 7.7093781 3.20237 7.3253875 3.3417969 7.0546875 C 3.5815449 6.5892875 3.7109375 6.0303656 3.7109375 4.9472656 C 3.7109375 3.3660656 4.408473 2.4590094 5.4492188 1.8496094 C 6.4899644 1.2403094 7.9004423 0.99804688 9.1542969 0.99804688 z M 9.0019531 2 L 9.0019531 2.0019531 C 8.109556 1.9919531 7.0012841 2.114375 6.0917969 2.546875 C 5.6370533 2.763075 5.2216629 3.0661594 4.953125 3.5058594 C 4.6845871 3.9454594 4.5944211 4.5120344 4.734375 5.1152344 C 4.8785789 5.7367344 5.3226149 6.17185 5.8007812 6.28125 C 6.2789478 6.39055 6.7270427 6.2935156 7.1601562 6.2285156 C 7.5932698 6.1635156 8.0068244 6.1158813 8.3457031 6.1757812 C 8.6845819 6.2357812 8.9549801 6.3682437 9.2363281 6.7773438 C 9.5365053 7.2138438 9.8858436 7.5196281 10.28125 7.6738281 C 10.676656 7.8280281 11.115628 7.8061594 11.474609 7.6308594 C 12.192572 7.2802594 12.604967 6.4546656 12.677734 5.4472656 C 12.753234 4.4020656 12.291331 3.5041625 11.587891 2.9140625 C 10.88445 2.3240625 9.9520393 2.0073 9.0019531 2 z M 8.9941406 3.0019531 C 9.7231839 3.0119531 10.445846 3.2626406 10.945312 3.6816406 C 11.444781 4.1005406 11.732099 4.6513531 11.679688 5.3769531 C 11.624538 6.1403531 11.290848 6.609475 11.035156 6.734375 C 10.90731 6.796375 10.800624 6.8051406 10.644531 6.7441406 C 10.488438 6.6831406 10.2787 6.5281375 10.060547 6.2109375 C 9.6431366 5.6039375 9.0712502 5.2910594 8.5214844 5.1933594 C 7.9717186 5.0953594 7.4527554 5.1761875 7.0117188 5.2421875 C 6.5706821 5.3081875 6.2005462 5.3476406 6.0234375 5.3066406 C 5.8463288 5.2666406 5.7967999 5.2676719 5.7089844 4.8886719 C 5.6169184 4.4918719 5.6731306 4.2459437 5.8066406 4.0273438 C 5.9401511 3.8087438 6.1842263 3.6076656 6.5214844 3.4472656 C 7.1960005 3.1265656 8.2074078 2.9959531 8.9941406 3.0019531 z "/></svg>,
            content: 
                <div id="soft-skills" className="container-fluid text-center">
                    <div id="info-soft-skills">
                        <p>
                            Les différents postes que j'ai occupé m'ont permis de forger chacuns 
                            de mes Soft Skills.
                        </p>
                    </div>

                    <div id="list-soft-skills" className="row d-flex justify-content-around">
                        <div className="col-xs-12 col-md-3 col-lg-2">
                            <img src="assets/img/team.svg" alt="" />
                            <p>Travail en équipe</p>
                        </div>
                        <div className="col-xs-12 col-md-3 col-lg-2">
                            <img src="assets/img/organized.svg" alt="" />
                            <p>Sens de l'organisation</p>
                        </div>
                        <div className="col-xs-12 col-md-3 col-lg-2">
                            <img src="assets/img/battery.svg" alt="" />
                            <p>Autonomie</p>
                        </div>
                        <div className="col-xs-12 col-md-3 col-lg-2">
                            <img src="assets/img/learn.svg" alt="" />
                            <p>Autodidacte</p>
                        </div>
                        <div className="col-xs-12 col-md-3 col-lg-2">
                            <img src="assets/img/resize.svg" alt="" />
                            <p>Capacité d'adaptation</p>
                        </div>
                    </div>
                </div>
        },
        {
            id: 3,
            tabTitle: 'Mes projets',
            title: "Ce que j'ai réalisé",
            image: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1792 1792"><path d="m 1671.8449,984.07962 q 0,-32.8549 -49.7517,-32.8549 l -1021.31792,0 q -37.54846,0 -80.25983,20.1823 -42.71136,20.18229 -67.11786,49.28238 l -275.98114,340.7522 q -16.89681,22.5291 -16.89681,37.5484 0,32.8549 49.75171,32.8549 l 1021.31795,0 q 37.5485,0 80.7292,-20.6516 43.1807,-20.6517 66.6485,-49.7517 l 275.9811,-340.7522 q 16.8968,-20.6517 16.8968,-36.60977 z M 600.77528,831.06967 l 720.93032,0 0,-150.19382 q 0,-37.54845 -26.2839,-63.83236 -26.2839,-26.28392 -63.8324,-26.28392 l -540.69773,0 q -37.54846,0 -63.83238,-26.28392 -26.28391,-26.28392 -26.28391,-63.83237 l 0,-60.07753 q 0,-37.54845 -26.28392,-63.83237 -26.28392,-26.28392 -63.83238,-26.28392 l -300.38763,0 q -37.54846,0 -63.83238,26.28392 -26.28391,26.28392 -26.28391,63.83237 l 0,800.72075 240.31011,-295.69403 q 41.3033,-49.75171 108.89051,-82.13725 67.58722,-32.38554 131.4196,-32.38554 z M 1792,984.07962 q 0,58.20008 -43.1807,112.64538 l -276.9199,340.7522 q -40.3646,49.7517 -108.8905,82.1373 Q 1294.483,1552 1231.5893,1552 l -1021.31795,0 Q 123.9099,1552 61.95495,1490.045 0,1428.0901 0,1341.7287 L 0,440.56574 Q 0,354.2043 61.95495,292.24935 123.9099,230.29439 210.27135,230.29439 l 300.38763,0 q 86.36145,0 148.3164,61.95496 61.95495,61.95495 61.95495,148.31639 l 0,30.03877 510.65897,0 q 86.3615,0 148.3164,61.95496 61.955,61.95494 61.955,148.31639 l 0,150.19382 180.2325,0 q 50.6905,0 92.9325,22.99843 42.242,22.99843 62.8936,66.17915 Q 1792,950.28602 1792,984.07962 Z"/></svg>,
            content: 
                <div id="project" className="text-center roboto">
                    Logo
                    <br/>Maquette d’application mobile
                    <br/>Illustration
                    <br/>Animation video After Effect
                    <br/>Affiche print
                    <br/>Site internet
                    <br/>Identité visuelle Twitch
                </div>
        },
    
    ]

    const [currentTab, setCurrentTab] = useState('1')

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div id="skills" className="tab-container">

            <div className="tabs">
                {ListTabs.map((tab, i) =>
                    <button 
                        key={i} 
                        id={tab.id} 
                        disabled={currentTab === `${tab.id}`} 
                        onClick={(handleTabClick)}
                        className="roboto-slab"
                    >
                        {tab.image}{tab.tabTitle}
                    </button>
                )}
            </div>

            <section className="behind-tab-content" >
                <div className='tab-content' >
                    {ListTabs.map((tab, i) =>
                    
                        <div key={i}>
                            {currentTab === `${tab.id}`
                            &&
                            <>
                                <h3 className='title'> {tab.title}</h3>
                                {tab.content}
                            </>
                            }
                        </div>

                    )}
              </div>
            </section>
        </div>
    )
}


export default Tabs;