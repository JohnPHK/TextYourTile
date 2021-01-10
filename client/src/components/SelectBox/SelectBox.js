import React from "react";
import './styles.css';

class SelectBox extends React.Component {    

  render() {
    const { name, value, label, description, selection, onChange } = this.props;      
    return (
        <div className='gridContainer'>
        	<div className='gridContent'>
        		{ label }
        	</div>

            <div className='gridContent'>                                        
                <select 
                    className='selectBtn' 
                    name={ name }                    
                    value={ value }
                    onChange= { onChange }
                >                                           
                    {selection.map(option => (
                    <option 
                        className='selectOption' 
                        key={option.value} 
                        value={option.value}                        
                    >
                        {option.label}
                    </option>
                    ))}            
                </select>                                                        
            </div>

            <div className='gridContent'>
            { description }
            </div>  
        </div>        
    );
  }
}

export default SelectBox