import { Schema, model } from "mongoose";

const EsquemaFunkos = new Schema({
    name: String,
    family: String,
    number: Number
})

export const ModeloFunko = new model("Inventario de Funkos", EsquemaFunko)