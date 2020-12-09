import React, { useState, createContext } from "react";

export const ItemContext = createContext();
export const ItemProvider = (props) => {
  const [items, setItems] = useState([
    {
      name: "Men's Nike Air Max 200",
      id: 1,
      price: 30.99,
      imageUrl: "https://i.imgur.com/oiroxDa.png",
      description:
        "Take the lead in your Nike Air Max 200. Inspired by the fastest man on earth during the 1996 World Stage for athletes, gold accents speak to your currency while blocks of red warn others to just, 'stop' There's no keeping up—you set the gold standard.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      extras: {
        urlOne:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/g8ieijgrh2dz6l6kies0/air-max-200-worlds-fastest-man-mens-shoe-29b3Dr.jpg",
        urlTwo:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/tle2cdnladaoa6obzhu9/air-max-200-worlds-fastest-man-mens-shoe-29b3Dr.jpg",
        urlThree:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qvguz3c0dek5ncfccuxd/air-max-200-worlds-fastest-man-mens-shoe-29b3Dr.jpg",
        urlFour:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hv5b2bcifot9ctnxghn7/air-max-200-worlds-fastest-man-mens-shoe-29b3Dr.jpg",
      },
      gif: "https://s8.gifyu.com/images/ezgif-3-9927187856ba.gif",
    },
    {
      name: "Men's Nike Air Max 270 Bowfin",
      id: 2,
      price: 40.99,
      imageUrl: "https://i.imgur.com/zHYi6RP.png",
      description:
        "Named for a fish that can breathe both in the water and on land, the Nike Air Max 270 Bowfin Shoe epitomizes versatility by combining elements of trail shoes and water moccasins. It pushes this utility-inspired look into the future with the addition of Nike's largest Max Air unit.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      extras: {
        urlOne:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e85db874-d0d1-48c6-a971-5800aae91563/air-max-tailwind-iv-mens-shoe-KvQW5V.jpg",
        urlTwo:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/utyieu9ctijvyzv5t9hj/air-max-270-bowfin-mens-shoe-0x4rcw.jpg",
        urlThree:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/riwxr1mt6ymjooiva7jo/air-max-270-bowfin-mens-shoe-0x4rcw.jpg",
        urlFour:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bxwmvotnj78mijw78nfk/air-max-270-bowfin-mens-shoe-0x4rcw.jpg",
        urlFive:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/lcjcpfpxlsdquyineot8/air-max-270-bowfin-mens-shoe-0x4rcw.jpg",
      },
      gif: "https://s8.gifyu.com/images/ezgif-3-7225b749b9c7.gif",
    },
    {
      name: "Men's Nike Air Max 270",
      id: 3,
      price: 30.99,
      imageUrl: "https://i.imgur.com/JUofvlC.png",
      description:
        "Inspired by pop art, the Nike Air Max 270 React lets you be the art and the artist as you blur boundaries. Vibrantly blocked colors merge into solid black to frame the iconic Max Air unit. Let every scuff mark, puddle and step you take make your masterpiece.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      extras: {
        urlOne:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qhogzmbjeidxggidumwa/air-max-270-react-pop-art-mens-shoes-bZ8t5l.jpg",
        urlTwo:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uhpnzfpv1xkawjgiax4f/air-max-270-react-pop-art-mens-shoes-bZ8t5l.jpg",
        urlThree:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cahohnbx2oifqbzgsqc0/air-max-270-react-pop-art-mens-shoes-bZ8t5l.jpg",
        urlFour:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xatihjizboztykq5vzoz/air-max-270-react-pop-art-mens-shoes-bZ8t5l.jpg",
      },
      gif: "https://s8.gifyu.com/images/ezgif-3-6faec897327f.gif",
    },
    {
      name: "Men's Nike Air Max 2090",
      id: 4,
      price: 30.99,
      imageUrl: "https://i.imgur.com/Ufbs54K.png",
      extras: {
        urlOne:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1ade29e2-8bbb-460d-8315-b9f7439ee2bf/air-max-2090-mens-shoe-3pVM46.jpg",

        urlTwo:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ebb7da55-2a8f-4755-8242-88e9e72b5dad/air-max-2090-mens-shoe-3pVM46.jpg",
        urlThree:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b1928870-c71d-487e-9397-f0d7a3e12042/air-max-2090-mens-shoe-3pVM46.jpg",
        urlFour:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/797c1549-8e37-46a0-81c8-a9b7fbdb1613/air-max-2090-mens-shoe-3pVM46.jpg",
      },
      description:
        "Transparent fabric on the upper blends with timeless OG features for an edgy, modernized look.  More Air underfoot creates a softer, more comfortable ride while 360 degrees of ribbed, translucent rubber frames your air for a bold, futuristic look.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      gif: "https://s8.gifyu.com/images/ezgif-3-80d1336dff60.gif",
    },

    {
      name: "Men's Nike Air Max Plus III",
      id: 5,
      price: 34.99,
      imageUrl: "https://i.imgur.com/ox0Y3oH.png",
      extras: {
        urlOne:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/oihgcfk3ykelvgmwwrqu/air-max-97-mens-shoe-SD3ZmW.jpg",
        urlTwo:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ysspiqafs0e3rpyeqpfm/air-max-97-mens-shoe-SD3ZmW.jpg",
        urlThree:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bqbsybmdyxbet2blc7fo/air-max-97-mens-shoe-SD3ZmW.jpg",
        urlFour:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bkjigdwl4zsrrc1avnvw/air-max-97-mens-shoe-SD3ZmW.jpg",
      },
      description:
        "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      gif: "https://s8.gifyu.com/images/ezgif-3-98c21e758b09.gif",
    },
    {
      name: "Women's Nike Air Zoom",
      id: 6,
      price: 30.99,
      imageUrl: "https://i.imgur.com/3tADlIO.png",
      extras: {
        urlOne:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hbapuppu8gm0evxij2xx/air-zoom-pegasus-36-trail-womens-trail-running-shoe-vF7D4W.jpg",
        urlTwo:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cci3niohhlqz1kvdemb2/air-zoom-pegasus-36-trail-womens-trail-running-shoe-vF7D4W.jpg",
        urlThree:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uu3zremtdhysqjwbyiet/air-zoom-pegasus-36-trail-womens-trail-running-shoe-vF7D4W.jpg",
        urlFour:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qlifeizgq3ud3xzu9qvc/air-zoom-pegasus-36-trail-womens-trail-running-shoe-vF7D4W.jpg",
      },

      description:
        "An icon hits the paths less traveled in the Nike Air Zoom Pegasus 36 Trail. Perforated mesh upper offers breathable comfort, and double Zoom Air units cushion your stride. Outsole lugs optimize traction when running uphill.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      gif: "https://s8.gifyu.com/images/ezgif-3-862a10b8510a.gif",
    },

    {
      name: "Men's Air Jordan 1 Mid SE",
      id: 7,
      price: 49.95,
      imageUrl: "https://i.imgur.com/ZLxTy2i.png",
      description:
        "The Air Jordan 1 Mid SE maintains the timeless appeal of the first AJ1, revamped with fresh colors to give it an updated profile. It has a lightweight Air-Sole unit and a mix of natural and synthetic materials that make up its classic look.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      extras: {
        urlOne:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0a1586dd-7a60-4d4e-99c1-f08dd503d87e/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg",
        urlTwo:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/76720d23-aa27-4d5a-a902-f499ead36d7c/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg",
        urlThree:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f8783c43-b9a0-4f32-a7b8-a20d32785ee4/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg",
        urlFour:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1aed8da5-a63e-475e-907b-361bd04c2f36/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg",
      },
      gif: "https://s8.gifyu.com/images/ezgif-3-77028eb7fe17.gif",
    },

    {
      name: "Men's Nike Air Max 720",
      id: 8,
      price: 35.99,
      imageUrl: "https://i.imgur.com/5aiYXSI.png",
      description:
        "The Nike Air Max 720 goes bigger than ever before with Nike’s tallest Air unit yet, offering more air underfoot for unimaginable, all-day comfort. Has Air Max gone too far? We hope so.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      extras: {
        urlOne:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rvcjnwvkfhjhgxmie6nh/air-max-720-mens-shoe-Nz7NKG.jpg",
        urlTwo:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uzdstqrts1dbex4ef0wm/air-max-720-mens-shoe-Nz7NKG.jpg",
        urlThree:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dajqcc1kxiyglsmew36v/air-max-720-mens-shoe-Nz7NKG.jpg",
        urlFour:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fpx2jir0ibzz9f88py9e/air-max-720-mens-shoe-Nz7NKG.jpg",
      },
      gif: "https://s8.gifyu.com/images/ezgif-3-c356b4c0e21b.gif",
    },

    {
      name: "Boys' Nike React Vision",
      id: 9,
      price: 28.99,
      imageUrl: "https://i.imgur.com/BnuU0dm.png",
      extras: {
        urlOne:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/43e01c15-01ad-49f0-b0ad-6d0ac270549e/react-vision-big-kids-shoe-BSvVZv.jpg",
        urlTwo:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/43029a58-8f6f-40e8-a53d-9cecab9342d5/react-vision-big-kids-shoe-BSvVZv.jpg",
        urlThree:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8937f5b1-1141-44b6-adf6-7de8b0079f86/react-vision-big-kids-shoe-BSvVZv.jpg",
        urlFour:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c9930e8b-aa23-4908-889e-5f169926ca96/react-vision-big-kids-shoe-BSvVZv.jpg",
      },
      description:
        "The Nike React Vision stands out whether you're at school or in the streets. It's lightweight on your feet and features Nike React technology for soft, bouncy, all-day cushioning.",
      shipping:
        "Most of our items are in stock and will ship quickly. **Free shipping on all orders when purchases are made through account**",
      gif: "https://s8.gifyu.com/images/ezgif-3-bfc1dd6fff5d.gif",
    },
  ]);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
