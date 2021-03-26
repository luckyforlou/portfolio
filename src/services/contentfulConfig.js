const contentful = require('contentful')

const client = contentful.createClient({
    space: '6a1ky0ad5n0f',
    accessToken: 'qdfa1bvufGV_4nqlm7rczMlgbwcj6xO_UyVvx0_5BB4'
  })

const entriesAll = [];

const entries = client.getEntries().then(entries => {
    entries.items.forEach(entry => {
        entriesAll.push({title: entry.fields.Image.fields.title, file: entry.fields.Image.fields.file })
      
    })
  })

export {entriesAll}
