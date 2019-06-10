-- Addresses
INSERT INTO addresses (ID, ZIP_CODE, CITY, USER_ID) VALUES (1, 75000,'Paris',1);
INSERT INTO addresses (ID, ZIP_CODE, CITY, USER_ID) VALUES (2, 59000,'Lille',2 );
INSERT INTO addresses (ID, ZIP_CODE, CITY, USER_ID) VALUES (3, 92000,'Nanterre',3);
INSERT INTO addresses (ID, ZIP_CODE, CITY, USER_ID) VALUES (4, 75000,'Paris',4);

-- Customers
--INSERT INTO customers (ID, EMAIL, PASSWORD, PHONE_NUMBER, FIRST_NAME, LAST_NAME) VALUES (1, 'abdo@gmail.com','abdo', '06123456789', 'abdo','khdime');
--INSERT INTO customers (ID, EMAIL, PASSWORD, PHONE_NUMBER, FIRST_NAME, LAST_NAME) VALUES (2, 'monsif@gmail.com','monsif', '06123456789', 'Monsif','EL AISSOUSSI');
--INSERT INTO customers (ID, EMAIL, PASSWORD, PHONE_NUMBER, FIRST_NAME, LAST_NAME) VALUES (3, 'customer@gmail.com','$2a$10$0fDPY8T..dmHMF7m6XoTTeIWP5z4fRe/0TaJ0SGNDPP23962TMri2', '06123456789', 'Mons','ELAISS');

-- Estheticians
INSERT INTO estheticians (ID, EMAIL, PASSWORD, PHONE_NUMBER, FIRST_NAME, LAST_NAME) VALUES (1, 'esthetician@gmail.com', '$2a$10$Z0y8.nukjTIND/ra8UaDi.eR5KgivRSVlekwSErkjGfTV8v4Gq9uC', '06123456789', 'Khdim','Abdo');
INSERT INTO estheticians (ID, EMAIL, PASSWORD, PHONE_NUMBER, FIRST_NAME, LAST_NAME) VALUES (2, 'esthetician1@gmail.com', '$2a$10$Z0y8.nukjTIND/ra8UaDi.eR5KgivRSVlekwSErkjGfTV8v4Gq9uC', '06123456789', 'Elaisso','Monsif');
INSERT INTO estheticians (ID, EMAIL, PASSWORD, PHONE_NUMBER, FIRST_NAME, LAST_NAME) VALUES (3, 'esthetician2@gmail.com', '$2a$10$Z0y8.nukjTIND/ra8UaDi.eR5KgivRSVlekwSErkjGfTV8v4Gq9uC', '06123456789', 'Camilla','Mohammed');

-- Availabilities
INSERT INTO availabilities(ID,START_TIME,END_TIME, AVAILABLE, ESTHETICIAN_ID) VALUES (1, parsedatetime('01-01-2019 08:00', 'dd-MM-yyyy hh:mm'),parsedatetime('01-01-2019 09:00', 'dd-MM-yyyy hh:mm'), true, 1);
INSERT INTO availabilities(ID,START_TIME,END_TIME, AVAILABLE, ESTHETICIAN_ID) VALUES (2, parsedatetime('01-01-2019 09:00', 'dd-MM-yyyy hh:mm'),parsedatetime('01-01-2019 10:00', 'dd-MM-yyyy hh:mm'), true, 1);
INSERT INTO availabilities(ID,START_TIME,END_TIME, AVAILABLE, ESTHETICIAN_ID) VALUES (4, parsedatetime('01-01-2019 13:00', 'dd-MM-yyyy hh:mm'),parsedatetime('01-01-2019 14:00', 'dd-MM-yyyy hh:mm'), true, 1);

INSERT INTO availabilities(ID,START_TIME,END_TIME, AVAILABLE, ESTHETICIAN_ID) VALUES (5, parsedatetime('01-01-2019 08:00', 'dd-MM-yyyy hh:mm'),parsedatetime('01-01-2019 09:00', 'dd-MM-yyyy hh:mm'), true, 2);
INSERT INTO availabilities(ID,START_TIME,END_TIME, AVAILABLE, ESTHETICIAN_ID) VALUES (6, parsedatetime('01-01-2019 09:00', 'dd-MM-yyyy hh:mm'),parsedatetime('01-01-2019 10:00', 'dd-MM-yyyy hh:mm'), true, 2);
INSERT INTO availabilities(ID,START_TIME,END_TIME, AVAILABLE, ESTHETICIAN_ID) VALUES (8, parsedatetime('01-01-2019 15:00', 'dd-MM-yyyy hh:mm'),parsedatetime('01-01-2019 16:00', 'dd-MM-yyyy hh:mm'), true, 2);


-- Service HAIR / MEN
INSERT INTO services (ID, NAME,SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (1, 'Shampoing','HAIR','MEN', 10);
INSERT INTO services (ID, NAME,SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (2, 'Coupe','HAIR','MEN', 10);
INSERT INTO services (ID, NAME,SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (3, 'Couleur','HAIR','MEN', 10);
INSERT INTO services (ID, NAME,SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (4, 'Taille de la barbe','HAIR','MEN', 10);
INSERT INTO services (ID, NAME,SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (5, 'Rasage','HAIR','MEN', 10);

-- Service HAIR / CHILD
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (6, 'Coupe','HAIR','CHILD', 10);

-- Service HAIR / WOMEN
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (7, 'Shampoing ','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (8, 'Soin profond ','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (9, 'Coupe classique','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (10, 'Coupe création','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (11, 'Brushing','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (12, 'Couleur','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (13, 'Tie and dye','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (14, 'Mèches','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (15, 'Balayage','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (16, 'Patine','HAIR','WOMEN', 10);
INSERT INTO services (ID, NAME, SERVICE_TYPE, CUSTOMER_TYPE, PRICE) VALUES (17, 'Coiffure de mariée','HAIR','WOMEN', 10);

-- SERVICE BEAUTY


-- relation ESTHETICIANS 2 SERVICES
INSERT INTO ESTHETICIANS_SERVICES (SERVICE_ID,ESTHESTICIAN_ID) VALUES (1,1);
INSERT INTO ESTHETICIANS_SERVICES (SERVICE_ID,ESTHESTICIAN_ID) VALUES (2,1);
INSERT INTO ESTHETICIANS_SERVICES (SERVICE_ID,ESTHESTICIAN_ID) VALUES (3,2);
INSERT INTO ESTHETICIANS_SERVICES (SERVICE_ID,ESTHESTICIAN_ID) VALUES (4,2);
