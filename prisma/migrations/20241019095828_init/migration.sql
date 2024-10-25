-- CreateTable
CREATE TABLE "Hackathon" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Hackathon_pkey" PRIMARY KEY ("id")
);

-- Insert data into Hackathon table
INSERT INTO "Hackathon" ("title", "date", "location", "description")
VALUES
('Hack Infinity', '2024-12-05 09:00:00', 'WCE Campus, Main Hall', 'A 24-hour hackathon focused on AI, ML, and Data Science.'),
('CodeSprint', '2024-11-10 10:00:00', 'WCE Tech Auditorium', 'A competitive programming contest featuring challenging problems from diverse fields.'),
('Tech Fusion', '2024-11-25 12:00:00', 'WCE Innovation Hub', 'A hackathon designed to merge the worlds of hardware and software to create innovative solutions.');
