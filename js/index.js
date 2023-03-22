const fullName= "Robin Koirala";
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML= fullName +" "+thisYear;
footer.appendChild(copyright);


const skills = ["Socialworker","Frontend Developer","Mulesoft Developer"];
const skillsSection = document.getElementById('skill');
const skillsList = document.querySelector('#skillslist');
for (i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message");

leave_message.addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const usersName= event.target.usersName;
    const usersEmail= event.target.usersEmail;
    const usersMessage = event.target.usersMessage;
    
    console.log(usersName.value);
    console.log(usersEmail.value);
    console.log(usersMessage.value);

    const messageSection = document.getElementById('messages');
    const messageList = document.querySelector('.messsages');
    const newMessage= document.createElement('li');
    newMessage.innerHTML = usersName.value + " " + usersMessage.value;
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click",(event) => {
        const entry = event.target.parentNode;
        entry.remove();
        if(messageList.childElementCount === 0){
            messageSection.style.display = "none";
        }
    })
    messageSection.style.display = "block";
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    form.reset();


});
