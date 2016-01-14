'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Flight Schema
 */
var PriceSchema = new Schema({
	id: Schema.Types.ObjectId,
	deepLink: String,
	provider: String,
	price: Number
});

mongoose.model('Price', PriceSchema);