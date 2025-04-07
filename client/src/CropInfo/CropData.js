export const cropData = {
    wheat: {
      name: "Wheat",
      climate: "Temperate, thriving in regions with moderate temperatures between 15-20°C.",
      soil: "Loamy soil, rich in nutrients and well-draining.",
      practices: [
        "Sow seeds in early winter to ensure proper maturation.",
        "Irrigate at intervals of 15-20 days.",
        "Ensure proper drainage during early growth stages."
      ],
      pests: [
        {
          name: "Aphids",
          about: "Aphids weaken the plant by feeding on its sap.",
          solution: "Use neem oil solution or introduce natural predators like ladybugs."
        },
        {
          name: "Wheat Rust",
          about: "A fungal disease that affects wheat leaves and reduces yield.",
          solution: "Use fungicides and choose resistant wheat varieties."
        }
      ],
      market_demand: "High during January-March.",
      origin: "Wheat was first domesticated in the Fertile Crescent around 10,000 years ago.",
      uses: ["Used in making bread, pasta, and flour-based products."],
      nutritional_value: "Rich in carbohydrates and fiber."
    },
    rice: {
      name: "Rice",
      climate: "Tropical, preferring high temperatures and abundant water.",
      soil: "Clayey soil with good water retention, often flooded to create paddy fields.",
      practices: [
        "Sow seeds in well-puddled fields.",
        "Maintain adequate water levels during the growth period.",
        "Use integrated pest management strategies."
      ],
      pests: [
        {
          name: "Stem Borers",
          about: "Insects that damage rice stems and stunt growth.",
          solution: "Use pheromone traps or insecticides."
        },
        {
          name: "Rice Blast",
          about: "A fungal disease that affects rice leaves and grains.",
          solution: "Apply fungicides and use resistant varieties."
        }
      ],
      market_demand: "High during April-June.",
      origin: "Rice was first domesticated in the Yangtze River Valley of China around 13,000 years ago.",
      uses: ["Used in biryanis, stir-fries, sushi, and desserts."],
      nutritional_value: "High-energy carbohydrate source with essential nutrients."
    },
    corn: {
      name: "Corn (Maize)",
      climate: "Thrives in tropical, subtropical, and temperate regions with temperatures between 21-30°C. Requires a warm growing season with adequate sunlight and rainfall.",
      soil: "Prefers well-drained loamy soil rich in organic matter with a pH of 5.8-7.0.",
      practices: [
        "Plant seeds in rows, ensuring proper spacing for optimal growth.",
        "Apply fertilizers like nitrogen-based compounds during the early stages of growth.",
        "Irrigate regularly during dry spells, especially during flowering and grain formation stages."
      ],
      pests: [
        {
          name: "Corn Earworm",
          about: "This pest attacks corn ears and feeds on kernels, reducing yield quality.",
          solution: "Use biological control agents like Trichogramma or apply recommended insecticides."
        },
        {
          name: "Fall Armyworm",
          about: "Fall armyworms feed on leaves and whorls, causing extensive damage to crops.",
          solution: "Use pheromone traps for monitoring and apply biopesticides like neem-based products."
        }
      ],
      market_demand: "High during harvest seasons, typically in late summer and early fall. Corn is a staple food and a key industrial raw material globally.",
      origin: "First domesticated in southern Mexico over 9,000 years ago. It spread across the Americas and later to Europe and other continents during the Columbian Exchange.",
      uses: [
        "Used as a staple food (cornmeal, tortillas, and polenta).",
        "A key ingredient in processed products like corn syrup, ethanol, and animal feed."
      ],
      nutritional_value: "Rich in carbohydrates, fiber, and essential vitamins like B-complex vitamins. Also a source of antioxidants like lutein and zeaxanthin."
    },
    maize:{
      name: "Corn (Maize)",
    climate: "Thrives in tropical, subtropical, and temperate regions with temperatures between 21-30°C. Requires a warm growing season with adequate sunlight and rainfall.",
    soil: "Prefers well-drained loamy soil rich in organic matter with a pH of 5.8-7.0.",
    practices: [
      "Plant seeds in rows, ensuring proper spacing for optimal growth.",
      "Apply fertilizers like nitrogen-based compounds during the early stages of growth.",
      "Irrigate regularly during dry spells, especially during flowering and grain formation stages."
    ],
    pests: [
      {
        name: "Corn Earworm",
        about: "This pest attacks corn ears and feeds on kernels, reducing yield quality.",
        solution: "Use biological control agents like Trichogramma or apply recommended insecticides."
      },
      {
        name: "Fall Armyworm",
        about: "Fall armyworms feed on leaves and whorls, causing extensive damage to crops.",
        solution: "Use pheromone traps for monitoring and apply biopesticides like neem-based products."
      }
    ],
    market_demand: "High during harvest seasons, typically in late summer and early fall. Corn is a staple food and a key industrial raw material globally.",
    origin: "First domesticated in southern Mexico over 9,000 years ago. It spread across the Americas and later to Europe and other continents during the Columbian Exchange.",
    uses: [
      "Used as a staple food (cornmeal, tortillas, and polenta).",
      "A key ingredient in processed products like corn syrup, ethanol, and animal feed."
    ],
    nutritional_value: "Rich in carbohydrates, fiber, and essential vitamins like B-complex vitamins. Also a source of antioxidants like lutein and zeaxanthin."
  },barley: {
    name: "Barley",
    climate: "Grows best in temperate climates with a temperature range of 12-25°C. It is highly adaptable to arid and semi-arid regions.",
    soil: "Well-drained loamy or sandy soils with a pH between 6.0-7.5 are ideal.",
    practices: [
      "Sow seeds in early spring or fall, depending on the region.",
      "Apply nitrogen fertilizers moderately to enhance grain yield.",
      "Control weeds through manual weeding or pre-emergence herbicides."
    ],
    pests: [
      {
        name: "Barley Yellow Dwarf Virus",
        about: "Aphids transmit this virus, leading to stunted growth and yellowing leaves.",
        solution: "Use resistant varieties and control aphids with insecticides."
      },
      {
        name: "Hessian Fly",
        about: "Larvae feed on stems, reducing crop vigor.",
        solution: "Rotate crops and use resistant varieties to minimize infestations."
      }
    ],
    market_demand: "High demand for brewing, livestock feed, and health foods.",
    origin: "Domesticated in the Fertile Crescent around 10,000 years ago. Barley was a staple crop in ancient civilizations, including Mesopotamia and Egypt.",
    uses: [
      "Used in beer and whiskey production.",
      "Consumed as a health food (barley soup, flour, and barley water)."
    ],
    nutritional_value: "Rich in fiber, vitamins (B6, niacin), and minerals like magnesium and selenium."
  },
  sorghum: {
    name: "Sorghum",
    climate: "Thrives in tropical and semi-arid regions with temperatures between 25-35°C. It is drought-tolerant.",
    soil: "Adaptable to various soils, but prefers well-drained loamy soils with a pH of 5.5-7.0.",
    practices: [
      "Plant seeds in warm soil to promote germination.",
      "Apply organic or chemical fertilizers to boost growth.",
      "Control weeds through mulching or herbicides."
    ],
    pests: [
      {
        name: "Stem Borers",
        about: "Larvae tunnel into stems, reducing crop vigor and yield.",
        solution: "Use pheromone traps and natural predators for biological control."
      },
      {
        name: "Aphids",
        about: "Suck sap from plants, causing wilting and reducing photosynthesis.",
        solution: "Spray neem oil or introduce predatory insects like ladybugs."
      }
    ],
    market_demand: "Used extensively in animal feed, ethanol production, and gluten-free foods.",
    origin: "Native to Africa, domesticated around 8,000 years ago. Spread to Asia and the Americas later.",
    uses: [
      "Used as animal feed, human food (sorghum flour, porridge), and for brewing alcoholic beverages.",
      "An important crop for biofuel production."
    ],
    nutritional_value: "Gluten-free and rich in antioxidants, fiber, and protein."
  },
  millet: {
    name: "Millet",
    climate: "Thrives in arid and semi-arid climates with temperatures of 25-35°C. Drought-resistant and requires low rainfall.",
    soil: "Grows well in sandy to loamy soils with a pH of 5.0-7.0.",
    practices: [
      "Sow seeds directly into the soil, ensuring proper spacing.",
      "Use organic manure or low nitrogen fertilizers to improve yield.",
      "Weed control during early stages is essential for better growth."
    ],
    pests: [
      {
        name: "Shoot Fly",
        about: "Larvae damage seedlings by feeding on the growing shoots.",
        solution: "Use seed treatments and timely sowing to minimize damage."
      },
      {
        name: "Aphids",
        about: "Feed on plant sap, causing yellowing and stunted growth.",
        solution: "Spray insecticides or neem-based solutions."
      }
    ],
    market_demand: "High demand as a gluten-free grain in health foods and for livestock feed.",
    origin: "Domesticated in Africa and Asia over 4,000 years ago. Widely cultivated for its resilience to harsh climates.",
    uses: [
      "Used in porridges, flatbreads, and fermented beverages.",
      "Millet flour is popular in gluten-free baking."
    ],
    nutritional_value: "Rich in magnesium, fiber, and B vitamins. A good source of antioxidants."
  }
  
    ,
    oats: {
      name: "Oats",
      climate: "Grows well in temperate regions with cool temperatures (15-25°C) and moderate rainfall.",
      soil: "Prefers well-drained loamy or sandy soils with a pH of 5.5-7.0.",
      practices: [
        "Sow seeds in spring or early autumn.",
        "Apply nitrogen-based fertilizers for better grain quality.",
        "Harvest when grains are fully mature to ensure maximum yield."
      ],
      pests: [
        {
          name: "Crown Rust",
          about: "A fungal disease causing orange spots on leaves.",
          solution: "Use resistant varieties and apply fungicides when necessary."
        },
        {
          name: "Armyworms",
          about: "Larvae feed on leaves, causing defoliation.",
          solution: "Apply biological or chemical control measures."
        }
      ],
      market_demand: "High demand for breakfast cereals, health foods, and livestock feed.",
      origin: "Domesticated in Europe around 4,500 years ago, spreading to Asia and the Americas.",
      uses: [
        "Used in oatmeal, granola, and baked goods.",
        "Oat flour is used in gluten-free products."
      ],
      nutritional_value: "Rich in soluble fiber (beta-glucan), protein, and antioxidants."
    },
    rye: {
      name: "Rye",
      climate: "Grows in cool, temperate climates with temperatures between 10-18°C.",
      soil: "Tolerant of poor soils but thrives in sandy or loamy soils with a pH of 5.0-7.0.",
      practices: [
        "Sow seeds in early autumn for winter rye or spring for spring rye.",
        "Apply moderate amounts of nitrogen fertilizers.",
        "Control weeds through crop rotation or herbicides."
      ],
      pests: [
        {
          name: "Ergot Fungus",
          about: "A fungal disease that replaces rye grains with toxic black sclerotia.",
          solution: "Use certified seed and rotate crops to prevent contamination."
        },
        {
          name: "Wireworms",
          about: "Larvae feed on roots and reduce plant vigor.",
          solution: "Apply soil treatments or use crop rotations to control pests."
        }
      ],
      market_demand: "High in European countries for bread, whiskey, and livestock feed.",
      origin: "Domesticated in the Fertile Crescent around 4,000 years ago, with significant cultivation in Eastern Europe.",
      uses: [
        "Used to make rye bread, crispbreads, and whiskey.",
        "Rye grains and straw are used as animal feed."
      ],
      nutritional_value: "Rich in fiber, manganese, and antioxidants. Lower glycemic index compared to other grains."
    },
    soybeans: {
      name: "Soybeans",
      climate: "Thrives in warm climates with temperatures between 20-30°C and moderate rainfall (500-800 mm annually).",
      soil: "Prefers well-drained loamy soils with a pH of 6.0-7.5.",
      practices: [
        "Inoculate seeds with nitrogen-fixing bacteria before planting.",
        "Sow in rows spaced 30-75 cm apart for better growth.",
        "Apply phosphorus and potassium fertilizers as needed."
      ],
      pests: [
        {
          name: "Soybean Aphids",
          about: "Aphids feed on plant sap, reducing vigor and spreading diseases.",
          solution: "Introduce natural predators or use insecticidal sprays."
        },
        {
          name: "Soybean Cyst Nematode",
          about: "Damages roots, reducing nutrient uptake.",
          solution: "Rotate crops and use resistant soybean varieties."
        }
      ],
      market_demand: "High demand for soy products (tofu, soy milk) and animal feed.",
      origin: "Domesticated in China over 3,000 years ago, later spreading to other parts of Asia and the Americas.",
      uses: [
        "Used in making soy milk, tofu, and soybean oil.",
        "Widely used as livestock feed and for biodiesel production."
      ],
      nutritional_value: "Rich in protein, isoflavones, and essential fatty acids."
    },
    peas: {
      name: "Peas",
      climate: "Grows well in cool climates with temperatures between 10-25°C.",
      soil: "Prefers well-drained loamy soils rich in organic matter with a pH of 6.0-7.5.",
      practices: [
        "Sow seeds in early spring or fall for optimal growth.",
        "Provide support for climbing varieties using stakes or trellises.",
        "Apply compost or organic fertilizers to enhance soil fertility."
      ],
      pests: [
        {
          name: "Pea Aphids",
          about: "Suck sap from plants, leading to yellowing and reduced growth.",
          solution: "Introduce predatory insects or use neem-based sprays."
        },
        {
          name: "Powdery Mildew",
          about: "A fungal disease causing white patches on leaves.",
          solution: "Use fungicides and resistant pea varieties."
        }
      ],
      market_demand: "High demand in fresh, frozen, and canned forms.",
      origin: "Domesticated in the Near East around 9,000 years ago.",
      uses: [
        "Consumed as fresh peas, dried peas, or in soups and stews.",
        "Used in health food products for plant-based protein."
      ],
      nutritional_value: "Rich in vitamins A, C, and K, as well as dietary fiber and protein."
    },

    beans: {
  name: "Beans",
  climate: "Require warm temperatures between 18-30°C and moderate rainfall (300-500 mm).",
  soil: "Grow best in well-drained sandy or loamy soils with a pH of 6.0-7.5.",
  practices: [
    "Sow seeds directly into moist soil.",
    "Apply organic compost to improve fertility.",
    "Ensure regular watering, especially during flowering and pod formation."
  ],
  pests: [
    {
      name: "Bean Weevils",
      about: "Damage stored beans and reduce germination rates.",
      solution: "Store beans in airtight containers and fumigate if necessary."
    },
    {
      name: "Anthracnose",
      about: "A fungal disease causing dark lesions on leaves and pods.",
      solution: "Use disease-free seeds and fungicides."
    }
  ],
  market_demand: "High demand for fresh, dried, and processed forms globally.",
  origin: "Domesticated in Central and South America over 7,000 years ago.",
  uses: [
    "Used in soups, stews, and salads.",
    "Processed into canned or frozen products."
  ],
  nutritional_value: "High in protein, fiber, and essential minerals like iron and potassium."
},
chickpeas: {
  name: "Chickpeas",
  climate: "Grows in semi-arid climates with temperatures between 18-30°C and low rainfall.",
  soil: "Thrives in well-drained sandy or loamy soils with a pH of 6.0-7.0.",
  practices: [
    "Sow seeds in late winter or early spring.",
    "Rotate with cereals to reduce soil depletion.",
    "Minimize irrigation during flowering to prevent fungal infections."
  ],
  pests: [
    {
      name: "Pod Borers",
      about: "Larvae feed on pods, reducing yield.",
      solution: "Apply biological control agents like Bacillus thuringiensis."
    },
    {
      name: "Fusarium Wilt",
      about: "A soil-borne fungal disease causing plant wilting.",
      solution: "Use resistant varieties and crop rotation."
    }
  ],
  market_demand: "High for making hummus, flour, and snacks.",
  origin: "Domesticated in the Fertile Crescent around 7,000 years ago.",
  uses: [
    "Consumed as whole seeds, hummus, or chickpea flour.",
    "Used in snacks and as a protein source in vegan diets."
  ],
  nutritional_value: "Rich in protein, fiber, and essential vitamins like folate."
},
lentils: {
  name: "Lentils",
  climate: "Prefer cool climates with temperatures between 10-25°C and moderate rainfall.",
  soil: "Grow well in sandy loam soils with a pH of 6.0-7.5.",
  practices: [
    "Sow seeds in early spring or late fall.",
    "Apply phosphorus fertilizers to enhance pod formation.",
    "Ensure proper drainage to prevent root rot."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Suck sap, causing stunted growth.",
      solution: "Spray neem oil or insecticidal soap."
    },
    {
      name: "Lentil Rust",
      about: "A fungal disease causing orange-brown pustules on leaves.",
      solution: "Use fungicides and rotate crops."
    }
  ],
  market_demand: "High demand for soups, dals, and health foods.",
  origin: "Domesticated in the Fertile Crescent over 9,000 years ago.",
  uses: [
    "Used in soups, stews, and traditional dishes like dal.",
    "Processed into lentil flour or protein supplements."
  ],
  nutritional_value: "High in, protein, iron, and folate."
},
peanut: {
  name: "Peanut",
  climate: "Thrives in warm climates with temperatures between 20-30°C and moderate rainfall.",
  soil: "Prefers sandy loam soils with good drainage and a pH of 6.0-6.5.",
  practices: [
    "Plant seeds after the last frost in well-prepared soil.",
    "Ensure regular irrigation during pod formation.",
    "Rotate crops to reduce soil-borne diseases."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Transmit viruses that affect plant health.",
      solution: "Use natural predators or insecticides."
    },
    {
      name: "Leaf Spot",
      about: "A fungal disease causing defoliation.",
      solution: "Apply fungicides and practice crop rotation."
    }
  ],
  market_demand: "High demand for peanut butter, oil, and snacks.",
  origin: "Domesticated in South America over 3,500 years ago.",
  uses: [
    "Used in snacks, peanut butter, and cooking oil.",
    "Processed into protein-rich animal feed."
  ],
  nutritional_value: "Rich in protein, healthy fats, and antioxidants."
},
rapeseed: {
  name: "Rapeseed",
  climate: "Prefers cool, temperate climates with temperatures between 10-25°C.",
  soil: "Grows well in fertile, well-drained loamy or clay soils with a pH of 6.0-7.0.",
  practices: [
    "Sow seeds in early spring or fall for optimal yield.",
    "Apply nitrogen and phosphorus fertilizers during planting.",
    "Ensure adequate moisture during flowering and seed formation."
  ],
  pests: [
    {
      name: "Cabbage Stem Flea Beetle",
      about: "Larvae damage seedlings by feeding on stems and roots.",
      solution: "Use insecticides or cultural practices like crop rotation."
    },
    {
      name: "Powdery Mildew",
      about: "Fungal disease affecting leaves and reducing photosynthesis.",
      solution: "Use fungicides and resistant varieties."
    }
  ],
  market_demand: "High demand for rapeseed oil and biodiesel production.",
  origin: "Domesticated in Europe and Asia thousands of years ago.",
  uses: ["Extracted for edible oil, biodiesel, and animal feed."],
  nutritional_value: "Rich in omega-3 fatty acids and low in saturated fat."
},
sunflower: {
  name: "Sunflower",
  climate: "Thrives in temperate and subtropical climates with temperatures between 20-30°C.",
  soil: "Prefers well-drained loamy or sandy soils with a pH of 6.0-7.5.",
  practices: [
    "Plant seeds directly into soil after the last frost.",
    "Use potassium-rich fertilizers for healthy seed development.",
    "Space plants to allow proper sun exposure."
  ],
  pests: [
    {
      name: "Sunflower Moth",
      about: "Larvae feed on developing seeds and flower heads.",
      solution: "Apply insecticides or introduce natural predators."
    },
    {
      name: "Rust",
      about: "A fungal disease causing orange-brown pustules on leaves.",
      solution: "Use fungicides and practice crop rotation."
    }
  ],
  market_demand: "High for cooking oil, snacks, and ornamental purposes.",
  origin: "Native to North America, domesticated over 4,000 years ago.",
  uses: ["Used for cooking oil, birdseed, and as a snack food."],
  nutritional_value: "Rich in vitamin E and healthy fats."
},
palm: {
  name: "Palm",
  climate: "Grows in tropical climates with high humidity and temperatures between 24-32°C.",
  soil: "Thrives in deep, well-drained soils with good organic matter and a pH of 4.0-7.0.",
  practices: [
    "Plant seedlings in areas with full sunlight and adequate space.",
    "Ensure regular irrigation during dry periods.",
    "Apply potassium and nitrogen-rich fertilizers for better yield."
  ],
  pests: [
    {
      name: "Palm Weevil",
      about: "Feeds on palm stems, causing structural damage.",
      solution: "Trap adult weevils and use systemic insecticides."
    },
    {
      name: "Ganoderma Rot",
      about: "Fungal disease causing root and stem decay.",
      solution: "Remove infected trees and apply soil fungicides."
    }
  ],
  market_demand: "High for palm oil used in cooking and industrial applications.",
  origin: "Native to West Africa and South Asia.",
  uses: ["Produces palm oil for cooking, cosmetics, and biodiesel."],
  nutritional_value: "Rich in saturated fats and vitamins A and E."
},
coconut: {
  name: "Coconut",
  climate: "Grows in tropical climates with temperatures between 20-32°C and high humidity.",
  soil: "Requires sandy or loamy soils with good drainage and a pH of 5.5-7.0.",
  practices: [
    "Plant seedlings in areas with full sunlight and adequate water.",
    "Fertilize with potassium-rich organic manure.",
    "Ensure protection from strong winds using windbreaks."
  ],
  pests: [
    {
      name: "Rhinoceros Beetle",
      about: "Feeds on the sap, damaging palm shoots.",
      solution: "Use biological control agents like fungus Metarhizium anisopliae."
    },
    {
      name: "Red Palm Weevil",
      about: "Bores into the stem, weakening the tree.",
      solution: "Apply insecticides and remove infested parts."
    }
  ],
  market_demand: "High for coconut oil, water, and coir products.",
  origin: "Likely originated in Southeast Asia or the Pacific Islands.",
  uses: ["Used for oil, water, milk, and coir fiber production."],
  nutritional_value: "Rich in healthy fats, fiber, and potassium."
},
olive: {
  name: "Olive",
  climate: "Thrives in Mediterranean climates with mild winters and hot, dry summers.",
  soil: "Prefers well-drained calcareous or loamy soils with a pH of 6.0-8.5.",
  practices: [
    "Prune trees annually to improve airflow and sunlight penetration.",
    "Apply potassium fertilizers for better fruiting.",
    "Irrigate moderately during the growing season."
  ],
  pests: [
    {
      name: "Olive Fruit Fly",
      about: "Larvae feed inside olive fruits, causing spoilage.",
      solution: "Use pheromone traps and insecticides."
    },
    {
      name: "Verticillium Wilt",
      about: "A fungal disease causing wilting and branch dieback.",
      solution: "Use resistant varieties and avoid over-irrigation."
    }
  ],
  market_demand: "High for olive oil, table olives, and cosmetics.",
  origin: "Domesticated in the Mediterranean region over 6,000 years ago.",
  uses: ["Used for olive oil, pickled olives, and cosmetics."],
  nutritional_value: "Rich in monounsaturated fats and antioxidants."
},
cottonseed: {
  name: "Cottonseed",
  climate: "Grows in warm climates with temperatures between 20-30°C.",
  soil: "Prefers well-drained sandy loam soils with a pH of 5.8-7.0.",
  practices: [
    "Plant seeds during warm seasons with adequate sunlight.",
    "Apply fertilizers high in potassium and phosphorus.",
    "Irrigate regularly during flowering and boll formation stages."
  ],
  pests: [
    {
      name: "Cotton Bollworm",
      about: "Feeds on cotton bolls, reducing fiber yield.",
      solution: "Use biological controls or Bt cotton varieties."
    },
    {
      name: "Aphids",
      about: "Transmit diseases and reduce plant vigor.",
      solution: "Apply neem oil or chemical insecticides."
    }
  ],
  market_demand: "High for cottonseed oil and animal feed production.",
  origin: "Domesticated in India, Africa, and the Americas.",
  uses: ["Used for oil extraction, livestock feed, and biodiesel."],
  nutritional_value: "Rich in protein and oil content for industrial use."
},
sesame: {
  name: "Sesame",
  climate: "Thrives in warm climates with temperatures between 25-35°C.",
  soil: "Grows best in well-drained sandy or loamy soils with a pH of 5.5-6.5.",
  practices: [
    "Sow seeds directly into the soil after the last frost.",
    "Apply organic fertilizers for better yield.",
    "Ensure proper weeding during early growth stages."
  ],
  pests: [
    {
      name: "Gall Midge",
      about: "Causes swelling on stems, reducing growth.",
      solution: "Use resistant varieties and crop rotation."
    },
    {
      name: "Leaf Spot",
      about: "Fungal disease causing defoliation.",
      solution: "Apply fungicides and avoid waterlogging."
    }
  ],
  market_demand: "High for sesame oil, tahini, and snacks.",
  origin: "Domesticated in the Indian subcontinent and Africa.",
  uses: ["Used for oil, tahini, and as a condiment."],
  nutritional_value: "Rich in healthy fats, protein, and calcium."
},
potato: {
  name: "Potato",
  climate: "Prefers cool climates with temperatures between 15-20°C.",
  soil: "Thrives in loose, well-drained sandy or loamy soils with a pH of 5.0-6.5.",
  practices: [
    "Plant seed tubers in rows spaced 30 cm apart.",
    "Ensure regular irrigation during tuber formation.",
    "Hilling soil around plants to prevent sunlight from greening tubers."
  ],
  pests: [
    {
      name: "Colorado Potato Beetle",
      about: "Feeds on potato leaves, reducing photosynthesis.",
      solution: "Handpick beetles and apply neem oil or insecticides."
    },
    {
      name: "Late Blight",
      about: "A fungal disease causing dark spots on leaves and tubers.",
      solution: "Use fungicides and plant resistant varieties."
    }
  ],
  market_demand: "High demand year-round for food and processing industries.",
  origin: "Native to the Andes in South America, domesticated over 8,000 years ago.",
  uses: ["Consumed as a staple food, used in chips, fries, and as a thickener in soups."],
  nutritional_value: "Rich in carbohydrates, vitamin C, and potassium."
}
,
sweet_potato: {
  name: "Sweet Potato",
  climate: "Grows in warm climates with temperatures between 20-30°C.",
  soil: "Prefers sandy or loamy soils with good drainage and a pH of 5.5-6.5.",
  practices: [
    "Plant cuttings or slips in raised beds for better drainage.",
    "Ensure consistent watering during growth but avoid waterlogging.",
    "Apply potassium-rich fertilizers to enhance tuber quality."
  ],
  pests: [
    {
      name: "Sweet Potato Weevil",
      about: "Larvae bore into tubers, causing damage.",
      solution: "Use crop rotation and insecticides to control infestations."
    },
    {
      name: "Fusarium Wilt",
      about: "Fungal disease causing yellowing and wilting of leaves.",
      solution: "Plant disease-resistant varieties and avoid overwatering."
    }
  ],
  market_demand: "High for consumption and starch production.",
  origin: "Native to Central and South America, domesticated over 5,000 years ago.",
  uses: ["Eaten baked, fried, or as a component in desserts and starch-based products."],
  nutritional_value: "High in beta-carotene, fiber, and vitamin A."
},
carrots: {
  name: "Carrots",
  climate: "Prefers cool climates with temperatures between 15-20°C.",
  soil: "Requires deep, well-drained sandy or loamy soils with a pH of 6.0-6.8.",
  practices: [
    "Sow seeds directly in the field in rows spaced 30 cm apart.",
    "Thin seedlings to ensure proper spacing and root development.",
    "Ensure consistent moisture for uniform root growth."
  ],
  pests: [
    {
      name: "Carrot Fly",
      about: "Larvae feed on roots, causing tunneling and decay.",
      solution: "Use row covers and practice crop rotation to prevent infestations."
    },
    {
      name: "Powdery Mildew",
      about: "Fungal disease causing white patches on leaves.",
      solution: "Apply fungicides and maintain proper spacing for airflow."
    }
  ],
  market_demand: "High for fresh consumption and juice production.",
  origin: "Domesticated in Central Asia over 1,000 years ago.",
  uses: ["Consumed raw, cooked, or as juice, and used in soups and desserts."],
  nutritional_value: "Rich in beta-carotene, vitamin K, and dietary fiber."
},
beetroot: {
  name: "Beetroot",
  climate: "Prefers cool climates with temperatures between 15-25°C.",
  soil: "Grows well in fertile, well-drained sandy or loamy soils with a pH of 6.0-7.0.",
  practices: [
    "Sow seeds directly into the soil in rows spaced 20-30 cm apart.",
    "Thin seedlings to allow proper root development.",
    "Ensure consistent watering to prevent root cracking."
  ],
  pests: [
    {
      name: "Beet Leaf Miner",
      about: "Larvae feed on leaves, causing discolored patches.",
      solution: "Remove affected leaves and use biological control methods."
    },
    {
      name: "Downy Mildew",
      about: "Fungal disease causing yellow spots on leaves.",
      solution: "Apply fungicides and improve field drainage."
    }
  ],
  market_demand: "High for salads, pickling, and juice production.",
  origin: "Native to the Mediterranean region, domesticated over 4,000 years ago.",
  uses: ["Used in salads, soups, and as a natural food coloring agent."],
  nutritional_value: "Rich in folate, iron, and antioxidants."
},
turnip: {
  name: "Turnip",
  climate: "Thrives in cool climates with temperatures between 10-20°C.",
  soil: "Prefers well-drained sandy or loamy soils with a pH of 6.0-7.0.",
  practices: [
    "Sow seeds directly into soil in rows spaced 25-30 cm apart.",
    "Thin seedlings to prevent overcrowding.",
    "Apply nitrogen-rich fertilizers to enhance foliage and root development."
  ],
  pests: [
    {
      name: "Cabbage Maggot",
      about: "Larvae feed on roots, causing stunted growth.",
      solution: "Use row covers and practice crop rotation."
    },
    {
      name: "Clubroot",
      about: "Fungal disease causing swollen roots.",
      solution: "Plant resistant varieties and maintain soil pH above 7.0."
    }
  ],
  market_demand: "High for fresh consumption and animal fodder.",
  origin: "Domesticated in Europe and Asia over 4,000 years ago.",
  uses: ["Used in soups, stews, and as a side dish."],
  nutritional_value: "Rich in vitamin C and dietary fiber."
},
radish: {
  name: "Radish",
  climate: "Thrives in cool climates with temperatures between 10-20°C.",
  soil: "Grows best in loose, sandy, or loamy soils with a pH of 5.5-6.8.",
  practices: [
    "Sow seeds directly into the soil in rows spaced 15-20 cm apart.",
    "Thin seedlings to prevent overcrowding.",
    "Ensure consistent watering to maintain crisp roots."
  ],
  pests: [
    {
      name: "Flea Beetles",
      about: "Feed on young leaves, causing holes.",
      solution: "Use row covers and insecticides to protect plants."
    },
    {
      name: "Downy Mildew",
      about: "Fungal disease causing yellow patches on leaves.",
      solution: "Improve air circulation and apply fungicides."
    }
  ],
  market_demand: "High for fresh salads and pickling.",
  origin: "Native to Southeast Asia, domesticated over 2,000 years ago.",
  uses: ["Eaten raw, pickled, or cooked in stews."],
  nutritional_value: "Rich in vitamin C and low in calories."
},
tomato: {
  name: "Tomato",
  climate: "Prefers warm climates with temperatures between 20-30°C.",
  soil: "Thrives in well-drained sandy or loamy soils with a pH of 6.0-6.8.",
  practices: [
    "Plant seedlings in rows with adequate spacing to prevent overcrowding.",
    "Use stakes or cages to support plant growth.",
    "Apply nitrogen-based fertilizers during early growth."
  ],
  pests: [
    {
      name: "Tomato Hornworm",
      about: "Larvae feed on foliage and fruit, causing damage.",
      solution: "Handpick worms and use biological controls like parasitic wasps."
    },
    {
      name: "Late Blight",
      about: "Fungal disease causing dark lesions on leaves and fruits.",
      solution: "Apply fungicides and ensure proper air circulation."
    }
  ],
  market_demand: "High for fresh consumption, sauces, and ketchup production.",
  origin: "Native to western South America and domesticated in Mexico.",
  uses: ["Used in salads, sauces, and cooking as a base ingredient."],
  nutritional_value: "Rich in vitamin C, potassium, and antioxidants."
},

