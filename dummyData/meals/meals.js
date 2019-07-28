const { THE_SHOPS_AT_LEGACY, DIANAS } = require('../locations.data')

module.exports = [
  {
    "_id": "5cc340db9577cd24a48eeea1",
    "user": "5cbb38f72354b8d7cbc7dab4",
    "title": "Organic Mediterranean Cuisine (Oven cooked)",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
    "imageUrl": "5cbb38f72354b8d7cbc7dab4/c1767e30-66db-11e9-9111-d3c938481d2d.jpeg",
    "geometry": { "type": "Point", "coordinates": THE_SHOPS_AT_LEGACY },
    "comments": [
      {
        "title": "Good",
        "content": "Very delicious meal",
        "author": "5cbb38f72354b8d7cbc7dab3"
      }
    ]
  },
  {
    "_id": "5cc340db9577cd24a48eeea2",
    "title": "Vietnamese Pho",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
    "user": "5cbb38f72354b8d7cbc7dab4",
    "imageUrl": "5cbb38f72354b8d7cbc7dab4/4d4470c0-66dc-11e9-9111-d3c938481d2d.jpeg",
    'geometry': { 'type': 'Point', 'coordinates': DIANAS },
    "comments": [
      {
        "title": "Also good",
        "content": "Mauricio's foods are always good",
        "author": "5cbb38f72354b8d7cbc7dab3"
      }
    ]
  },
  {
    "_id": "5cc340db9577cd24a48eeea3",
    "title": "Authentic Mexican Dishes",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
    "user": "5cbb38f72354b8d7cbc7dab4",
    "imageUrl": "5cbb38f72354b8d7cbc7dab4/db518870-66dd-11e9-815d-2b04ec85bcd1.jpeg",
    'geometry': { 'type': 'Point', 'coordinates': DIANAS },
    "comments": [
      {
        "title": "Also good",
        "content": "Mauricio's foods are always good",
        "author": "5cbb38f72354b8d7cbc7dab3"
      }
    ]
  }
]
