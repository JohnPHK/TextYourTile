import React from "react";

import "./styles.css";


class Input extends React.Component {

  render() {    

    const { name, value, label, description, inputPlaceholder, onChange, type="text"} = this.props;      
    return (
        <div className='gridContainer'>
            <div className='gridContent'>
                { label }
            </div>

            <div className='gridContent'>                                        
                <input
                    name={ name }
                    type={ type }
                    className="textField"
                    value={ value }
                    placeholder={ inputPlaceholder }
                    onChange={ onChange }
                >                    
                </input>
            </div>

            <div className='gridContent'>
                { description }
            </div>  
        </div>        
    );
  }
}

export default Input;