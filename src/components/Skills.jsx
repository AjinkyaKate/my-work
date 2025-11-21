import React from 'react';
import { BarChart2, FileText, Layout, Database, MessageSquare, Zap, CheckSquare, FileSpreadsheet } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            category: 'Product Skills',
            type: 'pills',
            items: ['Backlog Management', 'Roadmap Planning', 'Product Discovery', 'User Journeys', 'Onboarding Flows', 'AI Features']
        },
        {
            category: 'Methods & Collaboration',
            type: 'pills',
            items: ['Agile / Scrum', 'Stakeholder Communication', 'Data-Informed Decisions', 'Experimentation Mindset']
        },
        {
            category: 'Tools & Technologies',
            type: 'icons',
            items: [
                { name: 'Mixpanel', icon: <BarChart2 size={16} /> },
                { name: 'Power BI', icon: <Database size={16} /> },
                { name: 'Excel / Sheets', icon: <FileSpreadsheet size={16} /> },
                { name: 'Docs / Slides', icon: <FileText size={16} /> },
                { name: 'Jira / ClickUp', icon: <CheckSquare size={16} /> },
                { name: 'Notion / Confluence', icon: <Layout size={16} /> },
                { name: 'ChatGPT / AI', icon: <Zap size={16} /> }
            ]
        }
    ];

    return (
        <section className="section">
            <h2 className="animate-in" style={{ marginBottom: '3rem' }}>Skills & Tools</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {skillGroups.map((group, index) => (
                    <div key={index} className={`card animate-in delay-${(index + 1) * 100}`} style={{ padding: '2rem' }}>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                            {group.category}
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {group.type === 'pills' ? (
                                group.items.map((item, i) => (
                                    <span key={i} className="badge">
                                        {item}
                                    </span>
                                ))
                            ) : (
                                group.items.map((item, i) => (
                                    <div key={i} className="badge" style={{ gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--text-secondary)', display: 'flex' }}>{item.icon}</span>
                                        {item.name}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
