CREATE DATABASE eventman;

USE eventman;

CREATE TABLE users(
    userid VARCHAR2(16) CONSTRAINT users_PF PRIMARY KEY,
    username VARCHAR2(255) NOT NULL,
    passwd VARCHAR2(255) NOT NULL,
    sessionkey VARCHAR2(255)
);

CREATE TABLE organization(
    orgid VARCHAR2(16) CONSTRAINT org_PK PRIMARY KEY,
    orgname VARCHAR2(255) NOT NULL, 
    orgstate VARCHAR2(127),
    orgtype VARCHAR2(127)
);

CREATE TABLE user(
    userid VARCHAR2(16) CONSTRAINT user_PF PRIMARY KEY,
    orgid VARCHAR2(16) CONSTRAINT user_org_FK FOREIGN KEY (orgid) REFERENCES organization(orgid),
    uname VARCHAR2(255) NOT NULL,
    position VARCHAR2(127) NOT NULL,
);

CREATE TABLE events(
    eid VARCHAR2(16) CONSTRAINT envet_PK PRIMARY KEY,
    orgid VARCHAR2(16) CONSTRAINT event_org_FK FOREIGN KEY (orgid) REFERENCES organization(orgid),
    eventhead VARCHAR2(255) CONSTRAINT event_user_FK FOREIGN KEY (eventhead) REFERENCES user(userid), 
    ename VARCHAR2(255) NOT NULL,
    etype VARCHAR2(255),
    sdate DATE NOT NULL,  -- - '2024-03-18'
    edate DATE NOT NULL,
);

CREATE TABLE organisens(
    eid VARCHAR2(16) CONSTRAINT ors_eid_FK FOREIGN KEY (eid) REFERENCES events(eid),
    userid VARCHAR2(16) CONSTRAINT ors_userid_FK FOREIGN KEY (userid) REFERENCES user(userid),
    position VARCHAR2(255) NOT NULL,
    CONSTRAINT PK_organisens PRIMARY KEY (eid, userid)
);

CREATE TABLE participants(
    eid VARCHAR2(16) CONSTRAINT ors_eid_FK FOREIGN KEY (eid) REFERENCES events(eid),
    pname VARCHAR2(255) NOT NULL,
    porg VARCHAR2(255),
    pstatus VARCHAR2(255)
);
