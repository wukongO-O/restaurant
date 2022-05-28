const contact = function() {
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact');
    content.appendChild(contactContent);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursHeader = document.createElement('p');
    hoursHeader.textContent = 'Hours';
    hours.appendChild(hoursHeader);
    const weekdayHours = document.createElement('p');
    weekdayHours.textContent = 'Mon - Fri: 11am - 9pm';
    hours.appendChild(weekdayHours);
    const weekendHours = document.createElement('p');
    weekendHours.textContent = 'Sat - Sun: 10am - 10pm';
    hours.appendChild(weekendHours);
    contactContent.appendChild(hours);

    const add = document.createElement('div');
    add.classList.add('address');
    add.textContent = 'Address: 123 Buzzy Boulevard, Busytown, NY';
    contactContent.appendChild(add);

    const phone = document.createElement('div');
    phone.classList.add('phone');
    phone.textContent = 'Phone: 888-888-8888';
    contactContent.appendChild(phone);
};

export default contact; 