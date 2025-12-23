import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const PublicHeader = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const texts = {
    fr: {
      search: "Rechercher des articles et marques",
      login: "Se connecter",
      signup: "S'inscrire",
      promo: "Livraison gratuite dès 50€ • Code: HIVER25"
    },
    en: {
      search: "Search for items and brands",
      login: "Log in",
      signup: "Sign up",
      promo: "Free shipping on orders over €50 • Use code: WINTER25"
    }
  };

  const t = texts[language];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Promo Banner */}
      <div className="promo-banner">
        {t.promo}
      </div>
      
      {/* Main Header */}
      <div className="container flex items-center justify-between h-14 md:h-16">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:opacity-70 transition-opacity"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <a href="/" className="font-display text-2xl md:text-3xl font-bold tracking-tighter">
          NEXUS
        </a>

        {/* Language Switch + Auth Buttons */}
        <div className="flex items-center gap-4">
          {/* Language Switch */}
          <div className="language-switch">
            <button 
              className={language === 'fr' ? 'active' : ''}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
            <span>|</span>
            <button 
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>

          {/* Search - Mobile */}
          <button 
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Auth Buttons */}
          <div className="auth-buttons hidden md:flex">
            <button className="auth-btn">{t.login}</button>
            <button className="auth-btn auth-btn-primary">{t.signup}</button>
          </div>
        </div>
      </div>

      {/* Search Bar - Desktop */}
      <div className="hidden md:block border-t border-border">
        <div className="container py-3">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder={t.search}
              className="w-full pl-10 pr-4 py-2 bg-secondary border-none rounded-full text-sm"
            />
          </div>
        </div>
      </div>

      {/* Mobile Search - Expandable */}
      {isSearchOpen && (
        <div className="md:hidden p-4 border-t border-border animate-fade-in">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder={t.search}
              className="w-full pl-10 pr-4 py-2 bg-secondary border-none rounded-full text-sm"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[120px] bg-background z-40 animate-slide-in">
          <nav className="flex flex-col p-6 gap-4">
            <a href="/login" className="text-lg font-medium py-2 border-b border-border">{t.login}</a>
            <a href="/signup" className="text-lg font-bold py-2 border-b border-border">{t.signup}</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default PublicHeader;
