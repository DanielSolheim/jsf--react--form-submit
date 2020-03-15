import React from 'react';

export default function Contact() {


    function handleSubmit(event){

      event.preventDefault();


      var eventItems = event.target.elements;
      console.log(eventItems);

      for (var i = 0; i < eventItems.length; i++){
        console.log(eventItems[i].name);
        console.log(eventItems[i].value); 
      }
      //var firstName = document.querySelector(".submit-firstName");
      //var lastName = document.querySelector(".submit-LastName")
      //      if(firstName.value === "" || lastName.value === "" ) {
      //        alert("please enter some info");
      //      }
    };

  return (
    <div className="Contact">
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name   </label>
          <input className="submit-firstName" name="firstName" placeholder="First name" />
        </div>
        <div>
          <label>Last Name   </label>
          <input className="submit-LastName" name="lastName" placeholder="Last Name" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
