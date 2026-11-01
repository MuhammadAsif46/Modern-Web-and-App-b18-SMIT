const { Worker } = require("bullmq");

const connection = require("../config/redis");

const emailWorker = new Worker(
    "email-queue",

    async (job) => {

        console.log("Processing job:", job.id);

        console.log("Job name:", job.name);

        console.log("Job data:", job.data);

        const { email } = job.data;

        // Simulate email sending
        console.log(`Sending welcome email to ${email}`);

        // Simulate a time-consuming task
        await new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });

        console.log(`Email successfully sent to ${email}`);

        return {
            success: true,
            email,
        };
    },

    {
        connection,
        concurrency: 5,
    }
);

emailWorker.on("completed", (job, result) => {
    console.log("Job completed:", job.id);
    console.log("Result:", result);
});

emailWorker.on("failed", (job, error) => {
    console.log("Job failed:", job?.id);
    console.log("Error:", error.message);
});

console.log("Email worker is running...");