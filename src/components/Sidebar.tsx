import React, { useState } from 'react';
import { Menu, X, ChevronDown, Trophy, Calendar, Users, GraduationCap, ShoppingCart, Video, Newspaper } from 'lucide-react';

// Logo de Olimpia en base64
const OLIMPIA_LOGO = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIwIDIwYzU1LjIgMCAxMDAgNDQuOCAxMDAgMTAwcy00NC44IDEwMC0xMDAgMTAwUzIwIDE3NS4yIDIwIDEyMCA2NC44IDIwIDEyMCAyMHptMCA4YzUwLjggMCA5MiA0MS4yIDkyIDkycy00MS4yIDkyLTkyIDkyLTkyLTQxLjItOTItOTIgNDEuMi05MiA5Mi05MnptMCAxNmMtNDIgMC03NiAzNC03NiA3NnMzNCA3NiA3NiA3NiA3Ni0zNCA3Ni03Ni0zNC03Ni03Ni03NnptMCA4YzM3LjYgMCA2OCAzMC40IDY4IDY4cy0zMC40IDY4LTY4IDY4LTY4LTMwLjQtNjgtNjggMzAuNC02OCA2OC02OHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIwIDQ0Yy00Mi40IDAtNzYuOCAzNC40LTc2LjggNzYuOHMzNC40IDc2LjggNzYuOCA3Ni44IDc2LjgtMzQuNCA3Ni44LTc2LjhTMTYyLjQgNDQgMTIwIDQ0em0wIDhjMzcuNiAwIDY4IDMwLjQgNjggNjhzLTMwLjQgNjgtNjggNjgtNjgtMzAuNC02OC02OCAzMC40LTY4IDY4LTY4eiIvPjx0ZXh0IHg9IjEyMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9MSU1QSUE8L3RleHQ+PC9zdmc+`;

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  submenu?: string[];
  externalLink?: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Academia',
    icon: <GraduationCap className="w-5 h-5" />,
    submenu: ['Academias asociadas', 'Quiero ser olimpista', 'Categorías']
  },
  {
    title: 'Partidos',
    icon: <Calendar className="w-5 h-5" />,
    submenu: ['Calendario', 'Resultados', 'Clasificación']
  },
  {
    title: 'Equipo',
    icon: <Users className="w-5 h-5" />,
    submenu: ['Plantilla', 'Cuerpo Técnico', 'Juveniles']
  },
  {
    title: 'Trofeos',
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: 'Noticias',
    icon: <Newspaper className="w-5 h-5" />,
    submenu: ['Últimas Noticias', 'Comunicados', 'Entrevistas']
  },
  {
    title: 'Multimedia',
    icon: <Video className="w-5 h-5" />,
    submenu: ['Videos', 'Fotos', 'Wallpapers']
  },
  {
    title: 'Tienda Oficial',
    icon: <ShoppingCart className="w-5 h-5" />,
    externalLink: 'https://store.clubolimpia.com.py/'
  }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className={`fixed top-0 left-0 h-full bg-black text-white w-64 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } z-40`}>
        <div className="p-4">
          <div className="mb-8 text-center">
            <div className="w-24 h-24 mx-auto mb-2 relative">
              <img 
                src={OLIMPIA_LOGO}
                alt="Olimpia Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <nav>
            {menuItems.map((item) => (
              <div key={item.title} className="mb-2">
                {item.externalLink ? (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => setExpandedItem(expandedItem === item.title ? null : item.title)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-900 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      {item.submenu && (
                        <ChevronDown className={`w-5 h-5 transition-transform ${
                          expandedItem === item.title ? 'rotate-180' : ''
                        }`} />
                      )}
                    </button>
                    
                    {item.submenu && expandedItem === item.title && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block p-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;