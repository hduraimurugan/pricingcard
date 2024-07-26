import React from 'react';
import './PricingCard.css';

const plans = [
  {
    name: 'FREE',
    price: '$0/month',
    features: [
      'Single User',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
    ],
    unavailableFeatures: [
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
  },
  {
    name: 'PLUS',
    price: '$9/month',
    features: [
      '5 Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
    ],
    unavailableFeatures: ['Monthly Status Reports'],
  },
  {
    name: 'PRO',
    price: '$49/month',
    features: [
      'Unlimited Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    unavailableFeatures: [],
  },
];

const PricingCard = () => {
  return (
    <>
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h4>{plan.name}</h4>
          <h1>{plan.price}</h1>
          <ul className='line'>
            {plan.features.map((feature, idx) => (
              <li key={idx} className="available">{feature}</li>
            ))}
            {plan.unavailableFeatures.map((feature, idx) => (
              <li key={idx} className="unavailable">{feature}</li>
            ))}
          </ul>
          <button>BUTTON</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default PricingCard;
