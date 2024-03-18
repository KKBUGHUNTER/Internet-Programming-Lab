CREATE DATABASE eventman;

USE eventman;

CREATE TABLE organization (
    orgname VARCHAR(255) PRIMARY KEY, 
    orgstate VARCHAR(127),
    orgtype VARCHAR(127)
);

CREATE TABLE users (
    phone INT PRIMARY KEY,
    uname VARCHAR(255) NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    position VARCHAR(127) NOT NULL,
    orgname VARCHAR(255),
    CONSTRAINT user_org_FK FOREIGN KEY (orgname) REFERENCES organization(orgname)
);

CREATE TABLE events (
    ename VARCHAR(255) PRIMARY KEY,
    orgname VARCHAR(255),
    eventhead INT NOT NULL,
    etype VARCHAR(255),
    sdate DATE NOT NULL,
    edate DATE NOT NULL,
    CONSTRAINT event_org_FK FOREIGN KEY (orgname) REFERENCES organization(orgname),
    CONSTRAINT event_user_FK FOREIGN KEY (eventhead) REFERENCES users(phone)
);

CREATE TABLE organisens (
    ename VARCHAR(16),
    phone INT,
    position VARCHAR(255) NOT NULL,
    CONSTRAINT PK_organisens PRIMARY KEY (ename, phone),
    CONSTRAINT ors_eid_FK FOREIGN KEY (ename) REFERENCES events(ename),
    CONSTRAINT ors_userid_FK FOREIGN KEY (phone) REFERENCES users(phone)
);

CREATE TABLE participants (
    ename VARCHAR(16),
    pname VARCHAR(255) NOT NULL,
    porg VARCHAR(255),
    pstatus VARCHAR(255),
    CONSTRAINT part_eid_FK FOREIGN KEY (ename) REFERENCES events(ename)
);

DROP TABLE participants, organisens, events ,users, organization;

INSERT INTO organization VALUES('SSN', 'Engineering', 'college');
INSERT INTO organization VALUES('IET', 'Devemopment', 'company');

INSERT INTO users VALUES (1,'karthikeyan', '12345','student','SSN');
INSERT INTO users VALUES (2,'Ashwin', 'ashwin','student','SSN');
INSERT INTO users VALUES (3,'Iray', 'iray','student','SSN');
INSERT INTO users VALUES (4,'Mega', 'mega','Developer','IET');
INSERT INTO users VALUES (5,'Magesh', 'magesh','Developer','IET');

INSERT INTO events VALUES('Hack the Box','SSN',1,'Tech','2024-03-18','2024-04-18');
INSERT INTO events VALUES('Hack To Hire','IET',4,'Non-Tech','2024-01-08','2024-03-28');

INSERT INTO organisens VALUES('Hack the Box', 1,'Head');
INSERT INTO organisens VALUES('Hack the Box', 2,'Team Lead');
INSERT INTO organisens VALUES('Hack To Hire', 3,'Team Lead');
INSERT INTO organisens VALUES('Hack To Hire', 4,'Head');

INSERT INTO participants VALUES('Hack the Box','Sam','self','PAID');
INSERT INTO participants VALUES('Hack the Box','Som','self','PAID');
INSERT INTO participants VALUES('Hack the Box','Ram','self','NOT PAID');
INSERT INTO participants VALUES('Hack the Box','Rahul','self','PAID');
INSERT INTO participants VALUES('Hack the Box','Ravi','self','NOT PAID');
INSERT INTO participants VALUES('Hack To Hire','Muthu','college','PAID');
INSERT INTO participants VALUES('Hack To Hire','Danesh','college','PAID');
INSERT INTO participants VALUES('Hack To Hire','Hari','college','NOT PAID');

SELECT * FROM organization;
SELECT * FROM users;
SELECT * FROM events;
SELECT * FROM organisens;
SELECT * FROM participants;