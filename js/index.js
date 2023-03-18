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
