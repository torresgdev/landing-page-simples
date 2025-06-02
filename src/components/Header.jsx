import React, {useState} from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    
    return (
        <header>
            <div>
                <h1>
                    Minha Marca
                </h1>
            </div>
        </header>
    )
}

export default Header;