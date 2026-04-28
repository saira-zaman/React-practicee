import React from 'react'

const MenuCard = ({menuData,addToCart}) => {
    console.log(menuData);
  return (
    <>
    <section className="main-card--container">
    {menuData.map((curElem) => {
      const {id, name,category, image, description} = curElem;
     return (
            <>
            <span className="card-id">{id}</span>
                <div className="card-container" key ={id}>
                   <div className='card'>
                    <div className="card-body">
                      <span className="card-number card-circle subtle">
                        
                      </span>
                       <span className="card-author subtle">{id}</span>
                        <h4 className="card-title">{name}</h4>
                         <span className="card-description subtle">
                              {description}
                           </span>
        
  
                         <div className="card-read">Read</div>
                 </div>
        
                 <img src={image} alt={name} className="card-media" /> 
                 <div className="card-buttons">
  
  <button 
  className="order-btn"
  onClick={() => alert(`${name} ordered!`)}
>
  Order Now
</button>

  <button
    className="add-btn"
    onClick={() => addToCart(curElem)}
  >
    Add to Cart
  </button>
</div>                                       
                     </div>
                      </div>
          </>
       )
     }) }
        </section>
   </>
  )
}

export default MenuCard
