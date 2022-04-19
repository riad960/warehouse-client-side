import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Service from "../Service/Service";
import "./Home.css";
import UseData from "../Customhook/UseData";
function Home() {
  const data = UseData();
  console.log(data);
  return (
    <MDBContainer className="flex  justify-center my-carousole">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative "
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
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center items-in-center">
              <h5 className="text-xl my-2">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <MDBBtn color="light" className="my-2">
                Button
              </MDBBtn>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center items-in-center">
              <h5 className="text-xl my-2">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <MDBBtn color="light" className="my-2">
                Button
              </MDBBtn>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center items-in-center">
              <h5 className="text-xl my-2">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.Some
                representative placeholder content for the third slide.Some
                representative placeholder content for the third slide.
              </p>
              <MDBBtn color="light" className="my-2">
                Button
              </MDBBtn>
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

      {/* slider ends */}
      <section className="" style={{ background: "#eee" }}>
        <div className="container py-5">
          <h1 className="text-center my-5 ">Our Services</h1>
          <div className="row">
            {data.map((item) => (
              <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 my-5">
                <Service
                  key={item.id}
                  price={item.price}
                  name={item.name}
                  des={item.description}
                  img={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MDBContainer>
  );
}

export default Home;
