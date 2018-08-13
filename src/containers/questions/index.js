import React from 'react';

class Questions extends React.Component {
  constructor(params) {
    super(params);
  }

  render = () => (
    <div>
      <h1>Questions....{this.props.match.params.questionId}</h1>
    </div>
  )
}

export default Questions;
