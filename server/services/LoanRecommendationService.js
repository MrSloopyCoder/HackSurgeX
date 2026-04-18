/**
 * Loan Recommendation Service
 * Matches farmer profile from soil analysis to relevant government/bank loan schemes
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const loanSchemes = require('./loanSchemes.json');

class LoanRecommendationService {
  /**
   * Recommend loan schemes based on analysis data
   * @param {Object} analysis - Full soil analysis result
   * @returns {Object} Loan recommendations section
   */
  recommend(analysis) {
    const state = analysis.location?.state || '';
    const soilType = (analysis.soil_type || '').toLowerCase();
    const crops = (analysis.recommended_crops || []).map(c => c.toLowerCase());

    const scored = loanSchemes.map(scheme => {
      let score = scheme.rag_metadata.priority_score;

      // Boost state-specific schemes if state matches
      const eligibleStates = scheme.eligibility.eligible_states || [];
      if (eligibleStates.length > 0) {
        const stateMatch = eligibleStates.some(s =>
          state.toLowerCase().includes(s.toLowerCase())
        );
        if (stateMatch) score += 3;
        else return null; // Skip state-specific schemes for other states
      }

      // Boost if soil type matches
      const suitableSoils = scheme.rag_metadata.suitable_soil_types || [];
      if (!suitableSoils.includes('all')) {
        const soilMatch = suitableSoils.some(s => soilType.includes(s));
        if (soilMatch) score += 2;
      }

      // Boost if crop matches
      const suitableCrops = scheme.rag_metadata.suitable_crops || [];
      if (!suitableCrops.includes('all')) {
        const cropMatch = suitableCrops.some(c =>
          crops.some(fc => fc.includes(c.toLowerCase()))
        );
        if (cropMatch) score += 2;
      }

      return { scheme, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4) // Top 4 recommendations
    .map(({ scheme }) => ({
      name: scheme.scheme_name,
      type: scheme.scheme_type,
      provider: scheme.provider,
      loan_type: scheme.loan_type,
      max_amount: scheme.max_loan_amount,
      interest_rate: scheme.interest_rate,
      subsidy: scheme.subsidy_details,
      benefits: scheme.benefits.slice(0, 3),
      documents: scheme.documents_required,
      apply_at: scheme.application_process.official_portal,
      repayment: scheme.repayment_tenure,
      tags: scheme.tags
    }));

    return {
      recommended_schemes: scored,
      summary: `${scored.length} loan schemes available for your farm profile.`,
      disclaimer: 'Eligibility subject to bank/government verification. Visit official portals for latest terms.'
    };
  }
}

export default new LoanRecommendationService();
