// Head over to the Credentials section in your app on CometChat Dashboard and where you can find your unique App ID, Region and Auth Key. 😊
import dotenv from "dotenv";
dotenv.config();
export const AppConstants = {
  APP_ID: process.env.APP_ID || "",
  REGION: process.env.REGION || "",
  AUTH_KEY: process.env.AUTH_KEY || "",
};
