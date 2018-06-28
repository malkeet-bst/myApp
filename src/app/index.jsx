console.log('finished with setup');
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="" >
                <div className="heading" >
                    <div className="header__left" >
                        <div className="header-item" >
                            <a className="header-item-content" href="/" >
                                < img alt="MSD" className="logo" src="/app/images/icon.png" />
                            </a>
                            <a className="header-item header-item--address"></a>
                            <div className="header-item-label" > Your Location </div>
                            <div className="seacrhContainer">
                                <input className="searchBox" value="" placeholder="hey" />
                            </div>
                            {/* <span className="material-icons searchIcon">search</span> */}
                            <div className="myAccount">
                                <span>My Account
                            </span>
                                <span className="material-icons expandIcon">expand_more
                                </span>
                            </div>
                            <span className="material-icons cartIcon">local_grocery_store
                                </span>
                                <span className="cartValue">$238</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


ReactDOM.render(< App />, document.getElementById('app'));