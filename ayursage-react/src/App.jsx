import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import RemedySection from './components/RemedySection';
import Footer from './components/Footer';

function App() {
  const remedyData = {
    digestive: {
      title: "Digestive Health Remedies",
      remedies: [
        {
          id: "peppermint",
          title: "Peppermint Tea",
          image: "/images/placeholder.svg",
          plant: "Peppermint (Mentha piperita) – Fresh or dried leaves are widely available in grocery stores or can be grown in pots.",
          benefits: "Soothes indigestion, reduces bloating, and relieves stomach cramps.",
          preparation: [
            "Take 1-2 teaspoons of dried peppermint leaves or 5-6 fresh leaves.",
            "Steep in 1 cup of hot water for 10 minutes.",
            "Strain and drink 1-2 times daily after meals."
          ],
          video: "/images/placeholder.svg",
          availability: "Peppermint is sold in supermarkets as dried leaves or tea bags, or you can grow it easily in a sunny spot."
        },
        {
          id: "ginger",
          title: "Ginger Infusion",
          image: "/images/placeholder.svg",
          plant: "Ginger (Zingiber officinale) – Fresh ginger root is available in most grocery stores.",
          benefits: "Eases nausea, improves digestion, and reduces gas.",
          preparation: [
            "Slice or grate a 1-inch piece of fresh ginger.",
            "Boil in 2 cups of water for 10-15 minutes.",
            "Strain, add a teaspoon of honey (optional), and sip warm.",
            "Use 1-2 times daily as needed."
          ],
          video: "/images/placeholder.svg",
          availability: "Ginger is inexpensive and found in any grocery store or market."
        }
      ]
    },
    stress: {
      title: "Stress Relief Remedies",
      remedies: [
        {
          id: "chamomile",
          title: "Chamomile Tea",
          image: "/images/placeholder.svg",
          plant: "Chamomile (Matricaria chamomilla) – Dried flowers are available in stores, or you can grow chamomile in a garden.",
          benefits: "Calms nerves, reduces anxiety, and promotes sleep.",
          preparation: [
            "Steep 1 tablespoon of dried chamomile flowers (or 1 tea bag) in 1 cup of hot water for 5-10 minutes.",
            "Strain and drink before bedtime or during stressful moments."
          ],
          video: "/images/placeholder.svg",
          availability: "Chamomile tea bags or loose flowers are sold in supermarkets, health stores, or online."
        },
        {
          id: "tulsi",
          title: "Tulsi (Holy Basil) Tea",
          image: "/images/placeholder.svg",
          plant: "Tulsi (Ocimum sanctum) – Common in many households, especially in India, and available as fresh or dried leaves.",
          benefits: "Reduces stress, improves mood, and supports mental clarity.",
          preparation: [
            "Take 8-10 fresh tulsi leaves or 1 teaspoon of dried leaves.",
            "Steep in 1 cup of hot water for 5-7 minutes.",
            "Strain and drink 1-2 times daily."
          ],
          video: "/images/placeholder.svg",
          availability: "Tulsi plants are easy to grow at home or found in local markets."
        }
      ]
    },
    immune: {
      title: "Immune Support Remedies",
      remedies: [
        {
          id: "turmeric",
          title: "Turmeric Milk",
          image: "/images/placeholder.svg",
          plant: "Turmeric (Curcuma longa) – Fresh or powdered turmeric is widely available in grocery stores.",
          benefits: "Boosts immunity due to its anti-inflammatory and antioxidant properties.",
          preparation: [
            "Mix ½ teaspoon of turmeric powder (or 1-inch grated fresh turmeric) in 1 cup of warm milk (dairy or plant-based).",
            "Add a pinch of black pepper to enhance absorption and a teaspoon of honey for taste (optional).",
            "Drink once daily, especially during cold season."
          ],
          video: "/images/placeholder.svg",
          availability: "Turmeric is a kitchen staple in many households and easily found in stores."
        },
        {
          id: "garlic",
          title: "Garlic Infusion",
          image: "/images/placeholder.svg",
          plant: "Garlic (Allium sativum) – Found in every grocery store or kitchen.",
          benefits: "Supports immune function and fights colds due to its antimicrobial properties.",
          preparation: [
            "Crush 1-2 garlic cloves and let them sit for 10 minutes to activate allicin.",
            "Boil in 1 cup of water for 5 minutes, strain, and sip warm.",
            "Alternatively, mix raw crushed garlic with honey and take ½ teaspoon daily."
          ],
          video: "/images/placeholder.svg",
          availability: "Garlic is inexpensive and universally available."
        }
      ]
    },
    skin: {
      title: "Skin Health Remedies",
      remedies: [
        {
          id: "aloe",
          title: "Aloe Vera Gel",
          image: "/images/placeholder.svg",
          plant: "Aloe vera – Grown in pots or gardens, or store-bought gel is widely available.",
          benefits: "Soothes burns, heals minor cuts, and moisturizes skin.",
          preparation: [
            "Cut a fresh aloe leaf, scoop out the gel, and apply directly to affected areas (e.g., sunburns, acne, or dry skin).",
            "For store-bought gel, ensure it's 100% pure aloe vera and apply as needed."
          ],
          video: "/images/placeholder.svg",
          availability: "Aloe plants are low-maintenance and common in households; pure aloe gel is sold in pharmacies or supermarkets."
        },
        {
          id: "calendula",
          title: "Calendula Infused Oil",
          image: "/images/placeholder.svg",
          plant: "Calendula (Calendula officinalis) – Dried flowers are available in health stores, or you can grow calendula in a garden.",
          benefits: "Heals minor wounds, reduces skin inflammation, and soothes rashes.",
          preparation: [
            "Place ½ cup of dried calendula flowers in a jar with 1 cup of carrier oil (e.g., olive or coconut oil).",
            "Let it sit in a warm, sunny spot for 2-4 weeks, shaking daily.",
            "Strain and apply the oil to irritated or dry skin."
          ],
          video: "/images/placeholder.svg",
          availability: "Calendula flowers are available in herbal stores or online; plants are easy to grow in sunny areas."
        }
      ]
    }
  };

  const notes = [
    "Safety: Always consult a healthcare professional before using herbal remedies, especially if pregnant, nursing, or on medication. Some herbs (e.g., peppermint, garlic) may interact with certain conditions or drugs.",
    "Sourcing: Most of these plants (ginger, garlic, turmeric) are kitchen staples. Others like peppermint, tulsi, and aloe can be grown at home or purchased affordably.",
    "Storage: Store fresh herbs in a cool, dry place or refrigerate (e.g., ginger, aloe). Dried herbs like chamomile or calendula should be kept in airtight containers away from light."
  ];

  return (
    <div className="min-h-screen bg-green-200">
      <Header />
      <Navigation />
      <div className="max-w-6xl mx-auto px-8 py-8">
        {Object.entries(remedyData).map(([sectionId, sectionData]) => (
          <RemedySection
            key={sectionId}
            id={sectionId}
            title={sectionData.title}
            remedies={sectionData.remedies}
          />
        ))}
        
        {/* Notes Section */}
        <div className="bg-white mb-8 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Notes</h3>
          <div className="space-y-2">
            {notes.map((note, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