onion: {
  name: "Onion",
  climate: "Grows well in mild climates with temperatures between 12-25°C.",
  soil: "Requires well-drained sandy or loamy soils with a pH of 6.0-7.0.",
  practices: [
    "Plant bulbs or seeds in rows spaced 15-20 cm apart.",
    "Ensure proper irrigation during bulb formation.",
    "Avoid waterlogging to prevent fungal infections."
  ],
  pests: [
    {
      name: "Onion Thrips",
      about: "Insects that suck sap from leaves, reducing yield.",
      solution: "Apply insecticides and maintain field hygiene."
    },
    {
      name: "Downy Mildew",
      about: "Fungal disease causing purple lesions on leaves.",
      solution: "Use fungicides and improve field drainage."
    }
  ],
  market_demand: "High demand year-round for culinary uses.",
  origin: "Believed to have originated in Central Asia.",
  uses: ["Used in cooking, salads, and as a base for curries and soups."],
  nutritional_value: "Rich in vitamin C, dietary fiber, and antioxidants."
}
,
garlic: {
  name: "Garlic",
  climate: "Prefers mild climates with temperatures between 12-24°C.",
  soil: "Thrives in fertile, well-drained sandy or loamy soils with a pH of 6.0-7.5.",
  practices: [
    "Plant cloves with pointed ends upward, 10 cm apart.",
    "Mulch soil to retain moisture and suppress weeds.",
    "Avoid overwatering during the maturity phase."
  ],
  pests: [
    {
      name: "Garlic Rust",
      about: "Fungal disease causing orange spots on leaves.",
      solution: "Apply fungicides and ensure proper spacing between plants."
    },
    {
      name: "Bulb Mites",
      about: "Infest garlic bulbs, causing rotting.",
      solution: "Use clean planting material and crop rotation."
    }
  ],
  market_demand: "High for culinary, medicinal, and seasoning purposes.",
  origin: "Native to Central Asia and Iran.",
  uses: ["Used as a seasoning, in medicinal applications, and in sauces."],
  nutritional_value: "Rich in allicin, vitamins B6 and C, and manganese."
}
,
cabbage: {
  name: "Cabbage",
  climate: "Cool climates with temperatures between 15-20°C.",
  soil: "Well-drained loamy soils with high organic matter and a pH of 6.0-6.5.",
  practices: [
    "Start seeds in nurseries and transplant seedlings at 4-5 weeks.",
    "Apply nitrogen-based fertilizers for leafy growth.",
    "Harvest when heads are firm and compact."
  ],
  pests: [
    {
      name: "Cabbage Looper",
      about: "Caterpillars that feed on cabbage leaves, creating holes.",
      solution: "Use Bacillus thuringiensis-based biopesticides."
    },
    {
      name: "Clubroot",
      about: "Soil-borne fungal disease causing root swelling and stunted growth.",
      solution: "Use disease-resistant varieties and practice crop rotation."
    }
  ],
  market_demand: "High demand for fresh vegetables and in processed forms like coleslaw.",
  origin: "Native to Europe and Asia.",
  uses: ["Used in salads, soups, and as a cooked vegetable."],
  nutritional_value: "Rich in vitamins K and C, fiber, and antioxidants."
}
,
capsicum: {
  name: "Capsicum",
  climate: "Thrives in warm climates with temperatures between 18-25°C.",
  soil: "Prefers well-drained sandy or loamy soils with a pH of 6.0-6.5.",
  practices: [
    "Grow seedlings in nurseries and transplant them into the field.",
    "Provide stakes for support during fruiting.",
    "Irrigate frequently during dry periods to ensure healthy growth."
  ],
  pests: [
    {
      name: "Thrips",
      about: "Insects that feed on leaves and flowers, causing discoloration.",
      solution: "Spray neem-based insecticides or introduce predatory mites."
    },
    {
      name: "Anthracnose",
      about: "Fungal disease causing dark spots on fruits and leaves.",
      solution: "Apply fungicides and practice crop rotation."
    }
  ],
  market_demand: "High for fresh vegetables, sauces, and pickled products.",
  origin: "Native to Central and South America.",
  uses: ["Used in salads, stir-fries, and as a pizza topping."],
  nutritional_value: "Rich in vitamins A, C, and potassium."
},
chili_pepper: {
  name: "Chili Pepper",
  climate: "Warm climates with temperatures between 20-30°C and moderate humidity.",
  soil: "Well-drained sandy or loamy soils with a pH of 6.0-6.8.",
  practices: [
    "Sow seeds in nurseries and transplant seedlings after 4-6 weeks.",
    "Irrigate regularly but avoid waterlogging.",
    "Apply balanced fertilizers during flowering and fruiting stages."
  ],
  pests: [
    {
      name: "Fruit Borers",
      about: "Insects that damage chili fruits by boring holes.",
      solution: "Use pheromone traps and apply biological controls like Trichogramma."
    },
    {
      name: "Aphids",
      about: "Small insects that suck sap from leaves, weakening the plant.",
      solution: "Use neem oil sprays or insecticidal soaps."
    }
  ],
  market_demand: "High demand globally for culinary, medicinal, and spice production.",
  origin: "Native to Central and South America.",
  uses: ["Used as a spice, in sauces, and for medicinal purposes."],
  nutritional_value: "Rich in vitamin C, capsaicin, and antioxidants."
},
cauliflower: {
  name: "Cauliflower",
  climate: "Cool weather plant, prefers temperatures between 10-20°C.",
  soil: "Rich, well-drained, and slightly acidic soils with a pH of 6.0-6.5.",
  practices: [
    "Start seeds in early spring and transplant when seedlings are 4-6 weeks old.",
    "Ensure consistent moisture, particularly during head formation.",
    "Apply a balanced fertilizer with an emphasis on phosphorus and potassium."
  ],
  pests: [
    {
      name: "Cabbage Worms",
      about: "Green caterpillars that feed on cauliflower leaves.",
      solution: "Use organic insecticides or introduce natural predators like parasitic wasps."
    },
    {
      name: "Aphids",
      about: "Small insects that attack leaves, causing yellowing.",
      solution: "Apply insecticidal soap or introduce ladybugs."
    }
  ],
  market_demand: "High for fresh consumption, particularly during winter months.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used in soups, stews, and as a substitute for rice and mashed potatoes."],
  nutritional_value: "Rich in vitamin C, folate, and dietary fiber."
},
broccoli: {
  name: "Broccoli",
  climate: "Thrives in cool climates with temperatures between 15-20°C.",
  soil: "Fertile, well-drained loamy soils with a pH of 6.0-7.0.",
  practices: [
    "Start seeds indoors and transplant after 4-6 weeks.",
    "Ensure the soil is rich in organic matter.",
    "Water consistently to keep the soil moist, but avoid waterlogging."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Tiny insects that weaken plants by feeding on plant sap.",
      solution: "Use neem oil or insecticidal soaps."
    },
    {
      name: "Cabbage Moth",
      about: "Moths that lay eggs on broccoli, which then turn into destructive caterpillars.",
      solution: "Hand-pick caterpillars or use row covers to prevent moths from laying eggs."
    }
  ],
  market_demand: "High demand for fresh broccoli and processed frozen vegetables.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used in salads, soups, stir-fries, and as a side dish."],
  nutritional_value: "Rich in vitamins K, C, and folate, along with dietary fiber."
}
,
spinach: {
  name: "Spinach",
  climate: "Prefers cool climates with temperatures ranging from 10-20°C.",
  soil: "Well-drained, loamy soils rich in organic matter, with a pH of 6.5-7.0.",
  practices: [
    "Directly sow seeds in the soil or start them indoors and transplant after 4-6 weeks.",
    "Keep soil moist but avoid waterlogging.",
    "Provide partial shade during hot weather to prevent bolting."
  ],
  pests: [
    {
      name: "Leaf Miners",
      about: "Insects that create trails in the leaves of spinach.",
      solution: "Use insecticidal soap or introduce natural predators like parasitic wasps."
    },
    {
      name: "Aphids",
      about: "Small insects that feed on the sap of spinach leaves.",
      solution: "Spray with neem oil or insecticidal soap."
    }
  ],
  market_demand: "Consistent demand for fresh and processed spinach in salads and dishes.",
  origin: "Native to Central and Western Asia.",
  uses: ["Used in salads, smoothies, soups, and cooked dishes."],
  nutritional_value: "Rich in iron, vitamins A, C, and K, and folate."
},
lettuce: {
  name: "Lettuce",
  climate: "Cool climates with temperatures between 10-20°C.",
  soil: "Well-drained, fertile soils with a pH of 6.0-7.0.",
  practices: [
    "Direct sow seeds or transplant seedlings into the field after 4 weeks.",
    "Ensure consistent watering to maintain tender leaves.",
    "Mulch around plants to retain moisture and prevent weeds."
  ],
  pests: [
    {
      name: "Slugs",
      about: "Slugs feed on lettuce leaves, leaving holes and slime trails.",
      solution: "Use organic slug pellets or introduce natural predators like ducks."
    },
    {
      name: "Aphids",
      about: "Small pests that weaken plants by feeding on sap.",
      solution: "Use neem oil or insecticidal soap."
    }
  ],
  market_demand: "High for fresh lettuce, especially in salads and sandwiches.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used primarily in salads, wraps, and sandwiches."],
  nutritional_value: "Rich in vitamins A and K, and low in calories."
}
,
cucumber: {
  name: "Cucumber",
  climate: "Warm climates with temperatures between 18-30°C.",
  soil: "Well-drained, loamy soil rich in organic matter with a pH of 6.0-6.5.",
  practices: [
    "Sow seeds directly in the ground after the danger of frost has passed.",
    "Provide support for vines to grow vertically, reducing the risk of disease.",
    "Ensure consistent watering to keep the soil moist but not waterlogged."
  ],
  pests: [
    {
      name: "Cucumber Beetles",
      about: "Small yellow and black beetles that attack cucumber plants, causing wilt.",
      solution: "Use insecticidal soap or introduce natural predators like ladybugs."
    },
    {
      name: "Aphids",
      about: "Tiny insects that weaken the plant by feeding on the sap.",
      solution: "Spray with neem oil or introduce beneficial insects like ladybugs."
    }
  ],
  market_demand: "High during summer months, especially in salads and pickles.",
  origin: "Native to South Asia.",
  uses: ["Used in salads, sandwiches, and pickles."],
  nutritional_value: "Low in calories, rich in water content, and a good source of vitamins K and C."
},
pumpkin: {
  name: "Pumpkin",
  climate: "Warm climates with temperatures between 18-30°C.",
  soil: "Fertile, well-drained soil rich in organic matter, with a pH of 6.0-6.8.",
  practices: [
    "Sow seeds in well-prepared soil, ensuring enough space for vines to spread.",
    "Water regularly, especially during flowering and fruiting stages.",
    "Apply organic mulch to retain moisture and suppress weeds."
  ],
  pests: [
    {
      name: "Squash Bugs",
      about: "Insects that feed on the leaves, causing wilting and stunted growth.",
      solution: "Remove pests manually or use insecticidal soap."
    },
    {
      name: "Cucumber Beetles",
      about: "Beetles that damage pumpkin plants, often transmitting diseases.",
      solution: "Use row covers to prevent beetles and apply organic insecticides."
    }
  ],
  market_demand: "High demand during fall and Halloween season, also in cooking and baking.",
  origin: "Native to North America.",
  uses: ["Used in pies, soups, stews, and as a decorative item during holidays."],
  nutritional_value: "Rich in vitamin A, beta-carotene, and fiber."
},
squash: {
  name: "Squash",
  climate: "Warm climates with temperatures between 18-30°C.",
  soil: "Well-drained, rich soil with a pH of 6.0-6.8.",
  practices: [
    "Sow seeds directly in the soil after the last frost.",
    "Water regularly, particularly during the fruiting phase.",
    "Mulch around plants to conserve moisture and reduce weed competition."
  ],
  pests: [
    {
      name: "Squash Bugs",
      about: "These insects feed on squash leaves, causing them to wilt and die.",
      solution: "Remove pests manually or apply insecticidal soap."
    },
    {
      name: "Powdery Mildew",
      about: "A fungal disease that affects squash leaves and fruits.",
      solution: "Use fungicides or apply neem oil to control the spread of mildew."
    }
  ],
  market_demand: "Consistent demand for squash, especially in the summer months.",
  origin: "Native to the Americas.",
  uses: ["Used in soups, casseroles, and baked dishes."],
  nutritional_value: "Good source of vitamin A, potassium, and fiber."
},
eggplant: {
  name: "Eggplant",
  climate: "Warm climates with temperatures between 20-30°C.",
  soil: "Well-drained, fertile soil with a pH of 5.5-6.5.",
  practices: [
    "Start seeds indoors, then transplant to the field after 6-8 weeks.",
    "Water consistently, especially during fruit development.",
    "Ensure good air circulation around plants to reduce the risk of disease."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Small insects that feed on eggplant leaves and stems.",
      solution: "Use insecticidal soap or natural predators like ladybugs."
    },
    {
      name: "Whiteflies",
      about: "Insects that weaken the plant by feeding on the underside of leaves.",
      solution: "Use yellow sticky traps or neem oil to control the infestation."
    }
  ],
  market_demand: "High for fresh consumption and in processed forms like baba ghanoush.",
  origin: "Native to India and Southeast Asia.",
  uses: ["Used in stir-fries, curries, dips, and grilled dishes."],
  nutritional_value: "Low in calories, contains fiber, and is a good source of antioxidants."
},
okra: {
  name: "Okra",
  climate: "Warm climates with temperatures between 25-35°C.",
  soil: "Well-drained, fertile soil with a pH of 6.5-7.0.",
  practices: [
    "Directly sow seeds in the soil once the soil has warmed up.",
    "Water regularly, but ensure proper drainage to avoid root rot.",
    "Harvest pods when they are young and tender for best taste."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Small insects that feed on the sap of okra plants.",
      solution: "Use neem oil or insecticidal soap to control aphid populations."
    },
    {
      name: "Caterpillars",
      about: "Caterpillars can eat through leaves, affecting the plant's growth.",
      solution: "Handpick caterpillars or use organic pesticides."
    }
  ],
  market_demand: "Demand is high in warm climates and for use in stews and fried dishes.",
  origin: "Native to West Africa.",
  uses: ["Used in stews, gumbo, and as a fried snack."],
  nutritional_value: "Rich in vitamins C, K, and folate, and contains antioxidants."
},
ginger: {
  name: "Ginger",
  climate: "Warm, humid climates with temperatures between 20-30°C.",
  soil: "Well-drained, fertile soil rich in organic matter, with a pH of 6.0-6.5.",
  practices: [
    "Plant ginger rhizomes in the spring, ensuring they have enough space to spread.",
    "Water consistently to keep the soil moist, but avoid waterlogging.",
    "Harvest ginger after 8-10 months when the plant has matured."
  ],
  pests: [
    {
      name: "Root-Knot Nematodes",
      about: "These pests attack ginger roots, stunting plant growth.",
      solution: "Use nematicides and practice crop rotation."
    },
    {
      name: "Aphids",
      about: "Aphids feed on ginger leaves and stems, weakening the plant.",
      solution: "Use organic insecticides or introduce natural predators."
    }
  ],
  market_demand: "High, particularly in culinary and medicinal markets.",
  origin: "Native to Southeast Asia.",
  uses: ["Used in cooking, teas, and as a medicinal herb."],
  nutritional_value: "Contains antioxidants, anti-inflammatory properties, and is rich in vitamin C."
},
celery: {
  name: "Celery",
  climate: "Cool climates, best grown in temperatures between 15-20°C.",
  soil: "Moist, well-drained, fertile soil with a pH of 6.0-7.0.",
  practices: [
    "Start seeds indoors and transplant seedlings to the garden after the last frost.",
    "Ensure consistent moisture and avoid letting the soil dry out.",
    "Harvest stalks as they reach the desired size."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Aphids feed on celery leaves, weakening the plant.",
      solution: "Use insecticidal soap or natural predators like ladybugs."
    },
    {
      name: "Cutworms",
      about: "These larvae damage young celery plants by cutting the stems.",
      solution: "Use collars around seedlings and hand-pick the worms."
    }
  ],
  market_demand: "Consistently high throughout the year, particularly for fresh consumption.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used in salads, soups, stews, and as a garnish."],
  nutritional_value: "Low in calories, rich in vitamins A, C, and K, and a good source of fiber."
}
,
kale: {
  name: "Kale",
  climate: "Cool climates with temperatures between 15-20°C.",
  soil: "Fertile, well-drained soil with a pH of 6.0-7.5.",
  practices: [
    "Sow seeds directly in the garden in early spring or late summer.",
    "Water regularly and keep the soil consistently moist.",
    "Harvest outer leaves to allow the plant to continue growing."
  ],
  pests: [
    {
      name: "Cabbage Worms",
      about: "These worms can eat large holes in kale leaves.",
      solution: "Use organic pesticides or natural predators like ladybugs."
    },
    {
      name: "Aphids",
      about: "Aphids feed on kale leaves, stunting plant growth.",
      solution: "Spray with neem oil or use insecticidal soap."
    }
  ],
  market_demand: "Increasing demand, especially in health-conscious markets and for smoothies.",
  origin: "Native to the Mediterranean region, part of the Brassica family.",
  uses: ["Used in salads, soups, smoothies, and as a garnish."],
  nutritional_value: "Very high in vitamins A, C, and K, and rich in calcium."
},
brussels_sprouts: {
  name: "Brussels Sprouts",
  climate: "Cool climates, growing best between 10-20°C.",
  soil: "Loamy, well-drained soil with a pH of 6.0-7.5.",
  practices: [
    "Start seeds indoors and transplant outdoors when the seedlings are large enough.",
    "Water consistently to maintain soil moisture, particularly during dry spells.",
    "Harvest when the small sprouts on the stem reach 2.5-5 cm in diameter."
  ],
  pests: [
    {
      name: "Cabbage Worms",
      about: "These worms damage leaves and reduce yield.",
      solution: "Use organic pesticides or natural predators like birds and beneficial insects."
    },
    {
      name: "Aphids",
      about: "Aphids weaken the plant by feeding on its sap.",
      solution: "Spray with neem oil or insecticidal soap."
    }
  ],
  market_demand: "High during the fall and winter months, particularly for holiday meals.",
  origin: "Native to the Mediterranean region, cultivated in Europe since the 5th century.",
  uses: ["Used in roasted dishes, salads, and as a side dish."],
  nutritional_value: "High in vitamin C, fiber, and antioxidants."
},
asparagus: {
  name: "Asparagus",
  climate: "Cool climates, thriving in temperatures between 10-25°C.",
  soil: "Well-drained, slightly sandy soil with a pH of 6.5-7.0.",
  practices: [
    "Plant asparagus crowns in early spring, after the last frost.",
    "Water regularly, especially in dry periods, but avoid waterlogging.",
    "Mulch around the plants to retain moisture and suppress weeds."
  ],
  pests: [
    {
      name: "Asparagus Beetles",
      about: "These beetles damage the stems and leaves, hindering growth.",
      solution: "Hand-pick the beetles or use organic insecticides."
    },
    {
      name: "Cutworms",
      about: "Larvae that feed on young asparagus spears.",
      solution: "Use row covers and hand-pick the worms."
    }
  ],
  market_demand: "High during the spring season, especially in gourmet dishes.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used in salads, soups, or as a side dish in various meals."],
  nutritional_value: "Rich in vitamins A, C, E, and K, and contains folate and fiber."
},
pineapple: {
  name: "Pineapple",
  climate: "Tropical climates, requiring temperatures between 22-30°C.",
  soil: "Well-drained, slightly acidic soil with a pH of 4.5-6.5.",
  practices: [
    "Plant pineapple crowns or suckers in well-spaced rows.",
    "Water regularly, but ensure good drainage to avoid waterlogging.",
    "Harvest when the fruit turns golden and gives off a strong, sweet fragrance."
  ],
  pests: [
    {
      name: "Mealybugs",
      about: "These pests feed on the sap of pineapple plants, stunting growth.",
      solution: "Use neem oil or insecticidal soap."
    },
    {
      name: "Pineapple Weevil",
      about: "Infests the base of the plant, causing damage to the root system.",
      solution: "Practice crop rotation and use organic pesticides."
    }
  ],
  market_demand: "High year-round, especially for fresh consumption and canned products.",
  origin: "Native to South America, particularly Brazil and Paraguay.",
  uses: ["Consumed fresh, juiced, or used in cooking and desserts."],
  nutritional_value: "Rich in vitamin C, manganese, and bromelain."
},
mango: {
  name: "Mango",
  climate: "Tropical and subtropical climates with temperatures between 24-30°C.",
  soil: "Well-drained, sandy or loamy soil with a pH of 5.5-7.5.",
  practices: [
    "Water regularly, especially during dry periods, but avoid over-watering.",
    "Prune trees to ensure good airflow and remove any dead wood.",
    "Harvest mangoes when they begin to show color and soften slightly."
  ],
  pests: [
    {
      name: "Mango Weevil",
      about: "Infests mangoes and can reduce fruit quality.",
      solution: "Use neem oil and proper pest management practices."
    },
    {
      name: "Mealybugs",
      about: "Suck sap from mango trees, causing leaf curling and fruit damage.",
      solution: "Use insecticidal soap and introduce natural predators like ladybugs."
    }
  ],
  market_demand: "High during summer and early fall months.",
  origin: "Native to South Asia and Southeast Asia.",
  uses: ["Consumed fresh, used in smoothies, or in desserts and salads."],
  nutritional_value: "Rich in vitamin C, fiber, and antioxidants."
},
grape: {
  name: "Grape",
  climate: "Warm climates with long summers and mild winters.",
  soil: "Well-drained, slightly acidic soil with a pH of 6.0-7.0.",
  practices: [
    "Prune vines annually to encourage healthy growth and fruit production.",
    "Ensure grapes receive sufficient sunlight and water during dry spells.",
    "Support vines with trellises for better air circulation and ease of harvest."
  ],
  pests: [
    {
      name: "Grape Berry Moth",
      about: "Larvae feed on grape berries, causing significant damage.",
      solution: "Use pheromone traps and biological control agents."
    },
    {
      name: "Powdery Mildew",
      about: "Fungal disease that affects leaves and grapes.",
      solution: "Apply fungicides and ensure good airflow around vines."
    }
  ],
  market_demand: "High year-round, especially for table grapes and wine production.",
  origin: "Native to the Mediterranean region and parts of Asia.",
  uses: ["Consumed fresh, dried as raisins, or used in wine production."],
  nutritional_value: "Good source of vitamins C and K, antioxidants, and fiber."
}
,
banana: {
  name: "Banana",
  climate: "Tropical climates with temperatures between 26-30°C.",
  soil: "Well-drained, sandy loam soil with a pH of 5.5-7.0.",
  practices: [
    "Ensure bananas receive ample sunlight and regular watering.",
    "Provide windbreaks to protect plants from strong winds.",
    "Harvest when bananas are green but full-sized, allowing ripening after harvesting."
  ],
  pests: [
    {
      name: "Banana Weevil",
      about: "Infests the roots and stems of banana plants, weakening the plant.",
      solution: "Use organic pesticides and practice crop rotation."
    },
    {
      name: "Spider Mites",
      about: "Cause yellowing and browning of banana leaves.",
      solution: "Use miticides or spray with neem oil."
    }
  ],
  market_demand: "High year-round, particularly for fresh consumption.",
  origin: "Native to Southeast Asia.",
  uses: ["Eaten raw, used in baking, or made into smoothies."],
  nutritional_value: "High in potassium, vitamin B6, and carbohydrates."
}
,
orange: {
  name: "Orange",
  climate: "Tropical to subtropical climates, requiring warm temperatures.",
  soil: "Well-drained, slightly acidic soil with a pH of 6.0-7.5.",
  practices: [
    "Provide consistent watering but ensure soil is not waterlogged.",
    "Prune trees to improve airflow and reduce fungal diseases.",
    "Fertilize with nitrogen-rich fertilizers during the growing season."
  ],
  pests: [
    {
      name: "Citrus Canker",
      about: "Bacterial disease causing lesions on leaves, stems, and fruit.",
      solution: "Use resistant varieties and apply copper-based bactericides."
    },
    {
      name: "Aphids",
      about: "Aphids attack orange trees, damaging leaves and spreading viruses.",
      solution: "Use organic insecticides or encourage natural predators like ladybugs."
    }
  ],
  market_demand: "High year-round, with peak demand in winter months.",
  origin: "Originated in Southeast Asia, particularly China.",
  uses: ["Consumed fresh, juiced, or used in desserts and flavorings."],
  nutritional_value: "Excellent source of vitamin C and dietary fiber."
},
apple: {
  name: "Apple",
  climate: "Temperate climates with cold winters and moderate summers.",
  soil: "Well-drained, fertile soil with a pH of 6.0-7.0.",
  practices: [
    "Prune trees regularly to maintain shape and improve airflow.",
    "Irrigate during dry periods, but avoid over-watering.",
    "Thin fruit to ensure better quality and reduce overcrowding."
  ],
  pests: [
    {
      name: "Codling Moth",
      about: "Larvae infest apples, causing damage to the fruit.",
      solution: "Use pheromone traps or organic insecticides."
    },
    {
      name: "Aphids",
      about: "Aphids weaken trees by feeding on sap.",
      solution: "Use insecticidal soap or introduce natural predators."
    }
  ],
  market_demand: "High year-round, particularly during fall harvest.",
  origin: "Originated in Central Asia.",
  uses: ["Consumed raw, used in baking, and juiced."],
  nutritional_value: "Rich in dietary fiber, vitamin C, and antioxidants."
},
watermelon: {
  name: "Watermelon",
  climate: "Warm climates with temperatures between 22-30°C.",
  soil: "Well-drained, sandy loam soil with a pH of 6.0-6.8.",
  practices: [
    "Water consistently, ensuring deep watering to encourage deep root growth.",
    "Provide plenty of sunlight for maximum fruit production.",
    "Harvest when the fruit produces a hollow sound when tapped."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Aphids can stunt the growth of watermelon plants.",
      solution: "Use neem oil or introduce beneficial insects like ladybugs."
    },
    {
      name: "Cucumber Beetles",
      about: "These beetles feed on watermelon plants, spreading bacterial wilt.",
      solution: "Apply insecticides or remove them by hand."
    }
  ],
  market_demand: "High during summer, especially for fresh consumption.",
  origin: "Native to Africa.",
  uses: ["Consumed fresh, juiced, or used in fruit salads."],
  nutritional_value: "Rich in water content, vitamins A and C, and antioxidants."
},
strawberry: {
  name: "Strawberry",
  climate: "Temperate climates with mild winters and cool summers.",
  soil: "Well-drained, loamy soil with a pH of 5.5-6.8.",
  practices: [
    "Plant strawberries in raised beds to ensure good drainage.",
    "Water regularly, especially during fruiting, but avoid waterlogging.",
    "Mulch around plants to retain moisture and suppress weeds."
  ],
  pests: [
    {
      name: "Spider Mites",
      about: "These pests cause yellowing and webbing on strawberry plants.",
      solution: "Use miticides or wash plants with a strong stream of water."
    },
    {
      name: "Slugs",
      about: "Slugs feed on strawberries, causing damage to the fruit.",
      solution: "Use slug pellets or natural predators like ducks."
    }
  ],
  market_demand: "High year-round, particularly during summer.",
  origin: "Native to North and South America.",
  uses: ["Consumed fresh, used in jams, desserts, and smoothies."],
  nutritional_value: "Rich in vitamin C, manganese, and antioxidants."
},
blueberry: {
  name: "Blueberry",
  climate: "Cool to temperate climates with mild summers and cold winters.",
  soil: "Acidic, well-drained soil with a pH of 4.5-5.5.",
  practices: [
    "Prune plants annually to remove dead or weak growth.",
    "Water regularly with acidic water, especially during dry spells.",
    "Ensure plants receive sufficient sunlight for optimal berry production."
  ],
  pests: [
    {
      name: "Blueberry Maggot",
      about: "Larvae burrow into berries, causing them to rot.",
      solution: "Use traps and spray insecticides at appropriate times."
    },
    {
      name: "Japanese Beetle",
      about: "These beetles feed on the leaves and berries of blueberry plants.",
      solution: "Use insecticides or hand-pick beetles off the plants."
    }
  ],
  market_demand: "High year-round, especially during summer months.",
  origin: "Native to North America.",
  uses: ["Consumed fresh, in baked goods, smoothies, and jams."],
  nutritional_value: "High in vitamins C and K, antioxidants, and fiber."
},
raspberry: {
  name: "Raspberry",
  climate: "Temperate climates with cold winters and moderate summers.",
  soil: "Well-drained, slightly acidic soil with a pH of 5.6-6.2.",
  practices: [
    "Provide support for raspberry canes, like trellises or fences.",
    "Water consistently to prevent drying out during fruit development.",
    "Prune plants to remove dead canes and improve air circulation."
  ],
  pests: [
    {
      name: "Raspberry Beetle",
      about: "Larvae damage raspberries by feeding on the fruit.",
      solution: "Use traps or insecticides to control the beetle population."
    },
    {
      name: "Redberry Mite",
      about: "This pest causes raspberries to turn yellow and misshapen.",
      solution: "Use miticides and remove infected canes."
    }
  ],
  market_demand: "High during summer, especially for fresh consumption.",
  origin: "Native to Europe and North America.",
  uses: ["Consumed fresh, in desserts, jams, and smoothies."],
  nutritional_value: "High in vitamin C, fiber, and antioxidants."
},
cherry: {
  name: "Cherry",
  climate: "Temperate climates with cold winters and moderate summers.",
  soil: "Well-drained, fertile soil with a pH of 6.0-7.0.",
  practices: [
    "Prune cherry trees to maintain shape and remove dead wood.",
    "Water regularly during dry periods, but avoid over-watering.",
    "Harvest when cherries are fully ripe and have a deep color."
  ],
  pests: [
    {
      name: "Cherry Fruit Fly",
      about: "Larvae infest cherries, causing them to rot.",
      solution: "Use traps and spray insecticides at the right times."
    },
    {
      name: "Aphids",
      about: "Aphids feed on cherry trees, weakening them and spreading diseases.",
      solution: "Use insecticidal soap or natural predators like ladybugs."
    }
  ],
  market_demand: "High during spring and summer, particularly for fresh consumption.",
  origin: "Native to Europe and Asia.",
  uses: ["Consumed fresh, used in pies, jams, and beverages."],
  nutritional_value: "Rich in vitamin C, antioxidants, and fiber."
},
peach: {
  name: "Peach",
  climate: "Warm temperate climates with mild winters and hot summers.",
  soil: "Well-drained, loamy soil with a pH of 6.0-7.0.",
  practices: [
    "Ensure good drainage and water regularly, especially during fruit development.",
    "Prune trees to improve airflow and remove dead wood.",
    "Harvest peaches when they are slightly soft and fully ripe."
  ],
  pests: [
    {
      name: "Peach Tree Borer",
      about: "This pest bores into the trunk, causing significant damage to peach trees.",
      solution: "Apply insecticides and remove affected wood."
    },
    {
      name: "Aphids",
      about: "Aphids suck sap from peach trees, weakening the plant.",
      solution: "Use insecticidal soap or introduce natural predators like ladybugs."
    }
  ],
  market_demand: "High during summer, especially for fresh consumption.",
  origin: "Native to China, domesticated in the Near East.",
  uses: ["Consumed fresh, in pies, jams, and smoothies."],
  nutritional_value: "Rich in vitamins A and C, and dietary fiber."
},
pear: {
  name: "Pear",
  climate: "Temperate regions with cool winters and moderate summers.",
  soil: "Well-drained, fertile soil with a pH of 6.0-6.5.",
  practices: [
    "Prune trees to maintain shape and remove diseased wood.",
    "Water regularly, especially during dry periods, but avoid over-watering.",
    "Harvest pears when they are slightly firm and allow them to ripen off the tree."
  ],
  pests: [
    {
      name: "Pear Psylla",
      about: "The pear psylla damages leaves and affects fruit quality.",
      solution: "Use insecticides or natural predators like lacewings."
    },
    {
      name: "Codling Moth",
      about: "Larvae bore into the fruit, causing rot.",
      solution: "Use pheromone traps or spray insecticides."
    }
  ],
  market_demand: "High during autumn and winter.",
  origin: "Native to Europe and Asia.",
  uses: ["Consumed fresh, in salads, desserts, and jams."],
  nutritional_value: "High in dietary fiber, vitamin C, and antioxidants."
},
pear: {
  name: "Pear",
  climate: "Temperate regions with cool winters and moderate summers.",
  soil: "Well-drained, fertile soil with a pH of 6.0-6.5.",
  practices: [
    "Prune trees to maintain shape and remove diseased wood.",
    "Water regularly, especially during dry periods, but avoid over-watering.",
    "Harvest pears when they are slightly firm and allow them to ripen off the tree."
  ],
  pests: [
    {
      name: "Pear Psylla",
      about: "The pear psylla damages leaves and affects fruit quality.",
      solution: "Use insecticides or natural predators like lacewings."
    },
    {
      name: "Codling Moth",
      about: "Larvae bore into the fruit, causing rot.",
      solution: "Use pheromone traps or spray insecticides."
    }
  ],
  market_demand: "High during autumn and winter.",
  origin: "Native to Europe and Asia.",
  uses: ["Consumed fresh, in salads, desserts, and jams."],
  nutritional_value: "High in dietary fiber, vitamin C, and antioxidants."
},
plum: {
  name: "Plum",
  climate: "Temperate climates with cold winters and moderate summers.",
  soil: "Well-drained, fertile soil with a pH of 6.0-6.5.",
  practices: [
    "Prune trees to improve air circulation and remove dead wood.",
    "Water regularly, especially during fruiting.",
    "Harvest plums when they are fully ripe, typically when they become soft to the touch."
  ],
  pests: [
    {
      name: "Plum Curculio",
      about: "A beetle that feeds on plums and damages the fruit.",
      solution: "Use insecticides or hand-pick the beetles."
    },
    {
      name: "Aphids",
      about: "Aphids weaken plum trees and spread viruses.",
      solution: "Use insecticidal soap or natural predators like ladybugs."
    }
  ],
  market_demand: "High during summer and early autumn.",
  origin: "Native to Asia and Europe.",
  uses: ["Consumed fresh, used in jams, pies, and juices."],
  nutritional_value: "Rich in vitamin C, potassium, and antioxidants."
},
apricot: {
  name: "Apricot",
  climate: "Temperate and subtropical climates with mild winters and hot summers.",
  soil: "Well-drained, sandy loam soil with a pH of 6.0-7.5.",
  practices: [
    "Prune trees to remove dead or diseased branches and encourage airflow.",
    "Water regularly during dry spells but avoid waterlogging.",
    "Harvest apricots when they are fully ripe, as they do not ripen well off the tree."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Aphids feed on apricot trees, weakening them and spreading viruses.",
      solution: "Use insecticidal soap or introduce natural predators like ladybugs."
    },
    {
      name: "Coddling Moth",
      about: "This pest bores into apricots, causing them to rot.",
      solution: "Use pheromone traps and spray insecticides."
    }
  ],
  market_demand: "High during summer, especially for fresh consumption.",
  origin: "Native to China and Central Asia.",
  uses: ["Consumed fresh, dried, or used in jams, juices, and desserts."],
  nutritional_value: "Rich in vitamin A, vitamin C, and potassium."
},
lemon: {
  name: "Lemon",
  climate: "Tropical and subtropical climates with warm, dry summers.",
  soil: "Well-drained, slightly acidic soil with a pH of 5.5-6.5.",
  practices: [
    "Water regularly but avoid waterlogging.",
    "Provide full sun for optimal growth.",
    "Prune trees to maintain shape and remove dead or diseased branches."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Aphids can cause damage to lemon trees by feeding on the sap.",
      solution: "Use insecticidal soap or natural predators like ladybugs."
    },
    {
      name: "Citrus Leaf Miner",
      about: "This pest tunnels into the leaves, causing damage.",
      solution: "Use insecticides or remove infected leaves."
    }
  ],
  market_demand: "High year-round, especially for culinary and juicing purposes.",
  origin: "Native to Asia.",
  uses: ["Used for juice, in cooking, and in beverages."],
  nutritional_value: "High in vitamin C, antioxidants, and dietary fiber."
},
lime: {
  name: "Lime",
  climate: "Tropical and subtropical climates with hot, humid conditions.",
  soil: "Well-drained, slightly acidic soil with a pH of 5.5-6.5.",
  practices: [
    "Water regularly, ensuring the soil remains moist but not waterlogged.",
    "Provide full sunlight for optimal fruit production.",
    "Prune to maintain the shape and remove dead or diseased branches."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Aphids can damage lime trees and spread diseases.",
      solution: "Use insecticidal soap or introduce natural predators like ladybugs."
    },
    {
      name: "Citrus Leaf Miner",
      about: "This pest causes damage by tunneling through leaves.",
      solution: "Use insecticides or remove affected leaves."
    }
  ],
  market_demand: "High year-round, particularly in tropical regions.",
  origin: "Native to Southeast Asia.",
  uses: ["Used in cooking, beverages, and as a garnish."],
  nutritional_value: "Rich in vitamin C, antioxidants, and dietary fiber."
},
avocado: {
  name: "Avocado",
  climate: "Tropical and subtropical climates with warm temperatures year-round.",
  soil: "Well-drained, sandy loam with a pH of 6.0-6.5.",
  practices: [
    "Water regularly, especially during dry periods, but avoid waterlogging.",
    "Provide plenty of sunlight, but protect from strong winds.",
    "Prune to shape the tree and remove dead or diseased branches."
  ],
  pests: [
    {
      name: "Avocado Root Rot",
      about: "Fungal disease that affects the roots of avocado trees.",
      solution: "Ensure proper drainage and avoid overwatering."
    },
    {
      name: "Avocado Moth",
      about: "This pest damages fruit by burrowing into the flesh.",
      solution: "Use traps and apply insecticides as necessary."
    }
  ],
  market_demand: "High year-round, particularly in the production of guacamole and salads.",
  origin: "Native to Central Mexico.",
  uses: ["Used in salads, guacamole, smoothies, and as a garnish."],
  nutritional_value: "Rich in healthy fats, fiber, vitamins E and K."
},
olive: {
  name: "Olive",
  climate: "Mediterranean climate with hot, dry summers and mild, wet winters.",
  soil: "Well-drained, fertile soil with a pH of 6.0-8.0.",
  practices: [
    "Water moderately, as olives are drought-tolerant but need water during fruiting.",
    "Provide full sun and protect trees from frost.",
    "Prune trees to remove dead wood and improve airflow."
  ],
  pests: [
    {
      name: "Olive Fruit Fly",
      about: "The larvae of the olive fruit fly cause rot in olives.",
      solution: "Use traps and spray insecticides to control the fly."
    },
    {
      name: "Olive Moth",
      about: "The olive moth damages the fruit by laying eggs in it.",
      solution: "Use pheromone traps or spray insecticides."
    }
  ],
  market_demand: "High, especially for olive oil production and Mediterranean cuisine.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used for oil, in cooking, and as a garnish."],
  nutritional_value: "High in healthy fats (monounsaturated), vitamin E, and antioxidants."
},
date: {
  name: "Date",
  climate: "Hot, dry climates with high temperatures and little rainfall.",
  soil: "Well-drained, sandy soil with a pH of 7.0-8.0.",
  practices: [
    "Water regularly, especially during fruiting, but avoid waterlogging.",
    "Provide full sunlight for optimal growth.",
    "Harvest dates when they are fully ripe, as they do not ripen well off the tree."
  ],
  pests: [
    {
      name: "Red Palm Weevil",
      about: "This pest damages the date palm by boring into the trunk.",
      solution: "Use pheromone traps and remove infected palms."
    },
    {
      name: "Date Moth",
      about: "The larvae of this moth feed on the fruit and cause spoilage.",
      solution: "Use traps and remove affected fruit."
    }
  ],
  market_demand: "High during harvest season, especially in Middle Eastern markets.",
  origin: "Native to the Middle East and North Africa.",
  uses: ["Consumed fresh or dried, used in sweets and energy bars."],
  nutritional_value: "Rich in fiber, potassium, and magnesium."
},
fig: {
  name: "Fig",
  climate: "Warm temperate regions with hot, dry summers and mild winters.",
  soil: "Well-drained, slightly alkaline soil with a pH of 6.0-7.5.",
  practices: [
    "Water moderately, avoiding excess moisture during fruiting.",
    "Prune trees to remove dead or diseased branches and improve airflow.",
    "Harvest figs when they are fully ripe, as they do not ripen off the tree."
  ],
  pests: [
    {
      name: "Fig Whitefly",
      about: "This pest feeds on the sap of the fig tree, weakening it.",
      solution: "Use insecticides or natural predators to manage the whitefly."
    },
    {
      name: "Figs Spider Mites",
      about: "Spider mites cause damage by feeding on fig leaves, leaving them spotted.",
      solution: "Use miticides or remove affected leaves."
    }
  ],
  market_demand: "High during late summer and autumn, especially for dried figs.",
  origin: "Native to Western Asia and the Mediterranean region.",
  uses: ["Consumed fresh, dried, used in jams, and in baked goods."],
  nutritional_value: "High in fiber, potassium, and vitamin B6."
},
guava: {
  name: "Guava",
  climate: "Tropical and subtropical climates with warm temperatures and moderate rainfall.",
  soil: "Well-drained, slightly acidic soil with a pH of 5.5-6.5.",
  practices: [
    "Water regularly, especially during dry periods.",
    "Provide full sunlight for optimal growth.",
    "Prune guava trees to remove dead wood and shape them."
  ],
  pests: [
    {
      name: "Guava Fruit Fly",
      about: "The larvae of this fly cause the fruit to rot.",
      solution: "Use traps or insecticides to control the fly."
    },
    {
      name: "Whitefly",
      about: "Whiteflies suck sap from guava leaves, weakening the plant.",
      solution: "Use insecticidal soap or natural predators."
    }
  ],
  market_demand: "High during the harvest season, especially for juicing and fresh consumption.",
  origin: "Native to tropical America, widely cultivated in tropical and subtropical regions.",
  uses: ["Consumed fresh, used in juices, jams, and desserts."],
  nutritional_value: "High in vitamin C, fiber, and antioxidants."
},
papaya: {
  name: "Papaya",
  climate: "Tropical climates with warm temperatures and high humidity.",
  soil: "Well-drained, sandy soil with a pH of 5.5-6.5.",
  practices: [
    "Water regularly, but avoid over-watering.",
    "Provide full sunlight for optimal fruiting.",
    "Fertilize every 2-3 months with organic compost."
  ],
  pests: [
    {
      name: "Papaya Fruit Fly",
      about: "The papaya fruit fly lays eggs in the fruit, causing it to rot.",
      solution: "Use traps or spray insecticides to control the fly."
    },
    {
      name: "Mealybugs",
      about: "These pests suck sap from the plant, weakening it.",
      solution: "Use insecticidal soap or introduce natural predators."
    }
  ],
  market_demand: "High year-round, especially in tropical regions and for juice production.",
  origin: "Native to Central America, widely cultivated in tropical regions.",
  uses: ["Consumed fresh, used in smoothies, juices, and desserts."],
  nutritional_value: "Rich in vitamin C, vitamin A, and folate."
},
kiwi: {
  name: "Kiwi",
  climate: "Temperate climates with cold winters and warm summers.",
  soil: "Well-drained, fertile soil with a pH of 6.0-6.5.",
  practices: [
    "Water regularly, but avoid waterlogging, especially in winter.",
    "Provide full sunlight for optimal growth.",
    "Prune to remove dead or diseased branches and encourage airflow."
  ],
  pests: [
    {
      name: "Kiwi Fruit Borer",
      about: "The larvae of this pest bore into the fruit, causing rot.",
      solution: "Use insecticides or traps to manage the borer."
    },
    {
      name: "Red Gum Lerp Psyllid",
      about: "This pest causes damage by feeding on the leaves and spreading a fungal disease.",
      solution: "Apply insecticides or introduce natural predators."
    }
  ],
  market_demand: "High in both local markets and internationally, especially for smoothies and salads.",
  origin: "Native to China, but widely cultivated in New Zealand and Italy.",
  uses: ["Consumed fresh, used in smoothies, desserts, and salads."],
  nutritional_value: "High in vitamin C, vitamin K, and fiber."
},
almond: {
  name: "Almond",
  climate: "Mediterranean climate with warm, dry summers and mild winters.",
  soil: "Well-drained, sandy soil with a pH of 6.0-7.5.",
  practices: [
    "Water regularly, especially during flowering and fruiting stages.",
    "Provide full sunlight for optimal growth.",
    "Prune trees to remove dead or diseased wood."
  ],
  pests: [
    {
      name: "Codling Moth",
      about: "The larvae feed on almond fruits, causing them to rot.",
      solution: "Use pheromone traps and spray insecticides as needed."
    },
    {
      name: "Red Gum Lerp Psyllid",
      about: "This pest affects almond trees by feeding on the sap.",
      solution: "Use systemic insecticides or introduce natural predators."
    }
  ],
  market_demand: "High, especially in international markets for snacks and confectionery.",
  origin: "Native to the Middle East and South Asia.",
  uses: ["Consumed as snacks, used in baking, or made into almond butter and milk."],
  nutritional_value: "High in healthy fats, protein, fiber, vitamin E, and magnesium."
},
walnut: {
  name: "Walnut",
  climate: "Temperate climates with cool winters and mild summers.",
  soil: "Well-drained, loamy soil with a pH of 6.0-7.5.",
  practices: [
    "Water regularly, especially during dry spells, but avoid waterlogging.",
    "Provide full sunlight for optimal growth.",
    "Prune trees in winter to maintain shape and remove dead wood."
  ],
  pests: [
    {
      name: "Walnut Husk Fly",
      about: "This pest feeds on the husk of the walnut, causing damage.",
      solution: "Use insecticides or traps to manage the fly."
    },
    {
      name: "Nematodes",
      about: "Nematodes can infect walnut roots, reducing tree health.",
      solution: "Use resistant varieties and soil treatment."
    }
  ],
  market_demand: "High for both fresh walnuts and walnut-based products like oil.",
  origin: "Native to Central Asia and parts of the Mediterranean region.",
  uses: ["Consumed fresh, in baked goods, or used to make walnut oil."],
  nutritional_value: "High in omega-3 fatty acids, protein, and antioxidants."
},
cashew: {
  name: "Cashew",
  climate: "Tropical climates with warm temperatures and moderate rainfall.",
  soil: "Well-drained, sandy soils with a pH of 5.5-7.0.",
  practices: [
    "Water regularly during dry spells, especially during flowering and fruiting.",
    "Prune trees to remove dead branches and encourage healthy growth.",
    "Harvest when the cashew apples have ripened and fallen from the tree."
  ],
  pests: [
    {
      name: "Cashew Nut Borer",
      about: "The larvae of this pest bore into the nuts, causing damage.",
      solution: "Use chemical treatments or natural predators to control the pest."
    },
    {
      name: "Cashew Aphid",
      about: "Aphids suck sap from cashew trees, weakening them.",
      solution: "Use insecticidal soap or neem oil to manage aphids."
    }
  ],
  market_demand: "High, especially for snack and culinary use worldwide.",
  origin: "Native to Brazil, widely cultivated in tropical regions.",
  uses: ["Consumed roasted or raw, used in cooking and as snacks."],
  nutritional_value: "High in protein, healthy fats, and essential minerals like magnesium."
},
pecan: {
  name: "Pecan",
  climate: "Warm, temperate climates with mild winters and long, hot summers.",
  soil: "Deep, well-drained soil with a pH of 6.0-7.0.",
  practices: [
    "Water regularly to ensure consistent soil moisture, especially in hot climates.",
    "Prune trees annually to improve air circulation and reduce disease risk.",
    "Fertilize with organic matter and compost for healthier growth."
  ],
  pests: [
    {
      name: "Pecan Weevil",
      about: "The larvae of this pest infest the nuts, causing them to fall prematurely.",
      solution: "Use traps or apply insecticides during the growing season."
    },
    {
      name: "Fall Webworm",
      about: "These worms feed on pecan leaves, weakening the tree.",
      solution: "Remove webs by hand or spray with insecticidal soap."
    }
  ],
  market_demand: "High, especially for use in confectionery and as snacks.",
  origin: "Native to North America.",
  uses: ["Consumed as snacks, used in pies, or made into pecan oil."],
  nutritional_value: "Rich in healthy fats, protein, and vitamins B1 and E."
},
pista: {
  name: "Pistachio",
  climate: "Warm, arid climates with hot summers and mild winters.",
  soil: "Well-drained, sandy loam soils with a pH of 7.0-7.8.",
  practices: [
    "Water regularly during the dry season, but avoid waterlogging.",
    "Provide full sunlight and protect trees from frost.",
    "Prune trees annually to maintain shape and remove diseased branches."
  ],
  pests: [
    {
      name: "Pistachio Nut Weevil",
      about: "The larvae of this pest infest the nuts and cause them to fall prematurely.",
      solution: "Use traps and insecticides to control the nut weevil."
    },
    {
      name: "Red Gum Lerp Psyllid",
      about: "This pest damages the tree by feeding on its sap.",
      solution: "Use systemic insecticides or biological control methods."
    }
  ],
  market_demand: "High, especially for snacking and as an ingredient in culinary dishes.",
  origin: "Native to Central Asia and the Middle East.",
  uses: ["Consumed as snacks, used in cooking and baking, or made into pistachio oil."],
  nutritional_value: "Rich in protein, fiber, healthy fats, and antioxidants."
},
hazelnut: {
  name: "Hazelnut",
  climate: "Temperate climates with cool, wet winters and warm, dry summers.",
  soil: "Well-drained, loamy soil with a pH of 6.0-7.0.",
  practices: [
    "Water regularly, particularly during fruit development.",
    "Prune to maintain a manageable shape and remove dead wood.",
    "Harvest when the nuts have ripened and fallen from the tree."
  ],
  pests: [
    {
      name: "Filbert Worm",
      about: "The larvae of this pest infest the nuts and cause them to drop prematurely.",
      solution: "Use traps and spray insecticides to manage the pest."
    },
    {
      name: "European Brown Garden Snail",
      about: "Snails feed on the leaves and nuts, damaging the plant.",
      solution: "Remove snails manually or use organic snail control methods."
    }
  ],
  market_demand: "High, especially for use in confectionery and nut butters.",
  origin: "Native to Europe and Asia Minor.",
  uses: ["Used in chocolate products, snacks, and nut butters."],
  nutritional_value: "High in healthy fats, fiber, vitamin E, and antioxidants."
},
pine_nut: {
  name: "Pine Nut",
  climate: "Cold to temperate climates with long winters and cool summers.",
  soil: "Well-drained, sandy soil with a pH of 6.0-7.5.",
  practices: [
    "Water moderately, especially in dry conditions.",
    "Prune to maintain tree health and improve airflow.",
    "Harvest pine nuts when the cones begin to open."
  ],
  pests: [
    {
      name: "Pine Nut Weevil",
      about: "This pest infests the pine cones, feeding on the seeds.",
      solution: "Use traps or chemical controls to manage the pest."
    },
    {
      name: "Pine Pitch Moth",
      about: "This moth larvae feed on the tree's inner bark and weaken it.",
      solution: "Use insecticides and remove affected branches."
    }
  ],
  market_demand: "High, especially in gourmet cooking and Mediterranean cuisines.",
  origin: "Native to several regions worldwide, including North America and Asia.",
  uses: ["Used in cooking, pesto, and as a snack."],
  nutritional_value: "High in healthy fats, protein, and essential vitamins and minerals."
},
black_pepper: {
  name: "Black Pepper",
  climate: "Tropical, thrives in warm and humid conditions with temperatures between 25-30°C.",
  soil: "Well-drained, loamy soil rich in organic matter with a pH of 6.0-7.5.",
  practices: [
    "Provide shade during the early stages of growth.",
    "Water consistently, especially in dry periods, but avoid waterlogging.",
    "Train vines on support structures for optimal growth."
  ],
  pests: [
    {
      name: "Pepper Weevil",
      about: "The larvae of this pest damage peppercorns and affect the quality of the harvest.",
      solution: "Use insecticidal treatments and crop rotation."
    },
    {
      name: "Root Knot Nematodes",
      about: "These pests affect the roots, reducing plant health and yield.",
      solution: "Use nematode-resistant varieties and soil treatments."
    }
  ],
  market_demand: "High in the global spice market, particularly for use in culinary and medicinal products.",
  origin: "Native to the Malabar Coast of India.",
  uses: ["Used as a spice in cooking, flavoring, and in medicinal uses."],
  nutritional_value: "Rich in antioxidants and beneficial plant compounds."
},
chili_pepper: {
  name: "Chili Pepper",
  climate: "Warm, tropical climates with temperatures between 20-30°C.",
  soil: "Well-drained, sandy loam with a pH of 6.0-6.8.",
  practices: [
    "Plant in full sunlight and ensure good air circulation around plants.",
    "Water consistently but avoid over-watering.",
    "Use mulching to conserve moisture and prevent weed growth."
  ],
  pests: [
    {
      name: "Aphids",
      about: "Aphids damage the plant by feeding on the sap, weakening the plant.",
      solution: "Use insecticidal soap or introduce natural predators."
    },
    {
      name: "Spider Mites",
      about: "Spider mites cause damage to leaves by feeding on the sap, leading to yellowing and wilting.",
      solution: "Use miticides or wash leaves with water."
    }
  ],
  market_demand: "High globally, especially in cuisines that rely on spicy flavors.",
  origin: "Native to the Americas.",
  uses: ["Used fresh or dried in cooking, for sauces, and as a seasoning."],
  nutritional_value: "Rich in vitamin C and capsaicin, which provides health benefits."
},
cinnamon: {
  name: "Cinnamon",
  climate: "Tropical climates with warm temperatures between 20-30°C.",
  soil: "Well-drained, fertile soils with a pH of 5.5-6.5.",
  practices: [
    "Plant in partial shade during the early stages of growth.",
    "Regularly prune trees to encourage new growth.",
    "Water consistently, ensuring soil does not become waterlogged."
  ],
  pests: [
    {
      name: "Cinnamon Leaf Spot Disease",
      about: "A fungal disease that causes brown spots on leaves, affecting plant growth.",
      solution: "Remove infected leaves and apply fungicide."
    },
    {
      name: "Cinnamon Root Borer",
      about: "A pest that damages cinnamon roots, causing wilting and poor growth.",
      solution: "Use insecticides and soil treatments."
    }
  ],
  market_demand: "High for culinary and medicinal uses, particularly in Western and Asian markets.",
  origin: "Native to Sri Lanka and southern India.",
  uses: ["Used in baking, as a spice in savory and sweet dishes, and in medicinal products."],
  nutritional_value: "Contains antioxidants, fiber, and beneficial plant compounds."
},

