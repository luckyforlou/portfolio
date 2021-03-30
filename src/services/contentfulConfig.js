const contentful = require('contentful')

const client = contentful.createClient({
    space: '6a1ky0ad5n0f',
    accessToken: 'qdfa1bvufGV_4nqlm7rczMlgbwcj6xO_UyVvx0_5BB4'
  })
//Tout
const entriesAll = [];
client.getEntries().then(entries => {
    entries.items.forEach(entry => {
        entriesAll.push({id: entry.fields.id, title: entry.fields.Image.fields.title, file: entry.fields.Image.fields.file, thumbnail: entry.fields.thumbnail.fields.file.url, link: entry.fields.link})
      
    })
  })

//Type Illu
 const entriesIllu = [];
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
     if(entry.fields.type==="Illustration"){
       entriesIllu.push({id: entry.fields.id, title: entry.fields.Image.fields.title, file: entry.fields.Image.fields.file, thumbnail: entry.fields.thumbnail.fields.file.url})} 
})
})

//Type Jeux
const entriesJeux = [];
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
     if(entry.fields.type==="Jeux"){
       entriesJeux.push({id: entry.fields.id, title: entry.fields.Image.fields.title, file: entry.fields.Image.fields.file, thumbnail: entry.fields.thumbnail.fields.file.url, link: entry.fields.link})} 
})
})

//Type 3D
const entries3D = [];
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
     if(entry.fields.type==="3D"){
       entries3D.push({id: entry.fields.id, title: entry.fields.Image.fields.title, file: entry.fields.Image.fields.file, thumbnail: entry.fields.thumbnail.fields.file.url })} 
})
})


export {entriesAll, entriesIllu, entriesJeux, entries3D}
