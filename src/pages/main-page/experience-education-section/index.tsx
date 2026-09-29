import React from 'react'
import './experience-education-section.scss'

import { IWithRefChildren } from '../index'
import { ExpListItem } from './exp-list-item.tsx'

export type ExperienceConfigType = {
    companyName: string
    workPeriod: string
    workPosition: string
    workDescription: string
    highlights?: string[]
}

const experienceConfig: ExperienceConfigType[] = [
    {
        companyName: 'Access Softek',
        workPeriod: 'Aug 2022 – Present · 3 yr 10 mo',
        workPosition: 'Senior Frontend Developer',
        workDescription:
            'Built AI-powered chat interfaces with React and Vercel AI SDK, deployed to AWS via CI/CD. Integrated third-party services, refactored legacy code, and drove quality improvements across the frontend.',
        highlights: [
            'AI chat UI with Vercel AI SDK',
            'E2E tests with Playwright (−30% QA time)',
            '80% unit test coverage',
            'AWS deploy: S3 + CloudFront + Route53',
            'ProPay integration',
        ],
    },
    {
        companyName: 'DomClick / Sber',
        workPeriod: 'Nov 2021 – Jul 2022 · 9 mo',
        workPosition: 'Senior Frontend Developer',
        workDescription:
            'Developed a B2B partner platform and integrated CRM using React and TypeScript. Built embeddable widgets for third-party integration and delivered microservice-based property selection frontend.',
        highlights: [
            'B2B partner platform',
            'Embeddable cross-service widget',
            'Microservice frontend architecture',
            'CI/CD setup for QA & production',
        ],
    },
]

export const ExperienceEducationSection: React.FC<IWithRefChildren> = ({
    refElement,
}) => {
    return (
        <section className="experience" ref={refElement}>
            <h2>Experience</h2>
            <p className="experience_subtitle">
                Where I've worked and what I've built
            </p>
            <div className="experience_list">
                {experienceConfig.map((el) => (
                    <ExpListItem {...el} key={`${el.companyName}-${el.workPeriod}`} />
                ))}
            </div>
        </section>
    )
}
