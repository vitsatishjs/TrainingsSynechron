select username, authority from authorities where username = ?
select username, password, enabled from users where username = ?


create table users(username varchar(20), password varchar(20),  enabled boolean);
create table authorities (username varchar(20), authority varchar(20));

insert into users values('user4','{noop}pass4',true);
insert into users values('user5','{noop}pass5',true);
insert into users values('user6','{noop}pass6',true);

insert into authorities values('user4','ROLE_std');
insert into authorities values('user5','ROLE_adm');
insert into authorities values('user6','ROLE_std');
insert into authorities values('user6','ROLE_adm');