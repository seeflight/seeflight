'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Price = mongoose.model('Price').schema,
	Schema = mongoose.Schema;

/**
 * Flight Schema
 */
var FlightSchema = new Schema({
	id: Schema.Types.ObjectId,
	requestDate:String,
	origin: String,
	destination: String,
	lengthOfStay:Number,
	departureDate: String,
	returnDate:String,
	lowestFare:Number,
	deepLink:String,
	currencyCode:String,
	pointOfSaleCountry:String,
	pointOfSaleDestinationCountry:String,
	seeflightId: Number,
	daysToDeparture:Number,
	daysToReturn:Number,
	airlineCode:String,
	prices : [Price]
});

mongoose.model('Flight', FlightSchema);