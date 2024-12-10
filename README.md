# Google Ads CPC Bid Adjustment Script

This repository contains scripts for automating bid adjustments in Google Ads based on performance metrics. This script retrieves keyword performance data from Google Ads, evaluates key performance metrics, and adjusts Max CPC (Cost-Per-Click) bids based on pre-defined criteria, and can include mock data for testing purposes.. The processed data, including adjusted bids, is exported to a specified Google Sheet for analysis and reporting. 

## Features

- **Dynamic Bid Adjustment**:  
  Automatically increases or decreases CPC bids based on performance metrics:
  - **Increase Bid**: For high-performing keywords.
  - **Decrease Bid**: For underperforming keywords.
- **Comprehensive Data Export**:  
  Outputs detailed keyword performance metrics to a Google Sheet, including adjusted bids and ROAS (Return on Ad Spend).
- **Customizable Criteria**:  
  Easily modify thresholds for bid adjustments to suit specific campaign goals.
- **Automated Workflow**:  
  Clears old data, adds headers, and appends updated rows for seamless integration with existing workflows.

## Requirements

- Google Ads account with active campaigns.
- Access to the Google Ads Scripts editor.
- A Google Sheet with edit permissions.

## Installation

1. **Set Up the Google Sheet**:
   - Create a Google Sheet.
   - Note its URL and the name of the target sheet.

2. **Insert the Script**:
   - Go to **Tools > Scripts > New Script** in your Google Ads account.
   - Paste the script into the editor.

3. **Replace Placeholders**:
   - Update the `SPREADSHEET_URL` with your Google Sheet URL.
   - Update `SHEET_NAME` with the name of the target sheet.

4. **Authorize the Script**:
   - Run the script for the first time and follow the prompts to grant permissions.

## Usage

1. Run the script via the Google Ads Scripts interface.
2. Check the specified Google Sheet for updated keyword performance data and adjusted CPC bids.

## Data Fields

The script exports the following fields to the Google Sheet:
- Campaign Name
- Ad Group Name
- Keyword
- Criterion Type
- New Max CPC (adjusted)
- Current Max CPC
- Clicks
- Cost
- Impressions
- CTR
- Average CPC
- Absolute Top Impression %
- Conversions
- Cost per Conversion
- Conversion Rate
- Conversion Value
- ROAS (Return on Ad Spend)

## Bid Adjustment Logic

- **Increase Bid**:  
  - No clicks: Increase by $0.25.
  - High performance: Increase by 15% if:
    - Conversion rate > 2%
    - Cost per conversion < $75
    - CTR > 3%
    - Absolute top impression % > 50%
    - ROAS > 4

- **Decrease Bid**:  
  - Poor performance: Decrease by 15% if:
    - Conversion rate < 2%
    - Cost per conversion > $75
    - CTR < 2%
    - Absolute top impression % < 30%
    - ROAS < 3

## Troubleshooting

- Ensure the sheet URL and name are correct.
- Verify campaign data meets the criteria for export (e.g., impressions > 0).
- Check Google Ads account permissions for accessing reports.


 

## File Structure

### 1. [.gitignore](https://github.com/tamccullough88/Automatic_Bid_Update_Script/blob/main/.gitignore)
- Specifies files and directories to be ignored by Git, helping to keep the repository clean and free from unnecessary files.

### 2. [Actual_Bid_Export_Script.js](https://github.com/tamccullough88/Automatic_Bid_Update_Script/blob/main/Actual_Bid_Export_Script.js)
- Script for exporting actual bid data, designed to work alongside the main bid adjustment logic.

### 3. [Mock_Data.js](https://github.com/tamccullough88/Automatic_Bid_Update_Script/blob/main/Mock_Data.js)
- Contains mock data for testing purposes, ensuring that the bid adjustment logic can be tested without accessing live data.

### 4. [google_ads_script.test.js](https://github.com/tamccullough88/Automatic_Bid_Update_Script/blob/main/google_ads_script.test.js)
- A test suite for validating the functionality of the Google Ads scripts, ensuring the correctness of bid adjustments.

### 5. [package.json](https://github.com/tamccullough88/Automatic_Bid_Update_Script/blob/main/package.json)
- Manages project dependencies and metadata for Node.js, facilitating the installation of required libraries for testing and development.

### 6. [test_google_ads_script.js](https://github.com/tamccullough88/Automatic_Bid_Update_Script/blob/main/test_google_ads_script.js)
- Additional test file for verifying the behavior of the Google Ads scripts, covering various scenarios.

## Usage Instructions

1. Clone the repository to your local environment.
2. Use `Mock_Data.js` in conjunction with the test_google_ads_script.js for testing purposes to simulate bid adjustments.
3. Run the test files to validate functionality.
4. Integrate the actual bid exporting logic as needed.

For more detailed information, refer to the comments and documentation within each script.

## License

This project is licensed under the MIT License.
