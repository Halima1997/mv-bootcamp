const sqlite3 = require('sqlite3').verbose();

function insert() {
    
    const db = new sqlite3.Database('./restaurants.sqlite');
    try {
        db.serialize(function () { 
            console.log('inserting some data');
            let stmt;
            
            try {
                
                stmt = db.prepare(`INSERT INTO RESTAURANTS (name, imagelink) VALUES (?, ?)`);
                stmt.run("subway", "https://www.subway.com/en-GB");
            } finally {
                
                stmt.finalize();
            }
            
            try {
                
            } finally {
                
                stmt.finalize();
            }
            
            try {
                
            } finally {
                stmt.finalize();
            }
        });
    } finally {
        
        db.close();
        console.log('table insert complete - connection closed');
    }
}
module.exports = insert;

insert();

