exports.createResponse = (err, data) => {
    if (err) {
        return {success: false, error: err};
    } else {
        return {success: true, data: data};
    }
}

exports.createSuccessResponse = (data) => {
    return {success: true, data: data};
}