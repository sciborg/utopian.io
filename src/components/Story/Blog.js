import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './Blog.less';

const Blog = ({showPending, showFlagged, showInProgress}) => (
  <div className={`Blog`}>
    <b>
      <Icon type="paper-clip" /> Blog Post </b>
      {showPending ? 
      <span className="markPullRight">
      <Icon className="markIcon" type="sync"/>
      </span>
      : null}
    {showFlagged ? 
      <span className="markPullRight">
      <Icon className="markIcon" type="exclamation-circle-o"/>
      </span>
      : null}
    {showInProgress ? 
      <span className="markPullRight">
      <Icon className="markIcon" type="safety"/>
      </span>
    : null}
  </div>
);

export default Blog;
