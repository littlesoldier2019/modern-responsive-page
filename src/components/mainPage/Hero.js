import React from 'react';
import '../../assets/styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="content-container row d-flex justify-content-end align-items-end">
            <div className="col-sm-12 col-md-6 col-lg-4 bg-white d-flex justify-content-center align-items-center content item1 px-5">
                <div >
                    <h1>Getting Clients &amp; <br/> Suppliers Connected</h1>
                    <p className='mt-2'>
Our expertise and experience in international trade can help manufacturers bring their products to suitable markets.</p>
                </div> 
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center content item2">
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item px-2 px-md-5 "><img className='mr-2' alt='Kielo address' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACqElEQVRIic2VvWsUURTFf3cyZBpJk8Ii+g+okBDTCIqgYqFiIRbRFUGz+94amUJFaztFwSbqzsxmtTGNhQFJCIqNbeKgAUWso434UaSQDTNzLTIr68ZZWUXwwjDvnXPfOfe+Nx/wj0N+l+D7vtdsNi1wEtiRw69FZKa/vz+amppq/rFBtVodyrJsHhguSHnlOM6RIAg+FGk43SpvE19R1eNJkgwkSTKgqseAd8BIlmVzvu97RTpuEZFvyzCwkqbpSKPR+NJGz05MTDzv6+tbBkaazWYFuN2TgaqWRARVvdBoNL4YYw4D4Tqlpl6vLxhjLgIPRaRUZFC4RSKyDSBN06c5FABDwBYRCQE8z3uSF7O9SKfQAGgCuK5bmLO6utri1v7E4G1+3w2gqgZ4D6yIiAHwPG9PR+6GKDwDEZlV1d3AOWC+Xq8vAFs70s7n90c9dyAiD4BvwKFqtbqjk7fWDqvqQeCb4zgzPRsEQfBRVWuAZFl2m40v5a0cuxsEwceeDfIurgGfgb3W2vEWXqlUSqq6L+eud9XoRuZiZ0WkAXx1XXc4W49lYFBEzoZheP+vDACx1j5W1SPAs3zNfhGZC8PwKKDdFm94iqy1RlXDfHoziqIrjuOcTtP0JXAgx9+r6hlAjTE3gMsAImLDMIza9X51BqZtfKlcLu+r1WpfgVNAkl8noij6ZK3dD1wqWLvefvukXC7vdBznBfDZ87yhzm+9MeY8QBRFd9rx/J/xARjMsmxseno6bnF97YljY2NXgZ1ArVarLXRWE8fxUhzHS5344uJiOjo6ullEdomIxnE81+J+bNHk5OQmYBxARO51ivwuXNeNWD/wku/7Az/w1iBJkhIwAKCqb4zZsJ1dI03T1nDT2traOBD91IGIVHqtukv0Vt1/Hd8BIrkMRMOJh+8AAAAASUVORK5CYII="/>
                        Alberganesplanadi 2 Espoo Finland</li>
                        <li className="list-group-item px-2 px-md-5 "><img className='mr-2' alt='Kielo email ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVRIie2UsYsTQRSHvxeXra0spgz4F4iFB3bRxlJsDi6E4MwkcGBlc417lYViIUhgd4toKXbaaWVhY5firvIqe685hJCdZ5Mcub3dXLLB7r5u3rz5frzHsnDNFUi5MBwO27PZrN1EFkXRyWg0OrlQKzcVRdEVkRdNAoqiOASSlQELVPXBJnIR+VpVrw3IsuzbJgHOucp6a/lgrd0BdjcRl9idO865MIGIfAdubBFwe+4495ZX1AIC0HLOZdPp9Pl4PD5dZez1ejfjOH41PwZKW2ldfsJr4BDoxnF8bK19XCd3zj2K43gC9IC3IvKm3FMV8DdN0ySEcBf4LSKfvPef+/2+WTQMBoNbzrkPwBfgj6rupGn6TFXP1gkAIM/ziTHmnqoeqGoniqKJ977rve+GEI6AJ6p6YIy5k2XZzzpP7WcKkCTJDHjpnPsIZKr6fn71I4TwNM/z41XvV06wTJqmv4wxHWAf2DfG3F9HDldMsEySJAF4t27/grUm2Ib/HlC1ora1ttPQd+k3XxWwJyJ7DQMAtDZAVR9uIb6mGf8A9aqDgiL7QTAAAAAASUVORK5CYII="/>
                        lydia@kielo.io</li>
                        <li className="list-group-item px-2 px-md-5 "><img className='mr-2' alt='Kielo phone' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABqUlEQVRIie2Rv2tTURTHP8f3rqFEqINCN5EuDiryzCRCBgdBQcE9Q4Z7s0g7FUF00cVRcMq92eJfoHSrg1MlhBCKiIu/ty4Vtb5qXnJdWnkkN6Smcet3uufc7/1+LufAoSZI8oUxxg8bvPdPnHNL0wKODNW/R34gcmra8BDgW8AzU8DH/woQkdcBz3FjzPxMAIPB4GXAs5GmaTYTQJZlq0Av13obx/HVZrO5PS0gyhfdbvdnkiQXReQM8K7X6112zm1OGw6jS8Z7/2j3uFAoFIoHCQ8CGo3GK2AVKPb7/cczBwBEUbQE/BCRm7Va7c5BAFGo2W63t0ql0hfgFnAlSZL3nU5nY9hXqVSK5XJ5rtVq/RoHkHEXAFrrhyJyD/DAXWvt3n6oVqsnlVJrwHngK/AJ+Ax8sNYu7wsAiNb6wS4E4Fkcx7fTNN1RSr0AzoUeWWv/5gZ3kJN3zt0XkQrwHbiRZdkbpdT6uPBhTQIAUK/Xn0ZRdAF4DhwDFvfzDiaPaERa60sisgJcB1TIkx/RPwP2ZIw5ISLXvPdl7/1ZETkNzANH84BDTdQfaKl6VB1S+T0AAAAASUVORK5CYII="/>
                        0358 466 147 593 - 084 908367 920 </li>
                        <li className="list-group-item px-2 px-md-5 "><img className='mr-2' alt='Kielo facebook' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAxUlEQVRIie2UMQrCQBBF37iaZgvFXmw9jt4gEEhjryCewCb9NOI17O09g55BxMLENoREJ5IUgfxumP3/MbvDQtcldQ6HYTgJgmAPLIE58AIewEZVT2WeoTU8iqKpc+4CLAp+D4yrfAMrwDm3K4SbZJ4AWBXqY5ZlZxF5i8i1CcAsX3jv10mSPH+ZzFcEjPKFJbwu4C99XdM4jjNjzlZVD2WNRiYQkXtVrynArVVAmqaVE5i/iuJ7qKrJ2/oW9YAe0AFA9/UBGGslPnwv35EAAAAASUVORK5CYII="/>
                        www.facebook.com/kieloconsultancy/</li>
                    </ul>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Hero;