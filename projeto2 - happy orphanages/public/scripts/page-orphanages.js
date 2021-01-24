// tipos de dados no JavaScript //
// string: texto e são escritos entre "" //
// number: 1, 2, 3, -10, 5.7 //
// object: {} //
// boolean: true or false //
// array []: listas e contamos a partir da posição 0 //

// create map //
const map = L.map("mapid").setView([-22.8046934,-45.190074], 13)

// create and add tileLayer //
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", ).addTo(map)

// create icon //
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconArchor: [29, 68],
    popupArchor: [170, 2]
})

// create popuo overlay //
const popup = L.popup({
    closeButton: false,
    cassName: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')



// create and add marker //



L.marker([-22.8046934,-45.190074], { icon })
  .addTo(map)
  .bindPopup(popup)
