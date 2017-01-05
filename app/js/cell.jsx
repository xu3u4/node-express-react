import React from 'react';

export default class Cell extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            cell: this.props.value,
            display: "hide_class",
            isbanned: true
        }
	}
    toggleinput() {
        this.setState({
            display: "show_class",
            isbanned: false
        });
        
    }
    handleChange(){
        console.log(123);
    }
    render() {
        return (
            <td onDoubleClick = {this.toggleinput.bind(this)} >
            	<input type="text" value={this.state.cell} className = {this.state.display} onChange = {this.handleChange} disabled = {this.state.isbanned} />
            </td>
        );
    }
}
Cell.propTypes = {
    value: React.PropTypes.string.isRequired
};
