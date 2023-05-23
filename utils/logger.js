import util from 'util';

const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toISOString();
};

const logAPICallRequest = (url, data) => {
    const timestamp = getCurrentTimestamp();
    console.log(`[${timestamp}] [API CALL] Request: ${url}`);
    console.log(`[${timestamp}] Data:`, typeof data === 'object' ? JSON.stringify(data) : data);
  };
  
  const logAPICallResponse = (apiName, response) => {
    const timestamp = getCurrentTimestamp();
    console.log(`[${timestamp}] [API CALL] ${apiName} - Response:`, typeof response === 'object' ? JSON.stringify(response) : response);
  };
  
  const logAPICallError = (error) => {
    const timestamp = getCurrentTimestamp();
    console.error(`[${timestamp}] API call failed:`, error.message);
    if (error.stack) {
      console.error(`[${timestamp}] Error Stack Trace:`, error.stack);
    }
  };

export default { 
    logAPICallError,
    logAPICallRequest,
    logAPICallResponse
}