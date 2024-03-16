import React from 'react';

export default class InputPair extends React.Component {
  render(){
    let id = "formControlInput_" + this.props.id;
    return (
      <div className='row align-items-end'> 
        <div className="col-sm-4">
          <label htmlFor={id} className="form-label">{this.props.label}</label>
        </div>
        <div className="col-sm-8">
          <input 
              type="text" 
              className="form-control" 
              id={id} 
              placeholder="Input Here"
              onChange={this.props.onChange} 
              value={this.props.value} 
              name={this.props.name}
            />
        </div>
      </div>
    )
  }
}