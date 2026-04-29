import prisma from "../config/db.js";
import { fetchGoogleAds } from "../integrations/googleAds.js";

export async function syncGoogleAds() {
    console.log("Sincronizando Google Ads...");

    const data = await fetchGoogleAds();

    for (const campaign of data) {
        try {
            await prisma.CampaignMetric.upsert({
                where: {
                    platform_campaignId_date:{
                        platform: "google",
                        campaignId: campaign.campaignId,
                        date: campaign.date
                    }
                },
                update: {
                    campaignName: campaign.campaignName,
                    impressions:  campaign.impressions,
                    clicks: campaign.clicks,
                    spend: campaign.spend,
                    conversions: campaign.conversions
                },
                create: {
                    platform: "google",
                    ...campaign
                }
            });
        } catch (err) {
            console.error("Error al actualizar:", campaign.campaignId, err.message);
        }
    }
    console.log("Sincronizacion completada") ;     
}