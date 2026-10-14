import Image from "next/image";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="D'Toditos Sushi"
                width={50}
                height={50}
                className="rounded-full border border-green-500/20"
              />
              <div>
                <div className="font-black text-lg">D&apos;Toditos Sushi</div>
                <div className="text-[#22c55e] text-xs tracking-widest uppercase">
                  SUSHI &amp; COMIDA RÁPIDA
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sushi y comida rápida en Quillón. Rolls frescos, sushi burgers,
              salchipapas, chorrillanas y promociones para compartir.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">
              Menú
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="#menu" className="hover:text-white transition-colors">Promos de Sushi</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Sushi Burgers</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Rolls &amp; Gohan</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Tortas &amp; Especiales</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Salchipapas &amp; Chorrillanas</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Hamburguesas &amp; Extras</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#22c55e] shrink-0" />
                  WhatsApp — {siteConfig.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-[#22c55e] shrink-0" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <FacebookIcon className="w-4 h-4 text-[#22c55e] shrink-0" />
                  {siteConfig.facebookHandle}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#22c55e] shrink-0" />
                {siteConfig.location} · Delivery y Retiro
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-[#22c55e] shrink-0" />
                {siteConfig.schedule}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} D&apos;Toditos Sushi — Quillón, Chile
          </p>
          <p className="text-gray-600 text-xs">
            Hecho con cariño y mucho sabor
          </p>
        </div>
      </div>
    </footer>
  );
}
