function scrapeData() {
  // Retrieve Date value
  const date = document.getElementById('SleepDate') ? document.getElementById('SleepDate').innerText.trim() : 'N/A';

  // Retrieve AHI value
  const ahi = document.getElementById('Ahi') ? document.getElementById('Ahi').innerText.trim() : 'N/A';

  // Retrieve Total Clear Airway Apneas
  const clearAirway = document.getElementById('ClearAirwayIndex') ? document.getElementById('ClearAirwayIndex').innerText.trim() : 'N/A';

  // Retrieve Total Obstructive Apneas
  const obstructive = document.getElementById('ObstructedAirwayIndex') ? document.getElementById('ObstructedAirwayIndex').innerText.trim() : 'N/A';

  // Retrieve Total Hypopneas
  const hypopneas = document.getElementById('HypopneaIndex') ? document.getElementById('HypopneaIndex').innerText.trim() : 'N/A';

  // Retrieve Usage value (ignoring the unit)
  const usage = document.getElementById('Usage') ? document.getElementById('Usage').innerText.trim() : 'N/A';

  // Format the result as tab-separated values (suitable for spreadsheets)
  const result = [date, ahi, clearAirway, obstructive, hypopneas, usage].join('\t');

  copyToClipboard(result);
  alert('Data copied to clipboard!');
}

function copyToClipboard(text) {
  const temp = document.createElement('textarea');
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
}

// Execute the scraping when the content script runs.
scrapeData();