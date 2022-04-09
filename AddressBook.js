"use strict";
class ContactDetails {
    // Constructor
    constructor(...params) {
      this.firstName = params[0];
      this.lastname = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
    }
  
    // getter and seter methods
  

    get firstName() {
      return this._firstName;
    }
  
    set firstName(firstName) {
      let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (firstNameRegex.test(firstName)) {
        this._firstName = firstName;
      } else
        throw "FirstName should start with capital letter and alteast 3 characters";
    }
  
  
    get lastname() {
      return this._lastname;
    }
  
    set lastname(lastname) {
      let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (lastNameRegex.test(lastname)) {
        this._lastname = lastname;
      } else
        throw "LastName should start with capital letter and alteast 3 characters";
    }
  
    get address() {
      return this._address;
    }
  
    set address(address) {
      let addressRegex = RegExp("^[a-zA-Z0-9 ]{4,}$");
      if (addressRegex.test(address)) {
        this._address = address;
      } else throw "Address should have alteast 4 characters";
    }
  
    get city() {
      return this._city;
    }
  
    set city(city) {
      let cityRegex = RegExp("^[a-zA-Z ]{4,}$");
      if (cityRegex.test(city)) {
        this._city = city;
      } else throw "City should have alteast 4 characters";
    }
  
    get state() {
      return this._state;
    }
  
    set state(state) {
      let stateRegex = RegExp("^[a-zA-Z ]{4,}$");
      if (stateRegex.test(state)) {
        this._state = state;
      } else throw "State should have alteast 4 characters";
    }
  
    get zip() {
      return this._zip;
    }
  
    set zip(zip) {
      let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
      if (zipRegex.test(zip)) {
        this._zip = zip;
      } else throw "Zip should match the valid format";
    }
  
    get phoneNumber() {
      return this._phoneNumber;
    }
  
    set phoneNumber(phoneNumber) {
      let phoneRegex = RegExp("^\\+(?:[0-9] ?){6,14}[0-9]$");
      if (phoneRegex.test(phoneNumber)) {
        this._phoneNumber = phoneNumber;
      } else throw "PhoneNumber should match the valid format";
    }
  
    get email() {
      return this._email;
    }
  
    set email(email) {
      let emailRegex = RegExp(
        "^[a-zA-Z0-9]+[_+-.]?[a-zA-Z0-9]*[a-zA-Z0-9]@[a-zA-Z0-9]+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2,4})?$"
      );
      if (emailRegex.test(email)) {
        this._email = email;
      } else throw "Email should match the valid format";
    }
  
  
    toString() {
      return (
        "First Name:- " + this.firstName +
        "\n Last Name:- " + this.lastname +
        "\n Address:- " + this.address +
        "\n City:- " + this.city +
        "\n State:- " + this.state +
        "\n Zip:- " + this.zip +
        "\n Phone number:- " + this.phoneNumber +
        "\n Email:- " + this.email
      );
    }
  }
  
  let addressBookArray = new Array();
  try {
    addressBookArray.push(
      new ContactDetails(
        "Saranya",
        "Siripurapu",
        "Vizag",
        "Vizag",
        "Andhra Pradesh",
        "535654",
        "+91 9242435566",
        "saranya22@gmail.com"
      )
    );
    addressBookArray.push(
      new ContactDetails(
        "Bill",
        "Gates",
        "BakerStreet",
        "San Francisco",
        "California",
        "345654",
        "+1 1234567890123",
        "billgates@gmail.com"
      )
    );
    addressBookArray.push(
      new ContactDetails(
        "Johnny",
        "Depp",
        "C22 Street",
        "Santa Clara",
        "Alaska",
        "453567",
        "+91 9876543211",
        "jdepp@hotmail.com"
      )
    );
    addressBookArray.push(
      new ContactDetails(
        "Brad",
        "Pit",
        "D33 Street",
        "Lamington",
        "Wales",
        "232323",
        "+91 6545454546",
        "braddpit@celeb.ac.us"
      )
    );
  } catch (e) {
    console.error(e);
  }

  //uc4 - Editing Employee data by using first name
  function findContact(firstName) {
    let contactObj;
    addressBookArray.forEach((contact) => {
      if (contact.firstName == firstName ) {
        contactObj = contact;
      }
    });
    return contactObj;
}


function editContact(contact, newValue, property) {
    try {
      switch (property) {
        case "firstName":
          contact.firstName = newValue;
          break;
        case "lastName":
          contact.lastname = newValue;
          break;
        case "address":
          contact.address = newValue;
          break;
        case "city":
          contact.city = newValue;
          break;
        case "state":
          contact.state = newValue;
          break;
        case "zip":
          contact.zip = newValue;
          break;
        case "phoneNumber":
          contact.phoneNumber = newValue;
          break;
        case "email":
          contact.email = newValue;
          break;
        default:
          break;
      }
    } catch (e) {
      console.error("Unable to edit Contact");
    }
  }
  
  let contact = findContact("Bill");
  console.log("Data before Editing :")
  console.log(contact.toString());
  
  //editContact(contact,"Dnya","lastName");

  //UC5 - Delete the data by using first name
  function findAndDeleteContact(firstName) {
    let contact = findContact(firstName);
    addressBookArray.splice(addressBookArray.indexOf(contact), 1);
}
  
findAndDeleteContact("Bill");
console.log(addressBookArray);