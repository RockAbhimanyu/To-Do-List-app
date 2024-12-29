const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const {v4:uuidv4}=require('uuid');
const methodOverride=require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let lists=[
    { 
    id:uuidv4(),
    title:`Grocery Shopping`,
    description: `Buy vegetables, fruits, and other essentials from the supermarket.`,
    },
    {id:uuidv4(),
    title:`Gym Workout`,
    description: `Follow the Monday workout plan: 30 minutes of cardio, weight training, and cool-down stretches.`,
    },
    {id:uuidv4(),
    title:`Book Reading`,
    description: `Read two chapters of "Atomic Habits" by James Clear. Take notes on actionable tips.`,
    },
    {id:uuidv4(),
    title:`Plan Weekend Trip`,
    description: `Research and finalize locations for the weekend trip. Book tickets and accommodations if required.`,
    },
    {id:uuidv4(),
    title:`Plant New Herbs`,
    description: `Prepare the garden bed and plant basil, parsley, and mint seeds. Water thoroughly and label each section.`,
    },
];

app.get("/lists/new",(req,res)=>{
    res.render("new.ejs");
});
app.get("/lists",(req,res)=>{
    res.render("index.ejs",{lists});
});
app.get("/lists/:id",(req,res)=>{
    let {id}=req.params;
    let list=lists.find((p)=> p.id===id);
    res.render("show.ejs",{list});
});
app.post("/lists",(req,res)=>{
    let{title,description}=req.body;
    let id=uuidv4();
    lists.push({id,title,description}); 
    res.redirect("/lists");
});
app.patch("/lists/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let newdescription=req.body.description;
    let list=lists.find((p)=> p.id===id);
    list.description=newdescription;
    res.redirect("/lists");
});
app.get("/lists/:id/edit",(req,res)=>{
    let {id}=req.params;
    let list=lists.find((p)=> p.id===id);
    res.render("edits.ejs",{list});
});
app.delete("/lists/:id",(req,res)=>{
    let {id}=req.params;
    lists=lists.filter((p)=> p.id!==id);
    res.redirect("/lists");
});

app.listen(port,()=>{
    console.log(`listening to port${port}`);
})