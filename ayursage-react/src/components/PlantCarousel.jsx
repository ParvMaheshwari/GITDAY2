import React from 'react'

const PlantCarousel = () => {
  const plants = [
    {
      id: 1,
      name: "Ashwagandha",
      image: "/Ashwagandha-dried-ro.png",
      description: "Boosts immunity & relieves stress"
    },
    {
      id: 2,
      name: "Tulsi",
      image: "/holy-basil-or-tulsi.png",
      description: "Respiratory support & antibacterial"
    }
  ]

  return (
    <section className="p-8 bg-green-100">
      <h3 className="text-2xl font-bold text-center mb-8">Featured Medicinal Plants</h3>
      <div className="flex gap-8 flex-wrap justify-center">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-auto rounded mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">{plant.name}</h4>
            <p className="text-sm text-gray-700">{plant.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlantCarousel