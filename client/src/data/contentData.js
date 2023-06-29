export const homeData = {
  bannerClass: 'home',
  title: 'Black Bear Espresso',
  subtitle: 'Proudly Serving Pilot Coffee',
};
export const aboutData = {
  title: `About Us`,
  bannerClass: 'about',
  text: `
    Welcome to Black Bear Espresso, in the heart of Toronto. Its home to great coffees including the Australian Flat White, probably the only place in Canada you'll find this downunder treat.
    
    You may be wondering why "Black Bear"? After all we're at 25 Carlton just east of Yonge Street, a long way from any forests. But there have been bears in Toronto. Early inhabitants recounted that Bay  Street was once known as Bear Street. This was way before the financial bulls and bears took over the street. The name was said to have been used after a bear was chased down the road towards the lake. 

    Another bear story occurred at The Grange, the home of Mr. Justice Boulton. This National Historic Site can be found at 317 Dundas Street West, a 20 minute walk from here. The story was told of a bear wandering into the pasture of the property. The Justices's horses, Bonaparte and Jefferson "a crack pair of the day at York", did not take kindly to the intruder. They plunged at the bear with their hooves and scared it off. 
  
    But these stories are not the reason for the Black Bear Espresso name. The black bear sits atop Ontario's Coat of Arms but that is also not the reason. Nor is the name due to Carlton the Bear, the Toronto  Maple Leafs' mascot who inhabited 60 Carlton Street for a number of years. After all, he is a polar bear not a black bear. No, the name came as an inspiration to Adam, the cafe's manager. he liked it. the rest of the family liked it, so here it is.
    
    We hope that you'll be inspired to try our many types of coffees with a croissant, muffin or with one of our treats.
    
    Drop by
    
    Hugs from your mates at Black Bear Espresso. `,
};

