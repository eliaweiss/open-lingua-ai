import React from 'react';
import { useTranslateExercise } from './context/TranslateExerciseContext';

const TranslateExercise = () => {
  const {
    originalText,
    setOriginalText,
    translatedText,
    setTranslatedText,
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
  } = useTranslateExercise();

  const handleTranslate = () => {
    // Implement translation logic here
    // This could involve calling an API or using a library
    console.log('Translate button clicked');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Translation Exercise</h1>
      
      <div className="mb-4">
        <label className="block mb-2">Source Language:</label>
        <select 
          value={sourceLanguage} 
          onChange={(e) => setSourceLanguage(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Original Text:</label>
        <textarea
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>

      <button 
        onClick={handleTranslate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Translate
      </button>

      <div className="mb-4 mt-4">
        <label className="block mb-2">Target Language:</label>
        <select 
          value={targetLanguage} 
          onChange={(e) => setTargetLanguage(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Translated Text:</label>
        <textarea
          value={translatedText}
          readOnly
          className="w-full p-2 border rounded bg-gray-100"
          rows="4"
        />
      </div>
    </div>
  );
};

export default TranslateExercise;