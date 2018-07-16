import React from 'react';

class Message extends React.Component{

  handleClick = () => {
    this.props.selected = "";
  }

  render() {

    var readThing = ""
    var selectThing = ""
    var starThing = ""
    var checkbox = ""
    var dev = ""
    var gschool = ""
    var personal = ""

    if (this.props.message.read === true){
      readThing = "read"
    }else readThing = "unread"

    if (this.props.message.selected === true){
      selectThing = "selected"
      checkbox = "checked"
    }else selectThing = "", checkbox = ""

    if (this.props.message.starred === true){
      starThing = ""
    }else starThing = "-o"

    if (this.props.message.labels.indexOf("dev") > -1)
    {
      dev = "dev"
    }else dev = ""

    if (this.props.message.labels.indexOf("gschool") > -1)
    {
      gschool = "gschool"
    }else gschool = ""

    if (this.props.message.labels.indexOf("personal") > -1)
    {
      personal = "personal"
    }else personal = ""

    return(
      <div class={"row message " + readThing + " " + selectThing}>
        <div class="col-xs-1">
          <div class="row">
            <div class="col-xs-2">
              <input type="checkbox" checked={checkbox} onClick={() => this.props.toggleSelected(this.props.message.id)}/>
            </div>
            <div class="col-xs-2">
              <i class={"star fa fa-star" + starThing} onClick={() => this.props.toggleStar(this.props.message.id)}></i>
            </div>
          </div>
        </div>
        <div class="col-xs-11">
          <span class="label label-warning">{dev}</span>
          <span class="label label-warning">{gschool}</span>
          <span class="label label-warning">{personal}</span>
          <a href="#">
            {this.props.message.subject}
          </a>
        </div>
      </div>
    );
  }
}
export default Message
