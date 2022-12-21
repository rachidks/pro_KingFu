import React, { Component } from 'react';
import "./Home.css";
export default class Home extends Component {
    tab=[];
    x=0;
  state={
    table:this.tab 
  }



    save =()=>{
      
        
        const Nom = document.getElementById("Nom").value;
        const Prenom = document.getElementById("Prenom").value;
        const Phone = document.getElementById("Phone").value;


       
        this.x++;
        this.tab.push({id:this.x,noms:Nom,prenoms:Prenom,phons:Phone});
      
        
        this.setState({
            table:this.tab
        });
      


    }
    
  
  render() {
   
    const List = this.state.table.map(item =>{
        return ( <div className='div_data' key={item.id}><label>Nom :{item.noms}</label><label>
            Prenom :{item.prenoms} </label> <label> Phone :{item.phons}</label><label id='label_radio'> l'assurance:</label><input id='radio' type="radio"/>  </div>);
    })

    return (
        <>
        <center>
          
         
      


 <h1 id='h11'> Your Data   </h1>

      <div id='fieldset'>
        
        <form>
        
      
        <label >Nom</label><input type="text"  id='Nom'/>
        <label >Prenom</label><input type="text"  id='Prenom'/>
        <label >phone</label><input type="text"  id='Phone'/>
       

      <button  type="button" onClick={this.save} > Sand  </button>
 
       
      </form>  
    
      
        
        </div>
       
        </center>
        {List}</>
    )
 };
  
}
