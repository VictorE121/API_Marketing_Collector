-- CreateTable
CREATE TABLE "CampaingMetric" (
    "id" SERIAL NOT NULL,
    "platform" TEXT NOT NULL,
    "campaingId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "impressions" INTEGER NOT NULL,
    "clicks" INTEGER NOT NULL,
    "spend" DOUBLE PRECISION NOT NULL,
    "conversions" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CampaingMetric_pkey" PRIMARY KEY ("id")
);
