import prisma from "../config/db.js";
import { fetchGoogleAds } from "../integrations/googleAds.js";

export async function syncGoogleAds() {
    console.log("Sincronizando Google Ads...");

    const data = await fetchGoogleAds();

    for (const campaing of data) {
        try {
            await prisma.campaingMetric.upsert({
                where: {
                    platform_campaingID_date:{
                        platform: "google",
                        campaingID: campaing.campaingId,
                        date: campaing.date
                    }
                },
                update: {
                    campaingName: campaing.campaingName,
                    impressions:  campaing.impresions,
                    clicks: campaing.clicks,
                    spend: campaing.spend,
                    conversions: campaing.conversions
                },
                create: {
                    platform: "google",
                    ...campaing
                }
            });
        } catch (err) {
            console.error("Error al actualizar:", campaing.campaingId, err.message);
        }
    }
    console.log("Sincronizacion completada") ;     
}