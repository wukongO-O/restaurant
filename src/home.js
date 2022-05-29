const homepage = function() {
    const content = document.querySelector('#content');

    const homeContent = document.createElement('div');
    homeContent.classList.add('home');
    content.appendChild(homeContent);

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = 'Busytown Bistro';
    homeContent.appendChild(name);

    const slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.innerHTML = 'Catch a yummy break at <strong>Busytown Bistro</strong>! Best Food in town! <p>Bon appétit!</p>';
    homeContent.appendChild(slogan);
};

export default homepage;