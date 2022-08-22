BEGIN;

-- Delete previous tables
DROP TABLE IF EXISTS "user", "trip", "step_type", "step";

-- Create tables
CREATE TABLE IF NOT EXISTS "user" (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  "password" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "trip" (
  id SERIAL PRIMARY KEY,
  trip_name TEXT NOT NULL,
  slug TEXT NOT NULL,
  position INT NOT NULL,
  user_id INTEGER REFERENCES "user"(id)
);

CREATE TABLE IF NOT EXISTS "step_type" (
  id SERIAL PRIMARY KEY,
  code TEXT NOT NULL,
  "name" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "step" (
  id SERIAL PRIMARY KEY,
  position INT NOT NULL,
  travel_name TEXT NOT NULL DEFAULT 'transport',
  "start_date" DATE NOT NULL,
  end_date DATE,
  start_time TIME,
  end_time TIME,
  point_departure TEXT NOT NULL,
  point_arrival TEXT,
  details TEXT,
  trip_id INTEGER NOT NULL REFERENCES "trip"(id) ON DELETE CASCADE,
  step_type INTEGER NOT NULL REFERENCES "step_type"(id)
);

-- Add data
INSERT INTO "user"("username", "email", "password") VALUES
('candice', 'candice.bastien@gmail.com', '123'),
('christian', 'christiannicholasbaker@outlook.fr', '123');

INSERT INTO "trip"("trip_name", "slug", "position", "user_id") VALUES
('Scottish Highlands Super Trip', 'scottish-highlands-super-trip', 1, 1),
('Europe Inter-Rail Fab Trip', 'europe-inter-rail-fab-trip', 2, 2),
('Weekend in Rome', 'weekend-in-rome', 2, 1);

INSERT INTO "step_type"("code", "name") VALUES
('train', 'Train'),
('fasttrain', 'Fast train'),
('plane', 'Plane'),
('car', 'Car'),
('boat', 'Boat'),
('bus', 'Bus'),
('taxi', 'Taxi'),
('tramway', 'Tramway'),
('hotel', 'hotel'),
('restaurant', 'Restaurant'),
('other', 'Other');

INSERT INTO "step"("trip_id", "position", "travel_name", "start_date", "end_date", "start_time", "end_time", "point_departure", "point_arrival", "details", "step_type") VALUES
(1, 1, 'Eurostar', '07/21/2022', '07/21/2022', '15:13:00', '16:30:00', 'Paris', 'London', 'Coach 10, 55/56', 1),
(2, 1, 'Thalys', '08/15/2022', '08/15/2022', '09:55:00', '13:16:00', 'Paris', 'Cologne', 'Voiture 27', 1),
(1, 2, 'Caledonian Sleeper', '07/21/2022','07/21/2022', '21:15:00', '08:47:00', 'London', 'Inverness', 'Coach M, 06U/06L', 2),
(1, 3, 'Train', '07/22/2022','07/22/2022', '10:56:00', '13:35:00', 'Inverness', 'Kyle of Lochlash', '', 2),
(1, 4, 'Car hire', '07/22/2022','07/22/2022', '14:00:00', '15:00:00', 'Kyle of Lochlash', 'Broadford', '', 3),
(2, 2, 'Dorint an der Messe', '08/15/2022', '08/16/2022', '00:00:00', '00:00:00', 'Cologne', 'Cologne', 'Deutz-Müleimer-Str', 4);


COMMIT;