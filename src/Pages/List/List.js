import React, { Component } from 'react';
import "./List.css";
export default class List extends Component {
   
  render() {
   
    const List = this.props.table.map(item =>{
        return ( <div className='div_data' key={item.id}><label>Nom :{item.noms}</label><label>
            Prenom :{item.prenoms} </label> <label> Phone :{item.phons}</label><label id='label_radio'> l'assurance:</label><label id='label_radio'> Oui:</label><input id='radio' name='assur' type="radio"/><label id='label_radio'> Non:</label><input id='radio' name='assur' type="radio"/>  </div>);
   } )
if(this.props.table==false){
  return <div><label id='label_radio'>
    Non Data ...</label>
  </div>;
}
    return (
        <>
     
          
         
      

 
       {List}
    
      
        </>
    )
 };
  
}
