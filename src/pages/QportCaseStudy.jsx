import React from 'react';
import CaseStudyLayout, { Section, BulletList } from '../components/CaseStudyLayout';

const QportCaseStudy = () => {
    const sidebar = {
        'Role': 'Founding Product Manager (Part-time)',
        'Timeline': 'Aug 2025 – Present',
        'Context': 'Early-stage product built for a client, starting from a dense requirement document.',
        'Team': 'Founders, engineering team, me as the single PM',
        'Tools': 'Docs / Slides, whiteboarding tools, Jira/ClickUp, Figma (for flows)'
    };

    const keyLearnings = [
        "A messy PRD can be turned into a clean plan by focusing on users, journeys and v1 scope.",
        "Being the only PM means constantly balancing client asks, technical constraints and timelines.",
        "Clear flows and written acceptance criteria save time and confusion for both devs and stakeholders."
    ];

    return (
        <CaseStudyLayout
            title="Qport – Turning a Client PRD into a 0→1 Product"
            oneLiner="As a founding Product Manager, transformed a long client PRD into a roadmap, user journeys, specs and an on-track v1 with the dev team."
            sidebar={sidebar}
            keyLearnings={keyLearnings}
        >
            <Section title="The problem">
                <p>
                    Qport had a long, detailed client PRD but no clear product structure, priorities or user journeys.
                    Developers lacked a shared picture of what v1 should look like.
                </p>
            </Section>

            <Section title="What I did">
                <BulletList items={[
                    "Read the PRD, extracted core user types and must-have features and aligned with founders on a realistic v1 scope.",
                    "Turned requirements into user journeys and flow diagrams, including empty states and edge cases.",
                    "Grouped work into epics and releases, then wrote user stories with acceptance criteria for the dev team.",
                    "Ran ongoing check-ins with developers, clarified questions and adjusted scope where needed to keep timelines realistic."
                ]} />
            </Section>

            <Section title="Outcome">
                <p>
                    Defined a clear roadmap and backlog from a messy PRD. Enabled the team to ship a coherent v1 aligned
                    with client expectations instead of piecemeal features. Established a repeatable process for future
                    releases (epics → stories → releases).
                </p>
            </Section>
        </CaseStudyLayout>
    );
};

export default QportCaseStudy;
