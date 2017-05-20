import React from 'react';

import 'css/table.scss';
import ViewIssues from 'containers/view_issues';
import EditIssue from 'containers/edit_issue';

const TableFrame = () => (
  <div>
    <ViewIssues />
    <EditIssue />
  </div>
);

export default TableFrame;
