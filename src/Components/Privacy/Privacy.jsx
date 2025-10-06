import "./Privacy.css";

export default function Privacy() {
  const effectiveDate = "October 5, 2025";

  return (
    <div className="policy" aria-label="PlugIQ Privacy Policy">
      <div className="policy-inner">
        <header className="policy-head">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-meta">Effective date: {effectiveDate}</p>
          <p className="policy-intro">
            This Privacy Policy explains how PlugIQ (“we”, “us”, “our”)
            collects, uses, shares, and safeguards your information when you use
            our website and services. By using our site, you agree to this
            Policy.
          </p>
        </header>

        <nav className="policy-toc" aria-label="Contents">
          <a href="#info-we-collect">Information We Collect</a>
          <a href="#how-we-use">How We Use Information</a>
          <a href="#sharing">Sharing and Disclosure</a>
          <a href="#cookies">Cookies and Tracking</a>
          <a href="#rights">Your Privacy Rights</a>
          <a href="#retention">Data Retention</a>
          <a href="#security">Security</a>
          <a href="#children">Children’s Privacy</a>
          <a href="#intl">International Users</a>
          <a href="#changes">Changes to This Policy</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <section id="info-we-collect" className="policy-section">
          <h2>Information We Collect</h2>
          <ul className="policy-list">
            <li>
              Contact details: first and last name, email address, phone number,
              ZIP code.
            </li>
            <li>
              Project details you provide: service type, preferred charger, site
              notes in your message.
            </li>
            <li>
              Usage data: basic analytics and device information such as browser
              type and pages visited.
            </li>
          </ul>
        </section>

        <section id="how-we-use" className="policy-section">
          <h2>How We Use Information</h2>
          <ul className="policy-list">
            <li>Provide quotes, schedule work, and respond to inquiries.</li>
            <li>
              Send operational emails such as confirmations, updates, and
              replies.
            </li>
            <li>Improve our website, services, and customer experience.</li>
            <li>Comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>

        <section id="sharing" className="policy-section">
          <h2>Sharing and Disclosure</h2>
          <p className="policy-text">
            We do not sell your personal information. We may share information
            with:
          </p>
          <ul className="policy-list">
            <li>
              Service providers who help us operate the site and deliver
              messages, such as email delivery and hosting vendors.
            </li>
            <li>
              Professional partners and subcontractors when required to deliver
              requested services.
            </li>
            <li>
              Authorities or third parties when required by law or to protect
              rights, safety, or property.
            </li>
          </ul>
          <p className="policy-text">
            Current processors may include an email delivery provider for
            contact-form messages (e.g., EmailJS) and optional analytics tools
            if enabled. Specific providers may change over time.
          </p>
        </section>

        <section id="cookies" className="policy-section">
          <h2>Cookies and Tracking</h2>
          <p className="policy-text">
            Our site may use cookies and similar technologies to operate,
            remember preferences, and understand how the site is used. You can
            adjust cookie settings in your browser. If you disable cookies, some
            features may not function properly.
          </p>
        </section>

        <section id="rights" className="policy-section">
          <h2>Your Privacy Rights</h2>
          <p className="policy-text">
            Depending on your location, you may have rights to access, correct,
            delete, or restrict certain uses of your personal information, and
            to opt out of certain processing.
          </p>
          <ul className="policy-list">
            <li>
              Access and correction: request a copy of your data or ask us to
              correct it.
            </li>
            <li>
              Deletion: request that we delete your personal information,
              subject to legal obligations.
            </li>
            <li>
              Opt-outs: unsubscribe from marketing emails using the link in
              those emails.
            </li>
          </ul>
          <p className="policy-text">
            To exercise rights, contact us at the email in the Contact section.
            We may take reasonable steps to verify your identity before
            fulfilling requests.
          </p>
        </section>

        <section id="retention" className="policy-section">
          <h2>Data Retention</h2>
          <p className="policy-text">
            We keep personal information only as long as necessary to fulfill
            the purposes described in this Policy, comply with legal
            obligations, resolve disputes, and enforce agreements.
          </p>
        </section>

        <section id="security" className="policy-section">
          <h2>Security</h2>
          <p className="policy-text">
            We use reasonable administrative, technical, and physical safeguards
            to protect personal information. No method of transmission or
            storage is fully secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section id="children" className="policy-section">
          <h2>Children’s Privacy</h2>
          <p className="policy-text">
            Our services are not directed to children under 13, and we do not
            knowingly collect personal information from children. If you believe
            a child has provided us personal information, contact us so we can
            delete it.
          </p>
        </section>

        <section id="intl" className="policy-section">
          <h2>International Users</h2>
          <p className="policy-text">
            If you access our site from outside the United States, you
            understand that your information may be processed in the United
            States where laws may differ from those in your jurisdiction.
          </p>
        </section>

        <section id="changes" className="policy-section">
          <h2>Changes to This Policy</h2>
          <p className="policy-text">
            We may update this Policy from time to time. The “Effective date”
            above reflects the latest version. Your continued use of the site
            after changes means you accept the updated Policy.
          </p>
        </section>

        <section id="contact" className="policy-section">
          <h2>Contact Us</h2>
          <p className="policy-text">
            For questions or requests, contact us at plugiqelectrical@gmail.com
            or by mail at PlugIQ, Attn: Privacy, 123 Example Street, City, State
            ZIP.
          </p>
          <p className="policy-disclaimer">
            This page is provided for informational purposes only and is not
            legal advice. Consult an attorney for guidance specific to your
            business.
          </p>
        </section>
      </div>
    </div>
  );
}
