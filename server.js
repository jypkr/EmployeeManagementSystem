const { Sequelize, Model, DataTypes } = require('sequelize')
const { prompt } = require('inquirer')
require('console.table')

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/ems_db')

class Person extends Model {}

Person.init({
	id: {
    type: DataTypes.INTEGER,
    defaultValue: null,
		autoIncrement: true
  },
	first_name: {
		type: DataTypes.STRING,
		defaultValue: ''
	},
	last_name: {
		type: DataTypes.STRING,
		defaultValue: ''
	},
	title: {
		type: DataTypes.STRING,
		defaultValue: ''
	},
	department: {
		type: DataTypes.STRING,
		defaultValue: ''
	},
	salary: {
		type: DataTypes.INTEGER,
		defaultValue: null
	},
	manager: {
		type: DataTypes.STRING,
		defaultValue: ''
	}
})