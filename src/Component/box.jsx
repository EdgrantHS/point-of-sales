import React from 'react';

export default class Box extends React.Component {
  render() {
  let compbinedClassName = this.props.customClass;

  return (
    <div className="box">
      <div className="container-fluid main-color">
          <div className="row header-color p-3 lead">
            {this.props.header} 
          </div>
          <div className='pt-3 text-center'>
            {this.props.items.map((item) => (
              <div className={compbinedClassName}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}