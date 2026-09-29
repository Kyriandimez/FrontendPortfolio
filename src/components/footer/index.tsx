import React from 'react'
import './footer.scss'
import arrowUp from '../../img/up-arrow.svg'

export const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer_inner">
                <div className="footer_cta">
                    <h2>Let's Build Something</h2>
                    <p className="footer_tagline">
                        I'm currently open to interesting frontend roles, consulting, and
                        meaningful projects. If you're building something that
                        matters — let's talk.
                    </p>
                </div>

                <div className="contacts_row">
                    <a
                        href="mailto:kyrianodimmegwa@gmail.com"
                        className="contact_link"
                    >
                        kyrianodimmegwa@gmail.com
                    </a>
                    <a
                        href="tel:+2347045572288"
                        className="contact_link"
                    >
                        +234 704 557 2288
                    </a>
                    <p className="contact_location">
                        Based in Nigeria · Open to remote roles worldwide
                    </p>
                </div>

                <div className="social_row">
                    <a
                        href="/cv.pdf"
                        className="footer_links footer_cv"
                        target="_blank"
                        rel="noreferrer"
                        download="Kyrian_Odimmegwa_CV.pdf"
                    >
                        <span>Download CV ↓</span>
                    </a>
                </div>

                <p className="footer_copyright">
                    © {new Date().getFullYear()} Odimmegwa Kamsi Kyrian · Crafted with React & TypeScript
                </p>
            </div>

            <img
                className="arrow_up"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                src={arrowUp as string}
                alt="Back to top"
                loading="lazy"
            />
        </footer>
    )
}
