import './ItemListContainer.css'

const ItemListContainer = ({detalle}) => {
    return (
        <>
            <div className='itemlist-container'>
      <h2>{detalle}</h2>
      </div>
        </>
    );
}

export default ItemListContainer;
