import Layouts from "@/common/layouts";
// import Link from "next/link";

export default function TermsOfService() {
  return (
    <Layouts>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-zinc-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          {/* <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-600">By accessing and using our service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">2. Description of Service</h2>
            <p className="text-zinc-600 mb-4">Our service provides [describe your service here]. We reserve the right to modify, suspend, or discontinue the service at any time without notice.</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Service features and functionality</li>
              <li>User account management</li>
              <li>Content creation and sharing tools</li>
              <li>Customer support and assistance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">3. User Accounts and Registration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-700 mb-2">Account Requirements</h3>
                <ul className="list-disc pl-6 space-y-2 text-zinc-600">
                  <li>You must be at least 18 years old to create an account</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-zinc-700 mb-2">Account Termination</h3>
                <p className="text-zinc-600">We reserve the right to terminate accounts that violate these terms or engage in prohibited activities.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">4. Acceptable Use Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-700 mb-2">Permitted Uses</h3>
                <ul className="list-disc pl-6 space-y-2 text-zinc-600">
                  <li>Use the service for lawful purposes only</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain respectful communication with other users</li>
                  <li>Follow community guidelines and standards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-zinc-700 mb-2">Prohibited Activities</h3>
                <ul className="list-disc pl-6 space-y-2 text-zinc-600">
                  <li>Harassment, abuse, or harmful behavior</li>
                  <li>Spam, phishing, or fraudulent activities</li>
                  <li>Violation of privacy or data protection laws</li>
                  <li>Unauthorized access or system interference</li>
                  <li>Distribution of malware or harmful content</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">5. Payment and Billing</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>Prices may change with 30 days notice</li>
              <li>Payment is due immediately upon invoice</li>
              <li>Late payments may result in service suspension</li>
              <li>You are responsible for all applicable taxes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">6. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-700 mb-2">Our Content</h3>
                <p className="text-zinc-600">All content, features, and functionality of our service are owned by us and are protected by copyright, trademark, and other intellectual property laws.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-zinc-700 mb-2">User Content</h3>
                <p className="text-zinc-600">You retain ownership of content you create, but grant us a license to use, modify, and distribute your content in connection with our service.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">7. Limitation of Liability</h2>
            <p className="text-zinc-600">
              Our service is provided as is without warranties of any kind. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">8. Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Disputes will be resolved through binding arbitration</li>
              <li>Governing law: [Your jurisdiction]</li>
              <li>Venue: [Your location]</li>
              <li>Class action waiver applies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">9. Changes to Terms</h2>
            <p className="text-zinc-600">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">10. Contact Information</h2>
            <p className="text-zinc-600">
              For questions about these Terms of Service, please contact us:{" "}
              <Link href="mailto:mhasbihasbullah@gmail.com" className="hover:text-foreground transition-colors" target="_blank">
                mhasbihasbullah@gmail.com
              </Link>
            </p>
          </section> */}
        </div>
      </div>
    </Layouts>
  );
}