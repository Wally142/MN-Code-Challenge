--create table senators (
--id serial primary key,
--name varchar (100),
--district varchar (10),
--email varhcar (100)
--);
--
-- create table intakeform (
-- id serial primary key,
-- name varchar (100),
-- phone varchar (20),
-- address varchar (300),
-- email varchar (100),
-- comments varchar (2000),
-- real boolean default false,
-- senator_id int references senators (id) on delete cascade,
-- district_id int references senators (id) on delete cascade
-- );