cloves: {
  name: "Cloves",
  climate: "Tropical climate with temperatures between 20-30°C and high humidity.",
  soil: "Well-drained, loamy soil with a pH of 5.5-7.0.",
  practices: [
    "Provide partial shade during the early growth stage.",
    "Regularly prune to remove dead branches and improve air circulation.",
    "Water consistently but avoid waterlogging."
  ],
  pests: [
    {
      name: "Clove Moth",
      about: "The larvae of the moth infest the flowers, reducing the quality of the cloves.",
      solution: "Use traps and pesticide treatments to control the pest."
    },
    {
      name: "Root-Knot Nematodes",
      about: "Nematodes infest the roots, weakening the plant and reducing yield.",
      solution: "Use nematode-resistant varieties and crop rotation."
    }
  ],
  market_demand: "High, especially for use in culinary, medicinal, and aromatic products.",
  origin: "Native to the Maluku Islands in Indonesia.",
  uses: ["Used in cooking, baking, and as an essential oil for medicinal purposes."],
  nutritional_value: "Rich in antioxidants and essential oils, with antimicrobial properties."
},
cardamom: {
  name: "Cardamom",
  climate: "Tropical climates with temperatures between 20-35°C.",
  soil: "Well-drained, fertile soil with a pH of 6.0-6.5.",
  practices: [
    "Plant in shaded areas to mimic the natural forest conditions.",
    "Water consistently, especially during dry periods.",
    "Fertilize with organic compost to ensure healthy growth."
  ],
  pests: [
    {
      name: "Cardamom Leaf Spot",
      about: "A fungal disease that affects the leaves, causing discoloration and weakening the plant.",
      solution: "Use fungicides and remove infected leaves."
    },
    {
      name: "Root-knot Nematodes",
      about: "These pests affect the roots, leading to stunted growth and poor yield.",
      solution: "Use resistant varieties and soil treatments."
    }
  ],
  market_demand: "High, especially in the Middle East and Asia for culinary and medicinal use.",
  origin: "Native to the Indian subcontinent and Southeast Asia.",
  uses: ["Used in cooking, beverages like chai, and in essential oils for medicinal purposes."],
  nutritional_value: "Rich in antioxidants and compounds that aid digestion."
},
turmeric: {
  name: "Turmeric",
  climate: "Tropical, requiring warm temperatures of 20-30°C and plenty of rainfall.",
  soil: "Well-drained, fertile soil with a pH of 5.5-6.5.",
  practices: [
    "Water regularly but ensure good drainage to avoid waterlogging.",
    "Apply organic mulch to retain moisture and control weeds.",
    "Harvest when the plant leaves start to yellow and the roots are mature."
  ],
  pests: [
    {
      name: "Turmeric Leaf Spot",
      about: "A fungal disease that causes yellowing of leaves and stunts growth.",
      solution: "Use fungicides and remove affected leaves."
    },
    {
      name: "Root-Knot Nematodes",
      about: "Nematodes damage the roots, leading to stunted growth.",
      solution: "Use resistant varieties and soil treatment."
    }
  ],
  market_demand: "High, especially in culinary, medicinal, and beauty products.",
  origin: "Native to Southeast Asia, particularly India.",
  uses: ["Used in cooking, as a spice and dye, and for its anti-inflammatory medicinal properties."],
  nutritional_value: "Contains curcumin, an antioxidant with various health benefits."
},
cumin: {
  name: "Cumin",
  climate: "Warm, arid climates with temperatures between 25-30°C.",
  soil: "Well-drained, sandy loam soil with a pH of 6.0-7.5.",
  practices: [
    "Plant in full sun and water moderately.",
    "Ensure soil is well-drained to prevent root rot.",
    "Harvest when the seeds are dry and mature."
  ],
  pests: [
    {
      name: "Cumin Aphid",
      about: "This aphid pest feeds on cumin plants, weakening them.",
      solution: "Use neem oil or insecticidal soap to control aphids."
    },
    {
      name: "Cumin Root Rot",
      about: "Fungal infections that damage the roots and stunt plant growth.",
      solution: "Ensure proper drainage and apply fungicides."
    }
  ],
  market_demand: "High in culinary markets, especially in Indian, Middle Eastern, and Mexican cuisines.",
  origin: "Native to the Eastern Mediterranean and Western Asia.",
  uses: ["Used as a spice in savory dishes and ground into cumin powder."],
  nutritional_value: "Rich in iron, manganese, and antioxidants."
},
coriander: {
  name: "Coriander",
  climate: "Tropical and subtropical, with temperatures between 15-30°C.",
  soil: "Well-drained, loamy soil with a pH of 6.0-7.0.",
  practices: [
    "Plant in full sun and provide moderate watering.",
    "Harvest leaves early for fresh use and seeds when fully mature.",
    "Ensure good air circulation to prevent fungal diseases."
  ],
  pests: [
    {
      name: "Coriander Aphids",
      about: "These aphids feed on the sap, causing the plant to weaken and reducing yield.",
      solution: "Use insecticidal soap or natural predators like ladybugs."
    },
    {
      name: "Coriander Root Rot",
      about: "A fungal infection that rots the roots, especially in waterlogged conditions.",
      solution: "Improve drainage and use fungicide treatments."
    }
  ],
  market_demand: "Moderate, widely used in culinary applications worldwide.",
  origin: "Native to regions spanning Southern Europe and North Africa.",
  uses: ["Used as both fresh leaves (cilantro) and dried seeds in cooking."],
  nutritional_value: "Rich in vitamin C, antioxidants, and dietary fiber."
},

