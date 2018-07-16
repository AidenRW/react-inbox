import React from 'react';


class ToolBar extends React.Component{
  render() {
    return(
      <div class="row toolbar">
        <div class="col-md-12">
          <p class="pull-right">
            <span class="badge badge">2</span>
              unread messages
          </p>

      <button class="btn btn-default">
        <i class="fa fa-check-square-o"></i>
      </button>

      <button class="btn btn-default" onClick={this.props.toggleRead} >
        Mark As Read
      </button>

      <button class="btn btn-default" onClick={this.props.toggleUnread}>
        Mark As Unread
      </button>

      <select class="form-control label-select" onChange={(e) => this.props.addTag(e.target.value)}>
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select class="form-control label-select" onChange={(e) => this.props.removeTag(e.target.value)}>
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button class="btn btn-default" onClick={this.props.deleteMessage}>
        <i class="fa fa-trash-o"></i>
      </button>
    </div>
  </div>
    );
  }
}
export default ToolBar
