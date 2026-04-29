import cron from "node-cron";
import { syncGoogleAds } from "../services/syncService.js";

cron.schedule("* * * * *", async () => {
    console.log("Sincronizando datos...");
    await syncGoogleAds();
});