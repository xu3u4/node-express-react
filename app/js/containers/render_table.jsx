import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectIssue, handleDeleteIssue } from '../actions/index.jsx';
import { bindActionCreators } from 'redux';

import RenderHeader from '../components/render_header.jsx';
import Cell from '../components/cell.jsx';
import ActionCell from '../action_cell.jsx';

class RenderTable extends Component {
    renderRow() {
        return (this.props.rows.map((row, i) => {
            return (
                <tr key={ i } 
                    onDoubleClick = { () => this.props.onselectIssue(row) } >
                    {
                        this.props.columns.map((col) => {
                            if (col.key === 'Action') {
                                return <ActionCell key={ col.key } action = { () => this.props.onDeleteIssue(i, this.props.rows) } >Delete</ActionCell>;
                            }
                            return <td key={ col.key } >{ row[col.key] }</td>;
                        })
                    }
                </tr>
            )
        }));
    }
    render() {
        return (
            <table>
                <RenderHeader columns={ this.props.columns } />
                <tbody>{ this.renderRow() }</tbody>
            </table>
        );
    }
}

const mapStateToProps = function(state) {
    console.log(state);
    // whatever is returned will show up as props (this.props.rows) here
    return {
        rows: state.InfosReducer.infos,
        columns: state.HeadsReducer
    };
};

// Anything returned from here will be as props on this container
function mapDispatchToProps(dispatch) {
    // whenever selectIssue is called, the result shold be passed to all reducers
    return bindActionCreators({ onselectIssue: selectIssue,
                                onDeleteIssue: handleDeleteIssue
                              }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderTable);

