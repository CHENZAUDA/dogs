import React from 'react';
import "./../../featers/DogCard/DogCard";
import DogCard from './../../featers/DogCard/DogCard';
import './Home.css'
function Home(){

    const dogs = [
        { fName: "Rexi", typeName: "pincher", Age:3 },
        { fName: "Cheef", typeName: "labrador", Age:6 },
        { fName: "Niki", typeName: "wolf", Age:7 },
        { fName: "Boni", typeName: "Aski", Age:1 }       
    ];

return( <div>
      {<div>
      {  dogs.map(dog => {
                                if (dog.Age>4) {
                                     return <div  className = "bigDog">
                                         <DogCard name={dog.fName} type={dog.typeName} age={dog.Age}/>
                                    </div>
                                }
                                else{
                                    return <div className= "smallDog">
                                    <DogCard name={dog.fName} type={dog.typeName} age={dog.Age}/>
                             </div>
                                }
   
                            })
       }

  </div> 
  }



</div>)
};

export default Home;