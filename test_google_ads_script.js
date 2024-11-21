const { mockRows, mockSheet } = require('./Mock_Data');

function processRows(rows, sheet) {
    let dataExists = false;
  
    while (rows.hasNext()) {
      dataExists = true;
      const row = rows.next();
  
      let maxCpc = parseFloat(row['CpcBid']);
      const clicks = row['Clicks'];
      const convRate = parseFloat(row['ConversionRate']);
      const costPerConv = parseFloat(row['CostPerConversion']);
      const ctr = parseFloat(row['Ctr']);
      const imprAbsTop = parseFloat(row['AbsoluteTopImpressionPercentage']);
      const conversionValue = parseFloat(row['ConversionValue'].replace(/,/g, ''));
      const cost = parseFloat(row['Cost'].replace(/,/g, ''));
      const roas = cost > 0 ? conversionValue / cost : 0;
  

      if (clicks === 0) {
        maxCpc += 0.25;
      } else if (
        convRate > 0.02 &&
        costPerConv < 75 &&
        ctr > 0.03 &&
        imprAbsTop > 0.5 &&
        roas > 4
      ) {
        maxCpc *= 1.15;
      } else if (
        convRate < 0.02 ||
        costPerConv > 75 ||
        ctr < 0.02 ||
        imprAbsTop < 0.3 ||
        roas < 3
      ) {
        maxCpc *= 0.85;
      }
  
      const updateRow = [
        row['CampaignName'],
        row['AdGroupName'],
        row['Criteria'],
        row['KeywordMatchType'],
        maxCpc.toFixed(2),
        clicks,
        row['Cost'],
        row['Impressions'],
        ctr.toFixed(2),
        row['AverageCpc'],
        imprAbsTop.toFixed(2),
        row['Conversions'],
        row['CostPerConversion'],
        convRate.toFixed(4),
        row['ConversionValue'],
        roas.toFixed(2),
      ];

      sheet.appendRow(updateRow)

    }
  
    return dataExists;
  }

  // Export for testing
  module.exports = { processRows };
  
  // Main execution function
  function main() {
    mockSheet.clear(); // Clear existing mock sheet data
    const dataExists = processRows(mockRows, mockSheet);
  
    if (!dataExists) {
      console.log('No data found for the selected criteria.');
    } else {
      console.log('Data successfully processed and stored in the mock sheet.');
      console.log('Mock Sheet Data:', mockSheet);
    }
  }
  
  // Execute the script
  main();