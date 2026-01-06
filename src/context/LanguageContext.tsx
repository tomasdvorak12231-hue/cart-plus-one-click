import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'cs';

interface Translations {
  home: string;
  products: string;
  checkout: string;
  naturalIngredients: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroDescription: string;
  shopNow: string;
  viewFlavors: string;
  perfectSize: string;
  addedSugar: string;
  deliciousFlavors: string;
  ourCollection: string;
  chooseYour: string;
  flavor: string;
  collectionDescription: string;
  add: string;
  perCan: string;
  contactInfo: string;
  email: string;
  phone: string;
  shippingAddress: string;
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentDetails: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  placeOrder: string;
  orderSummary: string;
  subtotal: string;
  shipping: string;
  free: string;
  total: string;
  yourCartIsEmpty: string;
  addItemsToCart: string;
  backToShop: string;
  yourCart: string;
  close: string;
  proceedToCheckout: string;
  natural: string;
  apple: string;
  strawberry: string;
  naturalDesc: string;
  appleDesc: string;
  strawberryDesc: string;
}

const translations: Record<Language, Translations> = {
  en: {
    home: 'Home',
    products: 'Products',
    checkout: 'Checkout',
    naturalIngredients: '100% Natural Ingredients',
    heroTitle1: 'Pure',
    heroTitle2: 'Refreshment',
    heroTitle3: 'from Nature',
    heroDescription: 'Discover the perfect blend of natural flavors. Crafted with care, every sip brings you closer to nature\'s purest essence.',
    shopNow: 'Shop Now',
    viewFlavors: 'View Flavors',
    perfectSize: 'Perfect Size',
    addedSugar: 'Added Sugar',
    deliciousFlavors: 'Delicious Flavors',
    ourCollection: 'Our Collection',
    chooseYour: 'Choose Your',
    flavor: 'Flavor',
    collectionDescription: 'Each flavor is carefully crafted to deliver the perfect balance of taste and refreshment.',
    add: 'Add',
    perCan: '/ can',
    contactInfo: 'Contact Information',
    email: 'Email',
    phone: 'Phone',
    shippingAddress: 'Shipping Address',
    fullName: 'Full Name',
    address: 'Address',
    city: 'City',
    postalCode: 'Postal Code',
    country: 'Country',
    paymentDetails: 'Payment Details',
    cardNumber: 'Card Number',
    expiryDate: 'Expiry Date',
    cvv: 'CVV',
    placeOrder: 'Place Order',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    free: 'Free',
    total: 'Total',
    yourCartIsEmpty: 'Your cart is empty',
    addItemsToCart: 'Add some items to your cart to proceed with checkout.',
    backToShop: 'Back to Shop',
    yourCart: 'Your Cart',
    close: 'Close',
    proceedToCheckout: 'Proceed to Checkout',
    natural: 'Natural',
    apple: 'Apple',
    strawberry: 'Strawberry',
    naturalDesc: 'Pure mineral water with a clean, refreshing taste',
    appleDesc: 'Crisp apple flavor with natural mineral water',
    strawberryDesc: 'Sweet strawberry essence with sparkling water',
  },
  cs: {
    home: 'Domů',
    products: 'Produkty',
    checkout: 'Pokladna',
    naturalIngredients: '100% Přírodní složení',
    heroTitle1: 'Čisté',
    heroTitle2: 'Osvěžení',
    heroTitle3: 'z Přírody',
    heroDescription: 'Objevte dokonalou směs přírodních chutí. Vyrobeno s péčí, každý doušek vás přiblíží k nejčistší esenci přírody.',
    shopNow: 'Nakupovat',
    viewFlavors: 'Zobrazit příchutě',
    perfectSize: 'Ideální velikost',
    addedSugar: 'Přidaný cukr',
    deliciousFlavors: 'Lahodné příchutě',
    ourCollection: 'Naše kolekce',
    chooseYour: 'Vyberte si',
    flavor: 'Příchuť',
    collectionDescription: 'Každá příchuť je pečlivě vytvořena pro dokonalou rovnováhu chuti a osvěžení.',
    add: 'Přidat',
    perCan: '/ plechovka',
    contactInfo: 'Kontaktní údaje',
    email: 'E-mail',
    phone: 'Telefon',
    shippingAddress: 'Doručovací adresa',
    fullName: 'Celé jméno',
    address: 'Adresa',
    city: 'Město',
    postalCode: 'PSČ',
    country: 'Země',
    paymentDetails: 'Platební údaje',
    cardNumber: 'Číslo karty',
    expiryDate: 'Datum expirace',
    cvv: 'CVV',
    placeOrder: 'Odeslat objednávku',
    orderSummary: 'Souhrn objednávky',
    subtotal: 'Mezisoučet',
    shipping: 'Doprava',
    free: 'Zdarma',
    total: 'Celkem',
    yourCartIsEmpty: 'Váš košík je prázdný',
    addItemsToCart: 'Přidejte nějaké položky do košíku pro pokračování.',
    backToShop: 'Zpět do obchodu',
    yourCart: 'Váš košík',
    close: 'Zavřít',
    proceedToCheckout: 'Pokračovat k pokladně',
    natural: 'Přírodní',
    apple: 'Jablko',
    strawberry: 'Jahoda',
    naturalDesc: 'Čistá minerální voda s osvěžující chutí',
    appleDesc: 'Svěží jablečná příchuť s přírodní minerální vodou',
    strawberryDesc: 'Sladká jahodová esence s perlivou vodou',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
