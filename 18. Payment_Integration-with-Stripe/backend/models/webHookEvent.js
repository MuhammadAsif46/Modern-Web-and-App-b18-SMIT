import mongoose from "mongoose";

const webhookEventSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    eventType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const WebhookEvent = mongoose.model(
  "WebhookEvent",
  webhookEventSchema
);