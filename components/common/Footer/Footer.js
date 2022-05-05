import s from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={s.container_3}>
            <div className={`container py-5`}>
                <div className='row mx-0'>
                    <div className='col-lg-2 mb-4'>
                        <div className="d-flex justify-content-center">
                            <h1 className='text-light'>Devhat</h1>
                            {/* <Image
                  src="/images/techy_2.png"
                  alt="Image"
                  width={82}
                  height={41}
                /> */}
                        </div>
                    </div>
                    <div className='col-lg-8 mb-4'>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='px-2'>
                                <a href="" className={s.text_18}>Terms and Conditions</a>
                            </div>
                            <div className='px-2'>
                                <a href="" className={s.text_18}>Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 mb-4'>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='px-3'>
                                <a href='https://facebook.com/'>
                                    <i className="fa-brands fa-facebook fa-2x text-white"></i>
                                </a>
                            </div>
                            <div className='px-3'>
                                <a href='https://linkedin.com/'>
                                    <i className="fa-brands fa-linkedin-in fa-2x text-white"></i>
                                </a>
                            </div>
                            <div className='px-3'>
                                <a href='https://twitter.com/'>
                                    <i className="fa-brands fa-twitter fa-2x text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        <span className={s.text_19}>2022</span>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;