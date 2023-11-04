const form = document.querySelector('form');
const frominput =document.querySelector('#from');
const destinationInput = document.querySelector('#destination');
const dateInput = document.querySelector('#date');
const passengersInput = document.querySelector('#passengers');
// console.log(dateInput.value.trim());
// const d=new date();
// var date = dateInput.value.trim();
// var varDate = new Date(date); //dd-mm-YYYY
// var today=d.getFullYear()
// var today = new Date();



form.addEventListener('submit', (event) => {
    event.preventDefault();
    
  // if(varDate <= today) {
  //   alert("Not Possible to book for bus for fast days ....!");
  //   }
  if (frominput.value.trim()=== ''){
    alert('Please enter your location.');
    return;
  }
  // Validation checks
  else if (destinationInput.value.trim() === '') {
    alert('Please enter a destination.');
    return;
  }
  
  else if (dateInput.value.trim() === '') {
    alert('Please enter a date.');
    return;
  }
  
  else if (passengersInput.value.trim() === '') {
    alert('Please select the number of passengers.');
    return;
  }

  else if(frominput.value.trim()=== destinationInput.value.trim()){
      alert('Boarding place and desgtination can not be same .');
    
  }

  // If validation checks pass, create booking
  else{
    const from = frominput.value.trim();
  const destination = destinationInput.value.trim();
  const date = dateInput.value.trim();
  const passengers = passengersInput.value.trim();
  
  alert(`Thanks for Traveling with us!
  Hope to pick you up soon! 
  You have booked a trip to ${destination} from ${from} on ${date} for ${passengers} passengers 
   Do payment Now to confirm it.`);
   
}
});