const products = [
  {
    _id: "1",
    name: "Calpol 650mg Tablet 15'S",
    genericName: "PARACETAMOL",
    image: "/images/calpol-650.png",
    qtyPerUnit: "15 Tablet(s) in a Strip",
    description:
      "Calpol Tablet is a pain-relieving medicine. It contains paracetamol as an active ingredient. It is used for reducing fever and relieving pain including toothache, headache, migraine, muscle ache, period pain, etc. While taking this medicine you should not take other medicines containing paracetamol. Do not take more than the recommended dose and keep a gap of a minimum of 4 hours between two consecutive doses.",
    mfr: "Glaxosmithkline Pharmaceuticals Ltd",
    category: "Medicine",
    price: 30.74,
    countInStock: 12,
    isRxRequired: false
  },
  {
    _id: "2",
    name: "Crocin 650mg Tablet 15'S",
    genericName: "PARACETAMOL",
    image: "/images/crocin-650.jpg",
    qtyPerUnit: "15 Tablet(s) in a Strip",
    description:
      "Crocin Advance tablet is a pain-relieving medicine. It contains paracetamol as an active ingredient. It is used for reducing fever and relieving pain including toothache, headache, migraine, muscle ache, period pain, etc. While taking this medicine you should not take other medicines containing paracetamol. Do not take more than the recommended dose and keep a gap of a minimum of 4 hours between two consecutive doses.",
    mfr: "Glaxosmithkline Consumer Healthcare Ltd",
    category: "Medicine",
    price: 30.91,
    countInStock: 5,
    isRxRequired: false
  },
  {
    _id: "3",
    name: "Azithral 500mg Tablet 5'S",
    genericName: "AZITHROMYCIN",
    image: "/images/azithral-500.png",
    qtyPerUnit: "5 Tablet(s) in a Strip",
    description:
      "Azithral 500 tablet is an antibiotic and is used to treat many bacterial infections associated with different parts of the body. It contains Azithromycin as its active ingredient. It works by killing the bacteria responsible for infection. You should always take this medicine for the prescribed duration for the effective infection control. Do not take this medicine on your own for any kind of infection. Antibiotics are only effective against bacterial infection using them unnecessarily can lead antibiotic resistance and it can also harm beneficial bacteria present in the body.",
    mfr: "Alembic Pharamaceuticals Ltd",
    category: "Medicine",
    price: 119.5,
    countInStock: 5,
    isRxRequired: true
  },
  {
    _id: "4",
    name: "Azee 500mg Tablet 5'S",
    genericName: "AZITHROMYCIN",
    image: "/images/azee-500.jpg",
    qtyPerUnit: "5 Tablet(s) in a Strip",
    description:
      "Azee 500mg tablet is an antibiotic and is used to treat many bacterial infections associated with different parts of the body. It contains Azithromycin as its active ingredient. It works by killing the bacteria responsible for infection. You should always take this medicine for the prescribed duration for the effective infection control. Do not take this medicine on your own for any kind of infection. Antibiotics are only effective against bacterial infection using them unnecessarily can lead antibiotic resistance and it can also harm beneficial bacteria present in the body.",
    mfr: "Cipla Ltd",
    category: "Medicine",
    price: 119.5,
    countInStock: 5,
    isRxRequired: true
  },
  {
    _id: "5",
    name: "Ciplox 500mg Tablet 10'S",
    genericName: "CIPROFLOXACIN",
    image: "/images/ciplox-500.jpg",
    qtyPerUnit: "10 Tablet(s) in a Strip",
    description:
      "Ciplox 500 mg tablet is an antibiotic and is used in treating various types of bacterial infections such as pneumonia, sinus infection and other infections of the skin, ear, nose, stomach, urinary tract, etc. It contains Ciprofloxacin as its active ingredient. This tablet It works by destroying the infection-causing bacteria and inhibits the growth of new bacteria. Ciplox 500 mg tablets should be used under medical prescription and for the duration, it is prescribed. It can be taken with or without food. Do not stop taking this tablet without informing your doctor. Nausea, diarrhoea, headache, stomach pain are some of the common side effects that you may experience while taking Ciplox 500 tablets. Most of which are temporary but if you feel the side effects persist or your condition worsens, you should contact your doctor immediately.",
    mfr: "Cipla Ltd",
    category: "Medicine",
    price: 40.99,
    countInStock: 0,
    isRxRequired: true
  },
  {
    _id: "6",
    name: "Ciprokem 500mg Tablet 10'S",
    genericName: "CIPROFLOXACIN",
    image: "/images/tablets.jpg",
    qtyPerUnit: "10 Tablet(s) in a Strip",
    description:
      "Ciprokem 500 mg tablet is an antibiotic and is used in treating various types of bacterial infections such as pneumonia, sinus infection and other infections of the skin, ear, nose, stomach, urinary tract, etc. It contains Ciprofloxacin as its active ingredient. This tablet It works by destroying the infection-causing bacteria and inhibits the growth of new bacteria. Ciplox 500 mg tablets should be used under medical prescription and for the duration, it is prescribed. It can be taken with or without food. Do not stop taking this tablet without informing your doctor. Nausea, diarrhoea, headache, stomach pain are some of the common side effects that you may experience while taking Ciplox 500 tablets. Most of which are temporary but if you feel the side effects persist or your condition worsens, you should contact your doctor immediately.",
    mfr: "Alkem Laboratories Ltd",
    category: "Medicine",
    price: 40.68,
    countInStock: 2,
    isRxRequired: true
  },
  {
    _id: "7",
    name: "Montek LC Tablet 10'S",
    genericName: "LEVOCETIRIZINE 5MG + MONTELUKAST 10MG",
    image: "/images/montek-LC.png",
    qtyPerUnit: "10 Tablet(s) in a Strip",
    description:
      "Montek LC tablet is used to relieve symptoms of allergic rhinitis such as a runny & stuffed nose, blockage in airways, sneezing, itching, watery eyes and other allergic symptoms. Montek LC tablet is a combination medicine containing montelukast and levocetirizine. It works by blocking the production of chemicals responsible for causing the allergy. It should be taken as directed by the doctor, in the correct doses and for the exact duration as prescribed. Swallow it with a glass of water, with or without food. Your doctor may advise you to take the Montek LC tablet, preferably at bedtime. Inform your doctor if you are pregnant, planning a pregnancy or breastfeeding and about all the medicines and supplements you take and all the conditions or diseases you suffer from before starting this medicine.",
    mfr: "Sun Pharmaceutical Industries Ltd",
    category: "Medicine",
    price: 179.5,
    countInStock: 5,
    isRxRequired: true
  },
  {
    _id: "8",
    name: "Infinair 5/10 mg Tablet 10'S",
    genericName: "LEVOCETIRIZINE 5MG + MONTELUKAST 10MG",
    image: "/images/infinair-5-10.jpg",
    qtyPerUnit: "10 Tablet(s) in a Strip",
    description:
      "Infinair 5/10 mg tablet is used to relieve symptoms of allergic rhinitis such as a runny & stuffed nose, blockage in airways, sneezing, itching, watery eyes and other allergic symptoms. Montek LC tablet is a combination medicine containing montelukast and levocetirizine. It works by blocking the production of chemicals responsible for causing the allergy. It should be taken as directed by the doctor, in the correct doses and for the exact duration as prescribed. Swallow it with a glass of water, with or without food. Your doctor may advise you to take the Montek LC tablet, preferably at bedtime. Inform your doctor if you are pregnant, planning a pregnancy or breastfeeding and about all the medicines and supplements you take and all the conditions or diseases you suffer from before starting this medicine.",
    mfr: "Pfizer Limited",
    category: "Medicine",
    price: 124.22,
    countInStock: 8,
    isRxRequired: true
  },
  {
    _id: "9",
    name: "Razo D Capsule 15'S",
    genericName: "DOMPERIDONE SR 30 mg + RABEPRAZOLE SODIUM 20 mg",
    image: "/images/razo-d.png",
    qtyPerUnit: "15 Tablet(s) in a Strip",
    description:
      "Razo D Cap 15`S contains combination of Rabeprazole and Domperidone, an anti-reflux medicine.Domperidone belongs to a group of medicines called 'dopamine antagonists' and Rabeprazole belongs to a group of medicines called Proton Pump Inhibitors (PPIs). It acts by reducing the amount of acid made by the stomach",
    mfr: "Dr Reddy'S Laboratories Ltd",
    category: "Medicine",
    price: 271.5,
    countInStock: 15,
    isRxRequired: true
  },
  {
    _id: "10",
    name: "Ecorab D Capsule 10'S",
    genericName: "DOMPERIDONE SR 30 mg + RABEPRAZOLE SODIUM 20 mg",
    image: "/images/ecorab-d.jpg",
    qtyPerUnit: "10 Capsule(s) in a Strip",
    description:
      "Ecorab D Cap 10'S contains combination of Rabeprazole and Domperidone, an anti-reflux medicine.Domperidone belongs to a group of medicines called 'dopamine antagonists' and Rabeprazole belongs to a group of medicines called Proton Pump Inhibitors (PPIs). It acts by reducing the amount of acid made by the stomach",
    mfr: "Indiabulls Pharmaceuticals Ltd",
    category: "Medicine",
    price: 36.19,
    countInStock: 2,
    isRxRequired: true
  },
  {
    _id: "11",
    name: "Roles D Capsule 10'S",
    genericName: "DOMPERIDONE SR 30 mg + RABEPRAZOLE SODIUM 20 mg",
    image: "/images/roles-d.jpg",
    qtyPerUnit: "10 Capsule(s) in a Strip",
    description:
      "Roles D Cap 10'S contains combination of Rabeprazole and Domperidone, an anti-reflux medicine.Domperidone belongs to a group of medicines called 'dopamine antagonists' and Rabeprazole belongs to a group of medicines called Proton Pump Inhibitors (PPIs). It acts by reducing the amount of acid made by the stomach",
    mfr: "Sun Pharmaceutical Industries Ltd",
    category: "Medicine",
    price: 121.0,
    countInStock: 5,
    isRxRequired: true
  },
  {
    _id: "12",
    name: "Complan Royale Chocolate Refill Pack 500 gm",
    genericName: "",
    image: "/images/complan.png",
    qtyPerUnit: "a packet of 500 gm",
    description:
      "Complan Royale Chocolate is a delicious nutritional drink with high-quality milk protein. Complan has been scientifically shown to provide 2 times faster growth with regular consumption. This Complan drink contains a total of 34 vital nutrients that are essential for growth, brain development and immunity.",
    mfr: "Heinz India Pvt Ltd",
    category: "Health Care",
    price: 280.0,
    countInStock: 5,
    isRxRequired: false
  },
  {
    _id: "13",
    name: "3 Ply Mask Packet Of 50",
    genericName: "",
    image: "/images/mask.png",
    qtyPerUnit: "a pack of 50 Mask(s)",
    description:
      "The 3-ply face mask has flexible ear loops and has a high level of breathability, making it good for use in medical facilities, laboratories, food establishments, as well as in other public places. It helps protect against dust particles and suspended liquid droplets in the air. These masks have a triple-layered design that allows seamless crimping and breathability. These masks are also free of latex and fibre free, such that people with allergies can also use them easily.",
    mfr: "Kee Healthcare Private Limited",
    category: "Health Care",
    price: 250.0,
    countInStock: 8,
    isRxRequired: false
  },
  {
    _id: "14",
    name: "Dettol pH Balanced Handwash - Skincare 175 ml",
    genericName: "",
    image: "/images/detol-handwash.png",
    qtyPerUnit: "a pouge of 175 ml",
    description:
      "Dettol provides effective protection from disease and infection-causing germs. The Dettol hand wash is formulated with moisturizers that help maintain the natural pH balance as well as takes care of hand hygiene. It effectively protects from 100 illness-causing germs.",
    mfr: "Reckitt Benckiser India Ltd",
    category: "Health Care",
    price: 40.0,
    countInStock: 10,
    isRxRequired: false
  },
  {
    _id: "15",
    name: "Veet Hair Removal Cream - Sensitive Skin 100 gm",
    genericName: "",
    image: "/images/veet.png",
    qtyPerUnit: "a pack of 100 gm",
    description:
      "Veet Full Body Ready-to-Use Wax Strips are recommended if you are looking for easy use and long-lasting results. They efficiently remove unwanted hair and leave you with up to four weeks of long smoothness with an exfoliated skin. Also, by using regular wax strips, the hair grows back fewer, finer and softer.",
    mfr: "Heinz India Pvt Ltd",
    category: "Health Care",
    price: 218.55,
    countInStock: 15,
    isRxRequired: false
  },
  {
    _id: "16",
    name: "Volini Pain Relief Spray Bottle Of 100 G",
    genericName: "",
    image: "/images/volini.png",
    qtyPerUnit: "a bottle of 100 gm",
    description:
      "Volini Spray is a pain relief spray which provides instant relief from muscle pain, sprain and pain in the joints. Scientifically formulated with the ingredients such as Diclofenac diethylamine, Methyl Salicylate and Menthol, it contains micro particles which provide quick relief from pain by penetrating deeply. Musculoskeletal and joint pain can also be cured by its use.",
    mfr: "Sun Pharmaceutical Industries Ltd",
    category: "Health Care",
    price: 265.5,
    countInStock: 10,
    isRxRequired: false
  }
];

export default products;
