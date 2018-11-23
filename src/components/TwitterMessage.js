import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      remChar: this.props.maxChars,
    };
  }

  handleChange = (e) => {
    let usedChars = e.target.value.length
    this.setState({
      message: e.target.value,
      remChar: (this.props.maxChars - usedChars)
    }, () => console.log('updated state', this.state));
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxLength={this.props.maxChars} value={this.state.message} onChange={this.handleChange} />
         <p><strong>Remaining Characters Available:</strong> {this.state.remChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
