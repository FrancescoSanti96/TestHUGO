//Modulo richiesto per la lettura dei file
const fs = require('fs');


const rawdata = fs.readFileSync('list_skus.json');
const object = JSON.parse(rawdata)

// Lunghezza
// const length = Object.keys(object.data).length

//Ciclo l'oggetto per recuperare i nomi delli sku per generare i gile
for (const variable of object.data){
    id = (JSON.stringify(variable.id)).toLowerCase().slice(1,-1)
    fs.writeFile(`./project/content/products/${id}.md`,'' ,function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
