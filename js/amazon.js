const amazon = [
    {"id": 1, "keyword": "laptop", "weight": 1100000, "url": "https://amzn.to/3RDrHi1"},
    {"id": 2, "keyword": "airpods", "weight": 856000, "url": "https://amzn.to/3H0eyKT"},
    {"id": 3, "keyword": "headphones", "weight": 788000, "url": "https://amzn.to/4aGURW0"},
    {"id": 4, "keyword": "wireless earbuds", "weight": 703000, "url": "https://amzn.to/3H3iBGy"},
    {"id": 5, "keyword": "ipad", "weight": 697000, "url": "https://amzn.to/4aHJ0Y3"},
    {"id": 6, "keyword": "fire stick", "weight": 622000, "url": "https://amzn.to/3GZY2uj"},
    {"id": 7, "keyword": "fitbit", "weight": 591000, "url": "https://amzn.to/3H1BKZj"},
    {"id": 8, "keyword": "tv", "weight": 580000, "url": "https://amzn.to/3TIK5bT"},
    {"id": 9, "keyword": "air fryer", "weight": 561000, "url": "https://amzn.to/3vfH9tg"},
    {"id": 10, "keyword": "bluetooth headphones", "weight": 550000, "url": "https://amzn.to/41Cvu3P"},
    {"id": 11, "keyword": "roku", "weight": 549000, "url": "https://amzn.to/41CvKjj"},
    {"id": 12, "keyword": "external hard drive", "weight": 506000, "url": "https://amzn.to/3TKSATM"},
    {"id": 13, "keyword": "micro sd card", "weight": 493000, "url": "https://amzn.to/3vgL74T"},
    {"id": 14, "keyword": "gaming chair", "weight": 482000, "url": "https://amzn.to/3vgLeNR"},
    {"id": 15, "keyword": "apple watch", "weight": 480000, "url": "https://amzn.to/41IQnKo"},
    {"id": 16, "keyword": "monitor", "weight": 473000, "url": "https://amzn.to/3TBGkoG"},
    {"id": 17, "keyword": "earbuds", "weight": 465000, "url": "https://amzn.to/3RYBcK6"},
    {"id": 18, "keyword": "paper towels", "weight": 440000, "url": "https://amzn.to/41Hm1YX"},
    {"id": 19, "keyword": "desk", "weight": 429000, "url": "https://amzn.to/41G7dJY"},
    {"id": 20, "keyword": "office chair", "weight": 408000, "url": "https://amzn.to/3vaioOT"},
    {"id": 21, "keyword": "ring doorbell", "weight": 397000, "url": "https://amzn.to/41Img5P"},
    {"id": 22, "keyword": "lego", "weight": 371000, "url": "https://amzn.to/48A7cJN"},
    {"id": 23, "keyword": "wireless mouse", "weight": 371000, "url": "https://amzn.to/41CvRLL"},
    {"id": 24, "keyword": "mouse pad", "weight": 367000, "url": "https://amzn.to/3S1pgr1"},
    {"id": 25, "keyword": "iphone charger", "weight": 352000, "url": "https://amzn.to/3ROv2Lo"},
    {"id": 26, "keyword": "echo dot", "weight": 339000, "url": "https://amzn.to/48dfNCz"},
    {"id": 27, "keyword": "nintendo switch games", "weight": 334000, "url": "https://amzn.to/3U0sqwH"},
    {"id": 28, "keyword": "keyboard", "weight": 332000, "url": "https://amzn.to/3TE2NBx"},
    {"id": 29, "keyword": "bluetooth speakers", "weight": 331000, "url": "https://amzn.to/3vkGiaI"},
    {"id": 30, "keyword": "iphone", "weight": 324000, "url": "https://amzn.to/3RY9Y6i"},
    {"id": 31, "keyword": "coffee", "weight": 320000, "url": "https://amzn.to/4aEljj1"},
    {"id": 32, "keyword": "aa batteries", "weight": 318000, "url": "https://amzn.to/3vkqvbV"},
    {"id": 33, "keyword": "mouse", "weight": 315000, "url": "https://amzn.to/4aHJcqf"},
    {"id": 34, "keyword": "shower curtain", "weight": 314000, "url": "https://amzn.to/3REONoj"},
    {"id": 35, "keyword": "microwave", "weight": 291000, "url": "https://amzn.to/48CwOFW"},
    {"id": 36, "keyword": "protein powder", "weight": 266000, "url": "https://amzn.to/41Cw3dX"},
    {"id": 37, "keyword": "shoe rack", "weight": 252000, "url": "https://amzn.to/3vfHNaa"},
    {"id": 38, "keyword": "iphone 11 case", "weight": 251000, "url": "https://amzn.to/48gdVc2"},
    {"id": 39, "keyword": "yoga mat", "weight": 250000, "url": "https://amzn.to/486QeTD"},
    {"id": 40, "keyword": "gaming pc", "weight": 243000, "url": "https://amzn.to/3GY9tmu"},
    {"id": 41, "keyword": "usb hub", "weight": 241000, "url": "https://amzn.to/48dfY0H"},
    {"id": 42, "keyword": "fan", "weight": 238000, "url": "https://amzn.to/3RGMC3R"},
    {"id": 43, "keyword": "portable charger", "weight": 224000, "url": "https://amzn.to/3H1C0aJ"},
    {"id": 44, "keyword": "xbox one", "weight": 223000, "url": "https://amzn.to/3H1C0aJ"},
    {"id": 45, "keyword": "gift cards", "weight": 221000, "url": "https://amzn.to/3voTxHa"},
    {"id": 46, "keyword": "electric toothbrush", "weight": 210000, "url": "https://amzn.to/4aBgRSj"},
    {"id": 47, "keyword": "rice cooker", "weight": 199000, "url": "https://amzn.to/4aPrYau"},
    {"id": 48, "keyword": "mini fridge", "weight": 197000, "url": "https://amzn.to/3NL0LvB"},
    {"id": 49, "keyword": "umbrella", "weight": 197000, "url": "https://amzn.to/3NN3HaZ"},
    {"id": 50, "keyword": "batteries", "weight": 194000, "url": "https://amzn.to/3H6BsjG"},
    {"id": 51, "keyword": "pens", "weight": 194000, "url": "https://amzn.to/48flr7f"},
    {"id": 52, "keyword": "extension cord", "weight": 188000, "url": "https://amzn.to/3S1pC0P"},
    {"id": 53, "keyword": "toothpaste", "weight": 185000, "url": "https://amzn.to/3S26eR2"},
    {"id": 55, "keyword": "blood pressure monitor", "weight": 177000, "url": "https://amzn.to/3NJAfCR"},
    {"id": 56, "keyword": "coffee maker", "weight": 176000, "url": "https://amzn.to/48fWYyE"},
    {"id": 57, "keyword": "dehumidifier", "weight": 176000, "url": "https://amzn.to/3txRyQt"},
    {"id": 58, "keyword": "dog bed", "weight": 172000, "url": "https://amzn.to/3SaJ7nP"},
    {"id": 59, "keyword": "magnesium", "weight": 167000, "url": "https://amzn.to/3NGlcKg"},
    {"id": 60, "keyword": "dog toys", "weight": 164000, "url": "https://amzn.to/3NKSGHa"},
]

// 61  vitamin d   164,000
// 62  ear buds    163,000
// 63  dog food    160,000
// 64  shower head 160,000
// 65  notebook    158,000
// 66  water   158,000
// 67  womens tops 157,000
// 68  led lights  154,000
// 69  wifi extender   150,000
// 70  baby wipes  149,000
// 71  crocs   147,000
// 72  yeti    145,000
// 73  twin mattress   140,000
// 74  laundry basket  131,000
// 75  shower caddy    130,000
// 76  apple watch band    129,000
// 77  fish oil    127,000
// 78  hangers 127,000
// 79  vitamin c   127,000
// 80  macbook 126,000
// 81  paper plates    125,000
// 82  amazon gift card    122,000
// 83  snacks  122,000
// 84  pillows 120,000
// 85  ear plugs   117,000
// 86  hand soap   117,000
// 87  creatine    116,000
// 88  nintendo switch controller  116,000
// 89  queen bed frame 116,000
// 90  dresses 114,000
// See the top trending Amazon products in any category or niche, with Glimpse.
// Rank    Product Search Volume (past 30 days)
// 91  garden hose 114,000
// 92  trash bags  109,000
// 93  food scale  108,000
// 94  knee brace  108,000
// 95  juicer  106,000
// 96  new balance mens shoes  105,000
// 97  xbox gift card  103,000
// 98  drawer organizer    101,000
// 99  water shoes 101,000
// 100 litter box  99,000
// 101 knife set   98,000
// 102 highlighters    97,000
// 103 queen sheets    93,000
// 104 nike shoes men  92,000
// 105 sunscreen   92,000
// 106 barbie  90,000
// 107 kindle unlimited free books 90,000
// 108 hair dryer  89,000
// 109 usb drive   89,000
// 110 mens shorts 88,000
// 111 golf balls  85,000
// 112 tide pods   79,000
// 113 jansport backpack   75,000
// 114 neck pillow 75,000
// 115 magnesium glycinate 73,000
// 116 vitamin d3  73,000
// 117 yeti tumbler    73,000
// 118 oral b electric toothbrush  72,000
// 119 toothbrush  72,000
// 120 glue sticks 70,000
// Most Searched Amazon Products by Category
// The most searched vitamin/supplement: Magnesium
// The most searched pet product: Dog Bed
// The most searched kitchen appliance: Air Fryer
// The most searched medical device: Blood Pressure Monitor
// The most searched skin care product: Sunscreen
// The most searched beverage: Coffee
// The most searched game: Nintendo Switch Games
// The most searched clothing/apparel: Women's Tops
// The most searched footwear: Crocs
// The most searched hair care product: Hair Dryer
// The most searched bag: JanSport Backpack
// The most searched laundry product: Tide Pods
// The most searched medicine: Zyrtec
// The most searched streaming device: Fire Stick
// The most searched earbuds: AirPods
// The most searched smartwatch: Fitbit
// The most searched toy: Lego
// The most searched doorbell: Ring Doorbell
// Fascinating Statistics
// 1. Laptop is the most searched product on Amazon


// 2. Most of the top searched products are consumer electronics

// 24% are consumer electronics
// ~13% are kitchen & food products
// 11% are personal care products
// 10% are home essentials like hangers, trash bags, and laundry baskets
// 6.5% are vitamins and supplements

// 3. Gift cards are a category of their own (3.5%)

// Gift cards - Search Volume: 221,000 / mo (Rank: 45)
// Amazon gift card - Search Volume: 122,000 / mo (Rank: 82)
// Xbox gift card - Search Volume: 103,000 / mo (Rank: 97)
// How we collected this data
// To make the most comprehensive list of the most searched products on Amazon, we first segment our Amazon search keyword database of 12B+ keywords to isolate all the products. We then used a set of heuristics to eliminate those that weren't talked about very much over the past month. This leaves us with a list of about 6-12,000 products. From there, we run those through our search volume tool, which is trusted by top businesses, from the New York Times to IKEA, and then we sort by the products with the most searches.