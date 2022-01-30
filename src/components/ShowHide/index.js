import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="name-container-align">
            <div className="name-container">
              <button
                className="button"
                onClick={this.showFirstName}
                type="button"
              >
                Show/Hide Firstname
              </button>
              {firstName ? <p className="para">Joe</p> : null}
            </div>
            <div className="name-container">
              <button
                className="button"
                onClick={this.showLastName}
                type="button"
              >
                Show/Hide Lastname
              </button>
              {lastName ? <p className="para">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
