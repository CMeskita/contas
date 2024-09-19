import mongoose from "mongoose";

const usuarioSchema=new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    email:{type:String,required:true},
    senha:{type:String,required:true},
    registro:{type:String},
    tenantid:{type:String},
    ativo:{type:Boolean},
    recuperacodigo:{type:String},

},{versionKey:false});

const usuario=mongoose.model("usuario",usuarioSchema);
export default usuario;