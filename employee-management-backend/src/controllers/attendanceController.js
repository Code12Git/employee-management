const { responseManager, attendanceManager } = require('../services');


const create = async (request, response) => {
    try {
        const result = await attendanceManager.create(request.body, request.user);
        return responseManager.sendSuccessResponse(response, result, "Attendance marked successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Attendance marking failed");
    }
};


const getAll = async (request, response) => {
    try {
        const result = await attendanceManager.getAll();
        return responseManager.sendSuccessResponse(response, result, "Attendance fetched successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to fetch Attendance");
    }
};


const get = async (request, response) => {
    try {
        const result = await attendanceManager.get(request.params.id);
        return responseManager.sendSuccessResponse(response, result, "Attendance fetched successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to fetch Attendance");
    }
};


const update = async (request, response) => {
    try {
        const { id } = request.params;
        const { status } = request.body;
        const result = await attendanceManager.update(id, status);
        return responseManager.sendSuccessResponse(response, result, "Attendance updated successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to update Attendance");
    }
};


const deleteOne = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await attendanceManager.deleteOne(id);
        return responseManager.sendSuccessResponse(response, result, "Attendance deleted successfully");
    } catch (err) {
        return responseManager.sendErrorResponse(response, err, "Failed to delete Attendance");
    }
};

module.exports = { create, getAll, get, update, deleteOne };