export const menuData = {
  title: 'Menu',
  bannerClass: 'menu',
  menuItemsOld: [
    {
      title: 'Coffee',
      description: `We offer a brewed single origin coffee, changed weekly and a range of espresso based drinks, hot and cold. Skim, almond, soy, coconut, oat and lactose free milks are available here.`,
      image: ``,
    },
    {
      title: 'Tea',
      description: `A range of black, green and herbal teas from Sloane Fine Tea Merchants.`,
      image: ``,
    },
    {
      title: 'Pastries',
      description: `A range of muffins, croissants and scones delivered daily from La Bamboche Patisserie`,
      image: ``,
    },
    {
      title: 'Deserts',
      description: `A selection of brownies, squares and loaves from Circles and Squares. Vegan and gluten free options also available courtesy of Bunner's Bake Shop`,
      image: ``,
    },
  ],

  menu: {
    drink: {
      //  HOT DRINKS: contains extra espresso array
      hotDrinks: {
        navId: 'hotDrinks',
        category: 'Hot Drinks',
        subtitle: '',
        needPriceGuide: true,
        espressoItems: [
          { itemName: 'Espresso', price: 3.6 },
          { itemName: 'Espresso Macchiato', price: 3.75 },
          { itemName: 'Americano', price: 3.75 },
          { itemName: 'Cortado', price: 3.75 },
        ],
        items: [
          {
            itemName: 'Brewed Coffee',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Latte',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Cappuccino',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Flat White',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Mocha',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'White Mocha',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Hot Chocolate',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'White Hot Chocolate',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
        ],
      },
      // TEA
      tea: {
        navId: 'tea',
        category: 'Teas',
        subtitle: '',
        needPriceGuide: true,
        items: [
          {
            itemName: 'Loose Leaf Tea',
            price: 3.49,
          },
          {
            itemName: 'Tea Latte',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'London Fog',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Chai Latte',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Matcha Latte',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
        ],
      },
      // COLD DRINKS
      coldDrinks: {
        navId: 'coldDrinks',
        category: 'Cold Drinks',
        subtitle: '',
        needPriceGuide: true,
        items: [
          {
            itemName: 'Iced Americano',
            price: 3.49,
          },
          {
            itemName: 'Cold Brew',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Iced Late',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Iced Mocha',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Iced White Mocha',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Iced Chai Latte',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
          {
            itemName: 'Iced Matcha Latte',
            price: 2.75,
            price12Oz: 3.1,
            price16Oz: 3.49,
          },
        ],
      },
      // FRAPPES
      frappes: {
        navId: 'frappes',
        category: 'Frappes',
        subtitle: '',
        needPriceGuide: false,
        items: [
          {
            itemName: 'Coffee Frappe',
            price: 5.95,
          },
          {
            itemName: 'Caramel Frappe',
            price: 6.45,
          },
          {
            itemName: 'Mocha Frappe',
            price: 6.45,
          },
          {
            itemName: 'White Mocha Frappe',
            price: 6.45,
          },
          {
            itemName: 'Chai Frappe',
            price: 6.45,
          },
          {
            itemName: 'Matcha Frappe',
            price: 6.95,
          },
        ],
      },
      // EXTRAS
      extras: {
        navId: 'extras',
        category: 'Extras',
        subtitle: '',
        needPriceGuide: false,
        items: [
          {
            itemName: 'Extra Shot',
            price: 1.25,
          },
        ],
      },
      // SYRUPS
      syrups: {
        navId: 'syrups',
        category: 'Syrups',
        subtitle: '',
        needPriceGuide: false,
        items: [
          {
            itemName: 'Vanilla',
            price: 0.75,
          },
          {
            itemName: 'Caramel',
            price: 0.75,
          },
          {
            itemName: 'Hazelnut',
            price: 0.75,
          },
        ],
      },
      // ALT MILK
      altMilk: {
        navId: 'altMilk',
        category: 'Alternative Milks',
        subtitle: '',
        needPriceGuide: false,
        items: [
          { itemName: 'Oat', price: 0.75 },
          { itemName: 'Almond', price: 0.75 },
          { itemName: 'Soy', price: 0.75 },
          { itemName: 'Coconut', price: 0.75 },
          { itemName: 'Lactose-Free', price: 0.75 },
        ],
      },
    },
    pastries: {},
    desserts: {},
  },
};
export const galleryData = {
  bannerClass: 'gallery',
  title: 'Gallery',
  subtitle: 'Our Community',
  images: [
    {
      id: 1,
      url: 'https://static.wixstatic.com/media/4784af_ef4bc75e4a7145c98c1cc5499ec2434d~mv2.png/v1/fill/w_421,h_424,al_c,q_80,usm_0.66_1.00_0.01/4784af_ef4bc75e4a7145c98c1cc5499ec2434d~mv2.png',
      alt: 'latte art in a ceramic mug accompanied by a package of pilot coffee beans.',
    },

    {
      id: 2,
      url: 'https://static.wixstatic.com/media/4784af_88ccd8aa63a149f79073e523200bfd1f~mv2.png/v1/fill/w_568,h_424,al_c,q_80,usm_0.66_1.00_0.01/4784af_88ccd8aa63a149f79073e523200bfd1f~mv2.png',
      alt: 'an assortment of muffins, croissants, eclairs and other baked pastries on display.',
    },
    {
      id: 3,
      url: 'https://static.wixstatic.com/media/4784af_a5cba510da9e4416aa8fca39e97e5954~mv2.png/v1/fill/w_548,h_678,al_c,q_85,usm_0.66_1.00_0.01/4784af_a5cba510da9e4416aa8fca39e97e5954~mv2.png',
      alt: `Shockingly Healthy brand cookies displayed on charcuterie board`,
    },
    {
      id: 4,
      url: 'https://static.wixstatic.com/media/4784af_39bab2f3339e424087a9301eeeddc289~mv2.png/v1/fill/w_218,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4784af_39bab2f3339e424087a9301eeeddc289~mv2.png',
      alt: 'coffee beverage placed on counter top looking out onto a rainy college street.',
    },
    {
      id: 5,
      url: 'https://static.wixstatic.com/media/4784af_325d6bb4c3af4d3db48958bd3cd9b194~mv2.png/v1/fill/w_424,h_424,al_c,q_80,usm_0.66_1.00_0.01/4784af_325d6bb4c3af4d3db48958bd3cd9b194~mv2.png',
      alt: 'Black Bear Espresso storefront.',
    },
    {
      id: 6,
      url: 'https://static.wixstatic.com/media/4784af_1522a953a771470c941c353c8fece165~mv2.png/v1/fill/w_425,h_424,al_c,q_80,usm_0.66_1.00_0.01/4784af_1522a953a771470c941c353c8fece165~mv2.png',
      alt: 'Take a look at a nice and cozy view of our front desk, pastry display and lighting.',
    },
    {
      id: 7,
      url: 'https://static.wixstatic.com/media/4784af_0e5eb9b723964be6ae5d231ec9e2d88c~mv2.png/v1/fill/w_571,h_424,al_c,q_80,usm_0.66_1.00_0.01/4784af_0e5eb9b723964be6ae5d231ec9e2d88c~mv2.png',
      alt: 'Happy 1st birthday to Black Bear Espresso!',
    },
  ],
};

export const contactData = {
  title: 'Contact',
  subtitle: 'Get in Touch',
  bannerClass: 'contact',
};

export const iconData = {
  closeMenu: {
    width: '48',
    height: '48',
    viewbox: '0 -960 960 960',
    icon: 'm249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z',
  },
  mobileMenu: {
    width: '48',
    height: '48',
    viewbox: '0 -960 960 960',
    icon: 'M115.935-233.304v-68.131h728.13v68.131h-728.13Zm0-212.631v-68.13h728.13v68.13h-728.13Zm0-212.63v-68.37h728.13v68.37h-728.13Z',
  },
  mapLink: {
    width: '48',
    height: '48',
    viewbox: '0 -960 960 960',
    icon: 'M732-644h60v-128h128v-60H792v-128h-60v128H604v60h128v128ZM480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q17 0 32.667 1.5Q528.333-877 544-874v62q-15-4-31-6t-33-2q-109.417 0-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159q133-121 196.5-219.5T740-552q0-8-.5-16t-1.5-16h61q1 8 1 16v16q0 100-79.5 217.5T480-80Zm0-494Z',
  },

  zoomIn: {
    width: '48',
    height: '48',
    viewbox: '0 -960 960 960',
    icon: 'M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Zm-31-85v-82h-82v-60h82v-81h60v81h81v60h-81v82h-60Z',
  },
  chevRight: {
    width: '48',
    height: '48',
    viewbox: '0 -960 960 960',
    icon: 'm375-240-43-43 198-198-198-198 43-43 241 241-241 241Z',
  },

  chevLeft: {
    width: '48',
    height: '48',
    viewbox: '0 -960 960 960',
    icon: 'M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z',
  },
};
