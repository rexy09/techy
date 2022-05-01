import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Techy</title>
        <meta name="description" content="Techy" />
        <link rel="icon" href="/images/techy_1.png" />

        {/* Boostrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        {/* Fonts */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-white" id='#'>
        <div className="container-fluid px-lg-5 py-3">
          <a className="navbar-brand" href="#">
            <Image
              src="/images/techy_1.png"
              alt="Image"
              width={86}
              height={43}
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#technologies">Technologies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cloud">Cloud</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <div className={styles.bg_img_5}>
        <div className='container mb-5'>
          <div className={styles.container_1}>
            <div className='row py-4 px-lg-5'>
              <div className='col-lg-6'>
                <div className="d-flex justify-content-center">
                  <div className='' style={{ maxWidth: '100%'}}>
                    <h1 className={styles.text_1}>Let<span>&#39;</span>s make you,</h1>
                    <h1 className={styles.text_1}>an eye catching</h1>
                    <h1 className={styles.text_2}>designs.</h1>
                    <p className={styles.text_3}>Stand out from the rest with your very own <br />
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

                    <div className="d-flex flex-row justify-content-between mt-5" style={{maxWidth:400}}>
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


        <div className='my-5' style={{ backgroundColor: "#5c415d1a" }} >
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

        <section id='technologies'>
          <div className='container-fluid'>
            <div className='row py-5 mt-5 mx-0'>
              <div className='col-lg-6'>
                <div className="d-flex justify-content-center">
                  <Image
                    src="/images/Group_1.png"
                    alt="Image"
                    width={554}
                    height={571}
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className={styles.bg_img_1}>
                  <h1 className={styles.text_6}>How we use these,</h1>
                  <h1 className={styles.text_7}>Technologies</h1>
                  <p className={styles.text_8}>In a professional context it often happens that private or
                    <br />
                    corporate clients corder a publication to be made and
                    <br />
                    presented with the actual content still not being ready.
                    <br />
                    Think of a news blog that<span>&#39;</span>s filled with content hourly on
                    <br />
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
          </div>
        </section>

      </div>
      <section id='services'>
        <div className='container-fluid mb-5'>
          <div className="d-flex justify-content-center">
            <div>
              <h1 ><span className={styles.text_9}>Services</span>  <span className={styles.text_10}>we deliver</span></h1>

            </div>
          </div>
          <p className={styles.text_11}>we work as a Python development agency for 13+ years and are able to cover  <br />the business may need</p>
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
          <div className='row py-5 mt-5 mx-0'>
            <div className='col-lg-6 mb-4'>
              <div className="d-flex justify-content-center">
                <div >
                  <h1 className={styles.text_6}>Our</h1>
                  <h1 className={`${styles.text_9} mb-5`}>Cloud Providers</h1>
                  <p className={styles.text_8}>In a professional context it often happens that private or
                    <br />
                    corporate clients corder a publication to be made and
                    <br />
                    presented with the actual content still not being ready.
                    <br />
                    Think of a news blog that<span>&#39;</span>s filled with content hourly on
                    <br />
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
                  width={661}
                  height={415}
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
                            <div className="d-flex align-items-center justify-content-center" style={{ height: 57, width: 147 }}>
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

      <footer className={styles.container_3}>
        <div className={`container-fluid py-5`}>
          <div className='row mx-0'>
            <div className='col-lg-2 mb-4'>
              <div className="d-flex justify-content-center">
                <Image
                  src="/images/techy_2.png"
                  alt="Image"
                  width={82}
                  height={41}
                />
              </div>
            </div>
            <div className='col-lg-8 mb-4'>
              <div className="d-flex flex-row justify-content-center">
                <div className='px-2'>
                  <a href="" className={styles.text_18}>Terms and Conditions</a>
                </div>
                <div className='px-2'>
                  <a href="" className={styles.text_18}>Privacy Policy</a>
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
              <span className={styles.text_19}>2022</span>
            </div>
          </div>
        </div>

      </footer>
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    </div>
  )
}
