import React from 'react';
import LegalLayout from '../components/layout/LegalLayout';

const Terms = () => {
  return (
    <LegalLayout title="Terms and Conditions">
      <section className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-white">1. Company Information</h2>
        <div className="text-gray-300">
          <p className="mb-4">
            GP Ventures FZCO<br />
            Building, A1,<br />
            Dubai Digital Park, Dubai Silicon Oasis,<br />
            00000 Dubai<br />
            UAE
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-white mt-8">2. Acceptance of Terms</h2>
        <p className="text-gray-300">
          By accessing and using this website, you accept and agree to be bound by the terms 
          and provision of this agreement. These terms constitute a legally binding agreement 
          between you and GP Ventures FZCO regarding your use of our website and services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8">3. Services</h2>
        <p className="text-gray-300">
          GP Ventures FZCO provides digital solutions and services. We reserve the right to 
          modify, suspend, or discontinue any aspect of our services at any time without 
          prior notice. We strive to maintain high-quality services but make no guarantees 
          about the availability or functionality of our services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8">4. Intellectual Property</h2>
        <p className="text-gray-300">
          All content on this website, including but not limited to text, graphics, logos, 
          images, and software, is the property of GP Ventures FZCO and is protected by 
          international copyright laws. You may not use, reproduce, or distribute any 
          content from this website without our express written permission.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8">5. Limitation of Liability</h2>
        <p className="text-gray-300">
          GP Ventures FZCO shall not be liable for any indirect, incidental, special, 
          consequential, or punitive damages resulting from your use of or inability to 
          use our services. This includes but is not limited to damages for loss of 
          profits, goodwill, data, or other intangible losses.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8">6. Contact Information</h2>
        <div className="text-gray-300">
          <p>
            For any questions regarding these terms, please contact us at:<br />
            Email: info@gpventure.com<br />
            Phone: +1 (234) 567-890
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-white mt-8">7. Changes to Terms</h2>
        <p className="text-gray-300">
          We reserve the right to modify these terms at any time. Changes will be effective 
          immediately upon posting to the website. Your continued use of our services 
          following any changes indicates your acceptance of the modified terms.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Terms;
