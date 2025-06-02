import React from "react";

function Footer() {
    return (
        <footer id="contact" className="bg-gray-800 text-white p-8 text-center">
            <div className="container mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                    Entre em Contato
                </h3>

                <p className="mb-2">Email: <a href="mailto:contato@minhamarca.com" className="hover:underline">contato@minhamarca.com</a></p>
                <p className="mb-4">Telefone: (XX) XXXX-XXXX</p>

                <div className="flex justify-center space-x-6 mb-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
            Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                    Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                    LinkedIn
                </a>
        </div>

        {/* Direitos autorais */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Minha Marca. Todos os direitos reservados.
        </p>
            </div>

        </footer>
    )

}

export default Footer;