import arcjet, { shield, detectBot, fixedWindow } from "@arcjet/node";

export const aj = arcjet({
  key: process.env.ARCJET_KEY,

  rules: [
    shield({
      mode: "LIVE",
    }),

    detectBot({
      mode: "LIVE",
      deny: ["all"], // REQUIRED 🔥
    }),

    fixedWindow({
      mode: "LIVE",
      window: 60,
      max: 20,
    }),
  ],
});
