function transformStresses() {
    // Get input values
    const exx = parseFloat(document.getElementById('strain-x').value) || 0;
    const eyy = parseFloat(document.getElementById('strain-y').value) || 0;
    const ezz = parseFloat(document.getElementById('strain-z').value) || 0;
    const e = parseFloat(document.getElementById('youngs-modulus').value) || 0;
    const v = parseFloat(document.getElementById('poissons-ratio').value) || 0;

    // Stress transformation function
    function stressTransformation(exx, eyy, ezz, v, e) {
  
      const sxx = ((e * (1 - v) * exx) / ((1 + v) * (1 - 2 * v))) +
                  ((e * v * eyy) / ((1 + v) * (1 - 2 * v))) +
                  ((e * v * ezz) / ((1 + v) * (1 - 2 * v)));

      const syy = ((e * (1 - v) * eyy) / ((1 + v) * (1 - 2 * v))) +
                  ((e * v * exx) / ((1 + v) * (1 - 2 * v))) +
                  ((e * v * ezz) / ((1 + v) * (1 - 2 * v)));

      const sxy = ((e * (1 - v) * ezz) / ((1 + v) * (1 - 2 * v))) +
                  ((e * v * eyy) / ((1 + v) * (1 - 2 * v))) +
                  ((e * v * exx) / ((1 + v) * (1 - 2 * v)));

      return { sxx, syy, sxy };
    }

    // Calculate transformed stresses
    const transformedStresses = stressTransformation(exx, eyy, ezz, v, e);
    console.log("r",transformStresses.sxx);
    // Display the results on the webpage
    const outputElement = document.getElementById('output-container');
    outputElement.innerHTML = `σxx : ${transformedStresses.sxx.toFixed(2)}<br>
                               σyy : ${transformedStresses.syy.toFixed(2)}<br>
                               σxy : ${transformedStresses.sxy.toFixed(2)}`;
  }