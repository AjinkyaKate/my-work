import React from 'react';
import CaseStudyLayout, { Section, BulletList } from '../components/CaseStudyLayout';

const HotstarCaseStudy = () => {
    const sidebar = {
        'Role': 'Product / UX (flows, problem framing, storytelling)',
        'Timeline': '[Year] · Competition project (Decathlon)',
        'Context': 'UX/Product challenge focused on OTT experience for 55+ users.',
        'Team': '[Solo / small team]',
        'Tools': 'FigJam / Figma, Google Docs / Slides'
    };

    const keyLearnings = [
        "Designing for 55+ users forces you to prioritise clarity over cleverness.",
        "Small changes in navigation, labels and recovery paths can remove a lot of friction.",
        "A strong narrative around a single user journey is often more persuasive than many isolated screens."
    ];

    return (
        <CaseStudyLayout
            title="Hotstar for 55+ Users – UX Redesign for a Competition (2nd Place)"
            oneLiner="Redesigned key journeys in Hotstar for users aged 55+, aiming to reduce confusion and make it easier to find and watch content."
            sidebar={sidebar}
            keyLearnings={keyLearnings}
        >
            <Section title="The problem">
                <p>
                    Older users (55+) struggled with dense home screens, unclear navigation and small tap targets.
                    It was hard to find familiar shows, recover from mistakes or feel confident using the app.
                </p>
            </Section>

            <Section title="What I did">
                <BulletList items={[
                    "Defined a clear problem statement and simple personas (e.g. retired cricket fan, drama lover).",
                    "Mapped current 'find and watch' journeys and annotated confusion points.",
                    "Simplified home and navigation, making 'Continue watching' and 'For you' more prominent.",
                    "Redesigned search/browse flows with larger tap targets, clearer labels and shortcuts.",
                    "Prototyped the new flows and pitched them as a story of how a 55+ user would watch a show end-to-end."
                ]} />
            </Section>

            <Section title="Outcome">
                <p>
                    Placed 2nd in the Decathlon challenge. Judges highlighted the clarity of flows for older users and
                    the realism of the proposed changes. If implemented, the design is aimed at reducing drop-offs in
                    navigation and helping 55+ users complete 'find → play' tasks more easily.
                </p>
            </Section>
        </CaseStudyLayout>
    );
};

export default HotstarCaseStudy;
