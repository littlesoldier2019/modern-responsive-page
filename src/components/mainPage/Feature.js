import React from 'react';
import '../../assets/styles/Feature.css'
import Button from '../share/Button';

const Feature = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-12 col-md-6 d-flex align-items-center feature-container feature-item1">
                <div>
                    <h2 className="my-5 px-5">Meet trustworthy parters</h2>
                    <p className='mb-5 px-5'>Kielo Consultancy is the precedent of Pham Hiep Ltd. family business established in 2009, Hochiminh City Vietname. Now we are moving to Finland, we want to continue what we have been good at: be a connector between demand and supply. With over 10 years in international trading business, we understand the market and have strong connection with hundred of manufactuers in different industries.</p>
                    <p className='mb-5 px-5'>We are operating in Hochiminh City, Vietnam and in Helsinki, Finland. Our manufactuers locate in Vietname, from there we provide products to clients in Ameria, China, Singapore. Euroupean is our new target market. We work with partners in both ends: helping foreign clients to find qualified suppliers in Vietname, in the same time helping Vietnamese corporation find the high technology products from producers in Europe.</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center feature-container feature-item2 bg-light p">
                <div>
                <div className="row">
                    <div className="col-6">
                        <div >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-light"><img className='mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACqElEQVRIic2VvWsUURTFf3cyZBpJk8Ii+g+okBDTCIqgYqFiIRbRFUGz+94amUJFaztFwSbqzsxmtTGNhQFJCIqNbeKgAUWso434UaSQDTNzLTIr68ZZWUXwwjDvnXPfOfe+Nx/wj0N+l+D7vtdsNi1wEtiRw69FZKa/vz+amppq/rFBtVodyrJsHhguSHnlOM6RIAg+FGk43SpvE19R1eNJkgwkSTKgqseAd8BIlmVzvu97RTpuEZFvyzCwkqbpSKPR+NJGz05MTDzv6+tbBkaazWYFuN2TgaqWRARVvdBoNL4YYw4D4Tqlpl6vLxhjLgIPRaRUZFC4RSKyDSBN06c5FABDwBYRCQE8z3uSF7O9SKfQAGgCuK5bmLO6utri1v7E4G1+3w2gqgZ4D6yIiAHwPG9PR+6GKDwDEZlV1d3AOWC+Xq8vAFs70s7n90c9dyAiD4BvwKFqtbqjk7fWDqvqQeCb4zgzPRsEQfBRVWuAZFl2m40v5a0cuxsEwceeDfIurgGfgb3W2vEWXqlUSqq6L+eud9XoRuZiZ0WkAXx1XXc4W49lYFBEzoZheP+vDACx1j5W1SPAs3zNfhGZC8PwKKDdFm94iqy1RlXDfHoziqIrjuOcTtP0JXAgx9+r6hlAjTE3gMsAImLDMIza9X51BqZtfKlcLu+r1WpfgVNAkl8noij6ZK3dD1wqWLvefvukXC7vdBznBfDZ87yhzm+9MeY8QBRFd9rx/J/xARjMsmxseno6bnF97YljY2NXgZ1ArVarLXRWE8fxUhzHS5344uJiOjo6ullEdomIxnE81+J+bNHk5OQmYBxARO51ivwuXNeNWD/wku/7Az/w1iBJkhIwAKCqb4zZsJ1dI03T1nDT2traOBD91IGIVHqtukv0Vt1/Hd8BIrkMRMOJh+8AAAAASUVORK5CYII="/>
                                    Address Cras justo odio
                                </li>
                                <li className="list-group-item bg-light"><img className='mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVRIie2UsYsTQRSHvxeXra0spgz4F4iFB3bRxlJsDi6E4MwkcGBlc417lYViIUhgd4toKXbaaWVhY5firvIqe685hJCdZ5Mcub3dXLLB7r5u3rz5frzHsnDNFUi5MBwO27PZrN1EFkXRyWg0OrlQKzcVRdEVkRdNAoqiOASSlQELVPXBJnIR+VpVrw3IsuzbJgHOucp6a/lgrd0BdjcRl9idO865MIGIfAdubBFwe+4495ZX1AIC0HLOZdPp9Pl4PD5dZez1ejfjOH41PwZKW2ldfsJr4BDoxnF8bK19XCd3zj2K43gC9IC3IvKm3FMV8DdN0ySEcBf4LSKfvPef+/2+WTQMBoNbzrkPwBfgj6rupGn6TFXP1gkAIM/ziTHmnqoeqGoniqKJ977rve+GEI6AJ6p6YIy5k2XZzzpP7WcKkCTJDHjpnPsIZKr6fn71I4TwNM/z41XvV06wTJqmv4wxHWAf2DfG3F9HDldMsEySJAF4t27/grUm2Ib/HlC1ora1ttPQd+k3XxWwJyJ7DQMAtDZAVR9uIb6mGf8A9aqDgiL7QTAAAAAASUVORK5CYII="/>
                                    Email Dapibus ac facilisis in
                                </li>
                                <li className="list-group-item bg-light"><img className='mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABqUlEQVRIie2Rv2tTURTHP8f3rqFEqINCN5EuDiryzCRCBgdBQcE9Q4Z7s0g7FUF00cVRcMq92eJfoHSrg1MlhBCKiIu/ty4Vtb5qXnJdWnkkN6Smcet3uufc7/1+LufAoSZI8oUxxg8bvPdPnHNL0wKODNW/R34gcmra8BDgW8AzU8DH/woQkdcBz3FjzPxMAIPB4GXAs5GmaTYTQJZlq0Av13obx/HVZrO5PS0gyhfdbvdnkiQXReQM8K7X6112zm1OGw6jS8Z7/2j3uFAoFIoHCQ8CGo3GK2AVKPb7/cczBwBEUbQE/BCRm7Va7c5BAFGo2W63t0ql0hfgFnAlSZL3nU5nY9hXqVSK5XJ5rtVq/RoHkHEXAFrrhyJyD/DAXWvt3n6oVqsnlVJrwHngK/AJ+Ax8sNYu7wsAiNb6wS4E4Fkcx7fTNN1RSr0AzoUeWWv/5gZ3kJN3zt0XkQrwHbiRZdkbpdT6uPBhTQIAUK/Xn0ZRdAF4DhwDFvfzDiaPaERa60sisgJcB1TIkx/RPwP2ZIw5ISLXvPdl7/1ZETkNzANH84BDTdQfaKl6VB1S+T0AAAAASUVORK5CYII="/>
                                    Phone Morbi leo risus
                                </li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-6">
                        <div >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-light"><img className='mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACqElEQVRIic2VvWsUURTFf3cyZBpJk8Ii+g+okBDTCIqgYqFiIRbRFUGz+94amUJFaztFwSbqzsxmtTGNhQFJCIqNbeKgAUWso434UaSQDTNzLTIr68ZZWUXwwjDvnXPfOfe+Nx/wj0N+l+D7vtdsNi1wEtiRw69FZKa/vz+amppq/rFBtVodyrJsHhguSHnlOM6RIAg+FGk43SpvE19R1eNJkgwkSTKgqseAd8BIlmVzvu97RTpuEZFvyzCwkqbpSKPR+NJGz05MTDzv6+tbBkaazWYFuN2TgaqWRARVvdBoNL4YYw4D4Tqlpl6vLxhjLgIPRaRUZFC4RSKyDSBN06c5FABDwBYRCQE8z3uSF7O9SKfQAGgCuK5bmLO6utri1v7E4G1+3w2gqgZ4D6yIiAHwPG9PR+6GKDwDEZlV1d3AOWC+Xq8vAFs70s7n90c9dyAiD4BvwKFqtbqjk7fWDqvqQeCb4zgzPRsEQfBRVWuAZFl2m40v5a0cuxsEwceeDfIurgGfgb3W2vEWXqlUSqq6L+eud9XoRuZiZ0WkAXx1XXc4W49lYFBEzoZheP+vDACx1j5W1SPAs3zNfhGZC8PwKKDdFm94iqy1RlXDfHoziqIrjuOcTtP0JXAgx9+r6hlAjTE3gMsAImLDMIza9X51BqZtfKlcLu+r1WpfgVNAkl8noij6ZK3dD1wqWLvefvukXC7vdBznBfDZ87yhzm+9MeY8QBRFd9rx/J/xARjMsmxseno6bnF97YljY2NXgZ1ArVarLXRWE8fxUhzHS5344uJiOjo6ullEdomIxnE81+J+bNHk5OQmYBxARO51ivwuXNeNWD/wku/7Az/w1iBJkhIwAKCqb4zZsJ1dI03T1nDT2traOBD91IGIVHqtukv0Vt1/Hd8BIrkMRMOJh+8AAAAASUVORK5CYII="/>Address Cras justo odio</li>
                                <li className="list-group-item bg-light"> <img className='mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVRIie2UsYsTQRSHvxeXra0spgz4F4iFB3bRxlJsDi6E4MwkcGBlc417lYViIUhgd4toKXbaaWVhY5firvIqe685hJCdZ5Mcub3dXLLB7r5u3rz5frzHsnDNFUi5MBwO27PZrN1EFkXRyWg0OrlQKzcVRdEVkRdNAoqiOASSlQELVPXBJnIR+VpVrw3IsuzbJgHOucp6a/lgrd0BdjcRl9idO865MIGIfAdubBFwe+4495ZX1AIC0HLOZdPp9Pl4PD5dZez1ejfjOH41PwZKW2ldfsJr4BDoxnF8bK19XCd3zj2K43gC9IC3IvKm3FMV8DdN0ySEcBf4LSKfvPef+/2+WTQMBoNbzrkPwBfgj6rupGn6TFXP1gkAIM/ziTHmnqoeqGoniqKJ977rve+GEI6AJ6p6YIy5k2XZzzpP7WcKkCTJDHjpnPsIZKr6fn71I4TwNM/z41XvV06wTJqmv4wxHWAf2DfG3F9HDldMsEySJAF4t27/grUm2Ib/HlC1ora1ttPQd+k3XxWwJyJ7DQMAtDZAVR9uIb6mGf8A9aqDgiL7QTAAAAAASUVORK5CYII="/>Email Dapibus ac facilisis in</li>
                                <li className="list-group-item bg-light"><img className='mr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABqUlEQVRIie2Rv2tTURTHP8f3rqFEqINCN5EuDiryzCRCBgdBQcE9Q4Z7s0g7FUF00cVRcMq92eJfoHSrg1MlhBCKiIu/ty4Vtb5qXnJdWnkkN6Smcet3uufc7/1+LufAoSZI8oUxxg8bvPdPnHNL0wKODNW/R34gcmra8BDgW8AzU8DH/woQkdcBz3FjzPxMAIPB4GXAs5GmaTYTQJZlq0Av13obx/HVZrO5PS0gyhfdbvdnkiQXReQM8K7X6112zm1OGw6jS8Z7/2j3uFAoFIoHCQ8CGo3GK2AVKPb7/cczBwBEUbQE/BCRm7Va7c5BAFGo2W63t0ql0hfgFnAlSZL3nU5nY9hXqVSK5XJ5rtVq/RoHkHEXAFrrhyJyD/DAXWvt3n6oVqsnlVJrwHngK/AJ+Ax8sNYu7wsAiNb6wS4E4Fkcx7fTNN1RSr0AzoUeWWv/5gZ3kJN3zt0XkQrwHbiRZdkbpdT6uPBhTQIAUK/Xn0ZRdAF4DhwDFvfzDiaPaERa60sisgJcB1TIkx/RPwP2ZIw5ISLXvPdl7/1ZETkNzANH84BDTdQfaKl6VB1S+T0AAAAASUVORK5CYII="/>Phone Morbi leo risus</li>
                            </ul>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Button text='Get in touch' type='button'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Feature;