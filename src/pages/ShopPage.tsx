import React, { useState } from 'react';
import { PageRoute } from '../types';
import { STORE_INFO, PRODUCTS } from '../data/siteData';
import { 
  ShoppingBag, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Gift, 
  ShieldAlert
} from 'lucide-react';

interface ShopPageProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Items & Feeders' },
    { id: 'reptiles', label: 'Reptiles & Amphibians' },
    { id: 'feeders-insects', label: 'Live Feeder Insects' },
    { id: 'feeders-rodents', label: 'Feeder Rodents' },
    { id: 'supplies', label: 'Habitats & Supplies' },
    { id: 'aquatics', label: 'Aquatics & Fish' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      
      {/* Header Banner */}
      <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 bg-jungle-950/90 overflow-hidden text-center sm:text-left">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-reptile-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-reptile-950 text-reptile-300 border border-reptile-500/30 font-mono">
            <ShoppingBag className="w-3.5 h-3.5 text-reptile-400" />
            <span>Square Online Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Live Inventory & Feeder Store
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Browse our current captive-bred animals, weekly fresh live feeder insects, clean feeder rodents, and habitat supplies. Orders are fulfilled via secure Square checkout for local in-store pickup at 610 Plaza Dr, Fostoria, OH.
          </p>

          {/* Policy Banner Notice */}
          <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5 text-left">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Local Pickup Only:</span> We do not ship live animals to protect their welfare. All sales are final due to the nature of live animals and perishable feeders.
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-card p-4 rounded-2xl border border-slate-800">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-reptile-600 text-white shadow-glow-green'
                  : 'bg-jungle-900 text-slate-300 hover:text-white hover:bg-jungle-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search animals, crickets, roaches..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-jungle-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-reptile-500 transition-colors"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800 p-5 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-jungle-900 border border-slate-700/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-black/80 text-amber-300 border border-amber-500/40 backdrop-blur-sm">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-jungle-950/90 text-reptile-300 border border-reptile-500/40 shadow">
                      {product.price}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    <span>{product.categoryLabel}</span>
                    <span className="text-reptile-400">In Stock (Fostoria)</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-reptile-400 transition-colors leading-snug mt-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                {product.features && (
                  <div className="space-y-1 pt-1">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-reptile-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <a
                  href={product.squareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-reptile-600 to-reptile-500 hover:from-reptile-500 hover:to-reptile-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order on Square Online</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>

                <button
                  onClick={() => onOpenInquiry(`Question about ${product.name}`)}
                  className="w-full py-1.5 rounded-lg bg-jungle-850 hover:bg-jungle-800 text-slate-300 hover:text-white font-medium text-[11px] border border-slate-800 transition-colors text-center"
                >
                  Ask Keeper About This Item
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-card rounded-2xl border border-slate-800 space-y-4">
          <AlertCircle className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No items found matching your criteria</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Looking for a specific species or feeder size? Call Brian & Angel directly at (419) 701-7101 or check our live Square store.
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-lg bg-reptile-600 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Gift Card & Special Orders Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        
        {/* Gift Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-between space-y-4 bg-gradient-to-br from-amber-950/40 via-jungle-950 to-jungle-950">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
              <Gift className="w-4 h-4" />
              <span>Square eGift Cards</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">
              Give the Gift of Exotics
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Send an instant digital gift card for birthdays, holidays, or feeder supplies. Redeemable in-store and online at Back Road Reptiles.
            </p>
          </div>

          <a
            href={STORE_INFO.square.giftCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 self-start"
          >
            <span>Order Square Gift Card</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Custom Enclosure Orders */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-reptile-500/30 flex flex-col justify-between space-y-4 bg-gradient-to-br from-reptile-950/40 via-jungle-950 to-jungle-950">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-reptile-400 font-mono text-xs font-bold uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Custom Habitat Builds</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">
              Bioactive Terrarium Consultations
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We design custom bioactive enclosures with living tropical plants, seeded springtail/isopod clean-up crews, and tailored thermal gradients.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Custom Bioactive Terrarium Build')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-reptile-600 hover:bg-reptile-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 self-start"
          >
            <span>Request Custom Build Quote</span>
          </button>
        </div>

      </div>

    </div>
  );
};
