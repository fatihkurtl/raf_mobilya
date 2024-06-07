import { Link } from "react-router-dom";

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
                <div className="col-span-1 space-y-4">
                    <h2 className="text-gray-800 text-2xl font-medium uppercase mb-6">İletişim</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="text-gray-600">Ad Soyad</label>
                            <input type="text" className="input-box" />
                        </div>
                        <div>
                            <label className="text-gray-600">Email</label>
                            <input type="email" className="input-box" />
                        </div>
                        <div>
                            <label className="text-gray-600">Konu</label>
                            <input type="text" className="input-box" />
                        </div>
                        <div>
                            <label className="text-gray-600">Mesaj</label>
                            <textarea className="input-box h-32"></textarea>
                        </div>
                        <button type="submit" className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Gönder</button>
                    </form>
                </div>

                <div className="col-span-1">
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-gray-800 text-lg font-medium mb-2">İletişim Bilgileri</h3>
                        <p className="text-gray-600">Adres: 123 Sokak, Şehir, Ülke</p>
                        <p className="text-gray-600">Telefon: +90 123 456 7890</p>
                        <p className="text-gray-600">E-posta: info@example.com</p>
                        <h3 className="text-gray-800 text-lg font-medium mt-4 mb-2">Konum</h3>
                        {/* Harita buraya eklenecek */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127715.7159246795!2d28.855519707738653!3d41.008237070214484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab44dd89baf6b%3A0xfbc39992f1aade99!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1623146672106!5m2!1sen!2s" width="100%" height="200" style={{border:0}} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            {/* <!-- ./wrapper --> */}
        </>
    );
}

export default ContactPage;
