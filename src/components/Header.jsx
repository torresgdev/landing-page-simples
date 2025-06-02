import React, {useState} from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl front-bold ">
                    Minha Marca
                </h1>

                <div className="md:hidden">
                    <button onClick={toggleMenu}
                    className="text-white focus:outline-none"
                    aria-label={isOpen ? "Fechar menu": "Abrir menu"}>
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        ): (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#hero" className="hover:text-gray-200 transition-colors duration-200">Início</a>
                    <a href="#features" className="hover:text-gray-200 transition-colors duration-200">Recursos</a>
                    <a href="#about" className="hover:text-gray-200 transition-colors duration-200">Sobre</a>
                    <a href="#contact" className="hover:text-gray-200 transition-colors duration-200">Contato</a>
                </nav>
            </div>

            {isOpen && (
                <nav className="md:hidden bg-purple-700 mt-2 p-4 rounded-md shadow-lg">
                    <ul>
                        <li><a href="#hero" className="block px-3 py-2 rounded-md hover:bg-purple-600 transition-colors duration-200" onClick={toggleMenu}>Início</a></li>
                        <li><a href="#features" className="block px-3 py-2 rounded-md hover:bg-purple-600 transition-colors duration-200" onClick={toggleMenu}>Recursos</a></li>
                        <li><a href="#about" className="block px-3 py-2 rounded-md hover:bg-purple-600 transition-colors duration-200" onClick={toggleMenu}>Sobre</a></li>
                        <li><a href="#contact" className="block px-3 py-2 rounded-md hover:bg-purple-600 transition-colors duration-200" onClick={toggleMenu}>Contato</a></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header;