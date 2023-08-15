import Park from './Park';

const parks = [
  new Park('North Creek Trail', [47.79424000606273, -122.20100224333618], 4.1, [require('../images/image1.jpg')], "easy", "1 hr 37 min", "4.9 miles", "Blackberries, Fireweed, Oregon grape, Dandelion, Bigleaf maple, Thimbleberries"),
  new Park('Shelton View Forest', [47.78423829567166, -122.24205518813842], 4.0, [require('../images/image12.jpg'), require('../images/image13.jpg'), require('../images/image16.jpg')], "easy", "28 min", "1.0 miles", "Oregon grape, Salal, Oso Berry, Red huckleberry, Blackberry, Salmonberries, Bulrush"),
  new Park('Burke Gilman Trail', [47.750249838223255, -122.21313988465711], 1.9, [require('../images/image11.jpg')], "intermediate", "5 hr 36 min", "18.4 mi 387 ft", "Salal, Cleavers, Oso Berry, Bigleaf Maple, Fireweed, Clover, Broadleaf Plantain, Bulrush, Thimbleberries, Blackberries, Salmonberries, Purple Archangel, Licorice Fern, Wood Sorrel"),
  new Park('Bothell Landing Trail', [47.758375235019784, -122.20765723231874], 1.3, [require('../images/image3.jpg'), require('../images/image6.jpg'), require('../images/image14.jpg')], "easy", "57 min", "3 mi 98 ft", "Fireweed, Clover, Plantain, Thimbleberries, Salmonberries, Wood Sorrell, Blackberries, Oso Berry"),
  new Park('Centennial Trail', [47.80890259900624, -122.21770236115123], 5.3, [], "difficult", "9 hr 7 min", "29.9 mi 695 ft", "Fireweed, Salal, Thimbleberry, Salmonberry, Oso Berry, Clover, Plantain, Purple Archangel, Wood Sorrel, Dandelion"),
  new Park('Sammammish River Trail', [47.758487063490136, -122.20486634232856], 3.4, [require('../images/image5.jpg')], "intermediate", "2 hr 50 min", "9.5 miles", "Fireweed, Oregon Grape, Bittercress, Blackberry, Thimbleberry, Broadleaf Plantain, Oso Berry, Cleavers, Purple Archangel, Common Dandelion, Bigleaf Maple, White clover, Salmonberries"),
  new Park('Blyth Park Trail', [47.750620548440125, -122.20895637464787], 1.8, [require('../images/image2.jpg')], "easy", "35 min", "1.1 mi 252 ft", "Broadleaf Plantain, White clover, Fireweed, Bittercress, Blackberry, Thimbleberry, Oso Berry, Bigleaf Maple, Oregon Grape, Salmonberries"),
  new Park('Greenbrier Trailhead', [47.76202022970643, -122.14903418999002], 3.5, [require('../images/image15.jpg'), require('../images/image19.jpg')], "TBD", "TBD", "1.25 miles", "Blackberries, Bigleaf maple, Oso Berry, Red huckleberry, Plantain, Dandelion"),
  new Park('Gold Creek County Park', [47.74248995514461, -122.13949380533415], 4.2, [require('../images/image8.jpg'), require('../images/image10.jpg'), require('../images/image17.jpg'), require('../images/image18.jpg')], "easy", "25 min", "1.25 miles", "Salal, Licorice fern, White Clover, Broadleaf Plantain, Common Dandelion, Thimbleberry, Cleavers, Miner’s lettuce, Oso Berry"),
];

export default parks;