import React from "react";

function Hero() {
    return (
        <section id="hero" className="bg-gradient-to-br from-purple-500 to-blue-500 text-white py-20 md:py:32 flex items-center justify-center min-h[60vh]">
            <div className="container mx-auto text-center px-4">
                <h2 className=" text-4xl md:text-5xl lg:text-6xl front-extrabold leading-tight mb-4">
                    Simplifique sua Vida com Nossa Solução Incrível !
                </h2>

                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Descubra como nossa plataforma pode transformar seu dia a dia, tornando tarefas complexas em algo simples e prazeroso.
                </p>

                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-106">
                    Começe Agora
                </button>
            </div>
        </section>
    )
}

export default Hero;