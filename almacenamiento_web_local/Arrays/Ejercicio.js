
let videojuegos = ["Minecraft", "Roblox", "FIFA", "Mario", "Free Fire"];

// 1. Mostrar la lista en la consola
console.log("Lista de videojuegos:", videojuegos);

// 2. Agregar un videojuego con push()
videojuegos.push("Fortnite");
console.log("Después de agregar:", videojuegos);

// 3. Eliminar el último videojuego con pop()
videojuegos.pop();
console.log("Después de eliminar:", videojuegos);

// 4. Mostrar la cantidad de videojuegos con length
console.log("Cantidad de videojuegos:", videojuegos.length);

// 5. Comprobar si existe Roblox con includes()
console.log("¿Existe Roblox?", videojuegos.includes("Roblox"));
