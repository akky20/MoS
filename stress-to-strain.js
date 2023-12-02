function calculateStrain() {
    // Get input values
    const sxx = parseFloat(document.getElementById('stress-x').value) || 0;
    const syy = parseFloat(document.getElementById('stress-y').value) || 0;
    const szz = parseFloat(document.getElementById('stress-z').value) || 0;
    const youngsModulus = parseFloat(document.getElementById('youngs-modulus').value) || 1; // Default to 1 to avoid division by zero
    const poissonsRatio = parseFloat(document.getElementById('poissons-ratio').value) || 0;

    // Strain calculation function
    function calculateStrain(sxx, syy, szz, youngsModulus, poissonsRatio) {
      const Exx = (sxx / youngsModulus) - (poissonsRatio * syy / youngsModulus) - (poissonsRatio * szz / youngsModulus);
      const Eyy = -(poissonsRatio * sxx / youngsModulus) + (syy / youngsModulus) - (poissonsRatio * szz / youngsModulus);
      const Ezz = -(poissonsRatio * sxx / youngsModulus) - (poissonsRatio * syy / youngsModulus) + (szz / youngsModulus);

      return { Exx, Eyy, Ezz };
    }

    // Calculate strain
    const calculatedStrain = calculateStrain(sxx, syy, szz, youngsModulus, poissonsRatio);

    // Display the results on the webpage
    const strainOutputElement = document.getElementById('output-container');
    strainOutputElement.innerHTML = `Exx : ${calculatedStrain.Exx.toFixed(2)}<br>
                                     Eyy : ${calculatedStrain.Eyy.toFixed(2)}<br>
                                     Ezz : ${calculatedStrain.Ezz.toFixed(2)}`;
}