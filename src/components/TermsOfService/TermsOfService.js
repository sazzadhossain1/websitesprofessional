import React from "react";
import "./TermsOfService.css";

const TermsOfService = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  return (
    <div className="terms_of_service_grid_div">
      <div className="termsOfService_first_div">
        <h1 className="termsOfService_heading">Terms of Service</h1>
        <p className="effective">Effective Date: March 1, 2023</p>
      </div>
      <div className="termsOfService_second_div">
        <p>Acceptance of Terms</p>

        <p>
          By accessing or using the services of Website Professionals, you agree
          to be bound by these terms of service ("Terms") and our privacy
          policy. If you do not agree to these Terms or our privacy policy, you
          should not use our services.
        </p>

        <p>
          Modifications to Terms We reserve the right, in our sole discretion,
          to modify these Terms at any time, effective upon posting the modified
          Terms on our website. Your continued use of our services after any
          such modification constitutes your acceptance of the modified Terms.
        </p>

        <p>
          Use of Our Services You may use our services only for lawful purposes
          and in accordance with these Terms. You agree not to use our services:
        </p>

        <p>
          In any way that violates any applicable federal, state, local, or
          international law or regulation For the purpose of exploiting,
          harming, or attempting to exploit or harm minors in any way by
          exposing them to inappropriate content, asking for personally
          identifiable information, or otherwise To transmit, or procure the
          sending of, any advertising or promotional material without our prior
          written consent, including any "junk mail," "chain letter," "spam," or
          any other similar solicitation Intellectual Property Rights
        </p>
        <p>
          Our services and their entire contents, features, and functionality
          are owned by Website Professionals or its licensors and are protected
          by copyright, trademark, and other intellectual property or
          proprietary rights laws.
        </p>

        <p>
          Disclaimer of Warranties YOUR USE OF OUR SERVICES IS AT YOUR SOLE
          RISK. OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
          BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>

        <p>
          Limitation of Liability IN NO case shall Website Professionals, its
          directors, officers, employees, affiliates, agents, contractors,
          interns, suppliers, service providers or licensors be liable for any
          injury, loss, claim, or any direct, indirect, incidental, punitive,
          special, or consequential damages of any kind, including, without
          limitation, lost profits, lost revenue, lost savings, loss of data,
          replacement costs, or any similar damages, whether based in contract,
          tort (including negligence), strict liability, or otherwise, arising
          from your use of any of our services or for any other claim related in
          any way to your use of our services, including, but not limited to,
          any errors or omissions in any content, or any loss or damage of any
          kind incurred as a result of the use of any content (or product)
          posted, transmitted, or otherwise made available via our services,
          even if advised of their possibility.
        </p>

        <p>
          Indemnification You agree to indemnify, defend, and hold harmless
          Website Professionals and its affiliates, officers, directors,
          employees, agents, contractors, licensors, service providers,
          subcontractors, and suppliers from and against any claims,
          liabilities, damages, judgments, awards, losses, costs, expenses, or
          fees (including reasonable attorneys' fees) arising out of or relating
          to your violation of these Terms or your use of our services,
          including, but not limited to, your user content, any use of our
          services' content, services, and products other than as expressly
          authorized in these Terms, or your use of any information obtained
          from our services.
        </p>

        <p>
          Governing Law and Jurisdiction These Terms and your use of our
          services shall be governed by and construed in accordance with the
          laws of the state of California, without giving effect to any choice
          or conflict of law provision or rule. Any legal suit, action, or
          proceeding arising out of, or related to, these Terms or our services
          shall be instituted exclusively in the federal courts of the United
          States or the courts of the State of California, in each case located
          in the city of Los Angeles and County of Los Angeles. You waive any
          and all objections to the exercise of jurisdiction over you by such
          courts and to venue in such courts.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
