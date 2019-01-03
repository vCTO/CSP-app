const mongoose = require('mongoose');

const cspSchema = new mongoose.Schema({
  /*
    The name of the application
  */
  appName: {
    type: String,
    trim: true,
    require: [true, 'An application name is required.'],
  },
  /*
    The name of the application owner or contact
  */
  appContactName: {
    type: String,
    trim: true,
    require: [true, 'An application contact name is required.'],
  },
  /*
    The email address for the application owner
  */
  appContactEmail: {
    type: String,
    trim: true,
    require: [true, 'An application contact email is required.'],
  },
  /*
    The name of the Domain or CoE that the application supports
 */
  appDomain: {
    type: String,
    trim: true,
    require: [true, 'The name of the Domain or CoE the application supports is required.'],
  },
  /*
    The name of the sub-Domain or Platform the application supports - optional
  */
  appPlatform: {
    type: String,
    trim: true,
    require: false,
  },
  /*
    The following fields are associated with the EBA Recommendations
    1. Has the application outsourcing been assessed as material
  */
  appMateriality: {
    type: String,
    trim: true,
    require: [true, 'Materiality assessment is required.'],
  },
  /*
    1.a criticality and inherent risk profile of the activities to be outsourced
  */
  appRiskProfile: {
    type: String,
    trim: true,
    require: [true, 'Risk profile of activities is required.'],
  },
  /*
    1.b the direct operational impact of outages and related legal and reputational risks
  */
  appOpImpact: {
    type: String,
    trim: true,
    require: [true, 'Operational impact of outage is required.'],
  },
  /*
    1.c the impact of disruption of the activity on the institution's revenue prospects
  */
  appRevImpact: {
    type: String,
    trim: true,
    require: [true, 'Revenue impact of outage is required even if nil.'],
  },
  /*
    1.d the potential impact that a confidentiality breach or failure of data integrity
    could have on the institution and its customers
  */
  appConfidentialityImpact: {
    type: String,
    trim: true,
    require: [true, 'Confidentiality breach or failure of data integrity impact is required.'],
  },
  /*
    2.a the name of the cloud service provider and the name of its parent company (optional)
  */
  cspName: {
    type: String,
    trim: true,
    require: [true, 'Name of service provider is required.'],
  },
  cspParentName: { // optional
    type: String,
    trim: true,
  },
  /*
    2.b a description of the activities and data to be outsourced
  */
  cspServiceDescription: {
    type: String,
    trim: true,
    require: [true, 'Description of the activities and data to be outsourced is required.'],
  },
  /*
    2.c the country or countries where the service is to be performed
  */
  cspCountryDelivery: {
    type: Array,
    trim: true,
    require: [true, 'Country(ies) where services to be performed is required.'],
  },
  /*
    2.d the service commencement date
  */
  cspServiceCommencementDate: {
    type: Date,
    trim: true,
    require: [true, 'Service commencement date is required.'],
  },
  /*
    2.e the last contract renewal date (where applicable)
  */
  cspContractLastRenewalDate: { // optional
    type: Date,
    trim: true,
  },
  /*
    2.f the applicable law governing the contract
  */
  cspApplicableLaw: {
    type: String,
    trim: true,
  },
  /*
    2.g the service expiry date or next contract renewal date (where applicable)
  */
  cspContractNextRenewalDate: {
    type: Date,
    trim: true,
  },
  /*
    3.a whether the cloud service provider has a business continuity plan that is
    suitable for the services provided to the outsourcing institution
  */
  /*
    3.b whether the outsourcing institution has an exit strategy in case of
    termination by either party or disruption of provision of the services by the
    cloud service provider
  */
  appExitStrategy: {
    type: String,
    trim: true,
    require: [true, 'Information on exit strategy is required.'],
  },
  /*
    3.c whether  the  outsourcing  institution  maintains  the  skills  and
    resources  necessary  to  adequately monitor the outsourced activities
  */
  appSkillsResources: {
    type: String,
    trim: true,
    require: [true, 'Information regarding the app teams skills and resources is required.'],
  },
  /*
    5.b the type of outsourcing (the cloud service model and the cloud deployment
    model, i.e. public/private/hybrid/community cloud)
  */
  cloudType: {
    type: String,
    trim: true,
    require: [true, 'Cloud type i.e. public/private/hybrid/community is required.'],
  },
  /*
    5.c the parties receiving cloud services under the outsourcing agreement
  */
  cloudParties: {
    type: String,
    trim: true,
    require: [true, 'The parties receiving the cloud services is required.'],
  },
  /*
    5.d evidence of the approval for outsourcing by the management body or its
    delegated committees, if applicable
  */
  cloudApprovalEvidence: {
    type: String,
    trim: true,
    require: [true, 'Cloud approval evidence is required.'],
  },
  appGovernanceBodyName: {
    type: String,
    trim: true,
  },
  /*
    5.e the names of any subcontractors if applicable
  */
  cspSubcontractors: { // optional
    type: String,
    trim: true,
  },
  /*
    5.f the country where the cloud service provider/main subcontractor is
    registered
  */
  cspCountryRegister: {
    type: String,
    trim: true,
    require: [true, 'Country where the service provider/subcontractor is registered is required.'],
  },
  /*
    5.h the date of the institution’s last materiality assessment of the
    outsourced activities
  */
  cspMaterialAssessmentDate: {
    type: Date,
    trim: true,
    require: [true, 'Date of the last materiality assessment is required.'],
  },
  /*
    5.i whether the cloud service provider/subcontractor(s) supports business
    operations that are time critical (yes/no)
  */
  cspTimeCriticalSupport: {
    type: String,
    trim: true,
    require: [true, 'Whether provider supports time critical operations is required.'],
  },
  /*
    5.j an assessment of the cloud service provider’s substitutability (as easy,
    difficult or impossible)
  */
  cspSubAssessment: {
    type: String,
    trim: true,
    require: [true, 'Assessment of provider substitutability is required.'],
  },
  /*
    5.k identification of an alternate service provider, where possible
  */
  cspAltProvider: { // optional
    type: String,
    trim: true,
  },
  /*
    5.l the date of the last risk assessment of the outsourcing or subcontracting
    arrangement
  */
  cspLastRiskAssessmentDate: {
    type: Date,
    trim: true,
    require: [true, 'Date of last risk assessment is required.'],
  },
});

module.exports = mongoose.model('CloudProvider', cspSchema);
