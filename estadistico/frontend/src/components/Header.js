import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>

            <header className="masthead bg-info text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <h1 className="masthead-heading text-uppercase mb-0">CIECSO</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-dove"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>


                    <p className="masthead-subheading font-weight-light mb-0">
                        Centro de Investigaciones y
                        Estudios para la Ciencia y la
                        Sociedad
                    </p>

                </div>
            </header>

        </Fragment>
    );
};

export default Header;