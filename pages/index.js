import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/common/Footer/Footer'
import Navbar from '../components/common/Navbar/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        {/* Required meta tags  */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Devhat</title>
        <meta name="description" content="Devhat" />
        <link rel="icon" href="/images/devhat.png" />

        {/* Boostrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        {/* Fonts */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>

      {/* Navbar */}
      <Navbar></Navbar>

      <div className={styles.bg_img_5}>
        <div className='container mb-5'>
          <div className={styles.container_1}>
            <div className='row py-4 px-lg-5'>
              <div className='col-lg-6 mb-4'>
                <div className="d-flex justify-content-center">
                  <div className='' style={{ maxWidth: '100%' }}>
                    <h1 className={styles.text_1}>Let<span>&#39;</span>s make you,</h1>
                    <h1 className={styles.text_1}>an eye catching</h1>
                    <h1 className={styles.text_2}>designs.</h1>
                    <p className={`d-none d-sm-none d-md-block ${styles.text_3}`}>Stand out from the rest with your very own <br />
                      elegant and unique design.</p>
                    <p className={`d-block d-sm-block d-md-none ${styles.text_3}`} style={{ maxWidth: 300 }}>Stand out from the rest with your very own
                      elegant and unique design.</p>
                    <a className="" href="#">
                      <div className={styles.button_1}>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: 59, width: 302 }}>
                          <div>
                            Book now <i className="fa-solid fa-arrow-right-long fa-lg ps-2"></i>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div className="d-flex flex-row justify-content-between mt-5" style={{ maxWidth: 400 }}>
                      <div>
                        <span className={styles.text_4}>21</span>
                        <br />
                        <span className={styles.text_5}>Clients</span>
                      </div>
                      <div>
                        <span className={styles.text_4}>38</span>
                        <br />
                        <span className={styles.text_5}>Projects</span>
                      </div>
                      <div>
                        <span className={styles.text_4}>17</span>
                        <br />
                        <span className={styles.text_5}>Companies</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div className='col-lg-6'>
                <Image
                  src="/images/block-1.png"
                  alt="Image"
                  width={662}
                  height={460}
                />
              </div>
            </div>

          </div>
        </div>

        <div className='my-5 container-fluid' style={{ backgroundColor: "#5c415d1a" }} >
          <div className='container' >
            <div className="d-flex flex-row justify-content-around mt-5 align-items-center">
              <div>
                <Image
                  src="/images/Django.png"
                  alt="Image"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <Image
                  src="/images/CSS3.png"
                  alt="Image"
                  width={106}
                  height={99}
                />
              </div>
              <div>
                <Image
                  src="/images/PostgreSQL.png"
                  alt="Image"
                  width={79}
                  height={80}
                />
              </div>
              <div>
                <Image
                  src="/images/Html5.png"
                  alt="Image"
                  width={86}
                  height={85}
                />
              </div>
              <div>
                <Image
                  src="/images/React.png"
                  alt="Image"
                  width={91}
                  height={91}
                />
              </div>
              <div>
                <Image
                  src="/images/JavaScript.png"
                  alt="Image"
                  width={81}
                  height={81}
                />
              </div>

            </div>
          </div>
        </div>

        <section id='technologies'>
          <div className='container'>
            <div className='row py-5 mt-5 mx-0'>
              <div className='col-lg-6 mb-4'>
                <div className="d-flex justify-content-center">
                  <Image
                    src="/images/Group_1.png"
                    alt="Image"
                    width={505}
                    height={541}
                  />
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className={styles.bg_img_1} style={{ maxWidth: 600 }}>
                  <h1 className={styles.text_6}>How we use these,</h1>
                  <h1 className={styles.text_7}>Technologies</h1>
                  <p className={styles.text_8}>In a professional context it often happens that private or
                    corporate clients corder a publication to be made and
                    presented with the actual content still not being ready.
                    Think of a news blog that<span>&#39;</span>s filled with content hourly on
                    the day of going live. </p>
                  <a className="" href="#">
                    <div className={styles.button_2}>
                      <div className="d-flex align-items-center justify-content-center" style={{ height: 59, width: 300 }}>
                        <div>
                          Book now <i className="fa-solid fa-arrow-right-long fa-lg ps-2"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <section id='services'>
        <div className='container mb-5'>
          <div className="d-flex justify-content-center">
            <div>
              <h1 ><span className={styles.text_9}>Services</span>  <span className={styles.text_10}>we deliver</span></h1>

            </div>
          </div>
          <p className={`d-none d-md-none d-lg-block ${styles.text_11}`}>we work as a Python development agency for 13+ years and are able to cover  <br />the business may need</p>
          <p className={`d-block d-md-block d-lg-none ${styles.text_11}`}>we work as a Python development agency for 13+ years and are able to cover the business may need</p>

          <div className={styles.bg_img_2}>
            <div className='row py-lg-5 mt-lg-5 mx-0'>
              <div className='col-lg-4 d-flex justify-content-center mb-4'>
                <div className={styles.card_1}>
                  <Image
                    src="/images/Hand-coding-bro.png"
                    alt="Image"
                    width={125}
                    height={125}
                  />
                  <div className="card-body">
                    <h5 className={styles.text_12}>Product Engineering</h5>
                    <ul className="list-unstyled">
                      <li className={styles.text_14}>Web Development</li>
                      <li className={styles.text_14}>Mobile Development</li>
                      <li className={styles.text_14}>Custom Software Development</li>
                      <li className={styles.text_14}>Quality Assurance</li>
                      <li className={styles.text_14}>DevOps Scaling and Development</li>
                      <li className={styles.text_14}>Data Science</li>
                      <li className={styles.text_14}>Support and Maintenance </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 d-flex justify-content-center mb-4'>
                <div className={styles.card_2}>
                  <Image
                    src="/images/Insert-block-amico.png"
                    alt="Image"
                    width={125}
                    height={125}
                  />
                  <div className="card-body">
                    <h5 className={styles.text_13}>Product Design</h5>
                    <ul className="list-unstyled">
                      <li className={styles.text_15}>Design Sprint </li>
                      <li className={styles.text_15}>Visual Brand Identity</li>
                      <li className={styles.text_15}>Prototyping</li>
                      <li className={styles.text_15}>Mobile App Design</li>
                      <li className={styles.text_15}>Web App Design</li>
                      <li className={styles.text_15}>Motion Design</li>
                      <li className={styles.text_15}>E-commerce Solution Design</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 d-flex justify-content-center mb-4'>
                <div className={styles.card_1}>
                  <Image
                    src="/images/Consulting-cuate.png"
                    alt="Image"
                    width={125}
                    height={125}
                  />
                  <div className="card-body">
                    <h5 className={styles.text_12}>Technology Consultancy</h5>
                    <ul className="list-unstyled">
                      <li className={styles.text_14}>Digital Transformation</li>
                      <li className={styles.text_14}>CTO as a service </li>
                      <li className={styles.text_14}>Discovery Phase </li>
                      <li className={styles.text_14}>MVP for Startups</li>
                      <li className={styles.text_14}>Software consultancy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id='cloud'>
        <div className={`container ${styles.bg_img_3}`}>
          <div className='row py-5 my-5 mx-0'>
            <div className='col-lg-6 mb-4'>
              <div className="d-flex justify-content-center">
                <div >
                  <h1 className={styles.text_6}>Our</h1>
                  <h1 className={`${styles.text_9} mb-5`}>Cloud Providers</h1>
                  <p className={styles.text_8}>In a professional context it often happens that private or
                    corporate clients corder a publication to be made and
                    presented with the actual content still not being ready.
                    Think of a news blog that<span>&#39;</span>s filled with content hourly on
                    the day of going live. </p>
                  <a className="" href="#">
                    <div className={styles.button_2}>
                      <div className="d-flex align-items-center justify-content-center" style={{ height: 59, width: 302 }}>
                        <div>
                          Book now <i className="fa-solid fa-arrow-right-long fa-lg ps-2"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 mb-4'>
              <div className="d-flex justify-content-center">
                <Image
                  src="/images/Group_3.png"
                  alt="Image"
                  width={578}
                  height={413}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id='contact'>
        <div className='container mb-5'>
          <div className="d-flex justify-content-center">
            <div className={[styles.container_2, styles.bg_img_4].join(" ")}>
              <div className='px-lg-5 py-4'>
                <div className="d-flex justify-content-center">
                  <div>
                    <h1 ><span className={styles.text_16}>Book now</span></h1>

                  </div>
                </div>
                <p className={styles.text_17}>Enter your email address to book now
                  <br />and get you signup coupon</p>

                <div className="d-flex justify-content-center">
                  <div className={styles.container_4}>
                    <form action="" method="post">
                      <div className="input-group">
                        <input type="email" className="form-control form-control-lg border-0" placeholder='Your email' aria-label="Your email" />
                        <a type="submit">
                          <div className={styles.button_3}>
                            <div className="d-flex align-items-center justify-content-center" style={{ height: 57, maxWidth: 147 }}>
                              Book now
                            </div>
                          </div>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>

      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    </div>
  )
}
