const express = require("express");
const con = require("./config");
var cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json());
// product List 
// app.get("/", (req, resp) => {
//   con.query("select * from Product", (err, result) => {
//     if (err) { resp.send("error in api") }
//     else { resp.send(result)
//     console.log(result) }
//   })
// });
app.get("/", (req, res) => {
   const pageSize = req.query.pageSize || 10; // default page size is 10
   const page = req.query.page || 1; // default page is 1
  const offset = (page - 1) * pageSize;
  const sql = `SELECT products.ProductId, products.ProductName, categories.CategoryId, categories.CategoryName
  FROM products INNER JOIN categories ON products.CategoryId = categories.CategoryId
  LIMIT ${pageSize} OFFSET ${offset}`;
               con.query(sql, (error, results) => {
                if (error) throw error;
                res.send(results);
  });
});
// catagaries List 
app.get("/catagories",(req, resp)=>{
   con.query("select * from Category ", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result)
    console.log(result) }
  } )
})
// product update
app.post("/addproduct", (req, resp) => {
    const data = req.body;
    con.query("INSERT INTO Product SET ?", data, (error, results, fields) => {
      if (error) throw error;
      resp.send(results)
    })
  });
  // category add
  app.post("/addcategory", (req, resp) => {
    const data = req.body;
    con.query("INSERT INTO Category SET ?", data, (error, results, fields) => {
      if (error) throw error;
      resp.send(results)
    })
  });
  app.get('/product/:id', (req, res) => {
    //console.log(req.params.ProductId)
    const ProductId = req.params.id;
    console.log("jj"+ProductId)
    con.query('SELECT * FROM Product WHERE ProductId = ?', [ProductId], (err, results) => {
      if (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      
      if (results.length === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.json(results[0]);
      }
    });
  });
  // search catagories
  app.get('/catagories/:id', (req, res) => {
    //console.log(req.params.ProductId)
    const CatagoryId = req.params.id;
    const sql = `select * from product where CategoryId=${CatagoryId}`;
    console.log("sql : "+sql);

    con.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      
      if (results.length === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.json(results);
      }
    });
  });
  // update product 
  app.put("/productupdate/:id",(req,resp)=>{
    const ProductId = req.params.id;
  const { ProductName , CategoryName, CategoryId} = req.body;
  const updatedProduct = {  ProductName , CategoryName, CategoryId };
    con.query('UPDATE Product SET ? WHERE ProductId = ?', [updatedProduct, ProductId],
    (error,results,fields)=>{
      if(error) throw error;
      resp.send(results)
    })
})
// updte category
app.put("/categoryupdate/:id",(req,resp)=>{
  const CategoryId = req.params.id;
const {  CategoryName} = req.body;
const updatedCategory = {   CategoryName };
  con.query('UPDATE Category SET ? WHERE CategoryId = ?', [updatedCategory, CategoryId],
  (error,results,fields)=>{
    if(error) throw error;
    resp.send(results)
  })
})
//product delete 
app.delete("/productdelete/:id",(req,resp)=>{
    con.query("DELETE FROM Product WHERE ProductId = "+ req.params.id, (err, results) => {
        if (err) throw err;
        resp.send(results);
      })
})
// Category delete
app.delete("/categorydelete/:id",(req,resp)=>{
  con.query("DELETE FROM Category WHERE CategoryId = "+ req.params.id, (err, results) => {
      if (err) throw err;
      resp.send(results);
    })
})
// seach 
app.listen("5000")