import {useState} from 'react'

class Header extends Component {
    state = {
        open: false
    };

    renderLogo() {
        return <img src={"logo.png"} />;
    }

    renderDropdown(){
        return (
            <div>
                Dropdown
                {this.state.open
                    ? items.map(item => <li>{item}</li>)
                    : null}
            </div>
        )
    }

    renderSearchBar(){
        return (
            <div>
                <img src={"icon.png"} />
                <input />
            </div>
        )
    }

    render(){
        return (
            <header>
                {this.renderLogo()}
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>{this.renderDropdown()}</li>
                </ul>
                {this.renderSearchBar()}
            </header>
        )
    }
}