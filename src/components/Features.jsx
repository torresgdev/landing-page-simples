import React from "react";

const featuresData = [
            {
             id:'1',
             title:'Interface Intuitiva',
             description:'Navegue facilmente com um desing limpo e descomplicado',
             icon:'✨',   
            },
            {
             id:'2',
             title:'Alta performace',
             description:'Experimente velocidade e eficiência sem igual em suas tarefas.',
             icon:'⚡',   
            },
            {
             id:'3',
             title:'Suporte Dedicado',
             description:'Conte com nossa equipe sempre que precisar de ajuda',
             icon:'📞',   
            },
            {
             id:'4',
             title:'Segurança Garantida',
             description:'Seus dados estão protegidos com as mais avançadas tecnologias.',
             icon:'🔒',   
            }
        ];

function Features() {
    return (
        <section id="features" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Porque Escolher Nossa Solução?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map(feature => (
                        <div key={feature.id}
                        className="bg-white shadow-lg p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Features;