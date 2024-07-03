import CareScale from './CareScale'
import '../styles/Plantitem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price, addToCart, deleteToCart }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<div className='lmj-plant-item-buttons'>
				<button className='lmj-cart-add-button' onClick={(e) => { e.stopPropagation(); deleteToCart(name, price); }}>-</button>
				<button className='lmj-cart-add-button' onClick={(e) => { e.stopPropagation(); addToCart(name, price); }}>+</button>
			</div>
		</li>
	)
}

export default PlantItem
