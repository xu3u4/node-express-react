import React from 'react';

export default class CreateRow extends React.Component {
    constructor() {
        super();
        this.state = {
            newIssue: {}
        };
    }

    handleOnchange(key, e) {

        var issue = this.state.newIssue;

        issue[key] = e.target.value;
        this.setState({
            newIssue: issue
        });

    }
    sendRow() {
        // const newIssue = {};
        this.props.addRow(this.state.newIssue);

        // for (const key in this.state.newIssue) {
        //     newIssue[key] = this.state.newIssue[key];
        // }
        // if (Object.keys(this.state.newIssue).length === this.props.col.length) {
        //     this.props.addRow(this.state.newIssue);
            Object.keys(this.refs).map((key) => {
                this.refs[key].value="";
            });
            // this.setState({
            //     newIssue: {}
            // });
        // }

    }

    render() {

        const createTd = this.props.col.map((col) =>{
            if(col.key !== 'Action'){
                return (
                    <td key={ col.key }>
                        <input className="input_row" type="string" ref = { col.key } onChange={(e) => this.handleOnchange(col.key, e)} />
                    </td>
                );
                
            } else {
                return <td key = { col.key }><button onClick={ this.sendRow.bind(this) } >ADD</button></td>
            }
            
        });

        return (
            <tr>
                {createTd}              
            </tr>
        );
    }
}

CreateRow.propTypes = {
    col: React.PropTypes.array.isRequired,
    addRow: React.PropTypes.func.isRequired
};
