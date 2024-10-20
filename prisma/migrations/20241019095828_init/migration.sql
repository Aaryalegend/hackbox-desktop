-- CreateTable
CREATE TABLE "Hackathon" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Hackathon_pkey" PRIMARY KEY ("id")
);
