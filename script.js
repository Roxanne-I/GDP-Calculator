function calculateGDP() {
  // Get input values
  const consumption = parseFloat(document.getElementById('consumption').value) || 0;
  const investment = parseFloat(document.getElementById('investment').value) || 0;
  const government = parseFloat(document.getElementById('government').value) || 0;
  const exports = parseFloat(document.getElementById('exports').value) || 0;
  const imports = parseFloat(document.getElementById('imports').value) || 0;
  const gdpDeflator = parseFloat(document.getElementById('gdpDeflator').value) || 1; // Default to 1 if empty

  // Calculate GDP
  const gdp = consumption + investment + government + (exports - imports);

  // Calculate Real GDP (example formula: Real GDP = GDP / GDP Deflator * 100)
  const realGDP = gdp / gdpDeflator * 100;

  // Display results
  document.getElementById('result').innerHTML = `
    Calculated GDP: ${gdp.toFixed(2)}<br>
    Real GDP: ${realGDP.toFixed(2)}
  `;
}
