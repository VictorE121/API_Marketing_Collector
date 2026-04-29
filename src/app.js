import prisma from "./config/db.js";
import "./jobs/dailySync.js";
import { syncGoogleAds } from "./services/syncService.js";

console.log("API corriendo...");

await syncGoogleAds();