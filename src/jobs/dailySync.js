import cron from "node-cron";
import { syncGoogleAds } from "../services/syncService.js";

cron.schedule("0 2 * * *", async () => {
    console.log("Sincronizando datos...");
    await syncGoogleAds();
});