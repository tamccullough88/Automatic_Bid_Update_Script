const mockRows = {
    data: [
      {
        CampaignName: "Campaign 1",
        AdGroupName: "Ad Group 1",
        Criteria: "keyword1",
        KeywordMatchType: "Broad",
        CpcBid: "1.00",
        Clicks: 0,
        Cost: "0",
        Impressions: 1000,
        Ctr: "0",
        AverageCpc: "0",
        AbsoluteTopImpressionPercentage: "0.60",
        Conversions: 0,
        CostPerConversion: "0",
        ConversionRate: "0",
        ConversionValue: "0",
      },
      {
        CampaignName: "Campaign 2",
        AdGroupName: "Ad Group 2",
        Criteria: "keyword2",
        KeywordMatchType: "Exact",
        CpcBid: "1.10",
        Clicks: 10,
        Cost: "50.00",
        Impressions: 500,
        Ctr: "0.04",
        AverageCpc: "2.00",
        AbsoluteTopImpressionPercentage: "0.65",
        Conversions: 3,
        CostPerConversion: "76",
        ConversionRate: "0.01",
        ConversionValue: "300",
      },
      {
        CampaignName: "Campaign 3",
        AdGroupName: "Ad Group 3",
        Criteria: "keyword3",
        KeywordMatchType: "Phrase",
        CpcBid: "1.50",
        Clicks: 20,
        Cost: "30.00",
        Impressions: 200,
        Ctr: "0.10",
        AverageCpc: "1.50",
        AbsoluteTopImpressionPercentage: "0.75",
        Conversions: 5,
        CostPerConversion: "6.00",
        ConversionRate: "0.25",
        ConversionValue: "350.00",
      },
    ],
    currentIndex: 0,
    hasNext: function () {
      return this.currentIndex < this.data.length;
    },
    next: function () {
      return this.data[this.currentIndex++];
    },
  };
  
  const mockSheet = {
    rows: [],
    appendRow: function (row) {
      this.rows.push(row);
    },
    clear: function () {
      this.rows = [];
    },
  };
  
  module.exports = { mockRows, mockSheet };
  