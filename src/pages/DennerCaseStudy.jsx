import React from 'react';
import CaseStudyLayout, { Section, BulletList } from '../components/CaseStudyLayout';

const DennerCaseStudy = () => {
    const sidebar = {
        'Role': 'Product & Analytics Contributor (Part-time)',
        'Timeline': 'Mar 2024 – Dec 2024',
        'Context': 'Early-stage housing/roommate startup in Pune, working directly with founders and devs.',
        'Team': 'Founders, engineering team, me as product/analytics support',
        'Tools': 'Mixpanel, Google Sheets / Docs, Slack'
    };

    const keyLearnings = [
        "A lightweight tracking plan can unlock a lot of insight without overcomplicating things.",
        "Visualising funnels makes it easier for non-technical stakeholders to see where to fix first.",
        "Analytics is most powerful when paired with specific UX recommendations, not just charts."
    ];

    return (
        <CaseStudyLayout
            title="Denner – Using Mixpanel to Fix Onboarding for a Housing Startup"
            oneLiner="Implemented Mixpanel, built onboarding funnels and used data to propose UX and flow changes for a housing/roommate app."
            sidebar={sidebar}
            keyLearnings={keyLearnings}
        >
            <Section title="The problem">
                <p>
                    The team had no clear picture of how users moved through onboarding or where they dropped off.
                    Decisions about flows and screens were based on guesses and anecdotal feedback.
                </p>
            </Section>

            <Section title="What I did">
                <BulletList items={[
                    "Worked with founders to define what 'activation' means for Denner and mapped the key onboarding steps.",
                    "Created a simple tracking plan (events, properties, when to fire) and helped developers integrate Mixpanel.",
                    "Built funnels around onboarding and early usage to see exactly where users were exiting.",
                    "Highlighted specific screens and steps with high drop-off and proposed concrete UX/flow changes (fewer steps, clearer copy, progress indicators)."
                ]} />
            </Section>

            <Section title="Outcome">
                <p>
                    Moved the product from no analytics to a structured Mixpanel setup. Gave the team visibility into
                    onboarding performance and problem screens. Helped prioritise UX work based on data instead of
                    assumptions; early changes targeted the highest drop-off points.
                </p>
            </Section>
        </CaseStudyLayout>
    );
};

export default DennerCaseStudy;
