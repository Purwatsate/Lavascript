// Encoding
const encoded = btoa("Hello World");  
console.log(encoded);                 

// Decoding
const decoded = atob(encoded);        
console.log(decoded);                 
// --------------------------------------------------
// Serialization
const obj = { Name: "John", Age: 30 };
const json = JSON.stringify(obj);
console.log('json',json)

// Deserialization
const obj2 = JSON.parse(json);
console.log('obj2',obj2)
