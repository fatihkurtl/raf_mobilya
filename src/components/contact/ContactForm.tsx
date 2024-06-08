
import { useState } from "react";
import useSwal from "../../composables/useSwal";
import IContact from "../../interfaces/contact";

const ContactFormComp = () => {

    const { success, wargning } = useSwal();

    const [formData, setFormData] = useState<IContact>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {            
            wargning("Uyarı", "Lütfen tüm alanları doldurun");
            return false;
        } else {
            success("Başarılı", "Mesajınız başarılı bir şekilde gönderildi");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }
    };

  return (
    <div className="col-span-1 space-y-4">
      <h2 className="text-gray-800 text-2xl font-medium uppercase mb-6">
        İletişim
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-gray-600">Ad Soyad</label>
          <input onChange={handleChange} value={formData.name} type="text" name="name" id="name" className="input-box" />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-600">Email</label>
          <input onChange={handleChange} value={formData.email} type="email" name="email" id="email" className="input-box" />
        </div>
        <div>
          <label htmlFor="subject" className="text-gray-600">Konu</label>
          <input onChange={handleChange} value={formData.subject} type="text" name="subject" id="subject" className="input-box" />
        </div>
        <div>
          <label htmlFor="message" className="text-gray-600">Mesaj</label>
          <textarea onChange={handleChange} value={formData.message} name="message" id="message" className="input-box h-32"></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactFormComp;
