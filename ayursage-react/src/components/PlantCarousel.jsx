import React from 'react';

const PlantCarousel = () => {
  const plants = [
    {
      image: "/Ashwagandha dried ro.png",
      name: "Ashwagandha",
      description: "Boosts immunity & relieves stress"
    },
    {
      image: "/holy basil or tulsi .png",
      name: "Tulsi",
      description: "Respiratory support & antibacterial"
    },
    // Add more plants as needed
  ];

  return (
    <section className="py-8 bg-herbal-card">
      <div className="container mx-auto px-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-herbal-green">
          Featured Medicinal Plants
        </h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {plants.map((plant, index) => (
            <div key={index} className="plant-card">
              <img 
                src={plant.image} 
                alt={plant.name}
                className="w-full h-auto rounded-md mb-2"
              />
              <h4 className="text-lg font-semibold mb-2 text-herbal-green">
                {plant.name}
              </h4>
              <p className="text-gray-700 text-sm">
                {plant.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCarousel;