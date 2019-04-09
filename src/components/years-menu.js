import React, { Component } from 'react';

class YearsMenu extends Component{

    constructor(){
        super();
        this.state = {
            numOfYears: [10, 20, 30, 40, 50],
            selectedNum: 10,
            showMenu: false
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }

    showMenu = (event) => {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = () => {
        this.setState({showMenu: false}, () => {
            document.removeEventListener('click', this.closeMenu)
        });
    }

    selectNumber = (num) => {
        this.props.selectNumber(num);
    }

    render () {

        return (

            <div id="years-menu-container">

                <button id="years-menu-button" onClick={this.showMenu}>How far back shall we go?</button>
                
                {this.state.showMenu ? (
                <div className="menu">
                    {this.state.numOfYears.map(num => 
                        <button className="years-button" onClick={() => this.selectNumber(num)}>{num}</button>
                    )}
                    <span id="years">years</span>
                </div>
                ) : (null)
                }
            </div>

        )
    }

}

export default YearsMenu;