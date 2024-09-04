
function MyButton() {
    return (
        <button>Im a button</button>
    )
}

const user = {
    name: "Alex",
    imageUrl: 'https://twitter.com/img',
    imageSize: 90,
};


export default function MyApp() {
    return (
        <>
            <h1>{user.name}</h1>
           <pre style={{
            whiteSpace: "pre-wrap"
           }}>jsdkhjsdk
                sda
                fsdfsffsdolfosd
                dfsfpsdfops
                sfsdf


                </pre>
  
            <img
            className= "avatar" src=""
            alt={"photo of" + user.name}
            style={{    
                width: user.imageSize,
                height: user.imageSize,
                marginRight: 100}}
            />
            <MyButton /> 
            <ShoppingList />
        </>
        
    )
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
