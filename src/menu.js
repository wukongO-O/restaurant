let starters, sandw, drinks;
const menuItem = (type, name, price) => {   
    const description = blurb => {
        const itemName = document.createElement('div');
        const itemPrice = document.createElement('div');
        itemName.textContent = name;
        itemPrice.textContent = price; 
        itemName.appendChild(itemPrice);
        if (type == 'starter') {
            starters.appendChild(itemName);
        } else if (type == 'sandwich') {
            sandw.appendChild(itemName);
        } else {
            drinks.appendChild(itemName);
        }; 
        const itemDes = document.createElement('p');
        itemDes.textContent = blurb;
        itemName.appendChild(itemDes);
    }
    return {description};
};

const menus = function() {
    const menu = document.createElement('div');
    menu.classList.add('menus');
    content.appendChild(menu);

    starters = document.createElement('div');
    starters.classList.add('starters');
    const startersH = document.createElement('div');
    startersH.textContent = 'Starters';
    starters.appendChild(startersH);

    sandw = document.createElement('div');
    sandw.classList.add('sandw');
    const sandwH = document.createElement('div');
    sandwH.textContent = 'Sandwiches';
    sandw.appendChild(sandwH);

    drinks = document.createElement('div');
    drinks.classList.add('drinks');
    const drinksH = document.createElement('div');
    drinksH.textContent = 'Drinks';
    drinks.appendChild(drinksH);

    menu.appendChild(starters);
    menu.appendChild(sandw);
    menu.appendChild(drinks);
    
    const starter1 = menuItem('starter', 'Honey Brussel Sprouts', '$8');
    starter1.description('Grilled brussel sprouts with sweet and spicy pecans and honey glaze');
    const starter2 = menuItem('starter', 'Soup of the Day', '$8');
    starter2.description('French Onion Soup / Creamy Tomato Soup / Veggie Melody Soup');
    const starter3 = menuItem('starter', 'Spicy Calamari', '$10');
    starter3.description('Crispy calamari served with hot n sweet sauce');
    
    const sandw1 = menuItem('sandwich', 'Big Bird', '$14');
    sandw1.description('Crispy boneless chicken thigh with argugula, pickles, jelapenos cheddar cheese, and hot-honey dressing');
    const sandw2 = menuItem('sandwich', 'Flying Pig', '$14');
    sandw2.description('Juicy pulled pork with secret BBQ sauce, pretzel buns, and coleslaw');  
    const sandw3 = menuItem('sandwich', 'Fish Story', '$14');
    sandw3.description('Battered cod filet served between a brioche roll with lettus and garlic-thyme aioli');   
    const sandw4 = menuItem('sandwich', 'Avo Good Day Burger', '$14');
    sandw4.description('Veggie burger topped with a sunny-side up egg, melted Asiago cheese, and fresh guacamole');
    
    const drink1 = menuItem('drink', 'Oolong Bubble Tea', '$6');
    drink1.description('Sweet creamy mountaintop Oolong served hot or with ice');  
    const drink2 = menuItem('drink', 'Coffee', '$4');
    drink2.description('House blend of medium roasted coffee served hot or with ice'); 
    const drink3 = menuItem('drink', 'Coconut Water', '$4');
    drink3.description('Freshly picked from the tree!');
    const drink4 = menuItem('drink', 'Gin Gin Mule', '$9');
    drink4.description('Bubbly, refreshing mix of gin, ginger beer, lime, mint, and syrup');
};

export default menus;