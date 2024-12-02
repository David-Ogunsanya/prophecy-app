CREATE TABLE Daniel_7 (
    id SERIAL PRIMARY KEY,
    verse TEXT,
    symbol TEXT,
    intepretation TEXT,
    notes TEXT,
    image_link TEXT
);

AlTER TABLE Daniel_7
ADD COLUMN symbol TEXT;

