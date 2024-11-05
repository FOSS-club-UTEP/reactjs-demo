import './Item.css';

const Item = (props) => {
  return (
    <div className='item-container'>
      <h2>{props.item.name}</h2>
      <p>Price: {props.item.price}</p>
      <p>Count: {props.item.count}</p>

      <button onClick={() => props.item.setCount(props.item.count + 1)}>Add another</button>
    </div>
  )
}

export default Item
