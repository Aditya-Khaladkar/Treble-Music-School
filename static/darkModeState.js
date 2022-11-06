class Dark extends React.Component {    
    constructor(props) {
        super(props);
        this.state={isDark: false};
    }

    activateSwitch=()=> {
        if(this.state.isDark == false)
            this.setState({isDark: true});
        else
            this.setState({isDark: false});

        darkMode(!this.state.isDark);
    }

    render() {
        return(
            <div>
                <input type="checkbox" className="custom-control-input justify-content-end" id="darkModeSwitch" onClick={this.activateSwitch} 
                checked={this.state.isDark}></input>
                <label className="custom-control-label" for="darkModeSwitch" id="darkModeSwitchLabel">Dark Mode</label>
            </div>
        );
    }

}

const dark = ReactDOM.createRoot(document.getElementById('darkSwitch'));
dark.render(<Dark></Dark>);