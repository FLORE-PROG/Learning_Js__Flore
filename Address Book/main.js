
//Listen to form submit

document.getElementById('contactform').addEventListener('submit', Contactform);

// Save contact
function Contactform(e)
{
    e.preventDefault()
//Get values from form
  var PersonName = document.getElementById('personName').value;
  var PersonMobile = document.getElementById('personMobile').value;

  if(!PersonName || !PersonMobile)
  {
    alert('please fill in the form');
    return false;
  }

  var contact = {
    name: PersonName,
    mobile: PersonMobile
  }

  // let's test local storage

  //localStorage.setItem('test', "Hello world");
  //console.log(localStorage.setItem('test'));

  //Test if AddressBook is null

  if(localStorage.getItem('AddressBook') === null) {

    //init array
    var AddressBook = [];
    // Add data to array
    AddressBook.push(contact)
    //Set to localstorage
    localStorage.setItem('AddressBook',JSON.stringify(AddressBook));
}else{

    // First get contact from local storage
    var AddressBook = JSON.parse(localStorage.getItem('AddressBook'));
    // Add new contact to array
    AddressBook.push(contact);
    // Reset back to local storage
    localStorage.setItem('AddressBook', JSON.stringify(AddressBook));
     }
     fetchAddressBook()
// Clear form
document.getElementById('contactform').reset()
e.preventDefault();
}

// fetch contact from local storage
function fetchAddressBook()
{
    // first get contact from local storage
    var AddressBook = JSON.parse(localStorage.getItem('AddressBook'));
    // get output ID

var AddressBookResult = document.getElementById('AddressBookResult');
debugger;

AddressBookResult.innerHTML='';
for (var i = 0; i<  AddressBook.length; i++) {
    var name = AddressBook[i].name;

    var mobile = AddressBook[i].mobile;

    AddressBookResult.innerHTML += '<ul>'+
                                     '<li>'+name+'<li>'+
                                     '<li>'+mobile+'<li>'+
                                     "<li>'<a class='btn btn-danger' href='#' onclick='DeleteContact("+mobile+")'>Delete</a></li>"+
                                     '</ul>';

                                    
       }
       debugger;
} 

function DeleteContact(num)
{
    var AddressBook = JSON.parse(localStorage.getItem('AddressBook'));

    for(var i = 0; i<AddressBook.length; i++){
        if(AddressBook[i].mobile == num){
            AddressBook.splice(i, 1);
        }
    }
// Reset back to local storage
localStorage.setItem('AddressBook', JSON.stringify(AddressBook));

fetchAddressBook();

}

