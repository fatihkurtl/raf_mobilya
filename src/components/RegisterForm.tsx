import { Link } from "react-router-dom";
import { useState } from "react";
import { IRegisterData } from "../interfaces/register";
import useSwal from "../composables/useSwal";

const RegisterForm = () => {

    const { success, wargning } = useSwal();

    const [formData, setFormData] = useState<IRegisterData>({
        name: "",
        email: "",
        password: "",
        confirm: "",        
        aggrement: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.aggrement) {
            wargning("Uyarı", "Lütfen hüküm ve koşulları kabul edin");
            return;
        }
        if (formData.password !== formData.confirm) {
            wargning("Uyarı", "Şifreler uyuşmuyor");
            return;
        }
        if (formData.password.length < 6) {
            wargning("Uyarı", "Şifre en az 6 karakter olmalıdır");
            return;
        }
        if (!formData.name || !formData.email || !formData.password || !formData.confirm) {
            wargning("Uyarı", "Lütfen tüm alanları doldurun");
            return false;
        } else {
            success("Başarılı", "Hesabınız başarılı bir şekilde oluşturuldu");
            setFormData({
                name: "",
                email: "",
                password: "",
                confirm: "",
                aggrement: false,
            });
        }
    };

    return (
        <>
        <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
            <p className="text-gray-600 mb-6 text-sm">
                Register for new cosutumer
            </p>
            <form onSubmit={handleSubmit} method="post" autoComplete="on">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="name" className="text-gray-600 mb-2 block">Full Name</label>
                        <input onChange={handleChange} value={formData.name} type="text" name="name" id="name"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="fulan fulana"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
                        <input onChange={handleChange} value={formData.email} type="email" name="email" id="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
                        <input onChange={handleChange} value={formData.password} type="password" name="password" id="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                    <div>
                        <label htmlFor="confirm" className="text-gray-600 mb-2 block">Confirm password</label>
                        <input onChange={handleChange} value={formData.confirm} type="password" name="confirm" id="confirm"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******" />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" onChange={handleChange} name="aggrement" id="aggrement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                        <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                href="#" className="text-primary">terms & conditions</a></label>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit"
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                        account</button>
                </div>
            </form>

            <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div className="mt-4 flex gap-4">
                <a href="#"
                    className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div>
            <p className="mt-4 text-center text-gray-600">Already have account? <Link to="/giris"
                    className="text-primary">Login now</Link></p>
        </div>
    </div>
        </>
    );
};

export default RegisterForm;