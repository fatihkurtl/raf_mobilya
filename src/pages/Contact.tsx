import { Link } from "react-router-dom";
import ContactFormComp from "../components/contact/ContactForm";
import AddressComp from "../components/contact/Address";

const ContactPage = () => {
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
        <p className="text-gray-600 font-medium">İletişim</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- wrapper --> */}
      <div className="container grid grid-cols-2 items-start gap-6 pt-4 pb-16">
        <ContactFormComp />

        <AddressComp />
      </div>
      {/* <!-- ./wrapper --> */}
    </>
  );
};

export default ContactPage;
