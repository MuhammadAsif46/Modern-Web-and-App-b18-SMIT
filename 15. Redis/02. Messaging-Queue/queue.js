const { Queue } = require("bullmq");

const connection = require("../config/redis");

const emailQueue = new Queue("email-queue", {
    connection,
});
const notificationQueue = new Queue("notification-queue", {
    connection,
});

module.exports = {
    emailQueue,
    notificationQueue
};