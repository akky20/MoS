// Function to transform stresses from Cartesian to rotated coordinates
function transformation(){


function stressTransformation(sigmaX, sigmaY, tauXY, theta) {
    // Convert angle to radians
    
    const thetaRad = (Math.PI / 180) * theta;
  
    // Calculate trigonometric values
    const cosTheta = Math.cos(thetaRad);
    const sinTheta = Math.sin(thetaRad);
  
    // Stress transformation equations
    const sigmaXPrime = (sigmaX * cosTheta * cosTheta + sigmaY * sinTheta * sinTheta + 2 * tauXY * cosTheta * sinTheta).toFixed(2);
    const sigmaYPrime = (sigmaX * sinTheta * sinTheta + sigmaY * cosTheta * cosTheta - 2 * tauXY * cosTheta * sinTheta).toFixed(2);
    const tauXYPrime = ((sigmaY - sigmaX) * cosTheta * sinTheta + tauXY * (cosTheta * cosTheta - sinTheta * sinTheta)).toFixed(2);
  
    // Return the transformed stresses
    return { sigmaXPrime, sigmaYPrime, tauXYPrime };

    
  }
  
  // Example usage
  const sigmaX = parseFloat(document.getElementById('stress-x').value);
  const sigmaY = parseFloat(document.getElementById('stress-y').value);  
  const tauXY = parseFloat(document.getElementById('shear-stress').value);   
  const theta = parseFloat(document.getElementById('theta').value);
  const transformedStresses = stressTransformation(sigmaX, sigmaY, tauXY, theta);
  
  console.log('Transformed Stresses:', transformedStresses);
  const outputElement = document.getElementById('output-container');

  
      outputElement.innerHTML = `σ x' : ${transformedStresses.sigmaXPrime}<br>
      σ y' : ${transformedStresses.sigmaYPrime}<br>
      τ xy' : ${transformedStresses.tauXYPrime}`;
  

}
                    