import React from "react";

function About() {
    return (
        <section id="about"
        className="py-16 bg-blue-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                    Quem Somos/ Sobre Nossa Solução
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                    Nossa missão é empoderar pessoas e empresas com ferramentas que realmente fazem a diferença. Acreditamos que a tecnologia deve ser acessível, intuitiva e, acima de tudo, útil. Trabalhamos incansavelmente para entregar uma experiência que você vai adorar.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Com uma equipe apaixonada e focada em inovação, estamos sempre buscando novas formas de aprimorar nossos produtos e superar as expectativas dos nossos usuários. Junte-se a nós nesta jornada!
                </p>
            </div>
        </section>
    )
}

export default About;