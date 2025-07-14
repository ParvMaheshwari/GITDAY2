import React from 'react';

const HerbalRemediesGuide = () => {
  return (
    <div className="font-sans bg-green-300 text-green-900 scroll-smooth">
      {/* Header */}
      <header className="bg-green-900 text-white text-center py-8 relative">
        <img 
          src="/images/ayursage.jpg" 
          alt="AyurSage logo" 
          className="absolute top-2 left-2 w-32 h-16 bg-white rounded shadow-lg z-50"
        />
        <h1 className="text-4xl font-bold mb-2">ArogyaSutra</h1>
        <p className="text-lg">Natural Solutions for Common Health Problems</p>
      </header>

      {/* Navigation */}
      <nav className="bg-green-700 px-4 py-3" role="navigation" aria-label="Main navigation">
        <div className="flex space-x-8">
          <a href="#digestive" className="text-white font-bold hover:text-green-400 transition-colors">
            Digestive Health
          </a>
          <a href="#stress" className="text-white font-bold hover:text-green-400 transition-colors">
            Stress Relief
          </a>
          <a href="#immune" className="text-white font-bold hover:text-green-400 transition-colors">
            Immune Support
          </a>
          <a href="#skin" className="text-white font-bold hover:text-green-400 transition-colors">
            Skin Health
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-8" role="main">
        {/* Digestive Health Section */}
        <section id="digestive" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-600 pb-2 border-b-2 border-green-600 mb-6">
            Digestive Health Remedies
          </h2>
          
          {/* Peppermint Tea */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Peppermint Tea</h3>
            <img 
              src="/images/peppermint tea.jpg" 
              alt="Peppermint Tea" 
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="leading-relaxed mb-2">
              <strong>Plant:</strong> Peppermint (Mentha piperita) – Fresh or dried leaves are widely available in grocery stores or can be grown in pots.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Benefits:</strong> Soothes indigestion, reduces bloating, and relieves stomach cramps.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Preparation:</strong><br />
              → Take 1-2 teaspoons of dried peppermint leaves or 5-6 fresh leaves.<br />
              → Steep in 1 cup of hot water for 10 minutes.<br />
              → Strain and drink 1-2 times daily after meals.
            </p>
            <div className="max-w-2xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg video-container">
              <video controls className="w-full h-auto">
                <source src="/images/video/peppermint tea video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="leading-relaxed">
              <strong>Availability:</strong> Peppermint is sold in supermarkets as dried leaves or tea bags, or you can grow it easily in a sunny spot.
            </p>
          </div>

          {/* Ginger Infusion */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Ginger Infusion</h3>
            <img 
              src="/images/ginger infusion.jpg" 
              alt="Ginger Infusion Tea" 
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="leading-relaxed mb-2">
              <strong>Plant:</strong> Ginger (Zingiber officinale) – Fresh ginger root is available in most grocery stores.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Benefits:</strong> Eases nausea, improves digestion, and reduces gas.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Preparation:</strong><br />
              → Slice or grate a 1-inch piece of fresh ginger.<br />
              → Boil in 2 cups of water for 10-15 minutes.<br />
              → Strain, add a teaspoon of honey (optional), and sip warm.<br />
              → Use 1-2 times daily as needed.
            </p>
            <div className="max-w-2xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg video-container">
              <video controls className="w-full h-auto">
                <source src="/images/video/Soothing_Ginger_Tea_Recipe-VEED.mp4_1752256170281.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="leading-relaxed">
              <strong>Availability:</strong> Ginger is inexpensive and found in any grocery store or market.
            </p>
          </div>
        </section>

        {/* Stress Relief Section */}
        <section id="stress" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-600 pb-2 border-b-2 border-green-600 mb-6">
            Stress Relief Remedies
          </h2>
          
          {/* Chamomile Tea */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Chamomile Tea</h3>
            <img 
              src="/images/Chamomile Tea.jpg" 
              alt="Chamomile Tea" 
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="leading-relaxed mb-2">
              <strong>Plant:</strong> Chamomile (Matricaria chamomilla) – Dried flowers are available in stores, or you can grow chamomile in a garden.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Benefits:</strong> Calms nerves, reduces anxiety, and promotes sleep.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Preparation:</strong><br />
              → Steep 1 tablespoon of dried chamomile flowers (or 1 tea bag) in 1 cup of hot water for 5-10 minutes.<br />
              → Strain and drink before bedtime or during stressful moments.
            </p>
            <div className="max-w-2xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg video-container">
              <video controls className="w-full h-auto">
                <source src="/images/video/Chamomile Tea.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="leading-relaxed">
              <strong>Availability:</strong> Chamomile tea bags or loose flowers are sold in supermarkets, health stores, or online.
            </p>
          </div>

          {/* Tulsi (Holy Basil) Tea */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Tulsi (Holy Basil) Tea</h3>
            <img 
              src="/images/Tulsi (Holy Basil) Tea.jpg" 
              alt="Tulsi (Holy Basil) Tea" 
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="leading-relaxed mb-2">
              <strong>Plant:</strong> Tulsi (Ocimum sanctum) – Common in many households, especially in India, and available as fresh or dried leaves.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Benefits:</strong> Reduces stress, improves mood, and supports mental clarity.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Preparation:</strong><br />
              → Take 8-10 fresh tulsi leaves or 1 teaspoon of dried leaves.<br />
              → Steep in 1 cup of hot water for 5-7 minutes.<br />
              → Strain and drink 1-2 times daily.
            </p>
            <div className="max-w-2xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg video-container">
              <video controls className="w-full h-auto">
                <source src="/images/video/Tulsi (Holy Basil) Tea.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="leading-relaxed">
              <strong>Availability:</strong> Tulsi plants are easy to grow at home or found in local markets.
            </p>
          </div>
        </section>

        {/* Immune Support Section */}
        <section id="immune" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-600 pb-2 border-b-2 border-green-600 mb-6">
            Immune Support Remedies
          </h2>
          
          {/* Turmeric Milk */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Turmeric Milk</h3>
            <img 
              src="/images/Turmeric Milk.jpg" 
              alt="Turmeric Milk" 
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="leading-relaxed mb-2">
              <strong>Plant:</strong> Turmeric (Curcuma longa) – Fresh or powdered turmeric is widely available in grocery stores.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Benefits:</strong> Boosts immunity due to its anti-inflammatory and antioxidant properties.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Preparation:</strong><br />
              → Mix ½ teaspoon of turmeric powder (or 1-inch grated fresh turmeric) in 1 cup of warm milk (dairy or plant-based).<br />
              → Add a pinch of black pepper to enhance absorption and a teaspoon of honey for taste (optional).<br />
              → Drink once daily, especially during cold season.
            </p>
            <div className="max-w-2xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg video-container">
              <video controls className="w-full h-auto">
                <source src="/images/video/Turmeric Milk.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="leading-relaxed">
              <strong>Availability:</strong> Turmeric is a kitchen staple in many households and easily found in stores.
            </p>
          </div>

          {/* Garlic Infusion */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Garlic Infusion</h3>
            <img 
              src="/images/garlic infusion.jpg" 
              alt="Garlic Infusion" 
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="leading-relaxed mb-2">
              <strong>Plant:</strong> Garlic (Allium sativum) – Found in every grocery store or kitchen.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Benefits:</strong> Supports immune function and fights colds due to its antimicrobial properties.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Preparation:</strong><br />
              → Crush 1-2 garlic cloves and let them sit for 10 minutes to activate allicin.<br />
              → Boil in 1 cup of water for 5 minutes, strain, and sip warm.<br />
              → Alternatively, mix raw crushed garlic with honey and take ½ teaspoon daily.
            </p>
            <div className="max-w-2xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg video-container">
              <video controls className="w-full h-auto">
                <source src="/images/video/Garlic Infusion.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="leading-relaxed">
              <strong>Availability:</strong> Garlic is inexpensive and universally available.
            </p>
          </div>
        </section>

        {/* Skin Health Section */}
        <section id="skin" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-600 pb-2 border-b-2 border-green-600 mb-6">
            Skin Health Remedies
          </h2>
          
          {/* Aloe Vera Gel */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Aloe Vera Gel</h3>
            <img 
              src="/images/Aloe Vera Gel.jpg" 
              alt="Aloe Vera Gel" 
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="leading-relaxed mb-2">
              <strong>Plant:</strong> Aloe vera – Grown in pots or gardens, or store-bought gel is widely available.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Benefits:</strong> Soothes burns, heals minor cuts, and moisturizes skin.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Preparation:</strong><br />
              → Cut a fresh aloe leaf, scoop out the gel, and apply directly to affected areas (e.g., sunburns, acne, or dry skin).<br />
              → For store-bought gel, ensure it's 100% pure aloe vera and apply as needed.
            </p>
            <div className="max-w-2xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg video-container">
              <video controls className="w-full h-auto">
                <source src="/images/video/aloe vera.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="leading-relaxed">
              <strong>Availability:</strong> Aloe plants are low-maintenance and common in households; pure aloe gel is sold in pharmacies or supermarkets.
            </p>
          </div>

          {/* Calendula Infused Oil */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Calendula Infused Oil</h3>
            <img 
              src="/images/Calendula Infused Oil.png" 
              alt="Calendula Infused Oil" 
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <p className="leading-relaxed mb-2">
              <strong>Plant:</strong> Calendula (Calendula officinalis) – Dried flowers are available in health stores, or you can grow calendula in a garden.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Benefits:</strong> Heals minor wounds, reduces skin inflammation, and soothes rashes.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Preparation:</strong><br />
              → Place ½ cup of dried calendula flowers in a jar with 1 cup of carrier oil (e.g., olive or coconut oil).<br />
              → Let it sit in a warm, sunny spot for 2-4 weeks, shaking daily.<br />
              → Strain and apply the oil to irritated or dry skin.
            </p>
            <div className="max-w-2xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg video-container">
              <video controls className="w-full h-auto">
                <source src="/images/video/healing oil.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="leading-relaxed">
              <strong>Availability:</strong> Calendula flowers are available in herbal stores or online; plants are easy to grow in sunny areas.
            </p>
          </div>
        </section>

        {/* Notes Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Notes</h3>
          <p className="leading-relaxed">
            <strong>→ Safety:</strong> Always consult a healthcare professional before using herbal remedies, especially if pregnant, nursing, or on medication. Some herbs (e.g., peppermint, garlic) may interact with certain conditions or drugs.<br />
            <strong>→ Sourcing:</strong> Most of these plants (ginger, garlic, turmeric) are kitchen staples. Others like peppermint, tulsi, and aloe can be grown at home or purchased affordably.<br />
            <strong>→ Storage:</strong> Store fresh herbs in a cool, dry place or refrigerate (e.g., ginger, aloe). Dried herbs like chamomile or calendula should be kept in airtight containers away from light.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-green-300 text-center py-4">
        <p>&copy; 2025 Herbal Remedies Guide. Always consult a healthcare professional before using herbal remedies.</p>
      </footer>
    </div>
  );
};

export default HerbalRemediesGuide;