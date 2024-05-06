import CareScale from './CareScale'
import '../styles/Plantitem.css'

function PlantItem({ id, cover, name, isBestSale, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(light, water)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
      {isBestSale && <div className='lmj-sales'>Soldes</div>}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick(light, water) {
	alert(`Cette plante a besoin ${light} ☀️ et ${water} 💧`)
}

export default PlantItem