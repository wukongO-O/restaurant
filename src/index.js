import homepage from "./home";
import menus from "./menu";
import contact from './contact';
import './style.css';
import giticon from './img/github.svg';

const header = document.createElement('div');
header.classList.add('header');
content.setAttribute('id', 'content');
content.appendChild(header);

const createTab = (tabName, tabModule) => {
    const tab = document.createElement('button');
    tab.classList.add('navTab');
    tab.setAttribute('id', tabName);
    tab.textContent = tabName;
    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent');
    tabContent.setAttribute('id', `${tabName+2}`);
    header.appendChild(tab);
    content.appendChild(tabContent);
    tabModule();
};

createTab('Home', homepage);
const btn1 = document.querySelector('#Home');
btn1.classList.add('active');
const homeInfo = document.querySelector('#Home2');
const homeMsg = document.querySelector('.home');
homeInfo.appendChild(homeMsg);

createTab('Menu', menus);
const menuInfo = document.querySelector('#Menu2');
const fullMenus = document.querySelector('.menus');
menuInfo.appendChild(fullMenus);

createTab('Contact', contact);
const contactInfo = document.querySelector('#Contact2');
const fullContact = document.querySelector('.contact');
contactInfo.appendChild(fullContact);

const displayArea = document.createElement('div');
displayArea.classList.add('display');
content.appendChild(displayArea);

displayArea.appendChild(homeInfo);
displayArea.appendChild(menuInfo);
displayArea.appendChild(contactInfo);

const footer = document.createElement('footer');
const copyright = document.createElement('div');
copyright.textContent = 'Created by Shenglan L';
const gitlink = document.createElement('a');
gitlink.setAttribute('href', 'https://github.com/wukongO-O/restaurant.git');
const gitlogo = document.createElement('img');
gitlogo.setAttribute('src', giticon);
copyright.appendChild(gitlink);
gitlink.appendChild(gitlogo);

const photocredits =document.createElement('div');
photocredits.textContent = 'Photos by Unsplash';
content.appendChild(footer);
footer.appendChild(copyright);
footer.appendChild(photocredits);

function navigation(e) {
    const allTabContent = document.getElementsByClassName('tabContent');
    for (let i=0; i<allTabContent.length; i++) {
        allTabContent[i].style.display = 'none';
    };
    const allTabs = document.getElementsByClassName('navTab');
    for (let i=0; i <allTabs.length; i++) {
        allTabs[i].className = allTabs[i].className.replace(' active', '');
    }

    if (e.currentTarget == document.querySelector('#Home')) {
        homeInfo.style.display = 'block';
    } else if (e.currentTarget == document.querySelector('#Menu')){
        menuInfo.style.display = 'block';
    } else if (e.currentTarget == document.querySelector('#Contact')) {
        contactInfo.style.display = 'block';
    }; 

    e.currentTarget.className += ' active';
}

const allBtns = document.querySelectorAll('.navTab');
allBtns.forEach(btn => {
    btn.addEventListener('click', navigation)
});

document.querySelector('.active').click();