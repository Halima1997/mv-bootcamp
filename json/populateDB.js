const sqlite3 = require('sqlite3').verbose();
const fsp = require('fs').promises; 


async function loadAndInsert() {

 
    const db = new sqlite3.Database('./restaurants.sqlite');

    try {
     
        const rawData = await fsp.readFile('./restaurants.json');
        
        const restaurantsArray = (JSON.parse(String(rawData)));

        db.serialize(function () { 

            let menuCounter = 1;

           
            for (let i = 0; i < restaurantsArray.length; i++) {

                const currentRestaurant = restaurantsArray[i];

                let stmt;

                try {
                    
                    stmt = db.prepare(`INSERT INTO RESTAURANTS (name, imagelink) VALUES (?, ?)`);
                    stmt.run(currentRestaurant.name, currentRestaurant.image);
                } finally {
                   
                    stmt.finalize();
                }

                for (j = 0; j < currentRestaurant.menus.length; j++) {
                    const currentMenu = currentRestaurant.menus[j];
                    try {
                        stmt = db.prepare(`INSERT INTO MENUS (title, restaurant_id) VALUES (?, ?)`);
                        stmt.run(currentMenu.title, i + 1);
                    } finally {
                        
                        stmt.finalize();
                    }

                    for (k = 0; k < currentMenu.items.length; k++) {
                        const currentMenuItem = currentMenu.items[k];

                        try {
                            stmt = db.prepare(`INSERT INTO MENU_ITEMS (name, price, menu_id) VALUES (?, ?, ?)`);
                            stmt.run(currentMenuItem.name, currentMenuItem.price, menuCounter);
                        } finally {
                            
                            stmt.finalize();
                        }
                    }

                    menuCounter++;
                }
            } 

        });
    } finally {
        
        db.close();
    }
}

module.exports = loadAndInsert


console.log('starting populate');
loadAndInsert();
console.log('completed populate');