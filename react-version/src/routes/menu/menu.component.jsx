import { useContext, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import DishCard from '../../components/dish-card/dish-card.component';

import { DishesContext } from '../../contexts/dishes.context';
import './menu.styles.scss';

const Menu = () => {
    const { dishesMap } = useContext(DishesContext);

    return(
        <div className='menu-page' >
            {Object.keys(dishesMap).map(title => (
                    <Fragment key={title}>
                        <h2 className='category-title' >{title}</h2>
                        <div className='menu-container'>
                        
                        {dishesMap[title].map((dish) => (
                            <DishCard key={dish.id} dish={dish} />
                        ))}
                        </div>
                    </Fragment>
                ))};
        </div>
 );
};

export default Menu;