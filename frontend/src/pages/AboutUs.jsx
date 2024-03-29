import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">About Us</h1>
                            <p className="lead text-muted mb-0">Quality Never Compromises</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" className="img-fluid" /></div>
                </div>
            </div>
            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">The great growling engine of change technology.</h2>
                            <p className="font-italic text-muted mb-4">A lot of companies have chosen to downsize, and maybe that was the right thing for them. We chose a different path. Our belief was that if we kept putting great products in front of customers, they would continue to open their wallets.</p>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Innovation is the outcome of a habit, not a random act.</h2>
                            <p className="font-italic text-muted mb-4">The world won't care about your self-esteem. The world will expect you to accomplish something BEFORE you feel good about yourself</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Our Team</h2>
                            <p className="font-italic text-muted">Our Expert Workers</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">XX XX</h5><span className="small text-uppercase text-muted">CEO - Founder</span>

                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Siddhant Yerandkar</h5><span className="small text-uppercase text-muted">CEO - Founder</span>

                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">XX XX</h5><span className="small text-uppercase text-muted">CEO - Founder</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
