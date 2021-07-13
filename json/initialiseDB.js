const sqlite3 = require('sqlite3').verbose();
function initialise() {
    
    const db = new sqlite3.Database('./restaurants.sqlite');
    try {
        db.serialize(function () { 
            console.log('starting table creation');
            
            db.run("DROP TABLE IF EXISTS RESTAURANTS");
            db.run("DROP TABLE IF EXISTS MENUS");
            db.run("DROP TABLE IF EXISTS MENU_ITEMS");


            db.run("CREATE TABLE RESTAURANTS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)");
            db.run("CREATE TABLE MENUS (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, restaurant_id INT, FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(id))");
            db.run("CREATE TABLE MENU_ITEMS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, menu_id INT, FOREIGN KEY (menu_id) REFERENCES MENU (id))"); 

        });
    } finally {
        
        db.close();
        console.log('table creation complete - connection closed');
    }
}
module.exports = initialise;
initialise();