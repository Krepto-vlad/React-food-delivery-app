import { ShoppingList } from './ShoppingList.tsx'



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
           }}>list of products


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


