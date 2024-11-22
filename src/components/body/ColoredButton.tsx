import { useState } from 'react';

export default function ColoredButton({ buttonText}: { buttonText: string}) {

    const[isClicked, setIsClicked] = useState(false);

    const handleClick= () => {
        setIsClicked(!isClicked);
    }

    return (
        <button
            onClick = {handleClick}
            style={{
                backgroundColor: isClicked ? '#35B8BE' : 'white', 
                color: isClicked ? 'white' : 'black',               
                padding: '16px 40px',
                borderRadius: '6px',
                borderColor: '#61728333', 
                cursor: 'pointer',
                textAlign: 'center' }}
        >
        {buttonText}
        </button>
    )
}