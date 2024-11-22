import './body.scss';
import ColoredButton from './ColoredButton';
import ProductCard from './ProductCard';

export default function Body () {
    return (
            <div className='menu_wrapper'>
                <p className='title'>Browse our menu</p>
                <p className='menu_description'>Use our menu to place an order online, or 
                    <span style = {{ color: '#35B8BE', cursor: 'pointer' }} title="123-456-7890"> phone </span> 
                    our store to place a pickup order. Fast and fresh food.
                </p>
                <div className="button_wrapper">
                    <ColoredButton buttonText="Desert" />
                    <ColoredButton buttonText="Dinner" />
                    <ColoredButton buttonText="Breakfast" />
                </div>
                <ProductCard />
                <button>See more</button>
            </div>
    )
}