fennel: {
  name: "Fennel",
  climate: "Temperate to Mediterranean climates with temperatures between 10-25°C.",
  soil: "Well-drained, sandy loam with a pH of 6.0-7.0.",
  practices: [
    "Plant in full sun and water regularly, but avoid over-watering.",
    "Harvest bulbs when they are firm and white; use fronds for fresh consumption.",
    "Mulch around the base to retain moisture and prevent weeds."
  ],
  pests: [
    {
      name: "Fennel Aphids",
      about: "Aphids that feed on fennel sap and stunt plant growth.",
      solution: "Use insecticidal soap or natural predators."
    },
    {
      name: "Fennel Blight",
      about: "A fungal disease that affects fennel leaves, leading to spots and yellowing.",
      solution: "Use fungicide treatments and remove infected parts."
    }
  ],
  market_demand: "Moderate, used for both culinary and medicinal purposes.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used in cooking, as a vegetable and spice, and in herbal medicine."],
  nutritional_value: "Rich in fiber, vitamin C, and various minerals."
},
basil: {
  name: "Basil",
  climate: "Warm, tropical or subtropical climates with temperatures between 20-30°C.",
  soil: "Well-drained, fertile soil with a pH of 6.0-7.5.",
  practices: [
    "Plant in full sunlight and water regularly.",
    "Pinch off flower buds to encourage leaf growth.",
    "Harvest leaves before the plant flowers for the best flavor."
  ],
  pests: [
    {
      name: "Basil Downy Mildew",
      about: "A fungal disease that affects basil leaves, causing yellowing and wilting.",
      solution: "Use fungicides and remove infected leaves."
    },
    {
      name: "Basil Aphids",
      about: "Aphids that weaken the plant by sucking out sap.",
      solution: "Use natural predators or insecticidal soap."
    }
  ],
  market_demand: "High, especially for use in culinary dishes and pesto.",
  origin: "Native to tropical Asia and Africa.",
  uses: ["Used fresh in cooking, particularly in Italian and Mediterranean dishes."],
  nutritional_value: "Rich in antioxidants, vitamin K, and essential oils."
},
mint: {
  name: "Mint",
  climate: "Cool, temperate to tropical climates with temperatures between 18-22°C.",
  soil: "Moist, well-drained, fertile soil with a pH of 6.0-7.0.",
  practices: [
    "Plant in partial shade to avoid hot conditions that can cause wilting.",
    "Water frequently, but ensure good drainage.",
    "Harvest leaves regularly to encourage new growth and prevent flowering."
  ],
  pests: [
    {
      name: "Mint Rust",
      about: "A fungal disease that causes reddish-brown spots on leaves.",
      solution: "Remove affected leaves and apply fungicides."
    },
    {
      name: "Spider Mites",
      about: "Spider mites damage mint leaves by feeding on the sap.",
      solution: "Use miticides or spray with a strong jet of water."
    }
  ],
  market_demand: "High, especially for use in beverages, desserts, and medicinal products.",
  origin: "Native to Europe and Asia.",
  uses: ["Used in teas, cooking, and in essential oils for medicinal purposes."],
  nutritional_value: "Contains menthol, which has soothing properties, and is high in antioxidants."
},
rosemary: {
  name: "Rosemary",
  climate: "Warm, Mediterranean climates with temperatures between 15-25°C.",
  soil: "Well-drained, sandy loam with a pH of 6.0-7.0.",
  practices: [
    "Plant in full sun and water moderately.",
    "Trim back after flowering to encourage bushy growth.",
    "Ensure soil does not remain waterlogged to avoid root rot."
  ],
  pests: [
    {
      name: "Rosemary Beetle",
      about: "A beetle that feeds on rosemary leaves, damaging the plant.",
      solution: "Hand-pick the beetles or use insecticidal treatments."
    },
    {
      name: "Root Rot",
      about: "Caused by waterlogging, this disease rots the roots and weakens the plant.",
      solution: "Ensure proper drainage and avoid over-watering."
    }
  ],
  market_demand: "Moderate, widely used in cooking and essential oils.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used in cooking, as a seasoning, and in essential oils for medicinal and aromatic purposes."],
  nutritional_value: "Rich in antioxidants and anti-inflammatory compounds."
},
oregano: {
  name: "Oregano",
  climate: "Warm, temperate climates with temperatures between 20-30°C.",
  soil: "Well-drained, sandy loam with a pH of 6.0-7.0.",
  practices: [
    "Plant in full sun and provide moderate watering.",
    "Pinch back flowers to encourage leaf growth.",
    "Prune regularly to prevent the plant from becoming too leggy."
  ],
  pests: [
    {
      name: "Oregano Leafhopper",
      about: "A pest that feeds on oregano leaves, causing yellowing and curling.",
      solution: "Use insecticidal soap or attract natural predators."
    },
    {
      name: "Powdery Mildew",
      about: "A fungal disease that causes a white powdery coating on leaves.",
      solution: "Use fungicides and space plants to improve air circulation."
    }
  ],
  market_demand: "High, especially in Mediterranean and Italian cuisines.",
  origin: "Native to the Mediterranean region.",
  uses: ["Used in cooking, particularly in Italian, Greek, and Mediterranean dishes."],
  nutritional_value: "Rich in antioxidants, vitamin K, and antibacterial properties."
},
coffee: {
  name: "Coffee",
  climate: "Tropical climates, with temperatures between 18-24°C.",
  soil: "Well-drained, fertile, slightly acidic soil with a pH of 6.0-6.5.",
  practices: [
    "Plant in shaded areas to protect from direct sunlight.",
    "Water regularly, ensuring that the soil does not dry out.",
    "Prune the coffee plant to maintain shape and encourage better yield."
  ],
  pests: [
    {
      name: "Coffee Borer Beetle",
      about: "A beetle that attacks coffee berries, damaging the plant and reducing yield.",
      solution: "Use pest control strategies such as trapping or applying appropriate pesticides."
    },
    {
      name: "Coffee Rust",
      about: "A fungal disease that affects the coffee leaves, causing yellow spots and defoliation.",
      solution: "Apply fungicides and practice proper crop rotation."
    }
  ],
  market_demand: "High, coffee is one of the most consumed beverages worldwide.",
  origin: "Originally from Ethiopia, now cultivated in tropical regions globally.",
  uses: ["Used in making coffee beverages, and as a flavoring in food and cosmetics."],
  nutritional_value: "Contains caffeine, antioxidants, and essential nutrients like B vitamins and potassium."
},
tea: {
  name: "Tea",
  climate: "Tropical and subtropical climates, with temperatures between 10-30°C.",
  soil: "Well-drained, slightly acidic, and fertile soil with a pH of 5.5-6.5.",
  practices: [
    "Plant in partial shade, away from strong winds.",
    "Water regularly to maintain consistent moisture in the soil.",
    "Prune tea bushes to encourage leaf growth and enhance yield."
  ],
  pests: [
    {
      name: "Tea Mosquito Bug",
      about: "A pest that damages tea leaves by feeding on the sap.",
      solution: "Use insecticidal soaps or neem oil to control pest populations."
    },
    {
      name: "Tea Blight",
      about: "A fungal disease that causes black spots on tea leaves.",
      solution: "Use fungicides and practice crop rotation."
    }
  ],
  market_demand: "High, with tea being one of the most popular beverages worldwide.",
  origin: "Native to East Asia, specifically China and India.",
  uses: ["Used to make tea beverages, and in culinary and medicinal preparations."],
  nutritional_value: "Contains antioxidants and compounds that promote heart health and mental alertness."
},
cocoa: {
  name: "Cocoa",
  climate: "Tropical climates, requiring temperatures between 21-32°C.",
  soil: "Well-drained, rich, loamy soil with a pH of 6.0-7.0.",
  practices: [
    "Plant in shaded areas as cocoa trees are sensitive to direct sunlight.",
    "Water regularly but avoid waterlogging.",
    "Prune the trees regularly to improve airflow and reduce disease risk."
  ],
  pests: [
    {
      name: "Cocoa Pod Borer",
      about: "A pest that bores into cocoa pods, reducing yields and quality.",
      solution: "Use pest control measures such as insecticides and manual removal of infested pods."
    },
    {
      name: "Cocoa Swollen Shoot Virus",
      about: "A viral disease that causes swelling and deformity in cocoa pods.",
      solution: "Remove infected trees and use resistant cocoa varieties."
    }
  ],
  market_demand: "High, especially for chocolate production and cocoa-based products.",
  origin: "Native to the Amazon and Orinoco basins in South America.",
  uses: ["Used to make chocolate, cocoa butter, and in beverages."],
  nutritional_value: "Rich in antioxidants, magnesium, and essential fatty acids."
},
cotton: {
  name: "Cotton",
  climate: "Warm, sunny climates with temperatures between 21-30°C.",
  soil: "Well-drained, fertile soil with a pH of 5.5-7.0.",
  practices: [
    "Plant in rows with adequate spacing to ensure good airflow.",
    "Water regularly, but ensure that the soil does not remain waterlogged.",
    "Use crop rotation to maintain soil health and reduce pest risks."
  ],
  pests: [
    {
      name: "Cotton Bollworm",
      about: "A major pest that damages cotton bolls and reduces the fiber yield.",
      solution: "Apply insecticides or introduce natural predators like parasitic wasps."
    },
    {
      name: "Cotton Leaf Spot",
      about: "A fungal disease that causes spots on cotton leaves, reducing plant health.",
      solution: "Use fungicides and remove infected leaves."
    }
  ],
  market_demand: "High, cotton is in demand for the textile and fabric industries.",
  origin: "Native to tropical and subtropical regions of the world.",
  uses: ["Used in making fabrics, textiles, and cottonseed oil."],
  nutritional_value: "Cottonseed oil is rich in polyunsaturated fats and vitamin E."
}
,
jute: {
  name: "Jute",
  climate: "Tropical and subtropical climates with temperatures between 25-35°C.",
  soil: "Well-drained, fertile soil with a pH of 6.0-7.0.",
  practices: [
    "Plant in fields with adequate water supply, as jute requires a lot of water.",
    "Harvest when the stems are fully mature, typically 4-6 months after planting.",
    "Use crop rotation to avoid soil depletion and manage pest populations."
  ],
  pests: [
    {
      name: "Jute Weevil",
      about: "A beetle that damages jute plants by feeding on the stems.",
      solution: "Use appropriate insecticides and crop management practices."
    },
    {
      name: "Leaf Spot Disease",
      about: "A fungal disease that causes spots on the leaves and weakens the plant.",
      solution: "Use fungicides and maintain good crop spacing."
    }
  ],
  market_demand: "Moderate, mainly used in the textile and rope industries.",
  origin: "Native to South Asia, particularly Bangladesh and India.",
  uses: ["Used for making burlap, ropes, and other textiles."],
  nutritional_value: "Jute is not commonly used for food, but its fiber has industrial uses."
},
rubber: {
  name: "Rubber",
  climate: "Tropical climates with temperatures between 25-28°C and high humidity.",
  soil: "Well-drained, sandy loam with a pH of 5.5-6.5.",
  practices: [
    "Plant rubber trees in plantations with spacing to allow growth.",
    "Water regularly, especially during dry periods.",
    "Harvest latex from mature trees and process it into rubber products."
  ],
  pests: [
    {
      name: "Red Gum Lerp Psyllid",
      about: "A pest that attacks rubber trees and reduces sap production.",
      solution: "Use insecticides and remove affected leaves."
    },
    {
      name: "White Root Rot",
      about: "A fungal disease that affects the root system of rubber trees.",
      solution: "Apply fungicides and ensure proper drainage."
    }
  ],
  market_demand: "High, especially in the automotive and manufacturing industries.",
  origin: "Native to South America, particularly Brazil.",
  uses: ["Used in the manufacture of tires, footwear, and industrial products."],
  nutritional_value: "Not typically consumed for nutritional value."
},
tobacco: {
  name: "Tobacco",
  climate: "Warm, humid climates with temperatures between 20-30°C.",
  soil: "Well-drained, fertile soil with a pH of 5.5-6.5.",
  practices: [
    "Plant tobacco in rows with spacing to allow airflow and proper sunlight exposure.",
    "Water regularly but avoid waterlogging.",
    "Cure the leaves after harvesting to prepare them for processing."
  ],
  pests: [
    {
      name: "Tobacco Hornworm",
      about: "A caterpillar that feeds on tobacco leaves, causing significant damage.",
      solution: "Use insecticides or hand-pick the larvae from plants."
    },
    {
      name: "Tobacco Mosaic Virus",
      about: "A viral disease that causes mottled leaves and reduces the quality of tobacco.",
      solution: "Practice crop rotation and use resistant tobacco varieties."
    }
  ],
  market_demand: "High, particularly for the global cigarette industry.",
  origin: "Native to the Americas, widely cultivated in North and South America.",
  uses: ["Used in making cigarettes, cigars, and smokeless tobacco products."],
  nutritional_value: "Not typically consumed for nutritional value; contains nicotine."
},
sugarcane: {
  name: "Sugarcane",
  climate: "Tropical and subtropical climates, with temperatures between 20-32°C.",
  soil: "Well-drained, fertile soil with a pH of 6.0-6.5.",
  practices: [
    "Plant in rows with adequate spacing to ensure growth and airflow.",
    "Water regularly, as sugarcane requires a lot of water for optimal growth.",
    "Harvest when the canes are fully mature, typically 12-18 months after planting."
  ],
  pests: [
    {
      name: "Sugarcane Borer",
      about: "A pest that bores into the sugarcane stalk, reducing yield.",
      solution: "Apply insecticides or use biological control methods like parasitic wasps."
    },
    {
      name: "Sugarcane Aphid",
      about: "A pest that feeds on the sap of sugarcane, weakening the plant.",
      solution: "Use organic insecticides and control ant populations that protect aphids."
    }
  ],
  market_demand: "High, sugarcane is essential for sugar production and biofuels.",
  origin: "Native to Southeast Asia and the Indian subcontinent.",
  uses: ["Used to produce sugar, ethanol, molasses, and biofuels."],
  nutritional_value: "Sugarcane juice is rich in sucrose, providing energy."
},



