import React from 'react';
import LegalLayout from '../components/layout/LegalLayout';

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <section className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
        <p className="text-gray-300">
          GP Ventures FZCO ("we," "our," or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your 
          information when you visit our website or use our services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8">2. Company Information</h2>
        <div className="text-gray-300">
          <p className="mb-4">
            GP Ventures FZCO<br />
            Building, A1,<br />
            Dubai Digital Park, Dubai Silicon Oasis,<br />
            00000 Dubai<br />
            UAE
          </p>
          <p>
            Contact Information:<br />
            Email: info@gpventure.com<br />
            Phone: +1 (234) 567-890
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-white mt-8">3. Information We Collect</h2>
        <p className="text-gray-300 mb-4">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Contact information (name, email address, phone number)</li>
          <li>Business information</li>
          <li>Communication preferences</li>
          <li>Feedback and correspondence</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8">4. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Provide and maintain our services</li>
          <li>Respond to your inquiries and requests</li>
          <li>Send you marketing communications (with your consent)</li>
          <li>Improve our services and develop new features</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8">5. Contact Us</h2>
        <p className="text-gray-300">
          If you have any questions about this Privacy Policy, please contact us at:<br />
          Email: info@gpventure.com
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8">6. Updates to This Policy</h2>
        <p className="text-gray-300">
          We may update this Privacy Policy from time to time. The updated version will be 
          indicated by an updated "Last Updated" date and the updated version will be 
          effective as soon as it is accessible.
        </p>
      </section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
