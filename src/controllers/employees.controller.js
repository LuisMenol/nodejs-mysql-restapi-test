"use strict";
import { sequelize } from "../db.js";


var Employee = sequelize.models.Employee;


//Routes Methods
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        return res.send(employees);
    } catch (error) {
        res.status(500).json({ message: "something goes wrong" });
    }

};


const getEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employees = await Employee.findByPk(id);
        if (employees !== null) {
            res.send(employees.toJSON());
            return;
        }
        res.end('Employee not found');
        return;
    } catch (error) {
        res.status(500).json({ message: "something goes wrong" });
    }
};


const createEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body;
        const employee = await Employee.create({ name, salary });
        return res.send(employee.toJSON());
    } catch (error) {
        res.status(500).json({ message: "something goes wrong" });
    }
};



const updateEmployees = async (req, res) => {
    try {
        const { id } = req.params;
        const entity = req.body;
        const rows = await Employee.update(entity, {
            where: { id }
        });

        if (rows != 0) {
            return res.status(200).send("This user have been Updated");
        }
        res.sendStatus(404);
    } catch (error) {
        res.status(500).json({ message: "something goes wrong" });
    }


};


const deleteEmployees = async (req, res) => {
    try {
        const { id } = req.params;
        const rows = await Employee.destroy({ where: { id } });

        if (rows !== 0) {
            return res.status(200).send("This user have been deleted");
        }
        res.sendStatus(404);
    } catch (error) {
        res.status(500).json({ message: "something goes wrong" });
    }
};






export {
    getEmployees,
    getEmployee,
    createEmployees,
    updateEmployees,
    deleteEmployees
}







