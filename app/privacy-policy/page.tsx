import Layouts from "@/common/layouts";
// import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <Layouts>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-zinc-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          {/* <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-700 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-zinc-600">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-zinc-700 mb-2">Usage Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-zinc-600">
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Provide and improve our services</li>
              <li>Process transactions and send notifications</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about updates and offers</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">3. Information Sharing</h2>
            <p className="text-zinc-600 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>With service providers who assist in our operations</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights and prevent fraud</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">4. Data Security</h2>
            <p className="text-zinc-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">5. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability and correction rights</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">6. Cookies and Tracking</h2>
            <p className="text-zinc-600 mb-4">We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">7. Contact Us</h2>
            <p className="text-zinc-600">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
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