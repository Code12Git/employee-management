const { employeeManager, responseManager } = require('../services');

const create = async (request, response) => {
    try {
        const result = await employeeManager.create(request.body);
        return responseManager.sendSuccessResponse(response, result, "Employee created successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Employee creation failed");
    }
};

const getAll = async (request, response) => {
    try {
        const result = await employeeManager.getAll();
        return responseManager.sendSuccessResponse(response, result, "Employees fetched successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to fetch employees");
    }
};

const get = async (request, response) => {
    try {
        const result = await employeeManager.get(request.params.id);
        return responseManager.sendSuccessResponse(response, result, "Employee fetched successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to fetch employee");
    }
};

const update = async (request, response) => {
    try {
        const result = await employeeManager.update(request.params.id, request.body);
        return responseManager.sendSuccessResponse(response, result, "Employee updated successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to update employee");
    }
};

const deleteOne = async (request, response) => {
    try {
        const result = await employeeManager.deleteOne(request.params.id);
        return responseManager.sendSuccessResponse(response, result, "Employee deleted successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to delete employee");
    }
};

const filter = async (request, response) => {
    const { username, name, department, position } = request.query;
    try {
        const result = await employeeManager.filter(username, name, department, position);
        return responseManager.sendSuccessResponse(res, result, "Filtered employees successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(res, err, "Failed to filter employees");
    }
};


module.exports = {
    create,
    getAll,
    get,
    update,
    deleteOne,
    filter,
};
