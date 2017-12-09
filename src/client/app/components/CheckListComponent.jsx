import React from 'react';

import checkListStyle from './checkListComponent.css';

class CheckListComponent extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){
    return (
      <div className="checklist">
          {this.props.tasks.map(
            function(listValue) {
              return <ul>{listValue.name}</ul>;
            }
          )}
          <input type="text"
            className={checkListStyle.checklist}
            placeholder="Type then hit Enter to add a task" />
      </div>
      )
    }
  }

  export default CheckListComponent;
