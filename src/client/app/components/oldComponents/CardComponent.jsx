import React from 'react';
import CheckListComponent from './CheckListComponent.jsx'

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this)
    this.state = {
      showDetails: true,
      tasks: [
        {id: 1, name:"ContactList Example", done:true},
        {id: 2, name:"Kanban Example", done:false},
        {id: 3, name:"My own experiments", done:false}
      ]
    };
  }
  toggleDetails() {
    console.log("click!")
  }
  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="cardDetails">
          {this.props.description}
          <CheckListComponent cardId={this.props.id} tasks={this.state.tasks} />
        </div>
      );
    }
    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };
    return (
      <div className="card">
        <div style={sideColor} />
        <div className={
            this.state.showDetails? "cardTitle cardTitleIsOpen" : "cardTitle"
          } onClick={this.toggleDetails.bind(this)}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    )
  }
}

export default CardComponent;
