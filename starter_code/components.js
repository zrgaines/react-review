class AwesomePictureThing extends React.Component {
    
    constructor(){
        super();
        this.state = {show: false}
    }
    _toggle(){
        if(this.state.show === true) {
            this.setState({show: false});
        }
        else { this.setState({show: true});}
    }
    render() {
        if(this.state.show === true) {
            return( 
                <div>
                    <img src="http://0.media.dorkly.cvcdn.com/77/37/c7358e161859b0a65c09fef0e3996c13.gif" />
                    <button onClick={this._toggle.bind(this)} TOGGLE></button>
                </div>
            )
        }
        else {
            return( 
                <div>
                    <button onClick={this._toggle.bind(this)}>buttON TO TOGGLE AHHHHHH</button>
                </div>
            )
        }
    }
}

ReactDOM.render(<AwesomePictureThing />, document.getElementById('app-container'));