import React from 'react';
import '../../assets/styles/ProductDetail.css'
import Button from '../share/Button';
import Image1 from '../../assets/image/product1.jpg';
import Image2 from '../../assets/image/product2.jpg';

const ProductDetail = () => {
  return (
    <div className='container py-5'>
        <div className="row">
            <div className="col-sm-12 col-md-6 py-5 d-flex align-items-start product-container product-item1">
                <div>
                    <h2 className="my-5 px-0 px-lg-5">product description</h2>
                    <p className='px-0 px-lg-5 font-weight-bold'>
                        Bij Groener Stalen Interieur worden alle stalen deuren altijd naar uw wensen ontworpen en geproduceerd. Door het gebruik van staal zijn veel stijlvolle, stoere en strakke ontwerpen mogelijk. Daarnaast leveren we een aantal verschillende typen deuren: taats-, schuif- en scharnierdeuren. Ook produceren wij stalen raamkozijnen welke het plaatje compleet maken.</p>
                    <p className='mb-5 px-0 px-lg-5'>
                        <br/><br/>
                        TAATSDEUR
                        <br/><br/>
                        Een stalen deur met een taats-scharnier kan 180gr draaien, waardoor deze naar twee kanten kan worden geopend. Wij gebruiken hoge kwaliteit scharnieren van Fritsjurgens en Argentalu, welke zorgen voor een minimale afwerking. Voor een stalen deur met een taatsscharnier is geen kozijn nodig.
                        <br/><br/>
                        SCHUIFDEUR
                        <br/><br/>
                        Een stalen schuifdeur maakt gebruik van een railsysteem welke boven langs de muur wordt geplaatst. Deze deuren hebben een softclose systeem welke zorgt voor een mooie werking. Wij werken met barnslide systemen voor een mooie stoere look, of met onzichtbare schuifsystemen voor een minimale afwerking!
                        <br/><br/>
                        SCHARNIERDEUR
                        <br/><br/>
                        Een stalen scharnierdeur geeft direct een nieuwe uitstraling aan uw woonkamer, winkel, loft of kantoor. Wij gebruiken slanke handgrepen met een rolsluiting of extra smalle deurklink-systemen voor een mooie en minimale afwerking
                        <br/><br/>
                        RAAMKOZIJN
                        <br/><br/>
                        Een stalen raamkozijn is een mooie afscheiding tussen twee ruimtes of om een stalen deur heen. Door een grote glaspartij wordt een grote hoeveelheid licht doorgelaten, waardoor uw ruimte groter en ruimer aanvoelt.
                        <br/><br/>
                        ALLES IS MOGELIJK
                        <br/><br/>
                        Bij ons geldt: “alles is mogelijk”. Wij bespreken deze mogelijkheden graag met u, dus heeft u specifieke wensen? Laat het ons direct weten en neem vrijblijvend contact met ons op!
                    </p>
                    <Button text='Download Brochure' type='button'/>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 p-3 p-lg-5 d-flex align-items-start justify-content-center product-container product-item2 bg-light p">
                <div>
                    <h2 className="my-5">specification</h2>
                    <div className="row">
                        <div className="col">
                            <div >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-light"><img className='mr-2' alt='kielo consultancy' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACqElEQVRIic2VvWsUURTFf3cyZBpJk8Ii+g+okBDTCIqgYqFiIRbRFUGz+94amUJFaztFwSbqzsxmtTGNhQFJCIqNbeKgAUWso434UaSQDTNzLTIr68ZZWUXwwjDvnXPfOfe+Nx/wj0N+l+D7vtdsNi1wEtiRw69FZKa/vz+amppq/rFBtVodyrJsHhguSHnlOM6RIAg+FGk43SpvE19R1eNJkgwkSTKgqseAd8BIlmVzvu97RTpuEZFvyzCwkqbpSKPR+NJGz05MTDzv6+tbBkaazWYFuN2TgaqWRARVvdBoNL4YYw4D4Tqlpl6vLxhjLgIPRaRUZFC4RSKyDSBN06c5FABDwBYRCQE8z3uSF7O9SKfQAGgCuK5bmLO6utri1v7E4G1+3w2gqgZ4D6yIiAHwPG9PR+6GKDwDEZlV1d3AOWC+Xq8vAFs70s7n90c9dyAiD4BvwKFqtbqjk7fWDqvqQeCb4zgzPRsEQfBRVWuAZFl2m40v5a0cuxsEwceeDfIurgGfgb3W2vEWXqlUSqq6L+eud9XoRuZiZ0WkAXx1XXc4W49lYFBEzoZheP+vDACx1j5W1SPAs3zNfhGZC8PwKKDdFm94iqy1RlXDfHoziqIrjuOcTtP0JXAgx9+r6hlAjTE3gMsAImLDMIza9X51BqZtfKlcLu+r1WpfgVNAkl8noij6ZK3dD1wqWLvefvukXC7vdBznBfDZ87yhzm+9MeY8QBRFd9rx/J/xARjMsmxseno6bnF97YljY2NXgZ1ArVarLXRWE8fxUhzHS5344uJiOjo6ullEdomIxnE81+J+bNHk5OQmYBxARO51ivwuXNeNWD/wku/7Az/w1iBJkhIwAKCqb4zZsJ1dI03T1nDT2traOBD91IGIVHqtukv0Vt1/Hd8BIrkMRMOJh+8AAAAASUVORK5CYII="/>Address Cras justo odio</li>
                                    <li className="list-group-item bg-light"> <img className='mr-2' alt='kielo consultancy' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVRIie2UsYsTQRSHvxeXra0spgz4F4iFB3bRxlJsDi6E4MwkcGBlc417lYViIUhgd4toKXbaaWVhY5firvIqe685hJCdZ5Mcub3dXLLB7r5u3rz5frzHsnDNFUi5MBwO27PZrN1EFkXRyWg0OrlQKzcVRdEVkRdNAoqiOASSlQELVPXBJnIR+VpVrw3IsuzbJgHOucp6a/lgrd0BdjcRl9idO865MIGIfAdubBFwe+4495ZX1AIC0HLOZdPp9Pl4PD5dZez1ejfjOH41PwZKW2ldfsJr4BDoxnF8bK19XCd3zj2K43gC9IC3IvKm3FMV8DdN0ySEcBf4LSKfvPef+/2+WTQMBoNbzrkPwBfgj6rupGn6TFXP1gkAIM/ziTHmnqoeqGoniqKJ977rve+GEI6AJ6p6YIy5k2XZzzpP7WcKkCTJDHjpnPsIZKr6fn71I4TwNM/z41XvV06wTJqmv4wxHWAf2DfG3F9HDldMsEySJAF4t27/grUm2Ib/HlC1ora1ttPQd+k3XxWwJyJ7DQMAtDZAVR9uIb6mGf8A9aqDgiL7QTAAAAAASUVORK5CYII="/>Email Dapibus ac facilisis in</li>
                                    <li className="list-group-item bg-light"><img className='mr-2' alt='kielo consultancy' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABqUlEQVRIie2Rv2tTURTHP8f3rqFEqINCN5EuDiryzCRCBgdBQcE9Q4Z7s0g7FUF00cVRcMq92eJfoHSrg1MlhBCKiIu/ty4Vtb5qXnJdWnkkN6Smcet3uufc7/1+LufAoSZI8oUxxg8bvPdPnHNL0wKODNW/R34gcmra8BDgW8AzU8DH/woQkdcBz3FjzPxMAIPB4GXAs5GmaTYTQJZlq0Av13obx/HVZrO5PS0gyhfdbvdnkiQXReQM8K7X6112zm1OGw6jS8Z7/2j3uFAoFIoHCQ8CGo3GK2AVKPb7/cczBwBEUbQE/BCRm7Va7c5BAFGo2W63t0ql0hfgFnAlSZL3nU5nY9hXqVSK5XJ5rtVq/RoHkHEXAFrrhyJyD/DAXWvt3n6oVqsnlVJrwHngK/AJ+Ax8sNYu7wsAiNb6wS4E4Fkcx7fTNN1RSr0AzoUeWWv/5gZ3kJN3zt0XkQrwHbiRZdkbpdT6uPBhTQIAUK/Xn0ZRdAF4DhwDFvfzDiaPaERa60sisgJcB1TIkx/RPwP2ZIw5ISLXvPdl7/1ZETkNzANH84BDTdQfaKl6VB1S+T0AAAAASUVORK5CYII="/>Phone Morbi leo risus</li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                    <h2 className="my-5">pictures</h2>
                    <div className="row d-flex flex-wrap justify-content-center product-picture">
                        <div className="col-md-12 col-lg-6 p-2 d-flex align-items-center justify-content-center">
                            <img src={Image1} alt='Kielo Facemask'/>
                        </div>
                        <div className="col-md-12 col-lg-6 p-2 d-flex align-items-center justify-content-center">
                            <img src={Image2} alt='Kielo Facemask'/>
                        </div>
                        <div className="col-md-12 col-lg-6 p-2 d-flex align-items-center justify-content-center">
                            <img src={Image1} alt='Kielo Facemask'/>
                        </div>
                        <div className="col-md-12 col-lg-6 p-2 d-flex align-items-center justify-content-center">
                            <img src={Image2} alt='Kielo Facemask'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProductDetail;