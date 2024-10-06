const { responseManager, payrollManager } = require('../services');


const create = async (request, response) => {
    try {
        const result = await payrollManager.create(request.body);
        return responseManager.sendSuccessResponse(response, result, "Payroll created successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Payroll error");
    }
};


const getAll = async (request, response) => {
    try {
        const result = await payrollManager.getAll();
        return responseManager.sendSuccessResponse(response, result, "Payroll fetched successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to fetch Payroll");
    }
};


const get = async (request, response) => {
    try {
        const result = await payrollManager.get(request.params);
        return responseManager.sendSuccessResponse(response, result, "Payroll fetched successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to fetch Payroll");
    }
};


const update = async (request, response) => {
    try {
        const result = await payrollManager.update(request.params, request.body);
        return responseManager.sendSuccessResponse(response, result, "Payroll updated successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to update Payroll");
    }
};


const deleteOne = async (request, response) => {
    try {
        const result = await payrollManager.deleteOne(request.params);
        return responseManager.sendSuccessResponse(response, result, "Payroll deleted successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to delete payroll");
    }
};

module.exports = { create, getAll, get, update, deleteOne };
