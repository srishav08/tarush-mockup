import React, {useState} from "react";
import { Button, Card, CardContent } from "../../components/ui";
import { motion } from "framer-motion";
import ImageUploadModal from "../../components/ImageUploadModal/ImageUploadModal";
import FullPageLoader from "../../components/ui/loader/FullPageLoader";
import './ModularKitchenHomepage.css'
import { useNavigate } from "react-router-dom";

export default function ModularKitchenHomepage() {

  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = () => {
    setShowModal(false);
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      navigate('/my-design')
    }, 5000);
  };
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {showLoader && <FullPageLoader message="Generating Designs" />}
      <header className="py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="cursor-pointer text-3xl font-bold" onClick={()=>{navigate('/')}}>Taarush</h1>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#designs" className="hover:text-blue-600">Designs</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-10 pb-16 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Transform Your Kitchen Into a Modern Masterpiece
          </h3>
          <p className="text-lg text-gray-600">
            Tailored modular kitchen designs crafted to match your lifestyle and home aesthetics.
          </p>
          <Button className="text-lg px-8 py-4 mt-4" onClick={() => setShowModal(true)}>Get Designs</Button>
        </div>
        <img 
          src={`${import.meta.env.BASE_URL}assets/images/kitchen_1.jpg`} 
          alt="Modular Kitchen" 
          className="md:w-1/2 rounded-2xl shadow-xl mt-10 md:mt-0"
        />
      </section>

      <section id="designs" className="px-8 md:px-20 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Popular Designs</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {"Contemporary,Minimalistic,Classic".split(",").map((style, idx) => (
            <Card key={idx} className="hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/images/kitchen_${idx + 2}.jpg`} 
                  alt={style} 
                  className="rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{style} Kitchen</h4>
                <p className="text-gray-600">Elegant and functional {style.toLowerCase()} designs tailored to your home.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="gallery" className="px-8 md:px-20 py-16 bg-gray-100">
        <h3 className="text-3xl font-bold mb-8 text-center">Inspiration Gallery</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <img 
              key={idx} 
              src={`${import.meta.env.BASE_URL}assets/images/kitchen_${idx + 5}.jpg`} 
              alt="Kitchen Inspiration" 
              className="rounded-lg hover:scale-105 transition-transform w-full h-64 object-cover"
            />          
          ))}
        </div>
      </section>

      <section id="contact" className="px-8 md:px-20 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Book a Free Consultation</h3>
        <div className="max-w-2xl mx-auto space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <textarea 
            rows="4" 
            placeholder="Your Requirements" 
            className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <Button className="w-full text-lg py-4">Submit</Button>
        </div>
      </section>

      {showModal && <ImageUploadModal onClose={() => setShowModal(false)} onUpload={handleImageUpload} />}

      <footer className="text-center p-6 bg-gray-200 text-gray-700">
        &copy; {new Date().getFullYear()} Taarush. All Rights Reserved.
      </footer>
    </div>
  );
}
