import type { ReactNode } from 'react'

// Text from privacy-policy-v1 (20/10/2026). Keep headings and order as written;
// section 4 must list every third party the site actually loads.

const linkClass =
  'font-medium text-assnture underline underline-offset-2 hover:text-assnture-hover'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10 border-t border-zinc-200/70 pt-8 dark:border-white/10">
      <h2 className="mb-4 text-xl font-medium tracking-tight text-gray-900 dark:text-neutral-100">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-assnture">{children}</ul>
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-gray-900 dark:text-neutral-100">{children}</strong>
}

const email = (
  <a href="mailto:hello@assnture.com" className={linkClass}>
    hello@assnture.com
  </a>
)

export function PrivacyPolicyPage() {
  return (
    <div className="relative z-10">
      <article className="mx-auto max-w-3xl px-4 py-16 text-base leading-7 text-gray-600 sm:px-6 sm:py-20 lg:px-8 dark:text-neutral-300/85">
        <div className="mb-6 inline-flex items-center rounded border border-assnture/70 px-3 py-1.5">
          <p className="text-xs font-semibold tracking-[0.18em] text-assnture uppercase">
            — Legal
          </p>
        </div>

        <h1 className="text-4xl leading-[1.05] font-medium tracking-tight text-gray-900 sm:text-5xl dark:text-neutral-100">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-gray-500 dark:text-neutral-400">
          Effective date: 20/10/2026
        </p>
        <p className="mt-6">
          This policy explains how we use personal information when you visit
          www.assnture.com (the &quot;website&quot;). We have tried to keep it short
          and clear.
        </p>

        <Section title="1. Who we are">
          <p>
            The website is run by ASSNTURE LIMITED, a private company limited by
            shares registered in Abu Dhabi Global Market (ADGM) with registered
            number 19017. Our registered office is 2466 ResCo-work08, 24th Floor,
            Al Sila Tower, Regus ADGM Square, Abu Dhabi Global Market Square, Al
            Maryah Island, Abu Dhabi, United Arab Emirates (&quot;ASSNTURE&quot;,
            &quot;we&quot;, &quot;us&quot;). We decide why and how your personal
            information is used on this website. In data protection law this makes
            us the &quot;controller&quot;.
          </p>
          <p>
            We handle personal information in line with the ADGM Data Protection
            Regulations 2021.
          </p>
          <p>You can contact us about privacy at {email}.</p>
        </Section>

        <Section title="2. What this policy covers">
          <p>
            This policy covers the public website only. If you create an account or
            use the ASSNTURE platform, we give you a separate privacy notice at that
            point, and that notice applies to the platform.
          </p>
        </Section>

        <Section title="3. What information we collect">
          <p>
            <Strong>Emails and messages you send us.</Strong> The &quot;Contact&quot;
            form and the email links on the website open your own email program.
            Nothing is sent until you send the email yourself. If you write to us, we
            receive your name, email address, the message, and anything else you
            choose to include. Please do not send identity documents or financial
            details by email.
          </p>
          <p>
            <Strong>Technical information.</Strong> When you visit, our hosting and
            security providers receive your IP address, the type of browser and
            device, the pages requested, and the date and time. We use this to
            deliver the website, keep it secure and find faults.
          </p>
          <p>
            <Strong>Information stored in your browser.</Strong> The website saves
            your light or dark display choice in your browser (a setting called
            &quot;assnture-theme&quot;). It stays on your device. We do not receive
            it.
          </p>
          <p>
            <Strong>What we do not do.</Strong> The website does not use advertising
            cookies, analytics tracking or profiling. We do not sell personal
            information.
          </p>
        </Section>

        <Section title="4. Other companies that see your visit">
          <p>
            When a page loads, your browser may fetch fonts, images or videos
            directly from other companies. Those companies can see your IP address
            and the fact that you visited. They are:
          </p>
          <List>
            <li>Google (Google Fonts, for the typefaces);</li>
            <li>Unsplash and other image hosts (for pictures on the pages);</li>
            <li>
              YouTube, in its privacy-enhanced mode (only for pages that show a
              video).
            </li>
          </List>
          <p>
            They have their own privacy policies. We do not control what they do.
          </p>
        </Section>

        <Section title="5. Why we use your information, and our legal basis">
          <List>
            <li>
              <Strong>To answer your message or enquiry.</Strong> Our legitimate
              interest in running our business and replying to people who contact
              us, or steps you ask us to take before entering into a contract.
            </li>
            <li>
              <Strong>To run and secure the website.</Strong> Our legitimate interest
              in keeping the website working and safe.
            </li>
            <li>
              <Strong>To meet legal duties, and to make or defend legal claims.</Strong>{' '}
              Where the law requires it, or where we have a legitimate interest.
            </li>
          </List>
          <p>
            We do not use your information for automated decisions that have legal
            or similar effects on you.
          </p>
        </Section>

        <Section title="6. Who we share it with">
          <List>
            <li>
              Other companies in the ASSNTURE group, where needed to deal with your
              enquiry.
            </li>
            <li>
              Service providers who help us run the website and our email: our
              hosting provider (Railway), our network and security provider
              (Cloudflare), and our email provider.
            </li>
            <li>
              Professional advisers, such as lawyers and auditors, under a duty of
              confidentiality.
            </li>
            <li>Regulators, courts and law enforcement, where the law requires it.</li>
          </List>
          <p>These providers may only use your information to give us their service.</p>
        </Section>

        <Section title="7. Transfers outside your country">
          <p>
            Some providers named above process information in other countries,
            including outside ADGM. Where the law requires it, we make sure there is
            an approved safeguard, such as standard contractual clauses.
          </p>
        </Section>

        <Section title="8. How long we keep it">
          <List>
            <li>
              <Strong>Emails and messages:</Strong> 24 months after our last contact
              with you, unless we need to keep them longer for a legal reason or
              because you become a client (then the platform privacy notice
              applies).
            </li>
            <li>
              <Strong>Server and security logs:</Strong> 30 days, unless needed to
              investigate a security problem.
            </li>
            <li>
              <Strong>Display setting in your browser:</Strong> until you clear it.
              We do not hold it.
            </li>
          </List>
        </Section>

        <Section title="9. Your rights">
          <p>You can ask us to:</p>
          <List>
            <li>tell you what information we hold about you, and give you a copy;</li>
            <li>correct information that is wrong;</li>
            <li>delete your information;</li>
            <li>limit how we use it;</li>
            <li>stop using it where we rely on our legitimate interest;</li>
            <li>give you your information in a common format (where this applies).</li>
          </List>
          <p>
            To use any right, write to {email}. We will reply within one month. We
            may ask you to prove who you are.
          </p>
          <p>
            If you are not happy with how we handled your information, please tell
            us first. You can also complain to the ADGM Office of Data Protection.
          </p>
        </Section>

        <Section title="10. Security">
          <p>
            We use reasonable technical and organisational measures to protect your
            information, including encrypted connections (HTTPS). No system is
            completely secure. Email in particular is not a secure way to send
            sensitive information.
          </p>
        </Section>

        <Section title="11. Children">
          <p>
            The website is not meant for anyone under 18. We do not knowingly
            collect information from children.
          </p>
        </Section>

        <Section title="12. Changes to this policy">
          <p>
            We may update this policy. The new version will be on this page with a
            new effective date. If a change is important, we will say so on the
            website.
          </p>
        </Section>

        <Section title="13. Contact">
          <address className="not-italic">
            ASSNTURE LIMITED
            <br />
            2466 ResCo-work08, 24th Floor, Al Sila Tower, Regus ADGM Square, Abu
            Dhabi Global Market Square, Al Maryah Island, Abu Dhabi, United Arab
            Emirates
            <br />
            {email}
          </address>
        </Section>
      </article>
    </div>
  )
}
