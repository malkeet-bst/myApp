console.log('finished with setup');
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="container" >
                <div className="row" >
                    <div className="header__left" >
                        <div className="header-item" >
                            <a className="header-item__content" href="/" >hello
                                {/* < img alt="MSD" className="logo" src="/app/images/icon.png" /> */}
                            </a>
                            <a className="header-item header-item--address"></a>
                            <div className="header-item__label" > Your Location </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


ReactDOM.render(< App />, document.getElementById('app'));