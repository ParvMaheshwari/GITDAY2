import React from 'react';
import Remedy from './Remedy';

const RemedySection = ({ id, title, remedies }) => {
  return (
    <div id={id} className="bg-white mb-8 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-600 border-b-2 border-green-600 pb-2 mb-6">
        {title}
      </h2>
      <div className="space-y-8">
        {remedies.map((remedy) => (
          <Remedy key={remedy.id} {...remedy} />
        ))}
      </div>
    </div>
  );
};

export default RemedySection;