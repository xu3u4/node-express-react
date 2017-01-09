import React from 'react';
import GenerateHeader from './header.jsx';

export default class EditTable extends React.Component {
    constructor() {
        super();
        this.issue = {};
        this.sendRow = this.sendRow.bind(this);
        this.inputCol = [];
    }



    sendRow() {
        const warning = "<span className = 'warning' >Cannot be empty</span>";
        // for (let key in this.issue){
        //     console.log(this.issue[key]);
        //     if(!this.issue[key]){
        //         console.log(this.refs[key]);
        //         this.refs[key].appendChild(warning);
        //     }
        // }

        if(this.inputCol.length < this.props.col.length-1){
            this.toggleWarning = 'warning';
        }else{
            this.props.addRow(this.issue);
        }


        this.issue = {};
        Object.keys(this.refs).map((key) => {
                this.refs[key].value="";
            });

        // for (const key in this.state.newIssue) {
        //     newIssue[key] = this.state.newIssue[key];
        // }
        // if (Object.keys(this.state.newIssue).length === this.props.col.length) {
        //     this.props.addRow(this.state.newIssue);

            // this.setState({
            //     newIssue: {}
            // });
        // }

    }

    render() {

        const createTd = this.props.columns.map((col) =>{
            if(col.key !== 'Action'){
                return (
                    <td key={ col.key }>
                        <input className="input_row" type="text" ref = { col.key } onChange={ (e) => this.props.onChange(col.key, e) } /><br />
                    </td>
                );

            } else {
                return <td key = { col.key }><button onClick={ this.props.addRow } >ADD</button></td>
            }

        });

        return (
            <table>
                <GenerateHeader columns={ this.props.columns } />
                <tbody><tr>{createTd}</tr></tbody>
            </table>
        );
    }
}

EditTable.propTypes = {
    columns: React.PropTypes.array.isRequired,
    addRow: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func
    // editRow: React.PropTypes.object
};
