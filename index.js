// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };
}
// fetch info from database 
const userBasicInfo = await dbs[dbIdentifier](id);

// i need fetch for personal info 
const personalInfo = await vault(id);

// we do the assemble now 

const userData = {
    id: id,
    name: personalInfo.name,
    username: userBasicInfo.username,
    email: personalInfo.email,
    address: {
        street: personalInfo.address.street,
        suite: personalInfo.address.suite,
        city: personalInfo.address.city,
        zipcode: personalInfo.address.zipcode,
        geo: {
            lat: personalInfo.address.geo.lat,
            lng: personalInfo.address.geo.lng
        }
    },
    phone: personalInfo.phone,
    website: userBasicInfo.website,
    company: {
        name: userBasicInfo.company.name,
        catchPhrase: userBasicInfo.company.catchPhrase,
        bs: userBasicInfo.company.bs
    }
};

// // We use Return here 
// return userData;
// Catch(error); {
//     // How i need to Handle errors appropriately
//     if (error.message.includes('db')) {
//         // If error is from db1, db2, or db3 pay attention to it
//         return Promise.reject(`Database error: ${error.message}`);
//     } else {
//         // If error is from central or vault, confirm the error you see. 
//         return Promise.reject(`Other error: ${error.message}`);
//     }
// }


// Return the assembled user data object
// return userData;
// try {
    
// } catch (error) {
    
// }.catch (error => {
//     return Promise.reject(`Error: ${error.message}`);
// });

// Code has some error in return, review and find issue. 