dragon_fruit: { name: "Dragon Fruit", climate: "Tropical and subtropical climates, with temperatures between 30-35°C.", soil: "Well-drained, slightly acidic soil with a pH of 6-7.", practices: [ "Plant dragon fruit in well-drained soil with good sunlight exposure.", "Water consistently but avoid over-watering, as dragon fruit cacti are drought-tolerant.", "Support the plants with trellises to help the vines grow properly." ], pests: [ { name: "Mealybugs", about: "Mealybugs are small, white insects that feed on the sap of the plant, stunting growth.", solution: "Use insecticidal soap or neem oil to control mealybug populations." }, { name: "Fruit Flies", about: "Fruit flies lay eggs on the fruit, and larvae feed on the flesh, causing it to rot.", solution: "Set up traps and use insecticides to prevent fruit fly infestations." } ], market_demand: "High, particularly in health-conscious markets and for its exotic appeal.", origin: "Native to Central America, now grown extensively in Southeast Asia and Israel.", uses: [ "Eaten fresh or used in fruit salads, smoothies, and desserts.", "The juice is used in beverages and cosmetic products." ], nutritional_value: "Rich in vitamin C, antioxidants, and fiber. Low in calories, making it a healthy snack option." },

jackfruit: { name: "Jackfruit", climate: "Tropical climates, with temperatures ranging between 25-30°C.", soil: "Fertile, well-draining soil with a slightly acidic pH (5.5-7.5).", practices: [ "Plant jackfruit trees in full sun and provide adequate spacing for healthy growth.", "Water regularly during the dry season, but avoid waterlogging the soil.", "Prune the tree to maintain its shape and remove dead branches." ], pests: [ { name: "Fruit Borer", about: "The larvae of this insect bore into the jackfruit, causing damage to the flesh.", solution: "Use organic insecticides and remove infected fruits early." }, { name: "Mealybugs", about: "Mealybugs attack the jackfruit tree, feeding on the sap and weakening the plant.", solution: "Use neem oil or insecticidal soap to control mealybug populations." } ], market_demand: "High, particularly in Asian countries, and increasingly popular in vegan and plant-based diets.", origin: "Native to southwestern India and Bangladesh, now grown throughout tropical regions of Asia.", uses: [ "The fruit is consumed fresh or cooked, and its seeds can be boiled or roasted.", "Young jackfruit is often used as a meat substitute in vegetarian dishes." ], nutritional_value: "High in vitamins A and C, potassium, and dietary fiber. It is a good source of energy and has antioxidant properties." }


,
saffron: { name: "Saffron", climate: "Mediterranean climates with warm, dry summers and cool winters.", soil: "Well-draining, fertile soil with a pH of 6-8.", practices: [ "Plant saffron bulbs in raised beds to improve drainage.", "Saffron requires minimal water, with irrigation only during the growing season.", "Harvest flowers early in the morning and dry the stigmas to produce saffron." ], pests: [ { name: "Saffron Aphid", about: "These aphids feed on the sap of saffron flowers and can stunt growth.", solution: "Use natural predators like ladybugs or apply neem oil to control aphid populations." }, { name: "Fungal Diseases", about: "Fungal infections, like botrytis, can affect saffron flowers and bulbs.", solution: "Practice crop rotation and use fungicides as a preventative measure." } ], market_demand: "Very high due to its premium pricing and use in culinary dishes, perfumes, and medicine.", origin: "Native to the Middle East, specifically Iran, and cultivated for over 3,000 years.", uses: [ "Saffron is used in cooking, especially in dishes like biryani, paella, and risotto.", "It is also used in traditional medicine for its antioxidant and anti-inflammatory properties." ], nutritional_value: "Contains antioxidants, vitamins (especially vitamin C), and minerals like manganese and iron." }










































































    
    
    

  };
  