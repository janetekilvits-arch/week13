
const nameSpan = document.querySelector('.first-name-span'); 
const lastNameSpan = document.querySelector('.last-name-span'); 
const ageSpan = document.querySelector('.age-span'); 
const emailSpan = document.querySelector('.email-span'); 

window.onload = () => {
    
    fetch('person.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            nameSpan.textContent = data.first_name;
            lastNameSpan.textContent = data.last_name;
            ageSpan.textContent = data.age;
            emailSpan.textContent = data.email;
        })
        .catch(error => console.error('Viga andmete laadimisel:', error));
};