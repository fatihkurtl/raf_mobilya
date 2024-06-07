import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div className="container py-4 flex items-center gap-3">
          <Link to="/" className="text-primary text-base">
              <i className="fa-solid fa-house"></i>
          </Link>
          <span className="text-sm text-gray-400">
              <i className="fa-solid fa-chevron-right"></i>
          </span>
          <p className="text-gray-600 font-medium">About Us</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- wrapper --> */}
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <div className="col-span-8">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc auctor, dapibus erat at, hendrerit sem. Fusce sodales velit eu purus consectetur, sed eleifend ex laoreet.</p>
              <p className="text-gray-600 mb-4">Sed eu neque eget ligula faucibus eleifend sit amet sed arcu. Proin ac ultricies ex. Ut et turpis ac sapien facilisis sollicitudin.</p>
              <p className="text-gray-600 mb-4">Integer nec libero et arcu eleifend vestibulum vitae vel enim. Donec tempus diam et diam sagittis, vel viverra mi vehicula. Quisque ac luctus nulla.</p>
          </div>
          <div className="col-span-4">
              <img src="https://via.placeholder.com/300" alt="About Us" className="w-full h-auto rounded" />
          </div>
      </div>
      {/* <!-- ./wrapper --> */}
    </>
  );
};

export default AboutPage;
