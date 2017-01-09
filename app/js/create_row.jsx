import React from 'react';

export default class CreateRow extends React.Component {
    constructor() {
        super();
        this.issue = {};
        this.sendRow = this.sendRow.bind(this);
        this.inputCol = [];
    }

    handleOnchange(key, e) {
        const keyI = this.inputCol.indexOf(key);

        this.issue[key] = e.target.value;
        if(e.target.value && this.inputCol.indexOf(key) < 0){
            this.inputCol.push(key);
        }else if(e.target.value === ""){
            this.inputCol.splice(keyI, 1);
        }
        console.log(this.props.editRow);
        // for (let key in this.issue){
        //     console.log(this.issue[key]);
        //     if(!this.issue[key]){
        //         console.log(this.refs[key]);
        //         this.refs[key].appendChild(warning);
        //     }
        // }
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

        const createTd = this.props.col.map((col) =>{
            if(col.key !== 'Action'){
                return (
                    <td key={ col.key }>
                        <input className="input_row" type="text" ref = { col.key } onChange={(e) => this.handleOnchange(col.key, e)}
                        defaultValue = {this.props.editRow[col]} /><br />

                    </td>
                );

            } else {
                return <td key = { col.key }><button onClick={ this.sendRow } >ADD</button></td>
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
    addRow: React.PropTypes.func.isRequired,
    editRow: React.PropTypes.object
};
