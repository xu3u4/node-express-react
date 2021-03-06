import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateIssues, showWarning } from 'actions/action_index';
import EditIssue from 'components/edit_issue';

const mapStateToProps = (state) => ({
  columns: state.HeadsReducer,
  selectedIssue: state.IssuesReducer.selectedIssue,
  isShowWarning: state.IssuesReducer.isShowWarning
});

const mapDispatchtoProps = (dispatch) => (
  bindActionCreators({
    updateIssues,
    showWarning
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchtoProps)(EditIssue);
