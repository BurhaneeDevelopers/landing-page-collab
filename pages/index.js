import Head from "next/head";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  return (
    <div className="body">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-screen-2xl px-10">
        <section className="text-gray-600 body-font w-full">
          <div className="py-12 w-full flex flex-col m-0">
            <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center items-start justify-around space-y-4">
              <h1 className="text-3xl xl:text-4xl font-medium title-font text-gray-900">
                Build your <br />
                <span className="font-extrabold">Dream House</span> into reality
                !
              </h1>
              <p className="sm:w-1/3  text-xl">
                Auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta.
              </p>
            </div>
            {/* ----Hero-Img---- */}
            <div className="image relative mt-8">
              <div className="image_curve w-full h-96">
                <img src="/heroImg.jpg" className="w-full object-cover" />
              </div>
            </div>
            {/* ----Hero-Img---- */}
          </div>
        </section>
        {/* ----Statistics---- */}
        <section id="about">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center text-center items-center md:items-start md:text-start">
              <h2 className="text-5xl md:text-6xl text-gray-900 font-bold">
                Trusted Quality
              </h2>
              <p className="w-1/2 text-xl mt-5 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              </p>
            </div>
            <div className="flex items-center justify-center py-10 flex-col sm:flex-row">
              <div className="flex flex-col px-4 py-8 text-center mx-5">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Projects
                </dt>

                <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                  500+
                </dd>
              </div>
              <div className="flex flex-col px-4 py-8 text-center mx-5">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Customers
                </dt>

                <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                  23k+
                </dd>
              </div>
              <div className="flex flex-col px-4 py-8 text-center mx-5">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Reviews
                </dt>

                <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                  100k+
                </dd>
              </div>
            </div>
          </div>
        </section>
        {/* ----Statistics---- */}
        {/* ----SkillSets---- */}
        <section className="" id="services">
          <div className="mx-auto py-16">
            <div className="grid grid-cols-1 lg:h-screen max-h-[60rem] lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt="House"
                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative flex items-center bg-gray-200">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-200"></span>
                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-5xl">
                    Build with mature skills to construct a building
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                    beatae, magni dolores provident quaerat totam eos, aperiam
                    architecto eius quis quibusdam fugiat dicta.
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-blue-600 bg-blue-600 py-2 px-6 text-md font-medium text-white hover:bg-transparent hover:text-blue-600 transition ease-out duration-300 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ----SkillSets---- */}

        {/* ----Projects---- */}
        <section className="mb-24" id="gallery">
          <div className="flex my-10 flex-col text-center">
            <h2 className="text-5xl text-gray-900 font-bold">
              The last big project we worked on
            </h2>
            <div className="mt-3">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/* ----Projects---- */}

        {/* ----FAQ's---- */}
        <section className="my-10 mb-24">
          <div className="flex my-10 flex-col text-center">
            <h2 className="text-5xl font-bold text-gray-900">
              Find the answers you need!
            </h2>
            <div className="mt-3">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>
          <div className="space-y-4">
            <details
              className="group rounded-lg border border-gray-300 p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex items-center justify-between cursor-pointer">
                <h3 className="text-gray-900 font-bold text-2xl sm:text-4xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h3>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <AiFillPlusCircle className="text-gray-600 absolute text-3xl opacity-100 group-open:opacity-0" />
                  <AiFillMinusCircle className="text-gray-600 text-3xl opacity-0 group-open:opacity-100" />
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>

            <details className="group rounded-lg border border-gray-300 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-gray-900 font-bold text-2xl sm:text-4xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <AiFillPlusCircle className="text-gray-600 absolute text-3xl opacity-100 group-open:opacity-0" />
                  <AiFillMinusCircle className="text-gray-600 text-3xl opacity-0 group-open:opacity-100" />
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>

            <details className="group rounded-lg border border-gray-300 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-gray-900 font-bold text-2xl sm:text-4xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <AiFillPlusCircle className="text-gray-600 absolute text-3xl opacity-100 group-open:opacity-0" />
                  <AiFillMinusCircle className="text-gray-600 text-3xl opacity-0 group-open:opacity-100" />
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
          </div>
        </section>
        {/* ----FAQ's---- */}

        {/* ----Contact---- */}
        <section id="contact">
          <div className="bg-gray-200 py-24 px-8 rounded-2xl mb-20 md:flex md:-mx-3 md:items-center md:justify-between">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-5xl md:w-1/3 lg:w-1/2 xl:w-1/3">
              Want to build a big building ?
            </h3>
            <div className="mt-6 shrink-0 md:mt-0 md:w-auto md:mx-10">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full border-b border-gray-400 outline-none md:w-96 p-2 pr-12 bg-transparent text-gray-900"
                    placeholder="john@doe.com"
                  />

                  <span className="absolute inset-y-0 right-4 inline-flex items-center">
                    <HiOutlineMail className="text-xl text-gray-900" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ----Contact---- */}
      </main>
    </div>
  );
}
