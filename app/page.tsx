import { Bell, Search } from "lucide-react";
import { SkincareProduct } from "./types";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "AHA-BHA Clarifying Treatment Toner",
      brand: "Cosrx",
      category: "Toner",
      dateOpened: "2026-03-01",
      paoMonths: 12,
      expirationDate: "2027-06-01",
      volumeLabel: "150ml",
      notes:
        "Exfoliating botanical toner. Preps skin for deep hydration. Use with cotton pad.",
    },
    {
      id: "2",
      name: "Advanced Snail 96 Mucin Power Essence",
      brand: "Cosrx",
      category: "Serum",
      dateOpened: "2026-02-15",
      paoMonths: 12,
      expirationDate: "2027-03-30",
      volumeLabel: "100ml",
      notes:
        "Chic skin repair barrier booster. Apply directly to damp skin after toner.",
    },
    {
      id: "3",
      name: "Glow Serum : Propolis + Niacinamide",
      brand: "Beauty of Joseon",
      category: "Serum",
      dateOpened: "2025-11-20",
      paoMonths: 9,
      expirationDate: "2026-08-15",
      volumeLabel: "30ml",
      notes:
        "Vibrant honey-like essence. Keeps skin radiant, honey glow finish.",
    },
    {
      id: "4",
      name: "Relief Sun : Rice + Probiotics SPF 50+",
      brand: "Beauty of Joseon",
      category: "Sunscreen",
      dateOpened: "2026-05-10",
      paoMonths: 6,
      expirationDate: "2027-01-12",
      volumeLabel: "50ml",
      notes:
        "Organic lightweight physical sunscreen. Absolutely zero white cast. Outstanding UV defence.",
    },
    {
      id: "5",
      name: "Birch Juice Moisturizing Cream",
      brand: "Round Lab",
      category: "Moisturizer",
      dateOpened: "2025-12-05",
      paoMonths: 6,
      expirationDate: "2026-06-20", // Just expired based on our local date of 2026-06-23
      volumeLabel: "80ml",
      notes:
        "Deep birch sap hydration locks skin moisture. Essential daily defense barrier.",
    },
    {
      id: "6",
      name: "Heartleaf 77% Soothing Toner",
      brand: "Anua",
      category: "Toner",
      dateOpened: "2026-05-20",
      paoMonths: 12,
      expirationDate: "2027-04-18",
      volumeLabel: "250ml",
      notes:
        "Extremely calming on red or irritated skin. Excellent for 7-skin method.",
    },
  ];

  const getProductExpirationStatus = (product: SkincareProduct) => {
    const currentDate = new Date();
    const expirationDate = new Date(product.expirationDate || "");
    const daysRemaining = Math.ceil(
      (expirationDate.getTime() - currentDate.getTime()) /
        (1000 * 60 * 60 * 24),
    );
    let status = "Unknown";
    if (daysRemaining < 0) {
      status = "Expired";
    } else if (daysRemaining <= 7) {
      status = "Expiring Soon";
    } else {
      status = "Active";
    }
    return { daysRemaining, status };
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#FCFAF6]/90 backdrop-blur-md border-b border-emerald-950/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#FCFAF6]" />
              </div>

              <span className="font-serif uppercase text-xl font-bold tracking-wider text-emerald-950">
                Skinventory
              </span>
            </div>

            <button className="px-4 py-2 bg-[#10b981] text-white font-bold rounded-full hover:bg-[#0fa55b] cursor-pointer transition-all text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_18px_rgba(16,185,129,0.5)] active:scale-95 duration-150">
              Add Items
            </button>
          </div>
          <div className="h-px bg-emerald-950/5" />

          <nav className="flex items-center gap-6 py-3 text-[11px] uppercase tracking-[0.15em] text-stone-500 font-semibold">
            <span className="relative cursor-pointer text-stone-500 hover:text-[#10b981] transition-colors group">
              My Inventory
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#10b981] transition-all duration-300 group-hover:w-full"></span>
            </span>

            <span className="text-stone-300">|</span>

            <span className="relative cursor-pointer text-stone-500 hover:text-[#10b981] transition-colors group">
              Routine Planner
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#10b981] transition-all duration-300 group-hover:w-full"></span>
            </span>

            <span className="text-stone-300">|</span>

            <span className="relative cursor-pointer text-stone-500 hover:text-[#10b981] transition-colors group">
              Skincare Tips
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#10b981] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </nav>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8 gap-8 grid grid-cols-1">
        <div className="flex flex-col gap-6">
          <div className="bg-[#fef3f2] border border-red-200/50 p-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <Bell className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-sm font-serif font-medium text-stone-900 tracking-tight leading-relaxed">
                Birch Juice Moisturizing Cream is expiring soon! (Expires on
                2026-06-20)
              </span>
            </div>
            <button className="px-4 py-2 bg-red-400 text-white font-bold rounded-full hover:bg-red-500 cursor-pointer transition-all text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-[0_4px_14px_rgba(239,68,68,0.3)] hover:shadow-[0_4px_18px_rgba(239,68,68,0.5)] active:scale-95 duration-150">
              View Product
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-stone-200/50 p-4 rounded-2xl flex flex-col justify-between">
            <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">
              Total Curated
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-2xl font-serif font-bold text-stone-900">
                10
              </span>
              <span className="text-[11px] text-stone-400 font-light">
                Products
              </span>
            </div>
          </div>
          <div className="bg-white border border-stone-200/50 p-4 rounded-2xl flex flex-col justify-between">
            <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">
              Expired / Inactive
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-2xl font-serif font-bold text-stone-900">
                2
              </span>
              <span className="text-[11px] text-stone-400 font-light">
                Products
              </span>
            </div>
          </div>
          <div className="bg-white border border-stone-200/50 p-4 rounded-2xl flex flex-col justify-between">
            <span className="text-[10px] uppercase font-bold text-red-400 tracking-widest">
              Expiring Soon
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-2xl font-serif font-bold text-stone-900">
                3
              </span>
              <span className="text-[11px] text-stone-400 font-light">
                Formulas
              </span>
            </div>
          </div>
          <div className="bg-white border border-stone-200/50 p-4 rounded-2xl flex flex-col justify-between">
            <span className="text-[10px] uppercase font-bold text-green-500 tracking-widest">
              Active / In Use
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-2xl font-serif font-bold text-stone-900">
                5
              </span>
              <span className="text-[11px] text-stone-400 font-light">
                Products
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-2 block">
              Search for a product
            </span>
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
            <input
              id="search-input"
              type="text"
              placeholder="Ex. beauty of joseon, bha, retinol serum..."
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-5 py-3 bg-white border border-stone-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-[#10b981] transition-all placeholder:text-stone-400/80 shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
            />
            <div className="mt-5 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                Filter By Element
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  // onClick={() => setCategoryFilter("All")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer bg-white text-stone-500 border border-stone-200/60 hover:border-stone-400
                  `}
                >
                  All ({products.length})
                </button>
                <button
                  // onClick={() => setCategoryFilter("All")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer bg-white text-stone-500 border border-stone-200/60 hover:border-stone-400
                  `}
                >
                  Serum ({products.filter((p) => p.category === "Serum").length}
                  )
                </button>
                <button
                  // onClick={() => setCategoryFilter("All")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer bg-white text-stone-500 border border-stone-200/60 hover:border-stone-400
                  `}
                >
                  Sunscreen (
                  {products.filter((p) => p.category === "Sunscreen").length})
                </button>
                <button
                  // onClick={() => setCategoryFilter("All")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer bg-white text-stone-500 border border-stone-200/60 hover:border-stone-400
                  `}
                >
                  Toner ({products.filter((p) => p.category === "Toner").length}
                  )
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between my-4 px-1">
                <h3 className="font-serif text-lg tracking-wider text-emerald-950 font-bold">
                  My Skincare Cabinet Collection
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product) => {
                  const expirationStatus = getProductExpirationStatus(product);
                  return (
                    <div
                      key={product.id}
                      className="bg-white border border-stone-200/50 p-4 rounded-2xl"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                            product.category === "Cleanser"
                              ? "bg-amber-50 text-amber-800"
                              : product.category === "Toner"
                                ? "bg-[#10b981]/15 text-[#10b981]"
                                : product.category === "Serum"
                                  ? "bg-purple-100/50 text-purple-800"
                                  : product.category === "Moisturizer"
                                    ? "bg-[#10b981]/10 text-emerald-900"
                                    : product.category === "Sunscreen"
                                      ? "bg-emerald-800 text-white"
                                      : product.category === "Exfoliant"
                                        ? "bg-red-50 text-red-800"
                                        : "bg-stone-100 text-stone-700"
                          }`}
                        >
                          {product.category}
                        </span>
                        <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#10b981] block mb-0.5">
                          {product.brand}
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <h4
                          className="font-serif text-base font-medium text-stone-900 tracking-tight leading-relaxed"
                          title={product.name}
                        >
                          {product.name}
                        </h4>
                        {/* <p className="text-sm text-stone-500 mt-1">
                        {product.notes}
                      </p> */}
                        <div
                          className={`p-2.5 rounded-xl flex items-center justify-between text-xs ${
                            expirationStatus.status === "Expired"
                              ? "bg-rose-50 text-rose-800"
                              : expirationStatus.status === "Expiring Soon"
                                ? "bg-amber-50 text-amber-800"
                                : expirationStatus.status === "Active"
                                  ? "bg-[#10b981]/10 text-[#10b981]"
                                  : "bg-stone-100 text-stone-700"
                          } mt-3`}
                        >
                          <div className="flex items-center gap-1.5 font-semibold">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                expirationStatus.status === "Expired"
                                  ? "bg-rose-500"
                                  : expirationStatus.status === "Expiring Soon"
                                    ? "bg-amber-500"
                                    : "bg-[#10b981]"
                              }`}
                            />
                            <span>
                              {expirationStatus.status === "Expired" &&
                                "Expired Formula"}
                              {expirationStatus.status === "Expiring Soon" &&
                                "Expires Soon"}
                              {expirationStatus.status === "Active" &&
                                "Active & Serene"}
                              {expirationStatus.status === "Unknown" &&
                                "No Limit Detected"}
                            </span>
                          </div>
                          <span className="font-mono text-xs font-bold">
                            {expirationStatus.daysRemaining === Infinity
                              ? "N/A"
                              : expirationStatus.daysRemaining < 0
                                ? `${Math.abs(expirationStatus.daysRemaining)}d ago`
                                : `${expirationStatus.daysRemaining}d left`}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            {/* <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">
              Filter by Category
            </span>
            <select
              id="category-filter"
              // value={selectedCategory}
              // onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-4 pr-5 py-3 bg-white border border-stone-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-[#10b981] transition-all placeholder:text-stone-400/80 shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
            >
              <option value="">All Categories</option>
              <option value="Cleanser">Cleanser</option>
              <option value="Toner">Toner</option>
              <option value="Serum">Serum</option>
              <option value="Moisturizer">Moisturizer</option>
              <option value="Sunscreen">Sunscreen</option>
              <option value="Exfoliant">Exfoliant</option>
            </select> */}
          </div>
        </div>
        {/* </div> */}
      </main>
    </>
  );
}