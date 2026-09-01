import { useState } from 'react';
import { STORE_META_B } from '../data/siteDataB';
import { ShoppingBag, ExternalLink } from 'lucide-react';

interface ShopPageBProps {
  onOpenInquiry: (topic?: string, details?: string) => void;
}

export const ShopPageB = ({ onOpenInquiry }: ShopPageBProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products = [
    {
      id: "bioactive-pvc-4x2x2",
      name: "Sanctuary 4x2x2 PVC Bioactive Enclosure",
      category: "habitats",
      price: "$289.99",
      description: "Heavy-duty 1/2-inch thermal PVC, sliding tempered glass, recessed screen top. Lifetime non-warp guarantee.",
      badge: "Best Seller",
      squareUrl: "https://store.backroadreptiles.com/s/shop"
    },
    {
      id: "arcadia-prot5-kit",
      name: "Arcadia ProT5 12% Desert UVB Linear Fixture",
      category: "lighting",
      price: "$69.99",
      description: "Ferguson Zone 3 calibrated linear lighting. The gold standard for Bearded Dragons and Uromastyx.",
      badge: "Essential",
      squareUrl: "https://store.backroadreptiles.com/s/shop"
    },
    {
      id: "arcadia-dhp-80w",
      name: "Arcadia Deep Heat Projector (DHP) 80W",
      category: "lighting",
      price: "$34.99",
      description: "Infrared-A & B deep tissue heating without disturbing nighttime sleep cycles. Zero visible light.",
      badge: "Keeper Choice",
      squareUrl: "https://store.backroadreptiles.com/s/shop"
    },
    {
      id: "master-isopod-colony",
      name: "Tropical Dwarf White Isopods (25ct Master Colony)",
      category: "bioactive",
      price: "$14.99",
      description: "Fast-reproducing micro-fauna that consume waste, mold, and decaying matter in bioactive vivariums.",
      badge: "Clean-Up Crew",
      squareUrl: "https://store.backroadreptiles.com/s/shop"
    },
    {
      id: "abg-substrate-20qt",
      name: "Hand-Mixed Atlanta Botanical Garden (ABG) Mix 20qt",
      category: "bioactive",
      price: "$24.99",
      description: "Milled sphagnum, charcoal, tree fern fiber, and orchid bark formulated for bioactive root health.",
      badge: "Fresh Blend",
      squareUrl: "https://store.backroadreptiles.com/s/shop"
    },
    {
      id: "pangea-fruit-diet",
      name: "Pangea Gecko Diet with Insects 8oz",
      category: "nutrition",
      price: "$16.99",
      description: "Complete nutrition formula enriched with dried insects for Crested, Gargoyle, and Leachianus Geckos.",
      badge: "Nutritional Staple",
      squareUrl: "https://store.backroadreptiles.com/s/shop"
    }
  ];

  const filtered = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="py-16 bg-forest-950 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-copper-500/30 text-copper-400 font-mono text-xs">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Fostoria Sanctuary Storefront & Square Online</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-stone-100 font-bold">
            Herpetological Equipment & Live Feeders
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-sans">
            Every product we carry is field-tested on our own breeding colonies. Purchase online for fast in-store pickup or regional delivery in Northwest Ohio.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={STORE_META_B.squareOnlineStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-mono text-xs font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all inline-flex items-center gap-2"
            >
              <span>Open Official Square Online Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap pb-4">
          {[
            { id: 'all', label: 'All Equipment' },
            { id: 'habitats', label: 'Custom Enclosures' },
            { id: 'lighting', label: 'UVB & Heating' },
            { id: 'bioactive', label: 'Bioactive & Substrates' },
            { id: 'nutrition', label: 'Diets & Supplements' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-copper-500 text-forest-950 font-bold shadow-copper-glow'
                  : 'bg-forest-900 text-stone-300 hover:bg-forest-850 border border-forest-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-forest-900 border border-copper-500/20 rounded-2xl p-6 shadow-botanical flex flex-col justify-between space-y-4 hover:border-copper-500/40 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-moss-950 text-moss-300 border border-moss-500/30">
                    {item.badge}
                  </span>
                  <span className="font-mono text-base font-bold text-copper-400">
                    {item.price}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-stone-100 text-lg">
                  {item.name}
                </h3>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-forest-850 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenInquiry('Equipment Reserve', `Reserve item: ${item.name}`)}
                  className="py-2.5 px-3 rounded-lg text-xs font-mono bg-forest-850 hover:bg-forest-800 text-stone-200 border border-copper-500/20 flex-1 text-center"
                >
                  Hold In-Store
                </button>
                <a
                  href={item.squareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg text-xs font-mono font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 flex items-center justify-center gap-1"
                >
                  <span>Square</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Live Feeders Reminder Strip */}
        <div className="bg-forest-900 border border-moss-500/30 rounded-3xl p-8 text-center space-y-4">
          <span className="font-mono text-xs text-moss-400 uppercase tracking-widest font-semibold block">
            Weekly Live Feeder Colonies
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-bold">
            Need Live Dubia Roaches, Crickets, or Frozen Rodents?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-sans">
            We maintain over 120,000 active gut-loaded insects and cryo-frozen rodents ready for instant pickup at our Fostoria shop.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onOpenInquiry('Bulk Feeder Order')}
              className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-copper-500 hover:bg-copper-400 text-forest-950"
            >
              Order Feeder Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
