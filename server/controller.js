let entries = [
   {
      id: 1,
      name: 'Bobby Bob',
      phone: '214-748-2923',
      email: 'iambobby@hotmail.com'
   },
   {
      id: 2,
      name: 'Sammy Sam',
      phone: '972-392-9493',
      email: 'eatmyshorts@yahoo.com'
   },
   {
      id: 3,
      name: 'Lucy Liu',
      phone: '817-734-9277',
      email: 'luckylucy@gmail.com'
   }
];

module.exports = {
   get:(req, res) => {
      res.json(entries)
   },
   add:(req, res) => {
      const {name, phone, email} = req.body;
      const id = entries[entries.length - 1].id + 1;
      
      entries.push({id, name, phone, email});

      res.json(entries);
   },
   edit: (req, res) => {
      const id = +req.params.id;
      const {name, phone, email} = req.body;
      const index = entries.findIndex(entry => entry.id === id)

      entries[index] = {
         id: id,
         name: name || entries[index].name,
         phone: phone || entries[index].phone,
         email: email || entries[index].email
      }

      res.json(entries)
   },
   delete: (req, res) => {
      const id = +req.params.id;
      const index = entries.findIndex(entry => entry.id === id)

      if (index !== -1) {
         entries.splice(index, 1)
      }

      res.json(entries)
   }
}
