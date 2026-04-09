/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [showOrderForm, setShowOrderForm] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [cart, setCart] = React.useState<any[]>([]);
  const [language, setLanguage] = React.useState<"en" | "fr" | "cr">("en");
  const [selections, setSelections] = React.useState<Record<string, any>>({});
  const [orderForm, setOrderForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [reviews] = React.useState([
    {
      id: 1,
      name: "Amina Patel",
      rating: 5,
      comment: "Authentic taste that reminds me of Morocco! Fast delivery to Port Louis.",
      location: "Port Louis",
    },
    {
      id: 2,
      name: "Hassan Ali",
      rating: 5,
      comment: "Best Moroccan sweets in Mauritius. The baklava is incredible!",
      location: "Curepipe",
    },
    {
      id: 3,
      name: "Fatima Begum",
      rating: 5,
      comment: "Perfect for Eid celebrations. Quality is outstanding.",
      location: "Quatre Bornes",
    },
    {
      id: 4,
      name: "Reaz Elleybaccus",
      rating: 5,
      comment: "Succulent cakes. Quality good and taste yummy.",
      location: "Quatre Bornes",
    },
  ]);

  const [currentReview, setCurrentReview] = React.useState(0);
  const [currentImageIndices, setCurrentImageIndices] = React.useState<Record<number, number>>({});

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const updateImageIndex = (productId: number, newIndex: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [productId]: newIndex,
    }));
  };

  const translations = {
    en: {
      siteName: "Wafaz Sweets",
      nav: {
        home: "Home",
        products: "Products",
        about: "About",
        blog: "Blog",
        contact: "Contact",
      },
      hero: {
        title: "Authentic Moroccan & Mauritian Delights",
        subtitle: "Experience the rich flavors of Morocco and Mauritius, delivered fresh to your doorstep. Handcrafted with traditional recipes and premium ingredients.",
        shopNow: "Shop Now",
        customOrder: "Custom Order",
      },
      features: {
        freeDelivery: "Delivery Information",
        freeDeliveryDesc: "Delivery charges within Plaines Wilhems: Rs 150. Outside this perimeter: Rs 200-500.",
        freshDaily: "Fresh Daily",
        freshDailyDesc: "Made fresh daily with premium ingredients",
        authentic: "Authentic Recipe",
        authenticDesc: "Traditional recipes passed down through generations",
      },
      products: {
        title: "Our Products",
        addToCart: "Add to Cart",
        bestseller: "Bestseller",
        seasonal: "Seasonal",
        new: "New",
        allProducts: "All Products",
        moroccanSweets: "Moroccan Sweets",
        veg: "Veg",
        priceVaries: "Price varies",
        selectOption: "Select an option",
      },
      reviews: {
        title: "Customer Reviews",
        leaveReview: "Leave a Review",
        name: "Name",
        location: "City/Town",
        rating: "Rating",
        comment: "Comment",
        submit: "Submit Review",
      },
      about: {
        title: "Our Story",
        story1: "Founded by the Wafaz family, we bring authentic Moroccan and Mauritian flavors to your home. Our recipes have been passed down through generations, ensuring every bite captures the essence of traditional craftsmanship.",
        story2: "Using only the finest ingredients, we create sweets and savory treats that transport you to the bustling souks of Marrakech and the vibrant streets of Mauritius.",
      },
      blog: {
        title: "Latest from Our Blog",
        readMore: "Read More",
      },
      footer: {
        description: "Authentic Moroccan and Mauritian delights delivered fresh across Mauritius. Order online for convenient delivery.",
        contactInfo: "Contact Info",
        deliveryAreas: "Delivery Info",
        followUs: "Follow Us",
        copyright: "© 2025 Wafaz Sweets. All rights reserved.",
      },
      cart: {
        title: "Shopping Cart",
        empty: "Your cart is empty",
        total: "Total:",
        checkout: "Checkout via WhatsApp",
        basePrice: "(base)",
      },
      orderForm: {
        title: "Custom Order",
        name: "Name",
        phone: "Phone",
        email: "Email",
        product: "Product",
        selectProduct: "Select a product",
        quantity: "Quantity",
        instructions: "Special Instructions",
        placeholder: "Any special requests or delivery instructions...",
        submit: "Send Order via WhatsApp",
      },
    },
    fr: {
      siteName: "Wafaz Sweets",
      nav: {
        home: "Accueil",
        products: "Produits",
        about: "À Propos",
        blog: "Blog",
        contact: "Contact",
      },
      hero: {
        title: "Délices Marocains & Mauriciens Authentiques",
        subtitle: "Découvrez les riches saveurs du Maroc et de l'île Maurice livrées fraîches à votre porte. Fabriquées artisanalement avec des recettes traditionnelles et des ingrédients de qualité.",
        shopNow: "Acheter Maintenant",
        customOrder: "Commande Personnalisée",
      },
      features: {
        freeDelivery: "Informations sur la Livraison",
        freeDeliveryDesc: "Frais de livraison dans les Plaines Wilhems : Rs 150. En dehors de ce périmètre : Rs 200-500.",
        freshDaily: "Frais Quotidiennement",
        freshDailyDesc: "Fabriqués frais quotidiennement avec des ingrédients de qualité",
        authentic: "Recette Authentique",
        authenticDesc: "Recettes traditionnelles transmises de génération en génération",
      },
      products: {
        title: "Nos Produits",
        addToCart: "Ajouter au Panier",
        bestseller: "Bestseller",
        seasonal: "Saisonnier",
        new: "Nouveau",
        allProducts: "Tous les Produits",
        moroccanSweets: "Pâtisseries Marocaines",
        veg: "Végétarien",
        priceVaries: "Prix variable",
        selectOption: "Sélectionnez une option",
      },
      reviews: {
        title: "Avis Clients",
        leaveReview: "Laissez un avis",
        name: "Nom",
        location: "Ville",
        rating: "Note",
        comment: "Commentaire",
        submit: "Soumettre l'avis",
      },
      about: {
        title: "Notre Histoire",
        story1: "Fondée par la famille Wafaz, nous apportons les saveurs authentiques du Maroc et de l'île Maurice chez vous. Nos recettes sont transmises de génération en génération, garantissant que chaque bouchée capture l'essence de l'artisanat traditionnel.",
        story2: "En utilisant uniquement les meilleurs ingrédients, nous créons des douceurs et des mets salés qui vous transportent dans les souks animés de Marrakech et les rues vibrantes de l'île Maurice.",
      },
      blog: {
        title: "Dernières de Notre Blog",
        readMore: "Lire Plus",
      },
      footer: {
        description: "Délices marocains et mauriciens authentiques livrés frais à travers Maurice. Commandez en ligne pour une livraison pratique.",
        contactInfo: "Informations de Contact",
        deliveryAreas: "Zones de Livraison",
        followUs: "Suivez-Nous",
        copyright: "© 2025 Wafaz Sweets. Tous droits réservés.",
      },
      cart: {
        title: "Panier d'Achat",
        empty: "Votre panier est vide",
        total: "Total:",
        checkout: "Commander via WhatsApp",
        basePrice: "(base)",
      },
      orderForm: {
        title: "Commande Personnalisée",
        name: "Nom",
        phone: "Téléphone",
        email: "Email",
        product: "Produit",
        selectProduct: "Sélectionner un produit",
        quantity: "Quantité",
        instructions: "Instructions Spéciales",
        placeholder: "Demandes spéciales ou instructions de livraison...",
        submit: "Envoyer Commande via WhatsApp",
      },
    },
    cr: {
      siteName: "Wafaz Sweets",
      nav: {
        home: "Lakaz",
        products: "Prodwi",
        about: "Nou Listwar",
        blog: "Blog",
        contact: "Kontak",
      },
      hero: {
        title: "Délis Marokin & Morisyen Otantik",
        subtitle: "Gout riches savèr Maroc ek Moris ki nou livre fre devan ou laport. Fer ak lamèn ak resèt tradisionèl ek ingrédien kalité.",
        shopNow: "Asèt Astèr",
        customOrder: "Komand Spésial",
      },
      features: {
        freeDelivery: "Info lor Livrézon",
        freeDeliveryDesc: "Fré livrézon dan Plaines Wilhems : Rs 150. Andeor sa perimet la : Rs 200-500.",
        freshDaily: "Frais Quotidiennement",
        freshDailyDesc: "Fer fre sak zour ak ingrédien kalité",
        authentic: "Recette Otantik",
        authenticDesc: "Recette tradisionèl ki pas depi génération",
      },
      products: {
        title: "Nou Prodwi",
        addToCart: "Met Dan Panié",
        bestseller: "Pi Populèr",
        seasonal: "Sézonnèl",
        new: "Nouvo",
        allProducts: "Tout Prodwi",
        moroccanSweets: "Dousèr Marokin",
        veg: "Veg",
        priceVaries: "Pri varié",
        selectOption: "Swazir enn opsion",
      },
      reviews: {
        title: "Sa Klian Pé Dir",
        leaveReview: "Les enn komenter",
        name: "Non",
        location: "Landrwa",
        rating: "Not",
        comment: "Komenter",
        submit: "Soumet komenter",
      },
      about: {
        title: "Nou Listwar",
        story1: "Fondé par lafamiy Wafaz, nou apport gout Marokin ek Morisyen otantik kot ou. Nou resèt finn pas depi génération, asir sak bout kapav gout lesans artizana tradisionèl.",
        story2: "Nou servi sèlman pi bon ingrédien, nou kré dousèr ek zafèr salé ki amèn ou dan souk animé Marrakech ek dan léritaj vibran Moris.",
      },
      blog: {
        title: "Dèrnié Nouvèl Nou Blog",
        readMore: "Lir Plis",
      },
      footer: {
        description: "Délis Marokin ek Morisyen otantik ki nou livre fre dan tout Moris. Komand online pou livrézon fasil.",
        contactInfo: "Info Kontak",
        deliveryAreas: "Kote Nou Livre",
        followUs: "Swiv Nou",
        copyright: "© 2025 Wafaz Sweets. Tout drwa réservé.",
      },
      cart: {
        title: "Panié Asèt",
        empty: "Ou panié vid",
        total: "Total:",
        checkout: "Komand Lor WhatsApp",
        basePrice: "(baz)",
      },
      orderForm: {
        title: "Komand Spésial",
        name: "Non",
        phone: "Téléfon",
        email: "Email",
        product: "Prodwi",
        selectProduct: "Swazir enn prodwi",
        quantity: "Kantité",
        instructions: "Instruksion Spésial",
        placeholder: "Demand spésial oswa instruksion livrézon...",
        submit: "Anvoy Komand Lor WhatsApp",
      },
    },
  };

  const t = translations[language];

  const categories = [
    { id: "all", name: t.products.allProducts },
    { id: "moroccan-sweets", name: t.products.moroccanSweets },
    { id: "veg", name: t.products.veg },
  ];

  const products = [
    {
      id: 1,
      name: "Almond Briouats",
      category: "veg",
      price: 35,
      images: [
        "https://i.pinimg.com/736x/c3/fd/f8/c3fdf84e1e0d78ef8007ef587d16bdda.jpg",
        "https://i.pinimg.com/736x/a3/6e/53/a36e53ea0cd239c1c4eafed9e8ca607b.jpg",
        "https://i.pinimg.com/736x/4b/71/0a/4b710addaf398f4f048755844b657afb.jpg",
        "https://i.pinimg.com/736x/fd/33/a5/fd33a5635c047a22f2f1995271b50388.jpg",
      ],
      description: "Crispy triangular pastries filled with sweet almond paste.",
      bestseller: true,
    },
    {
      id: 2,
      name: "Melka Cacawette",
      category: "moroccan-sweets",
      price: 30,
      images: [
        "https://i.pinimg.com/1200x/17/ee/15/17ee156b86c0757840f41f7700997000.jpg",
        "https://i.pinimg.com/1200x/f9/51/3d/f9513d270e7ba570aa07db7962f99f78.jpg",
        "https://i.pinimg.com/1200x/c3/c3/6b/c3c36bb49dc22597f2161c5d92556cff.jpg",
        "https://i.pinimg.com/1200x/4f/52/59/4f525991ba5c9f148cebce8d1fa28cb6.jpg",
      ],
      description: "Moroccan peanut cookies with a distinctive crackled surface and rich, nutty flavour - a beloved classic.",
      bestseller: true,
    },
    {
      id: 3,
      name: "Cigar Amande",
      category: "veg",
      price: 35,
      images: [
        "https://i.pinimg.com/1200x/fd/9d/14/fd9d14a5bd6707b641e8373f452daa51.jpg",
        "https://i.pinimg.com/1200x/33/a5/27/33a5278e808fd4259a4b66552aa9201c.jpg",
        "https://i.pinimg.com/736x/d4/c6/a6/d4c6a6420ef9c13a3dd94e670dcb2206.jpg",
        "https://i.pinimg.com/736x/3a/6d/66/3a6d66f356787814b802e7c4f2091ea7.jpg",
      ],
      description: "A traditional Maghreb pastry, these almond cigars are made with brick pastry filled with almonds, fried until golden, and coated in a sweet honey syrup.",
      new: true,
    },
    {
      id: 4,
      name: "Cigar Cacawette",
      category: "veg",
      price: 30,
      images: [
        "https://i.pinimg.com/1200x/c9/d6/b7/c9d6b736f48a6d2a6d767b173fd91443.jpg",
        "https://i.pinimg.com/736x/70/30/43/703043ebdd3c3fe2c322923518c7080a.jpg",
        "https://i.pinimg.com/736x/fb/43/30/fb43306a877ab83b223e46ca6328eefd.jpg",
        "https://i.pinimg.com/1200x/63/4a/3c/634a3cbb78ee3da414bdbeea33841c34.jpg",
        "https://i.pinimg.com/736x/68/bf/9d/68bf9d24561355859b9c3856d7085516.jpg",
      ],
      description: "Crispy, golden rolls filled with a sweet and savory peanut paste, drizzled with honey and sesame seeds. An irresistible nutty delight.",
      new: true,
    },
    {
      id: 5,
      name: "Ghoriba Bahla",
      category: "veg",
      price: 30,
      images: [
        "https://i.pinimg.com/736x/d5/ef/4d/d5ef4da83e6fdf87b0f2e6a88fd2a223.jpg",
        "https://i.pinimg.com/736x/87/2d/a8/872da8c87a2c3e65ae99624045b01ad7.jpg",
        "https://i.pinimg.com/1200x/e5/86/b8/e586b807a06396a991437da6a8d6c30f.jpg",
        "https://i.pinimg.com/1200x/77/6e/40/776e402f3f29383b1dec497d4fdeb557.jpg",
      ],
      description: "Melt-in-your-mouth Moroccan shortbread cookies with crackled tops. Toasted sesame seeds and ground almonds add nutty crunch.",
      bestseller: true,
    },
    {
      id: 6,
      name: "Halal Belouz",
      category: "moroccan-sweets",
      price: 25,
      images: [
        "https://i.pinimg.com/736x/b4/90/d8/b490d8a94d0f09780283f8e432026387.jpg",
        "https://i.pinimg.com/736x/48/87/a1/4887a1cc197e26016f7222b7fd25d2ee.jpg",
        "https://i.pinimg.com/736x/2f/f2/99/2ff29915f68ddf5911435a3d200f8353.jpg",
        "https://i.pinimg.com/736x/69/3e/60/693e60dd3104445efdd66da65bc70eb5.jpg",
      ],
      description: "Crescent filled with almonds, which is either decorated with nuts or fine sugar.",
      bestseller: true,
    },
    {
      id: 7,
      name: "Honey Chebakia",
      category: "moroccan-sweets",
      price: 30,
      images: [
        "https://i.pinimg.com/1200x/4d/9a/79/4d9a79b0b732eb2e48dba90e5335ff34.jpg",
        "https://i.pinimg.com/736x/94/f0/8a/94f08acc7ee97acc7790a27f09663fad.jpg",
        "https://i.pinimg.com/736x/6c/aa/69/6caa6991d246886490938cc5f3ebc5c1.jpg",
        "https://i.pinimg.com/1200x/9e/94/2a/9e942a8d43d0534b42a832cdbcc78d96.jpg",
      ],
      description: "Traditional Moroccan flower-shaped pastry with sesame seeds and honey glaze - crispy, golden spirals that are perfectly sweet.",
      seasonal: true,
    },
    {
      id: 8,
      name: "Kaab el Ghazal",
      category: "veg",
      price: 35,
      images: [
        "https://i.pinimg.com/736x/44/23/6f/44236fa1b9ff1f9a6b18e9f0dc1a3756.jpg",
        "https://i.pinimg.com/1200x/62/99/8f/62998fe876a3e3e99b3755145b9eafe8.jpg",
      ],
      description: "Delicate crescent-shaped pastries filled with sweet almond paste - the famous 'gazelle horns' that melt in your mouth.",
      bestseller: true,
    },
    {
      id: 9,
      name: "Melka Amande",
      category: "moroccan-sweets",
      price: 35,
      images: [
        "https://i.pinimg.com/1200x/9c/68/f9/9c68f9c23d6d153ab7ef273fbd1af433.jpg",
        "https://i.pinimg.com/736x/0a/84/ca/0a84caa07a393a83746de9a1919dea1a.jpg",
        "https://i.pinimg.com/736x/ae/c1/7b/aec17b42698faf36e962c4f26a668332.jpg",
        "https://i.pinimg.com/1200x/44/16/b0/4416b0805bfb31cbf99c22f5c18db782.jpg",
      ],
      description: "Exquisite almond cookies, intricately decorated and often topped with icing sugar. A royal treat that is as beautiful as it is delicious.",
      seasonal: true,
    },
    {
      id: 10,
      name: "Sable Tamar",
      category: "moroccan-sweets",
      price: 30,
      images: [
        "https://i.pinimg.com/1200x/9b/53/d3/9b53d355d79a8730152b2f583502c16c.jpg",
        "https://i.pinimg.com/736x/f1/ad/15/f1ad15fcdbd87591b3235e2f958367d9.jpg",
        "https://i.pinimg.com/736x/86/04/16/8604168cfbcc9117d83db5172eab10ef.jpg",
      ],
      description: "Delicate pastry shells filled with crushed walnuts and drizzled with rich dates - an elegant Moroccan treat.",
      bestseller: true,
    },
    {
      id: 12,
      name: "Traditional Kakee",
      category: "veg",
      price: 25,
      images: [
        "https://i.pinimg.com/1200x/c1/2c/02/c12c0259c69d835d8a29c6dfe643a186.jpg",
        "https://i.pinimg.com/736x/43/7b/95/437b95a0273a13daaa9f4f95415e748a.jpg",
        "https://i.pinimg.com/1200x/fc/f2/eb/fcf2ebacd574ecb2f1f5a67ae6c1bbfe.jpg",
        "https://i.pinimg.com/736x/08/9d/11/089d119bdd045b7d511abe733961bc91.jpg",
      ],
      description: "Classic Moroccan ring-shaped cookies with a tender, crumbly texture - perfect with mint tea or coffee",
      seasonal: false,
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Making Traditional Baklava",
      excerpt: "Discover the secrets behind our authentic baklava recipe...",
      image: "https://picsum.photos/seed/baklava/800/600",
      date: "2025-01-10",
    },
    {
      id: 2,
      title: "Moroccan Sweets for Ramadan",
      excerpt: "Essential Moroccan treats for your Iftar table...",
      image: "https://picsum.photos/seed/ramadan/800/600",
      date: "2025-01-08",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleSelectionChange = (productId: number, field: string, value: any) => {
    setSelections((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [field]: value,
      },
    }));
  };

  const addToCart = (product: any, details: any = {}) => {
    const { option, quantity = 1 } = details;

    let cartId = product.id;
    let name = product.name;
    let price = product.price;

    if (product.prices) {
      if (!option) {
        alert("Please select an option.");
        return;
      }
      cartId = `${product.id}-${option}`;
      name = `${product.name} (${option})`;
      price = product.prices[option];
    }

    const existingItem = cart.find((item) => item.id === cartId);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, id: cartId, name, price, quantity }]);
    }
  };

  const removeFromCart = (productId: any) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: any, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - Rs ${item.price * item.quantity}`
      )
      .join("\n");

    const total = getTotalPrice();
    const whatsappMessage = `Hello! I'd like to place an order:\n\n${orderDetails}\n\nTotal: Rs ${total}\n\nPlease confirm availability and delivery details.`;

    const whatsappUrl = `https://wa.me/23057561788?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowCart(false);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'd like to place a custom order:\nName: ${orderForm.name}\nPhone: ${orderForm.phone}\nEmail: ${orderForm.email}\nProduct: ${orderForm.product}\nQuantity: ${orderForm.quantity}\nMessage: ${orderForm.message}`;

    const whatsappUrl = `https://wa.me/23057561788?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowOrderForm(false);
    setOrderForm({
      name: "",
      phone: "",
      email: "",
      product: "",
      quantity: "",
      message: "",
    });
  };

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 font-sans">
      <header className="bg-gradient-to-r from-amber-800 to-orange-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border-2 border-amber-400">
                <img
                  src="https://i.pinimg.com/1200x/da/d4/1e/dad41e5265a9a39952d1c6cc90faf320.jpg"
                  alt="Wafaz Sweets Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-playfair">{t.siteName}</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex space-x-2">
                {(["en", "fr", "cr"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
                      language === lang
                        ? "bg-amber-600 text-white"
                        : "text-amber-200 hover:text-white"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <nav className="hidden md:flex space-x-6 font-medium">
                <a href="#home" className="hover:text-amber-200 transition-colors">{t.nav.home}</a>
                <a href="#products" className="hover:text-amber-200 transition-colors">{t.nav.products}</a>
                <a href="#about" className="hover:text-amber-200 transition-colors">{t.nav.about}</a>
                <a href="#contact" className="hover:text-amber-200 transition-colors">{t.nav.contact}</a>
              </nav>
              <button
                onClick={() => setShowCart(true)}
                className="relative bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors"
              >
                <i className="fas fa-shopping-cart text-lg"></i>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-playfair text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-200"
          >
            {t.hero.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-amber-100/90 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToProducts}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-10 py-4 rounded-full font-bold hover:from-yellow-300 hover:to-amber-400 transition-all transform hover:scale-105 shadow-xl"
            >
              {t.hero.shopNow}
            </button>
            <button
              onClick={() => setShowOrderForm(true)}
              className="border-2 border-amber-300 text-amber-100 px-10 py-4 rounded-full font-bold hover:bg-amber-300 hover:text-amber-900 transition-all"
            >
              {t.hero.customOrder}
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <i className="fas fa-truck text-amber-700 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-amber-900 font-playfair">{t.features.freeDelivery}</h3>
              <p className="text-gray-600 leading-relaxed">{t.features.freeDeliveryDesc}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <i className="fas fa-cookie-bite text-amber-700 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-amber-900 font-playfair">{t.features.freshDaily}</h3>
              <p className="text-gray-600 leading-relaxed">{t.features.freshDailyDesc}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <i className="fas fa-scroll text-amber-700 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-amber-900 font-playfair">{t.features.authentic}</h3>
              <p className="text-gray-600 leading-relaxed">{t.features.authenticDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4 font-playfair">{t.products.title}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  selectedCategory === category.id
                    ? "bg-amber-800 text-white shadow-xl scale-105"
                    : "bg-white text-amber-800 hover:bg-amber-100 border border-amber-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => {
                const currentImageIndex = currentImageIndices[product.id] || 0;
                const currentImage = product.images[currentImageIndex];

                return (
                  <motion.div 
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all group flex flex-col"
                  >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={currentImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    
                    {product.images.length > 1 && (
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => { e.stopPropagation(); updateImageIndex(product.id, (currentImageIndex - 1 + product.images.length) % product.images.length); }}
                          className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-amber-900 hover:bg-white"
                        >
                          <i className="fas fa-chevron-left text-xs"></i>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); updateImageIndex(product.id, (currentImageIndex + 1) % product.images.length); }}
                          className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-amber-900 hover:bg-white"
                        >
                          <i className="fas fa-chevron-right text-xs"></i>
                        </button>
                      </div>
                    )}

                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.bestseller && (
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                          {t.products.bestseller}
                        </span>
                      )}
                      {product.new && (
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                          {t.products.new}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-amber-900 font-playfair">{product.name}</h3>
                      <span className="text-amber-700 font-bold">Rs {product.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-3 mt-auto">
                      <div className="flex items-center border border-amber-200 rounded-full px-3 py-1">
                        <button 
                          onClick={() => handleSelectionChange(product.id, "quantity", Math.max(1, (selections[product.id]?.quantity || 1) - 1))}
                          className="text-amber-700 hover:text-amber-900"
                        >
                          <i className="fas fa-minus text-xs"></i>
                        </button>
                        <span className="w-8 text-center font-bold text-amber-900">
                          {selections[product.id]?.quantity || 1}
                        </span>
                        <button 
                          onClick={() => handleSelectionChange(product.id, "quantity", (selections[product.id]?.quantity || 1) + 1)}
                          className="text-amber-700 hover:text-amber-900"
                        >
                          <i className="fas fa-plus text-xs"></i>
                        </button>
                      </div>
                      <button
                        onClick={() => addToCart(product, { quantity: selections[product.id]?.quantity || 1 })}
                        className="flex-grow bg-amber-800 text-white py-2 rounded-full font-bold hover:bg-amber-900 transition-colors flex items-center justify-center gap-2"
                      >
                        <i className="fas fa-cart-plus"></i>
                        {t.products.addToCart}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 font-playfair">{t.reviews.title}</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-amber-50 p-12 rounded-[40px] shadow-inner text-center relative">
              <i className="fas fa-quote-left absolute top-8 left-8 text-amber-200 text-6xl"></i>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center text-white text-3xl font-bold border-4 border-white shadow-lg">
                    {reviews[currentReview].name.charAt(0)}
                  </div>
                </div>
                <div className="flex mb-4 justify-center text-yellow-500">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-xl text-amber-900 italic mb-8 leading-relaxed">
                  "{reviews[currentReview].comment}"
                </p>
                <div>
                  <h4 className="font-bold text-amber-900 text-lg">{reviews[currentReview].name}</h4>
                  <p className="text-amber-600 font-medium">{reviews[currentReview].location}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-12 h-12 bg-white border-2 border-amber-200 text-amber-800 rounded-full flex items-center justify-center hover:bg-amber-800 hover:text-white transition-all shadow-md"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={nextReview}
                className="w-12 h-12 bg-white border-2 border-amber-200 text-amber-800 rounded-full flex items-center justify-center hover:bg-amber-800 hover:text-white transition-all shadow-md"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-amber-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-800/20 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-bold mb-8 font-playfair">{t.about.title}</h2>
              <p className="text-xl mb-6 text-amber-100/90 leading-relaxed">{t.about.story1}</p>
              <p className="text-xl text-amber-100/90 leading-relaxed">{t.about.story2}</p>
              <div className="mt-10 flex gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-1">15+</div>
                  <div className="text-sm uppercase tracking-widest text-amber-200/60">Recipes</div>
                </div>
                <div className="w-px h-12 bg-amber-700"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-1">100%</div>
                  <div className="text-sm uppercase tracking-widest text-amber-200/60">Natural</div>
                </div>
                <div className="w-px h-12 bg-amber-700"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-1">24h</div>
                  <div className="text-sm uppercase tracking-widest text-amber-200/60">Delivery</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-amber-500/30 rounded-3xl translate-x-4 translate-y-4"></div>
                <img
                  src="https://picsum.photos/seed/kitchen/800/1000"
                  alt="Traditional Kitchen"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-stone-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500">
                  <img src="https://i.pinimg.com/1200x/da/d4/1e/dad41e5265a9a39952d1c6cc90faf320.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold font-playfair">{t.siteName}</h3>
              </div>
              <p className="text-stone-400 leading-relaxed mb-8">{t.footer.description}</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-amber-500">{t.footer.contactInfo}</h4>
              <ul className="space-y-4 text-stone-400">
                <li className="flex items-start gap-3">
                  <i className="fas fa-phone mt-1 text-amber-500"></i>
                  <span>+230 5756 1788</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-envelope mt-1 text-amber-500"></i>
                  <span>wafazsweets@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt mt-1 text-amber-500"></i>
                  <span>26, Sir Celicourt Antelme Street, Rose Hill, Mauritius</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-amber-500">{t.footer.deliveryAreas}</h4>
              <ul className="space-y-4 text-stone-400">
                <li>Plaines Wilhems: Rs 150</li>
                <li>Other Districts: Rs 200 - 500</li>
                <li className="text-amber-500/80 italic">Orders processed within 24-48h</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-amber-500">Newsletter</h4>
              <p className="text-stone-400 mb-4">Subscribe for special offers and new product alerts.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-stone-900 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-amber-500" />
                <button className="bg-amber-600 px-4 py-2 rounded-r-lg hover:bg-amber-700 transition-colors"><i className="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/23057561788"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:bg-green-600 transition-all transform hover:scale-110 z-40"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {showCart && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-lg flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b flex justify-between items-center bg-amber-50">
              <h2 className="text-3xl font-bold text-amber-900 font-playfair">{t.cart.title}</h2>
              <button onClick={() => setShowCart(false)} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-amber-900 transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-8 flex-grow overflow-y-auto max-h-[50vh]">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <i className="fas fa-shopping-basket text-amber-100 text-7xl mb-4"></i>
                  <p className="text-gray-500 text-lg">{t.cart.empty}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 group">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-amber-900">{item.name}</h4>
                        <p className="text-amber-600 font-bold">Rs {item.price}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-400 hover:text-amber-900"><i className="fas fa-minus text-xs"></i></button>
                        <span className="w-6 text-center font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-400 hover:text-amber-900"><i className="fas fa-plus text-xs"></i></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-8 bg-amber-50 border-t">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-amber-900/60 uppercase tracking-widest">{t.cart.total}</span>
                  <span className="text-3xl font-bold text-amber-900">Rs {getTotalPrice()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-amber-800 text-white py-5 rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-xl flex items-center justify-center gap-3 text-lg"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  {t.cart.checkout}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showOrderForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b flex justify-between items-center bg-amber-50">
              <h2 className="text-3xl font-bold text-amber-900 font-playfair">{t.orderForm.title}</h2>
              <button onClick={() => setShowOrderForm(false)} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-amber-900 transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleOrderSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[70vh]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-900 uppercase tracking-wider">{t.orderForm.name}</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-900 uppercase tracking-wider">{t.orderForm.phone}</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-amber-900 uppercase tracking-wider">{t.orderForm.product}</label>
                <select
                  required
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                  value={orderForm.product}
                  onChange={(e) => setOrderForm({ ...orderForm, product: e.target.value })}
                >
                  <option value="">{t.orderForm.selectProduct}</option>
                  {products.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                  <option value="Other">Other / Custom Mix</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-amber-900 uppercase tracking-wider">{t.orderForm.instructions}</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500"
                  placeholder={t.orderForm.placeholder}
                  value={orderForm.message}
                  onChange={(e) => setOrderForm({ ...orderForm, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-5 rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-xl flex items-center justify-center gap-3 text-lg"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                {t.orderForm.submit}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
