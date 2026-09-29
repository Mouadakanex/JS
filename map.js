let mouad = new Map();

mouad.set("audi", 300000);
mouad.set("bmw", 300000);
mouad.set("ferrari", "300000");

let best = "ferrari";

if(mouad.has(best)){
    console.log("Price: " + mouad.get(best) + " DH");
}