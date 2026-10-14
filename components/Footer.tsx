import Image from "next/image";
import { MessageCircle, MapPin, Clock, Phone, Heart } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-[#060807] border-t border-[#1a231d] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#22c55e]">
                <Image
                  src="/images/logo.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-black text-lg text-white">D&apos;Toditos Sushi</div>
                <div className="text-[#22c55e] text-xs font-bold tracking-widest uppercase">
                  Sushi &amp; Bajón
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Las mejores combinaciones de sushi, sushi burgers crujientes, salchipapas, gohan y tortas para tus juntas. Hecho al instante con amor y sabor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-sm tracking-wider uppercase">
              Categorías
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#menu" className="hover:text-[#4ade80] transition-colors">
                  Promociones de Sushi (20 a 140 pzas)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#4ade80] transition-colors">
                  Sushi Burgers &amp; Rolls Sin Arroz
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#4ade80] transition-colors">
                  Tortas de Sushi &amp; Ramos Especiales
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#4ade80] transition-colors">
                  Salchipapas, Chorrillanas &amp; Papas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#4ade80] transition-colors">
                  Hamburguesas, Churrascos &amp; Arepas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#4ade80] transition-colors">
                  Fresas con Crema Artesanal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-sm tracking-wider uppercase">
              Contacto y Pedidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#4ade80] transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span>WhatsApp: {siteConfig.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#4ade80] transition-colors text-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span>Instagram: {siteConfig.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#4ade80] transition-colors text-sm"
                >
                  <FacebookIcon className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span>Facebook: {siteConfig.facebookName}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>{siteConfig.location} · Delivery y Retiro</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#17201a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} D&apos;Toditos Sushi — Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Pide online y disfruta directo en tu puerta <Heart className="w-3.5 h-3.5 text-[#22c55e] fill-[#22c55e]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
