
const CategoryItem = ({ category }) => {
    const { title } = category;
    return (
        <div className="category-container">
            <h2>{title}</h2>
            <div className="category-body-container">
            dishes
            </div>
        </div>
    );
};

export default CategoryItem;