const mongoose = require('mongoose');

const cspSchema = new mongoose.Schema({
  cspName: {
    type: String,
    trim: true,
  },
  cspActivityType: {
    type: String,
    trim: true,
  },
  cspServiceDescription: {
    type: String,
    trim: true,
  },
  cspCountryDelivery: {
    type: String,
    trim: true,
  },
  cspServiceCommencementDate: {
    type: Date,
    trim: true,
  },
  cspContractLastRenewalDate: {
    type: Date,
    trim: true,
  },
  cspApplicableLaw: {
    type: String,
    trim: true,
  },
  cspContractNextRenewalDate: {
    type: Date,
    trim: true,
  },
  cspType: {
    type: String,
    trim: true,
  },
  cspParties: {
    type: String,
    trim: true,
  },
  cspApprovalEvidence: {
    type: String,
    trim: true,
  },
  cspGovernanceBodyName: {
    type: String,
    trim: true,
  },
  cspSubcontractors: {
    type: String,
    trim: true,
  },
  cspCountryRegister: {
    type: String,
    trim: true,
  },
  cspMaterialOutsource: {
    type: String,
    trim: true,
  },
  cspMaterialAssessmentDate: {
    type: Date,
    trim: true,
  },
  cspTimeCriticalSupport: {
    type: String,
    trim: true,
  },
  cspSubAssessment: {
    type: String,
    trim: true,
  },
  cspAltProvider: {
    type: String,
    trim: true,
  },
  cspLastRiskAssessmentDate: {
    type: Date,
    trim: true,
  },
});

module.exports = mongoose.model('CloudProvider', cspSchema);
