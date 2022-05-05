## Example Hugo site and script node for generate .md file from json
#### sample list of products and view a single product

Eseguire il comando:

node generateMD.js
    per generare i file .md per popolare la cartella conent/products in Hugo project necessaria per il routing del prodotto singolo.


TODO:
-Aggiungere la chiamata api per prelevare il json per la creazione dei file .md (attualemente utilizza un file json salvato in locale).

Il project è di esempio e nel file list.html di prodotti utilizza un json locale salavato in data per popolare i campi e nella pagina single.hmtl effettua una chiamata di esempio a jsonplacheholder per popolare i campi.