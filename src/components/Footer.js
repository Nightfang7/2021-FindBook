import React from 'react'

function Footer() {
    return (
        <div class="footer-container">
            <div className="container footer">
                <div className="social-icon-container">
                    <a href="#" className="social-icon">
                        <i class="fab fa-facebook fa-3x" />
                    </a>
                    <a href="#" className="social-icon">
                        <i class="fab fa-twitter fa-3x" />
                    </a>
                    <a href="#" className="social-icon">
                        <i class="fab fa-youtube fa-3x" />
                    </a>
                </div>
                <span className="quarter-circle"></span>
                <span className="footer-line1"></span>
                <span className="footer-line2"></span>
            </div>
        </div>
    )
}

export default Footer
