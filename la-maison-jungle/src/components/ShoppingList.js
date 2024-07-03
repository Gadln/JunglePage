import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './Plantitem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import '../styles/Plantitem.css'
import '../styles/Cart.css'


function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	function deleteToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount - 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
					<Categories
						categories={categories}
						setActiveCategory={setActiveCategory}
						activeCategory={activeCategory}
					/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => 
				!activeCategory || activeCategory === category ? 
				(
						<div key={id}>
							<PlantItem 
							key={id} 
							cover={cover} 
							name={name} 
							water={water} 
							light={light} 
							price={price}
							addToCart={addToCart}
							deleteToCart={deleteToCart}
							/>
						</div>
					): null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList