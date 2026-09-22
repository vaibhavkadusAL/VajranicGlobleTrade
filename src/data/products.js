// ============================================================
//  PRODUCT CATALOG DATA
// ============================================================

// 1. Fresh Fruits
import mangoImg from '../assets/product images/Mango.webp'
import guavaImg from '../assets/product images/guava.webp'
import grapesImg from '../assets/product images/greengrapes.webp'
import appleImg from '../assets/product images/apple.webp'
import custardAppleImg from '../assets/product images/Custard Apple.webp'
import chikooImg from '../assets/product images/Chikoo.webp'
import blackPlumImg from '../assets/product images/Black Plum.webp'
import pomegranateImg from '../assets/product images/Pomegranate.webp'
import dragonFruitImg from '../assets/product images/Dragon Fruit.webp'
import honeyMelonImg from '../assets/product images/Honey Melon.webp'
import watermelonImg from '../assets/product images/Watermelon.webp'
import papayaImg from '../assets/product images/Papaya.webp'
import blackJamunImg from '../assets/product images/Black Jamun.webp'
import iceAppleImg from '../assets/product images/Ice Apple (Tadgola).webp'
import bananaImg from '../assets/product images/Banana.avif'
import orangeImg from '../assets/product images/Orange.webp'
import strawberryImg from '../assets/product images/Strawberry.webp'
import pineappleImg from '../assets/product images/Pineapple.webp'
import lemonImg from '../assets/product images/Lemon.webp'

// 2. Fresh Vegetables
import greenChilliImg from '../assets/Fresh Vegetables/Green Chilli.webp'
import bottleGourdImg from '../assets/Fresh Vegetables/Bottle Gourd.webp'
import spongeGourdImg from '../assets/Fresh Vegetables/Sponge Gourd.webp'
import ridgeGourdImg from '../assets/Fresh Vegetables/Ridge Gourd.webp'
import gooseberryImg from '../assets/Fresh Vegetables/Gooseberry.webp'
import freshTurmericImg from '../assets/Fresh Vegetables/Fresh Turmeric.webp'
import okraImg from '../assets/Fresh Vegetables/Okra.webp'
import radishImg from '../assets/Fresh Vegetables/Radish.webp'
import carrotImg from '../assets/Fresh Vegetables/Carrot.webp'
import drumstickImg from '../assets/Fresh Vegetables/Drumstick.webp'
import clusterBeansImg from '../assets/Fresh Vegetables/Cluster Beans.webp'
import redOnionImg from '../assets/Fresh Vegetables/Red Onion.webp'
import eggplantImg from '../assets/Fresh Vegetables/Eggplant.webp'
import mangoGingerImg from '../assets/Fresh Vegetables/Mango Ginger.webp'
import ashGourdImg from '../assets/Fresh Vegetables/Ash Gourd.webp'
import tomatoImg from '../assets/Fresh Vegetables/Tomato.webp'
import garlicImg from '../assets/Fresh Vegetables/Garlic.webp'
import cornImg from '../assets/Fresh Vegetables/Corn.webp'
import potatoImg from '../assets/Fresh Vegetables/Potato.webp'
import beetrootImg from '../assets/Fresh Vegetables/Beetroot.webp'

// 3. Dehydrated Products
import dehydratedOnionImg from '../assets/Dehydrated Products/Dehydrated Onion.webp'
import dehydratedPotatoImg from '../assets/Dehydrated Products/Dehydrated Potato.webp'
import dehydratedGarlicImg from '../assets/Dehydrated Products/Dehydrated Garlic.webp'
import otherDehydratedImg from '../assets/Dehydrated Products/Other Dehydrated Products.webp'

// 4. Pulp & Processed Mango Products
import alphonsoPulpImg from '../assets/Pulp & Processed Mango Products/Alphonso Mango Pulp.webp'
import alphonsoSlicesImg from '../assets/Pulp & Processed Mango Products/Alphonso Mango Slices.webp'
import kesarPulpImg from '../assets/Pulp & Processed Mango Products/Kesar Mango Pulp.webp'
import kesarSlicesImg from '../assets/Pulp & Processed Mango Products/Kesar Mango Slices in Syrup.webp'

// 5. Grains & Pulses
import riceImg from '../assets/Grains & Pulses/Rice.webp'
import lentilsImg from '../assets/Grains & Pulses/Lentils.webp'
import wheatImg from '../assets/Grains & Pulses/Wheat.webp'

// 6. Frozen Fruits
import frozenPomegranateImg from '../assets/Frozen Fruits/Frozen Pomegranate 1.webp'
import frozenPlumImg from '../assets/Frozen Fruits/frozen plum.webp'
import frozenApricotsImg from '../assets/Frozen Fruits/frozen Apricots.webp'


export const products = [
  // ==========================================
  // 1. Fresh Fruits
  // ==========================================
  {
    id: 'mango', name: 'Mango', category: 'Fresh Fruits',
    shortDesc: 'Premium Indian Mangoes.',
    longDesc: 'Our premium mangoes are handpicked from the finest orchards in India, ensuring perfect ripeness and unmatched sweetness.',
    quality: 'Export Quality, Grade A', packaging: 'Corrugated boxes', exportInfo: 'Available for global export',
    keyFeatures: ['Rich in flavor', 'Naturally ripened', 'High Brix level'], image: mangoImg
  },
  {
    id: 'guava', name: 'Guava', category: 'Fresh Fruits',
    shortDesc: 'Fresh and crunchy Guavas.',
    longDesc: 'Carefully harvested green guavas offering a delightful crunch and sweet interior.',
    quality: 'Export Quality', packaging: 'Carton boxes', exportInfo: 'Global export',
    keyFeatures: ['Rich in Vitamin C', 'Farm fresh', 'Crisp texture'], image: guavaImg
  },
  {
    id: 'grapes', name: 'Grapes', category: 'Fresh Fruits',
    shortDesc: 'Sweet and juicy Green Grapes.',
    longDesc: 'Premium green seedless grapes sourced from the vineyards of Maharashtra.',
    quality: 'Grade A, Seedless', packaging: 'Punnet boxes', exportInfo: 'Cold chain air/sea freight',
    keyFeatures: ['Seedless', 'High sweetness', 'Firm texture'], image: grapesImg
  },
  {
    id: 'apple', name: 'Apple', category: 'Fresh Fruits',
    shortDesc: 'Crisp and sweet Apples.',
    longDesc: 'Freshly harvested apples known for their crisp bite and balanced sweetness.',
    quality: 'Export Quality', packaging: 'Tray-packed cartons', exportInfo: 'Global export',
    keyFeatures: ['Crisp bite', 'Rich color', 'Long shelf life'], image: appleImg
  },
  {
    id: 'custard-apple', name: 'Custard Apple', category: 'Fresh Fruits',
    shortDesc: 'Creamy and sweet Custard Apples.',
    longDesc: 'Also known as Sitaphal, offering a unique creamy texture and exquisite sweetness.',
    quality: 'Grade A', packaging: 'Protective foam net packaging', exportInfo: 'Air freight only',
    keyFeatures: ['Creamy texture', 'Highly nutritious', 'Delicate handling'], image: custardAppleImg
  },
  {
    id: 'chikoo', name: 'Chikoo', category: 'Fresh Fruits',
    shortDesc: 'Sweet Sapodilla (Chikoo).',
    longDesc: 'Naturally sweet chikoo with a smooth, grainy texture and malty flavor.',
    quality: 'Export Quality', packaging: 'Corrugated boxes', exportInfo: 'Global export',
    keyFeatures: ['Malty sweetness', 'Naturally ripened', 'Soft texture'], image: chikooImg
  },
  {
    id: 'black-plum', name: 'Black Plum', category: 'Fresh Fruits',
    shortDesc: 'Fresh Indian Black Plums (Jamun).',
    longDesc: 'Nutrient-rich black plums offering a perfect balance of sweet and tart flavors.',
    quality: 'Premium Grade', packaging: 'Ventilated boxes', exportInfo: 'Air freight',
    keyFeatures: ['Rich in iron', 'Sweet and tart', 'Deep purple color'], image: blackPlumImg
  },
  {
    id: 'pomegranate', name: 'Pomegranate', category: 'Fresh Fruits',
    shortDesc: 'Ruby-red, juicy Pomegranates.',
    longDesc: 'Our Bhagwa variety pomegranates are globally renowned for their thick red skin and soft, sweet arils.',
    quality: 'Bhagwa Variety, Grade A', packaging: '3.5kg / 5kg Carton Boxes', exportInfo: 'Sea / Air freight',
    keyFeatures: ['Soft arils', 'Deep red color', 'High antioxidants'], image: pomegranateImg
  },
  {
    id: 'dragon-fruit', name: 'Dragon Fruit', category: 'Fresh Fruits',
    shortDesc: 'Exotic and vibrant Dragon Fruit.',
    longDesc: 'Striking dragon fruit with refreshing, mildly sweet flesh.',
    quality: 'Export Quality', packaging: 'Individual netting', exportInfo: 'Global export',
    keyFeatures: ['Vibrant skin', 'Refreshing taste', 'Nutrient dense'], image: dragonFruitImg
  },
  {
    id: 'honey-melon', name: 'Honey Melon', category: 'Fresh Fruits',
    shortDesc: 'Sweet and aromatic Honey Melon.',
    longDesc: 'Juicy honey melons with a fragrant aroma and high water content.',
    quality: 'Grade A', packaging: 'Carton boxes', exportInfo: 'Sea / Air freight',
    keyFeatures: ['High sweetness', 'Hydrating', 'Aromatic'], image: honeyMelonImg
  },
  {
    id: 'watermelon', name: 'Watermelon', category: 'Fresh Fruits',
    shortDesc: 'Refreshing and juicy Watermelons.',
    longDesc: 'Large, sweet watermelons perfect for hydration and summer refreshment.',
    quality: 'Premium Grade', packaging: 'Bulk bins or cartons', exportInfo: 'Global export',
    keyFeatures: ['Deep red flesh', 'High water content', 'Crisp bite'], image: watermelonImg
  },
  {
    id: 'papaya', name: 'Papaya', category: 'Fresh Fruits',
    shortDesc: 'Tropical and sweet Papaya.',
    longDesc: 'Richly colored papayas offering tropical sweetness and digestive benefits.',
    quality: 'Export Quality', packaging: 'Foam net cartons', exportInfo: 'Sea / Air freight',
    keyFeatures: ['Rich in enzymes', 'Tropical flavor', 'Soft flesh'], image: papayaImg
  },
  {
    id: 'black-jamun', name: 'Black Jamun', category: 'Fresh Fruits',
    shortDesc: 'Traditional Indian Black Jamun.',
    longDesc: 'Freshly sourced Jamun known for its distinct taste and health properties.',
    quality: 'Grade A', packaging: 'Small punnets', exportInfo: 'Air freight',
    keyFeatures: ['Medicinal properties', 'Distinct flavor', 'Freshly picked'], image: blackJamunImg
  },
  {
    id: 'ice-apple', name: 'Ice Apple (Tadgola)', category: 'Fresh Fruits',
    shortDesc: 'Cooling and translucent Ice Apples.',
    longDesc: 'A unique tropical fruit offering a jelly-like texture and natural cooling effect.',
    quality: 'Premium', packaging: 'Temperature controlled packs', exportInfo: 'Air freight',
    keyFeatures: ['Translucent flesh', 'Natural coolant', 'Jelly texture'], image: iceAppleImg
  },
  {
    id: 'banana', name: 'Banana', category: 'Fresh Fruits',
    shortDesc: 'Premium Cavendish Bananas.',
    longDesc: 'High-quality Cavendish bananas exported green for perfect ripening at destination.',
    quality: 'Cavendish, Grade A', packaging: '13kg / 18kg boxes', exportInfo: 'Reefer Sea Freight',
    keyFeatures: ['Blemish-free skin', 'Uniform size', 'Extended green life'], image: bananaImg
  },
  {
    id: 'orange', name: 'Orange', category: 'Fresh Fruits',
    shortDesc: 'Citrusy and sweet Oranges.',
    longDesc: 'Juicy oranges packed with Vitamin C and bright citrus flavor.',
    quality: 'Export Quality', packaging: 'Telescopic cartons', exportInfo: 'Global export',
    keyFeatures: ['Juicy', 'High Vitamin C', 'Bright color'], image: orangeImg
  },
  {
    id: 'strawberry', name: 'Strawberry', category: 'Fresh Fruits',
    shortDesc: 'Fresh and vibrant Strawberries.',
    longDesc: 'Plump, red strawberries carefully packed to preserve their delicate texture.',
    quality: 'Premium', packaging: 'Punnet boxes', exportInfo: 'Cold chain air freight',
    keyFeatures: ['Vibrant red', 'Sweet and tart', 'Delicate handling'], image: strawberryImg
  },
  {
    id: 'pineapple', name: 'Pineapple', category: 'Fresh Fruits',
    shortDesc: 'Tropical sweet Pineapples.',
    longDesc: 'Golden pineapples offering the perfect balance of sweetness and acidity.',
    quality: 'Grade A', packaging: 'Upright cartons', exportInfo: 'Sea / Air freight',
    keyFeatures: ['Golden flesh', 'Tropical aroma', 'Crown intact'], image: pineappleImg
  },
  {
    id: 'lemon', name: 'Lemon', category: 'Fresh Fruits',
    shortDesc: 'Fresh and zesty Lemons.',
    longDesc: 'Bright yellow lemons known for their high juice content and zest.',
    quality: 'Export Quality', packaging: 'Carton boxes', exportInfo: 'Global export',
    keyFeatures: ['High juice yield', 'Thick rind', 'Zesty flavor'], image: lemonImg
  },

  // ==========================================
  // 2. Fresh Vegetables
  // ==========================================
  {
    id: 'green-chilli', name: 'Green Chilli', category: 'Fresh Vegetables',
    shortDesc: 'Spicy and crisp Green Chillies.',
    longDesc: 'Freshly harvested green chillies offering vibrant color and sharp heat.',
    quality: 'Export Quality', packaging: 'Corrugated boxes', exportInfo: 'Air / Sea freight',
    keyFeatures: ['High pungency', 'Crisp texture', 'Vibrant green'], image: greenChilliImg
  },
  {
    id: 'bottle-gourd', name: 'Bottle Gourd', category: 'Fresh Vegetables',
    shortDesc: 'Fresh tender Bottle Gourds.',
    longDesc: 'Tender bottle gourds grown sustainably and packed fresh.',
    quality: 'Grade A', packaging: 'Cartons', exportInfo: 'Global export',
    keyFeatures: ['Tender skin', 'High water content', 'Farm fresh'], image: bottleGourdImg
  },
  {
    id: 'sponge-gourd', name: 'Sponge Gourd', category: 'Fresh Vegetables',
    shortDesc: 'Premium Sponge Gourd.',
    longDesc: 'Freshly picked sponge gourds ensuring tenderness and flavor.',
    quality: 'Premium', packaging: 'Ventilated cartons', exportInfo: 'Air freight',
    keyFeatures: ['Tender', 'Uniform size', 'Freshly picked'], image: spongeGourdImg
  },
  {
    id: 'ridge-gourd', name: 'Ridge Gourd', category: 'Fresh Vegetables',
    shortDesc: 'Farm-fresh Ridge Gourd.',
    longDesc: 'High-quality ridge gourds known for their distinct ridges and soft interior.',
    quality: 'Export Quality', packaging: 'Cartons', exportInfo: 'Global export',
    keyFeatures: ['Distinct ridges', 'Soft flesh', 'Nutrient rich'], image: ridgeGourdImg
  },
  {
    id: 'gooseberry', name: 'Gooseberry', category: 'Fresh Vegetables',
    shortDesc: 'Indian Gooseberry (Amla).',
    longDesc: 'Vitamin C-rich Indian gooseberries (Amla) perfect for culinary and medicinal use.',
    quality: 'Grade A', packaging: 'Mesh bags or boxes', exportInfo: 'Global export',
    keyFeatures: ['Extremely high Vitamin C', 'Tart flavor', 'Medicinal properties'], image: gooseberryImg
  },
  {
    id: 'fresh-turmeric', name: 'Fresh Turmeric', category: 'Fresh Vegetables',
    shortDesc: 'Raw Fresh Turmeric Roots.',
    longDesc: 'Fresh turmeric roots offering vibrant color and potent curcumin content.',
    quality: 'Premium Grade', packaging: 'Mesh bags', exportInfo: 'Sea / Air freight',
    keyFeatures: ['High curcumin', 'Vibrant orange flesh', 'Earthy aroma'], image: freshTurmericImg
  },
  {
    id: 'okra', name: 'Okra', category: 'Fresh Vegetables',
    shortDesc: 'Tender and green Okra (Lady Finger).',
    longDesc: 'Crisp, tender okra harvested young to prevent fibrous textures.',
    quality: 'Export Quality', packaging: 'Ventilated boxes', exportInfo: 'Air freight',
    keyFeatures: ['Tender pods', 'Vibrant green', 'Snap easily'], image: okraImg
  },
  {
    id: 'radish', name: 'Radish', category: 'Fresh Vegetables',
    shortDesc: 'Crisp white Radishes.',
    longDesc: 'Fresh white radishes known for their peppery bite and crunch.',
    quality: 'Grade A', packaging: 'Cartons', exportInfo: 'Global export',
    keyFeatures: ['Crisp bite', 'Peppery flavor', 'Clean white skin'], image: radishImg
  },
  {
    id: 'carrot', name: 'Carrot', category: 'Fresh Vegetables',
    shortDesc: 'Sweet and crunchy Carrots.',
    longDesc: 'Bright orange, crunchy carrots perfect for salads and cooking.',
    quality: 'Premium Grade', packaging: 'Cartons or bags', exportInfo: 'Reefer containers',
    keyFeatures: ['Crunchy texture', 'Sweet flavor', 'Rich in Beta-carotene'], image: carrotImg
  },
  {
    id: 'drumstick', name: 'Drumstick', category: 'Fresh Vegetables',
    shortDesc: 'Fresh Indian Drumsticks (Moringa).',
    longDesc: 'Long, tender drumsticks highly valued for their flavor and nutritional benefits.',
    quality: 'Export Quality', packaging: 'Bundles in cartons', exportInfo: 'Air freight',
    keyFeatures: ['Tender pods', 'Highly nutritious', 'Authentic flavor'], image: drumstickImg
  },
  {
    id: 'cluster-beans', name: 'Cluster Beans', category: 'Fresh Vegetables',
    shortDesc: 'Fresh Cluster Beans (Guar).',
    longDesc: 'Tender cluster beans used widely in traditional cooking.',
    quality: 'Grade A', packaging: 'Ventilated cartons', exportInfo: 'Air freight',
    keyFeatures: ['Tender', 'Earthy flavor', 'Farm fresh'], image: clusterBeansImg
  },
  {
    id: 'red-onion', name: 'Red Onion', category: 'Fresh Vegetables',
    shortDesc: 'Pungent Indian Red Onions.',
    longDesc: 'Naturally cured red onions offering rich flavor and extended shelf life.',
    quality: 'Grade A, 45mm-60mm', packaging: 'Mesh bags (5kg, 10kg, 25kg)', exportInfo: 'Sea freight in reefer',
    keyFeatures: ['Long shelf life', 'High pungency', 'Deep color'], image: redOnionImg
  },
  {
    id: 'eggplant', name: 'Eggplant', category: 'Fresh Vegetables',
    shortDesc: 'Glossy purple Eggplants (Brinjal).',
    longDesc: 'Fresh, glossy eggplants available in various shapes and sizes.',
    quality: 'Export Quality', packaging: 'Cartons', exportInfo: 'Global export',
    keyFeatures: ['Glossy skin', 'Tender flesh', 'Uniform sizing'], image: eggplantImg
  },
  {
    id: 'mango-ginger', name: 'Mango Ginger', category: 'Fresh Vegetables',
    shortDesc: 'Aromatic Mango Ginger roots.',
    longDesc: 'A unique rhizome that looks like ginger but smells and tastes like raw mango.',
    quality: 'Premium', packaging: 'Mesh bags', exportInfo: 'Global export',
    keyFeatures: ['Raw mango aroma', 'Unique flavor', 'Fresh roots'], image: mangoGingerImg
  },
  {
    id: 'ash-gourd', name: 'Ash Gourd', category: 'Fresh Vegetables',
    shortDesc: 'Large fresh Ash Gourds.',
    longDesc: 'Also known as winter melon, featuring a mild flavor and long shelf life.',
    quality: 'Grade A', packaging: 'Bulk or individual wrapping', exportInfo: 'Sea / Air freight',
    keyFeatures: ['Long shelf life', 'Mild flavor', 'High water content'], image: ashGourdImg
  },
  {
    id: 'tomato', name: 'Tomato', category: 'Fresh Vegetables',
    shortDesc: 'Firm and red Tomatoes.',
    longDesc: 'Freshly harvested tomatoes packed at the perfect ripeness stage for transit.',
    quality: 'Export Quality', packaging: 'Cartons with separators', exportInfo: 'Global export',
    keyFeatures: ['Firm texture', 'Vibrant red', 'Juicy interior'], image: tomatoImg
  },
  {
    id: 'garlic', name: 'Garlic', category: 'Fresh Vegetables',
    shortDesc: 'Pungent whole Garlic bulbs.',
    longDesc: 'Well-cured garlic bulbs offering strong aroma and extended longevity.',
    quality: 'Premium Grade', packaging: 'Mesh bags or cartons', exportInfo: 'Sea freight',
    keyFeatures: ['Strong aroma', 'Well cured', 'Long shelf life'], image: garlicImg
  },
  {
    id: 'corn', name: 'Corn', category: 'Fresh Vegetables',
    shortDesc: 'Sweet and tender Sweet Corn.',
    longDesc: 'Fresh sweet corn cobs offering juicy, sweet kernels.',
    quality: 'Grade A', packaging: 'Cartons', exportInfo: 'Global export',
    keyFeatures: ['Sweet kernels', 'Juicy bite', 'Fresh husks'], image: cornImg
  },
  {
    id: 'potato', name: 'Potato', category: 'Fresh Vegetables',
    shortDesc: 'Premium Indian Potatoes.',
    longDesc: 'Versatile, high-quality potatoes suitable for consumption and processing.',
    quality: 'Export Quality', packaging: 'Mesh bags', exportInfo: 'Sea freight',
    keyFeatures: ['Uniform size', 'Blemish free', 'Excellent for cooking'], image: potatoImg
  },
  {
    id: 'beetroot', name: 'Beetroot', category: 'Fresh Vegetables',
    shortDesc: 'Earthy and vibrant Beetroots.',
    longDesc: 'Deep red beetroots offering earthy flavors and rich nutrition.',
    quality: 'Grade A', packaging: 'Mesh bags or cartons', exportInfo: 'Global export',
    keyFeatures: ['Deep red color', 'Earthy flavor', 'Firm texture'], image: beetrootImg
  },

  // ==========================================
  // 3. Dehydrated Products
  // ==========================================
  {
    id: 'dehydrated-onion', name: 'Dehydrated Onion', category: 'Dehydrated Products',
    shortDesc: 'Flakes, minced, and powder.',
    longDesc: 'Premium dehydrated onions processed under strict hygiene standards to retain flavor.',
    quality: 'A-Grade Flakes/Powder', packaging: 'Multi-wall paper bags', exportInfo: 'Global sea freight',
    keyFeatures: ['Long shelf life', 'Intense flavor', 'Hygienically processed'], image: dehydratedOnionImg
  },
  {
    id: 'dehydrated-potato', name: 'Dehydrated Potato', category: 'Dehydrated Products',
    shortDesc: 'Dehydrated potato flakes and cubes.',
    longDesc: 'High-quality dehydrated potatoes perfect for instant mash, snacks, and baking.',
    quality: 'Premium Grade', packaging: 'Bulk bags', exportInfo: 'Global export',
    keyFeatures: ['Instant rehydration', 'Neutral flavor', 'Versatile use'], image: dehydratedPotatoImg
  },
  {
    id: 'dehydrated-garlic', name: 'Dehydrated Garlic', category: 'Dehydrated Products',
    shortDesc: 'Dehydrated garlic cloves and powder.',
    longDesc: 'Strongly aromatic dehydrated garlic ensuring year-round availability without spoilage.',
    quality: 'Export Quality', packaging: 'Vacuum sealed bags in cartons', exportInfo: 'Global sea freight',
    keyFeatures: ['Strong aroma', 'Long shelf life', 'Easy to use'], image: dehydratedGarlicImg
  },
  {
    id: 'other-dehydrated-products', name: 'Other Dehydrated Products', category: 'Dehydrated Products',
    shortDesc: 'Assorted dehydrated vegetables.',
    longDesc: 'A variety of dehydrated vegetables including carrots, cabbage, and greens for instant soups and meals.',
    quality: 'Mixed Grades', packaging: 'Custom bulk packaging', exportInfo: 'Global export',
    keyFeatures: ['Custom blends', 'Retained nutrition', 'Lightweight'], image: otherDehydratedImg
  },

  // ==========================================
  // 4. Pulp & Processed Mango Products
  // ==========================================
  {
    id: 'alphonso-mango-pulp', name: 'Alphonso Mango Pulp', category: 'Pulp & Processed',
    shortDesc: 'Pure Alphonso Mango puree.',
    longDesc: 'Made from 100% authentic Ratnagiri Alphonso mangoes, offering the king of fruits in a can.',
    quality: 'Premium Export', packaging: 'A10 Cans / Aseptic bags', exportInfo: 'Global sea freight',
    keyFeatures: ['100% Natural', 'No artificial flavor', 'Rich aroma'], image: alphonsoPulpImg
  },
  {
    id: 'alphonso-mango-slices', name: 'Alphonso Mango Slices', category: 'Pulp & Processed',
    shortDesc: 'Canned Alphonso Mango slices.',
    longDesc: 'Firm, sweet slices of Alphonso mango preserved in light syrup.',
    quality: 'Grade A Slices', packaging: 'Cans', exportInfo: 'Global export',
    keyFeatures: ['Firm slices', 'Preserved freshness', 'Ready to eat'], image: alphonsoSlicesImg
  },
  {
    id: 'kesar-mango-pulp', name: 'Kesar Mango Pulp', category: 'Pulp & Processed',
    shortDesc: 'Rich and sweet Kesar Mango puree.',
    longDesc: 'Extracted from premium Kesar mangoes known for their vibrant color and intense sweetness.',
    quality: 'Premium Export', packaging: 'A10 Cans / Aseptic bags', exportInfo: 'Global sea freight',
    keyFeatures: ['Vibrant color', 'Intense sweetness', 'Smooth texture'], image: kesarPulpImg
  },
  {
    id: 'kesar-mango-slices', name: 'Kesar Mango Slices in Syrup', category: 'Pulp & Processed',
    shortDesc: 'Kesar slices preserved in syrup.',
    longDesc: 'Delicious Kesar mango slices packed in a sweet syrup, retaining their natural bite.',
    quality: 'Grade A Slices', packaging: 'Cans', exportInfo: 'Global export',
    keyFeatures: ['Natural bite', 'Sweet syrup', 'Long shelf life'], image: kesarSlicesImg
  },

  // ==========================================
  // 5. Grains & Pulses
  // ==========================================
  {
    id: 'rice', name: 'Rice', category: 'Grains & Pulses',
    shortDesc: 'Premium Basmati and Non-Basmati Rice.',
    longDesc: 'Aged to perfection, our rice boasts exceptional aroma and grain length, doubling in size upon cooking.',
    quality: '1121 Premium Grade / IR64', packaging: 'Non-woven / Jute bags', exportInfo: '1x20ft Container MOQ',
    keyFeatures: ['Extra long grain', 'Rich aroma', 'Aged gracefully'], image: riceImg
  },
  {
    id: 'lentils', name: 'Lentils', category: 'Grains & Pulses',
    shortDesc: 'Assorted high-protein Lentils.',
    longDesc: 'Cleaned, sorted, and graded lentils providing an excellent source of plant-based protein.',
    quality: 'Export Quality, Sortex Cleaned', packaging: 'PP Bags (25kg, 50kg)', exportInfo: 'Global sea freight',
    keyFeatures: ['High protein', 'Sortex cleaned', 'Uniform size'], image: lentilsImg
  },
  {
    id: 'wheat', name: 'Wheat', category: 'Grains & Pulses',
    shortDesc: 'Premium milling Wheat.',
    longDesc: 'High-quality Indian wheat suitable for milling and baking purposes globally.',
    quality: 'Grade A, High Protein', packaging: 'Bulk or PP Bags', exportInfo: 'Global sea freight',
    keyFeatures: ['High protein', 'Low moisture', 'Clean grains'], image: wheatImg
  },

  // ==========================================
  // 6. Frozen Fruits
  // ==========================================
  {
    id: 'frozen-pomegranate', name: 'Frozen Pomegranate', category: 'Frozen Fruits',
    shortDesc: 'IQF Frozen Pomegranate Arils.',
    longDesc: 'Individually Quick Frozen (IQF) pomegranate arils, locking in the juice and nutrients.',
    quality: 'IQF Premium Grade', packaging: 'Bulk poly-lined cartons', exportInfo: 'Reefer shipping (-18°C)',
    keyFeatures: ['IQF technology', 'Locked-in freshness', 'Ready to use'], image: frozenPomegranateImg
  },
  {
    id: 'frozen-plum', name: 'Frozen Plum', category: 'Frozen Fruits',
    shortDesc: 'IQF Frozen Plums.',
    longDesc: 'Frozen plums preserving the natural tartness and sweet flavor for year-round use.',
    quality: 'IQF Grade A', packaging: 'Cartons', exportInfo: 'Reefer shipping (-18°C)',
    keyFeatures: ['Year-round availability', 'Retained flavor', 'Convenient'], image: frozenPlumImg
  },
  {
    id: 'frozen-apricots', name: 'Frozen Apricots', category: 'Frozen Fruits',
    shortDesc: 'IQF Frozen Apricot halves.',
    longDesc: 'Perfectly ripened apricots frozen rapidly to maintain cellular structure and taste.',
    quality: 'IQF Premium', packaging: 'Cartons', exportInfo: 'Reefer shipping (-18°C)',
    keyFeatures: ['Firm halves', 'Bright color', 'Locked-in nutrients'], image: frozenApricotsImg
  }
];
