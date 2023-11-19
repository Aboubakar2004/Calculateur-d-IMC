import React, { useState } from "react";

function Calculator() {
  const [poid, Setpoid] = useState();
  const [taille, Settaille] = useState();
  const [calcule, Setcalcule] = useState(0);

  function hundleChange(e, setterFunction) {
    const nouvelleValeur = parseFloat(e.target.value) || 0;
    setterFunction(nouvelleValeur);
  }

  function Calcule() {
    const tailleEnMetres = taille / 100;
    Setcalcule(poid / tailleEnMetres ** 2);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Calculateur d'IMC</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Poids (en KG)
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={poid}
          onChange={(e) => hundleChange(e, Setpoid)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Taille (en CM)
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={taille}
          onChange={(e) => hundleChange(e, Settaille)}
        />
      </div>
      <div className="mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={Calcule}
        >
          Calculer
        </button>
      </div>
      <h1 className="text-xl font-semibold mb-2">Résultat :</h1>
      <p className="text-lg font-medium">{calcule.toFixed(1)}</p>
    </div>
  );
}

export default Calculator;
