const express = require('express');
const router = express.Router();

const Item=require('../models/Item');

router.get('/', (req,res)=>{
    Item.find()
        .sort({date:-1}) //ordenar por fecha en orden descendente
        .then(items=>res.json(items))
});

router.post('/', (req,res)=>{
    const newItem=new Item({
        name:req.body.name
    });

    newItem.save()
    .then(item=>res.json(item))
});

router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
        .then(item=>{
            item.remove()
            .then(()=>res.json('Deleted Item'))
        })
        .catch(err=>res.status(400).json('Error: '+err));
});

module.exports = router;