import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Techy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <Image
                src="/images/techy_1.png"
                alt="Image"
                width={86}
                height={43}
              />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Technologies</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Cloud</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact Us</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>

        <div className='p-5'>
          <div className={styles.container_1}>
            <div className='row py-5'>
              <div className='col-lg-6'>

                <div class="d-flex justify-content-center">
                  <div>
                    <h1 className={styles.text_1}>Let's make you,</h1>
                    <h1 className={styles.text_1}>an eye catching</h1>
                    <h1 className={styles.text_2}>designs.</h1>
                    <p className={styles.text_3}>Stand out from the rest with your very own <br />
                      elegant and unique design.</p>
                    <a class="" href="https://nextjs.org">
                      <div className={styles.button_1}>
                        <div class="d-flex align-items-center justify-content-center" style={{ height: 59, width: 302 }}>
                          <div>
                            Book now <i class="fa-solid fa-arrow-right-long fa-lg ps-2"></i>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div class="d-flex flex-row justify-content-between mt-5">
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


        <div style={{ backgroundColor: "#5c415d1a" }}>
          <div class="d-flex flex-row justify-content-around mt-5 align-items-center">
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
                src="/images/Html 5.png"
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


        <div className='container-fluid'>
          <div className='row py-5 mt-5 mx-0'>
            <div className='col-lg-6'>
              <div class="d-flex justify-content-center">
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
                  Think of a news blog that's filled with content hourly on
                  <br />
                  the day of going live. </p>
                <a class="" href="https://nextjs.org">
                  <div className={styles.button_2}>
                    <div class="d-flex align-items-center justify-content-center" style={{ height: 59, width: 302 }}>
                      <div>
                        Book now <i class="fa-solid fa-arrow-right-long fa-lg ps-2"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className='container-fluid mb-5'>
          <div class="d-flex justify-content-center">
            <div>
              <h1 ><span className={styles.text_9}>Services</span>  <span className={styles.text_10}>we deliver</span></h1>

            </div>
          </div>
          <p className={styles.text_11}>we work as a Python development agency for 13+ years and are able to cover  <br />the business may need</p>
          <div className={styles.bg_img_2}>
            <div className='row py-5 mt-5 mx-0'>
              <div className='col-lg-4 d-flex justify-content-center mb-4'>
                <div className={styles.card_1}>
                  <Image
                    src="/images/Hand-coding-bro.png"
                    alt="Image"
                    width={125}
                    height={125}
                  />
                  <div class="card-body">
                    <h5 className={styles.text_12}>Product Engineering</h5>
                    <ul class="list-unstyled">
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
                    src="/images/Insert block-amico.png"
                    alt="Image"
                    width={125}
                    height={125}
                  />
                  <div class="card-body">
                    <h5 className={styles.text_13}>Product Design</h5>
                    <ul class="list-unstyled">
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
                  <div class="card-body">
                    <h5 className={styles.text_12}>Technology Consultancy</h5>
                    <ul class="list-unstyled">
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

        <div className='container-fluid'>
          <div className='row py-5 mt-5 mx-0'>
            <div className='col-lg-6'>
              <div class="d-flex justify-content-center">
                <div className={styles.bg_img_3}>
                  <h1 className={styles.text_6}>Our</h1>
                  <h1 className={styles.text_9}>Cloud Providers</h1>
                  <p className={styles.text_8}>In a professional context it often happens that private or
                    <br />
                    corporate clients corder a publication to be made and
                    <br />
                    presented with the actual content still not being ready.
                    <br />
                    Think of a news blog that's filled with content hourly on
                    <br />
                    the day of going live. </p>
                  <a class="" href="https://nextjs.org">
                    <div className={styles.button_2}>
                      <div class="d-flex align-items-center justify-content-center" style={{ height: 59, width: 302 }}>
                        <div>
                          Book now <i class="fa-solid fa-arrow-right-long fa-lg ps-2"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div class="d-flex justify-content-center">
                <Image
                  src="/images/Group_1.png"
                  alt="Image"
                  width={554}
                  height={571}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid mb-5'>
          <div class="d-flex justify-content-center">
            <div className={styles.container_2}>
              <div className='p-5'>
                <div class="d-flex justify-content-center">
                  <div>
                    <h1 ><span className={styles.text_16}>Book now</span></h1>

                  </div>
                </div>
                <p className={styles.text_17}>Enter your email address to book now
                  <br />and get you signup coupon</p>
              </div>


            </div>
          </div>
        </div>
      </div>

      <footer className={styles.container_3}>
        <div className='container-fluid py-3 '>
          <div className='row mx-0'>
            <div className='col-lg-2'>
              <div class="d-flex justify-content-center">
                <Image
                  src="/images/techy_2.png"
                  alt="Image"
                  width={82}
                  height={41}
                />
              </div>
            </div>
            <div className='col-lg-8'>
              <div class="d-flex flex-row justify-content-center">
                <div className='px-2'>
                  <a href="" className={styles.text_18}>Terms and Conditions</a>
                </div>
                <div className='px-2'>
                  <a href="" className={styles.text_18}>Privacy Policy</a>
                </div>
              </div>
            </div>
            <div className='col-lg-2'>
              <div class="d-flex flex-row justify-content-around">
                <div>
                  <i class="fa-brands fa-facebook fa-2x text-white"></i>
                </div>
                <div>
                  <i class="fa-brands fa-linkedin-in fa-2x text-white"></i>
                </div>
                <div>
                  <i class="fa-brands fa-twitter fa-2x text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div>
              <span className={styles.text_19}>2022</span>
            </div>
          </div>
        </div>
       
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </div>
  )
}