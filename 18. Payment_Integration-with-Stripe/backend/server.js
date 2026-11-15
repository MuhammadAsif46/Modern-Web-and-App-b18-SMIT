import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Stripe from "stripe";
import { Order } from "./models/order.js";
import { WebhookEvent } from "./models/webHookEvent.js";
import { normalizeCartItems } from "./helpers/helper.js";




const app = express();

// Stripe webhook route comes first express.json()
// app.post(
//     "/api/stripe/webhook",
//     express.raw({ type: "application/json" }),
//     stripeWebhookHandler
// );

app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


app.post(
  "/api/payments/create-checkout-session",
  async (req, res) => {
    try {
      const { items, customerEmail } = req.body;

      const normalizedItems = normalizeCartItems(items);

      const amountTotal = normalizedItems.reduce(
        (total, item) =>
          total + item.unitAmount * item.quantity,
        0
      );

      const order = await Order.create({
        customerEmail: customerEmail || null,

        items: normalizedItems.map((item) => ({
          productId: item.productId,
          name: item.name,
          quantity: item.quantity,
          unitAmount: item.unitAmount,
        })),

        amountTotal,
        currency: "usd",
        status: "pending",
      });

      return res.status(201).json({
        success: true,
        orderId: order._id,
      });


      const session =
        await stripe.checkout.sessions.create({
          mode: "payment",

          line_items: normalizedItems.map((item) => ({
            price_data: {
              currency: item.currency,

              product_data: {
                name: item.name,
              },

              unit_amount: item.unitAmount,
            },

            quantity: item.quantity,
          })),

          customer_email: customerEmail || undefined,

          success_url:
            `${process.env.CLIENT_URL}` +
            `/payment/success?session_id={CHECKOUT_SESSION_ID}`,

          cancel_url:
            `${process.env.CLIENT_URL}/checkout?cancelled=true`,

          metadata: {
            orderId: Date.now(),
          },

          payment_intent_data: {
            metadata: {
              orderId: Date.now(),
            },
          },
        });

      order.stripeCheckoutSessionId = session.id;
      await order.save();

      return res.status(201).json({
        success: true,
        checkoutUrl: session.url,
        orderId: order._id,
      });
    } catch (error) {
      console.error(
        "Create checkout session error:",
        error
      );

      return res.status(400).json({
        success: false,
        message:
          error.message ||
          "Unable to create checkout session",
      });
    }
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});