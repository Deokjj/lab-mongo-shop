// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne(
  {
    "firstName": "John",
    "lastName": "Smith",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    }
  }
)

db.users.insertMany(
  [
    {
      "firstName":"Deokjae",
      "lastName":"Jeon",
      "dateBirth": new Date("1993-10-23"),
      "address": {
        "streetAddress": "You can't find me",
        "city": "Lagos",
        "state": "Nigeria",
        "postalCode": "something"
      }
    },
    {
      "firstName":"Tommy",
      "lastName":"Roldan",
      "dateBirth": new Date("1992-1-18"),
      "address": {
        "streetAddress": "You can't find me",
        "city": "Bangkok",
        "state": "Thailand",
        "postalCode": "something"
      }
    }
  ]
)

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne(
  {
     "name": "Water Bottle",
     "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
     "category":"Kitchen",
     "price":23.0
  }
)

db.products.insertMany(
  [
    {
      "name": "bike",
      "description":"It gets to where you need to go",
      "category":"ridable",
      "price":230.0
    },
    {
      "name": "a pipe",
      "description":"long and beautiful pipe",
      "category":"ridable",
      "price":20.0
    }
  ]
)

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.update(
  {"firstName" : "Tommy"},
  { $push:{"shoppingCart":ObjectId("59498d6b09f1d29a5b070bfe")} }
)

db.users.update(
  {"firstName" : "Deokjae"},
  { $push:{"shoppingCart":ObjectId("594987dd09f1d29a5b070bf8")} }
)

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty()

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category": "ridable"})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({"_id":ObjectId("59498d6b09f1d29a5b070bfe")})

// PASTE REVIEW QUERY HERE
db.products.update(
  {"_id " : ObjectId("594987dd09f1d29a5b070bf8")},
  {$push : {"reviews" :
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  }}
)
