export const handler = async (event) => {
    const keyword = event.queryStringParameters?.keyword || "nothing";
    const response = `Hallie Johnson says ${keyword}`;
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    };
};