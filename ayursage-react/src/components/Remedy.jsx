import React from 'react';

const Remedy = ({ title, image, plant, benefits, preparation, video, availability }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
      <h3 className="text-2xl font-bold text-green-700 mb-4">{title}</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img 
            src={image} 
            alt={title} 
            className="w-48 h-48 object-cover rounded-lg shadow-md mb-4"
          />
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Plant:</h4>
              <p className="text-gray-700 leading-relaxed">{plant}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Benefits:</h4>
              <p className="text-gray-700 leading-relaxed">{benefits}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Preparation:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {preparation.map((step, index) => (
                  <li key={index} className="leading-relaxed">{step}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Availability:</h4>
              <p className="text-gray-700 leading-relaxed">{availability}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {video.endsWith('.svg') ? (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500 text-center">Video Placeholder<br/>Add your video file here</p>
                </div>
              ) : (
                <video 
                  controls 
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remedy;