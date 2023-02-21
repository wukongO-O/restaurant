import { useContext } from "react";
import Button from '../button/button.component';
import './dish-card.styles.scss';

const DishCard = ({ dish }) => {
    const { name, price, description } = dish;
    //add cart related stuff later
    return(
        <div className="dish-card-container">
            <div className="dish-header">
                <span className="name">{name}</span>
                <span className="price">$ {price}</span>
            </div>
            <div className="dish-description-container">
                <p className="description">{description}</p>
            </div>
            <div className="add-button-container">
                <Button buttonType='inverted'>
                    Add to cart
                </Button>
            </div>
            
        </div>
    );
};

export default DishCard;